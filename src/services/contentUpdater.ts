import type { LanguageId } from "../engines/types";
import type { Chapter } from "../content/types";

const CACHE_KEY = "codeteach_content_updates";
const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours

// 可透過 .env.local 設定 VITE_CONTENT_UPDATE_URL 覆寫此網址
const UPDATE_URL: string =
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

function isConfigured(): boolean {
  return !UPDATE_URL.includes("YOUR_USERNAME");
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
    // localStorage full — skip caching
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
  if (!isConfigured()) return;
  if (loadCache()) return;

  try {
    const res = await fetch(UPDATE_URL, {
      signal: AbortSignal.timeout(8000),
      cache: "no-cache",
    });
    if (!res.ok) return;
    const data: DynamicContent = await res.json();
    saveCache(data);
  } catch {
    // 網路不可用或逾時 — 動態更新為選用功能，不影響主程式
  }
}

export async function fetchContentUpdates(): Promise<void> {
  if (!isConfigured()) return;

  if (!navigator.onLine) {
    // 離線時等待恢復連線再抓取
    window.addEventListener("online", () => void doFetch(), { once: true });
    return;
  }

  await doFetch();
}
