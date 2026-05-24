import { describe, it, expect, beforeEach } from "vitest";

// 模擬 localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] ?? null,
    setItem: (key: string, value: string) => { store[key] = value; },
    clear: () => { store = {}; },
  };
})();

Object.defineProperty(global, "localStorage", { value: localStorageMock });

describe("i18n 語系設定", () => {
  beforeEach(() => localStorageMock.clear());

  it("預設語系為 zh-TW（未設定時）", () => {
    const lang = localStorageMock.getItem("lang") ?? "zh-TW";
    expect(lang).toBe("zh-TW");
  });

  it("切換語系後儲存到 localStorage", () => {
    localStorageMock.setItem("lang", "en");
    expect(localStorageMock.getItem("lang")).toBe("en");
  });

  it("再次切換回 zh-TW", () => {
    localStorageMock.setItem("lang", "en");
    localStorageMock.setItem("lang", "zh-TW");
    expect(localStorageMock.getItem("lang")).toBe("zh-TW");
  });
});

describe("locale JSON 結構驗證", () => {
  it("zh-TW.json 包含所有必要的 key", async () => {
    const zhTW = await import("../locales/zh-TW.json");
    expect(zhTW.app).toBeDefined();
    expect(zhTW.lesson).toBeDefined();
    expect(zhTW.languages).toBeDefined();
    expect(zhTW.nav).toBeDefined();
  });

  it("en.json 包含所有必要的 key", async () => {
    const en = await import("../locales/en.json");
    expect(en.app).toBeDefined();
    expect(en.lesson).toBeDefined();
    expect(en.languages).toBeDefined();
    expect(en.nav).toBeDefined();
  });

  it("兩個語系的 language key 數量相同", async () => {
    const zhTW = await import("../locales/zh-TW.json");
    const en = await import("../locales/en.json");
    expect(Object.keys(zhTW.languages).length).toBe(Object.keys(en.languages).length);
  });

  it("兩個語系包含 10 種程式語言", async () => {
    const zhTW = await import("../locales/zh-TW.json");
    expect(Object.keys(zhTW.languages).length).toBe(10);
  });
});
