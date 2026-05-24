import { describe, it, expect } from "vitest";
import { getChapters } from "../content";
import type { LanguageId } from "../engines/types";

const ALL_LANGS: LanguageId[] = [
  "python", "c", "java", "cpp", "csharp",
  "javascript", "visualbasic", "r", "sql", "delphi",
];

describe("教學內容完整性", () => {
  ALL_LANGS.forEach((lang) => {
    it(`${lang} 有至少一個章節`, () => {
      const chapters = getChapters(lang);
      expect(chapters.length).toBeGreaterThanOrEqual(1);
    });

    it(`${lang} 每個章節至少有一個課程`, () => {
      const chapters = getChapters(lang);
      chapters.forEach((ch) => {
        expect(ch.lessons.length).toBeGreaterThanOrEqual(1);
      });
    });

    it(`${lang} 每個課程都有中英文標題`, () => {
      const chapters = getChapters(lang);
      chapters.forEach((ch) => {
        expect(ch.title["zh-TW"]).toBeTruthy();
        expect(ch.title.en).toBeTruthy();
        ch.lessons.forEach((lesson) => {
          expect(lesson.title["zh-TW"]).toBeTruthy();
          expect(lesson.title.en).toBeTruthy();
        });
      });
    });

    it(`${lang} 每個課程都有中英文內容`, () => {
      const chapters = getChapters(lang);
      chapters.forEach((ch) => {
        ch.lessons.forEach((lesson) => {
          expect(lesson.content["zh-TW"]).toBeTruthy();
          expect(lesson.content.en).toBeTruthy();
        });
      });
    });

    it(`${lang} 每個課程都有預設程式碼`, () => {
      const chapters = getChapters(lang);
      chapters.forEach((ch) => {
        ch.lessons.forEach((lesson) => {
          expect(lesson.defaultCode.trim().length).toBeGreaterThan(0);
        });
      });
    });
  });

  it("未知語言回傳空陣列而不拋出例外", () => {
    // @ts-expect-error 測試邊界情況
    expect(() => getChapters("unknown_lang")).not.toThrow();
    // @ts-expect-error
    expect(getChapters("unknown_lang")).toEqual([]);
  });
});
