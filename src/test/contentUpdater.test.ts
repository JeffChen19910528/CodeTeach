import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { mergeChapters, getDynamicChapters } from "../services/contentUpdater";

// mock claudeContentGenerator，避免測試真實呼叫 API
vi.mock("../services/claudeContentGenerator", () => ({
  generateContent: vi.fn().mockResolvedValue(null),
}));
import type { Chapter } from "../content/types";

// jsdom localStorage 在 vitest 中可能缺少部分方法，使用 in-memory mock
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] ?? null,
    setItem: (key: string, val: string) => { store[key] = val; },
    removeItem: (key: string) => { delete store[key]; },
    clear: () => { store = {}; },
  };
})();

const makeChapter = (id: string, lessonIds: string[]): Chapter => ({
  id,
  title: { "zh-TW": id, en: id },
  lessons: lessonIds.map(lid => ({
    id: lid,
    title: { "zh-TW": lid, en: lid },
    content: { "zh-TW": "", en: "" },
    defaultCode: "",
  })),
});

describe("mergeChapters", () => {
  it("動態為空時回傳原始靜態章節", () => {
    const staticChapters = [makeChapter("intro", ["hello"])];
    const result = mergeChapters(staticChapters, []);
    expect(result).toHaveLength(1);
    expect(result[0].lessons).toHaveLength(1);
  });

  it("動態新章節會附加在靜態章節後", () => {
    const staticChapters = [makeChapter("intro", ["hello"])];
    const dynamicChapters = [makeChapter("advanced", ["closures"])];
    const result = mergeChapters(staticChapters, dynamicChapters);
    expect(result).toHaveLength(2);
    expect(result[1].id).toBe("advanced");
  });

  it("動態課程合併進同 id 的靜態章節", () => {
    const staticChapters = [makeChapter("intro", ["hello", "variables"])];
    const dynamicChapters = [makeChapter("intro", ["new-lesson"])];
    const result = mergeChapters(staticChapters, dynamicChapters);
    expect(result).toHaveLength(1);
    expect(result[0].lessons).toHaveLength(3);
    expect(result[0].lessons[2].id).toBe("new-lesson");
  });

  it("相同 id 的課程不會重複新增", () => {
    const staticChapters = [makeChapter("intro", ["hello"])];
    const dynamicChapters = [makeChapter("intro", ["hello", "new-lesson"])];
    const result = mergeChapters(staticChapters, dynamicChapters);
    expect(result[0].lessons).toHaveLength(2);
  });

  it("不修改原始靜態陣列（immutable）", () => {
    const staticChapters = [makeChapter("intro", ["hello"])];
    const original = staticChapters[0].lessons.length;
    mergeChapters(staticChapters, [makeChapter("intro", ["new"])]);
    expect(staticChapters[0].lessons).toHaveLength(original);
  });
});

describe("getDynamicChapters", () => {
  beforeEach(() => {
    vi.stubGlobal("localStorage", localStorageMock);
    localStorageMock.clear();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("無快取時回傳空陣列", () => {
    expect(getDynamicChapters("python")).toEqual([]);
  });

  it("有效快取內有語言資料時回傳對應章節", () => {
    const entry = {
      data: {
        version: "1",
        generatedAt: "2026-01-01",
        languages: { python: [makeChapter("extra", ["lesson1"])] },
      },
      fetchedAt: Date.now(),
    };
    localStorage.setItem("codeteach_content_updates", JSON.stringify(entry));
    const result = getDynamicChapters("python");
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("extra");
  });

  it("快取過期（超過 24 小時）回傳空陣列", () => {
    const entry = {
      data: {
        version: "1",
        generatedAt: "2026-01-01",
        languages: { python: [makeChapter("extra", ["lesson1"])] },
      },
      fetchedAt: Date.now() - 25 * 60 * 60 * 1000,
    };
    localStorage.setItem("codeteach_content_updates", JSON.stringify(entry));
    expect(getDynamicChapters("python")).toEqual([]);
  });
});
