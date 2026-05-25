import type { LanguageId } from "../engines/types";
import type { Chapter } from "../content/types";
import { generateContent } from "./claudeContentGenerator";

const CACHE_KEY = "codeteach_content_updates";
const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours

// 備援：若沒有設定 API Key，可改用此靜態 JSON URL
const FALLBACK_URL: string =
  (import.meta.env.VITE_CONTENT_UPDATE_URL as string | undefined) ??
  "https://raw.githubusercontent.com/JeffChen19910528/CodeTeach/master/content-updates.json";

interface CacheEntry {
  data: DynamicContent;
  fetchedAt: number;
}

export interface DynamicContent {
  version: string;
  generatedAt: string;
  languages: Partial<Record<LanguageId, Chapter[]>>;
}

function loadCache(): DynamicContent | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const entry: CacheEntry = JSON.parse(raw);
    if (Date.now() - entry.fetchedAt > CACHE_TTL) return null;
    return entry.data;
  } catch {
    return null;
  }
}

function saveCache(data: DynamicContent): void {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ data, fetchedAt: Date.now() }));
  } catch {
    // localStorage 空間不足，跳過快取
  }
}

export function getDynamicChapters(lang: LanguageId): Chapter[] {
  return loadCache()?.languages[lang] ?? [];
}

export function mergeChapters(staticChapters: Chapter[], dynamicChapters: Chapter[]): Chapter[] {
  if (!dynamicChapters.length) return staticChapters;

  const merged = staticChapters.map(c => ({ ...c, lessons: [...c.lessons] }));

  for (const dynChapter of dynamicChapters) {
    const existing = merged.find(c => c.id === dynChapter.id);
    if (existing) {
      const existingIds = new Set(existing.lessons.map(l => l.id));
      const newLessons = dynChapter.lessons.filter(l => !existingIds.has(l.id));
      existing.lessons.push(...newLessons);
    } else {
      merged.push(dynChapter);
    }
  }

  return merged;
}

async function doFetch(): Promise<void> {
  if (loadCache()) return;

  // 優先使用 Claude API 生成
  const hasApiKey = !!(import.meta.env.VITE_CLAUDE_API_KEY as string | undefined);
  if (hasApiKey) {
    try {
      const data = await generateContent();
      if (data) { saveCache(data); return; }
    } catch (err) {
      console.warn("[ContentUpdater] Claude generation failed, falling back to static JSON:", err);
    }
  }

  // 備援：抓取靜態 content-updates.json
  try {
    const res = await fetch(FALLBACK_URL, {
      signal: AbortSignal.timeout(8000),
      cache: "no-cache",
    });
    if (!res.ok) return;
    const data: DynamicContent = await res.json();
    saveCache(data);
  } catch {
    // 網路不可用，靜態內容繼續正常運作
  }
}

export async function fetchContentUpdates(): Promise<void> {
  if (!navigator.onLine) {
    // 離線時等待網路恢復再抓取
    window.addEventListener("online", () => void doFetch(), { once: true });
    return;
  }
  await doFetch();
}
