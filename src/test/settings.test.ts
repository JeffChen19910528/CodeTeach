import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { DEFAULT_SETTINGS } from "../contexts/SettingsContext";

const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] ?? null,
    setItem: (key: string, val: string) => { store[key] = val; },
    removeItem: (key: string) => { delete store[key]; },
    clear: () => { store = {}; },
  };
})();

// SettingsContext 單元測試（不依賴 React，直接測試預設值與型別）

describe("DEFAULT_SETTINGS", () => {
  it("editorFontSize 預設為 14", () => {
    expect(DEFAULT_SETTINGS.editorFontSize).toBe(14);
  });

  it("outputFontSize 預設為 14", () => {
    expect(DEFAULT_SETTINGS.outputFontSize).toBe(14);
  });

  it("outputColor 預設為綠色 #4ade80", () => {
    expect(DEFAULT_SETTINGS.outputColor).toBe("#4ade80");
  });

  it("errorColor 預設為紅色 #f87171", () => {
    expect(DEFAULT_SETTINGS.errorColor).toBe("#f87171");
  });

  it("字體大小在有效範圍內（10-24）", () => {
    expect(DEFAULT_SETTINGS.editorFontSize).toBeGreaterThanOrEqual(10);
    expect(DEFAULT_SETTINGS.editorFontSize).toBeLessThanOrEqual(24);
    expect(DEFAULT_SETTINGS.outputFontSize).toBeGreaterThanOrEqual(10);
    expect(DEFAULT_SETTINGS.outputFontSize).toBeLessThanOrEqual(24);
  });
});

describe("Settings 顏色選項", () => {
  const OUTPUT_COLORS = ["#4ade80", "#ffffff", "#22d3ee", "#facc15"];
  const ERROR_COLORS = ["#f87171", "#fb923c", "#f472b6"];

  it("輸出顏色選項包含預設值", () => {
    expect(OUTPUT_COLORS).toContain(DEFAULT_SETTINGS.outputColor);
  });

  it("錯誤顏色選項包含預設值", () => {
    expect(ERROR_COLORS).toContain(DEFAULT_SETTINGS.errorColor);
  });

  it("所有輸出顏色格式正確（# 開頭的十六進位）", () => {
    const hexPattern = /^#[0-9a-f]{6}$/i;
    OUTPUT_COLORS.forEach(c => expect(c).toMatch(hexPattern));
  });

  it("所有錯誤顏色格式正確（# 開頭的十六進位）", () => {
    const hexPattern = /^#[0-9a-f]{6}$/i;
    ERROR_COLORS.forEach(c => expect(c).toMatch(hexPattern));
  });
});

describe("localStorage 設定存取邏輯", () => {
  const STORAGE_KEY = "codeteach_settings";

  beforeEach(() => {
    vi.stubGlobal("localStorage", localStorageMock);
    localStorageMock.clear();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("無快取時回傳預設值（模擬 SettingsProvider 初始化）", () => {
    const raw = localStorage.getItem(STORAGE_KEY);
    const result = raw
      ? { ...DEFAULT_SETTINGS, ...(JSON.parse(raw) as typeof DEFAULT_SETTINGS) }
      : DEFAULT_SETTINGS;
    expect(result).toEqual(DEFAULT_SETTINGS);
  });

  it("有快取時合併覆蓋預設值", () => {
    const saved = { editorFontSize: 18, outputFontSize: 16 };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
    const raw = localStorage.getItem(STORAGE_KEY);
    const result = raw
      ? { ...DEFAULT_SETTINGS, ...(JSON.parse(raw) as Partial<typeof DEFAULT_SETTINGS>) }
      : DEFAULT_SETTINGS;
    expect(result.editorFontSize).toBe(18);
    expect(result.outputFontSize).toBe(16);
    expect(result.outputColor).toBe(DEFAULT_SETTINGS.outputColor);
    expect(result.errorColor).toBe(DEFAULT_SETTINGS.errorColor);
  });

  it("localStorage 損毀時回傳預設值（模擬 try/catch）", () => {
    localStorage.setItem(STORAGE_KEY, "invalid-json{{{");
    let result: typeof DEFAULT_SETTINGS;
    try {
      const raw = localStorage.getItem(STORAGE_KEY)!;
      result = { ...DEFAULT_SETTINGS, ...(JSON.parse(raw) as Partial<typeof DEFAULT_SETTINGS>) };
    } catch {
      result = DEFAULT_SETTINGS;
    }
    expect(result).toEqual(DEFAULT_SETTINGS);
  });

  it("儲存設定後可正確讀回", () => {
    const newSettings = { ...DEFAULT_SETTINGS, editorFontSize: 20, outputColor: "#22d3ee" };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newSettings));
    const raw = localStorage.getItem(STORAGE_KEY)!;
    const parsed = JSON.parse(raw) as typeof DEFAULT_SETTINGS;
    expect(parsed.editorFontSize).toBe(20);
    expect(parsed.outputColor).toBe("#22d3ee");
  });
});

describe("輸出視窗高度限制", () => {
  function clampHeight(raw: number): number {
    return Math.min(600, Math.max(80, raw));
  }

  it("最小高度為 80px", () => {
    expect(clampHeight(0)).toBe(80);
    expect(clampHeight(-100)).toBe(80);
    expect(clampHeight(80)).toBe(80);
  });

  it("最大高度為 600px", () => {
    expect(clampHeight(1000)).toBe(600);
    expect(clampHeight(601)).toBe(600);
    expect(clampHeight(600)).toBe(600);
  });

  it("合法範圍內不裁切", () => {
    expect(clampHeight(160)).toBe(160);
    expect(clampHeight(300)).toBe(300);
    expect(clampHeight(450)).toBe(450);
  });

  it("預設高度 160px 在有效範圍內", () => {
    expect(clampHeight(160)).toBe(160);
  });
});
