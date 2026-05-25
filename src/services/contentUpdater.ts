import type { LanguageId } from "../engines/types";
import type { Chapter } from "../content/types";

const CACHE_KEY = "codeteach_content_updates";
const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours

const UPDATE_URL =
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

function loadCache(): CacheEntry | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as CacheEntry;
  } catch {
    return null;
  }
}

function isCacheValid(entry: CacheEntry): boolean {
  return Date.now() - entry.fetchedAt < CACHE_TTL;
}

function saveCache(data: DynamicContent): void {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ data, fetchedAt: Date.now() }));
  } catch {
    // localStorage 空間不足，跳過快取
  }
}

export function getDynamicChapters(lang: LanguageId): Chapter[] {
  const entry = loadCache();
  if (!entry || !isCacheValid(entry)) return [];
  return entry.data.languages[lang] ?? [];
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

async function fetchRemote(): Promise<DynamicContent | null> {
  try {
    const res = await fetch(UPDATE_URL, {
      signal: AbortSignal.timeout(8000),
      cache: "no-cache",
    });
    if (!res.ok) return null;
    return await res.json() as DynamicContent;
  } catch {
    return null;
  }
}

export async function fetchContentUpdates(): Promise<void> {
  if (!navigator.onLine) {
    window.addEventListener("online", () => void fetchContentUpdates(), { once: true });
    return;
  }

  const entry = loadCache();

  if (!entry || !isCacheValid(entry)) {
    // 沒有快取或已過期 → 立即抓取
    const data = await fetchRemote();
    if (data) saveCache(data);
    return;
  }

  // 有效快取存在 → 背景靜默比對版本，版本不同則更新並重新載入
  void (async () => {
    const data = await fetchRemote();
    if (data && data.version !== entry.data.version) {
      saveCache(data);
      // 新版本到位，重新載入頁面讓使用者看到新課程
      window.location.reload();
    }
  })();
}
