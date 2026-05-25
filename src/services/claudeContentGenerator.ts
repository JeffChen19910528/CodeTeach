import type { LanguageId } from "../engines/types";
import type { Chapter } from "../content/types";
import type { DynamicContent } from "./contentUpdater";

// 各語言已存在的 chapter id，避免重複
const EXISTING_CHAPTERS: Record<LanguageId, string[]> = {
  python: ["intro", "functions", "loops", "data-structures", "oop", "exceptions", "advanced"],
  javascript: ["intro", "arrays", "functions-advanced", "objects", "async", "modern-syntax"],
  java: ["intro", "functions", "oop", "collections"],
  c: ["intro", "functions", "pointers"],
  cpp: ["intro", "functions", "oop", "stl"],
  csharp: ["intro", "linq"],
  visualbasic: ["intro", "oop"],
  sql: ["intro", "joins", "ddl-dml"],
  r: ["intro", "data-frames", "statistics"],
  delphi: ["intro", "oop-delphi"],
};

const LANGUAGE_NOTES: Record<LanguageId, string> = {
  python: "Python 3，使用 Pyodide 執行，不能用 input()",
  javascript: "現代 JS (ES2020+)，Node.js 環境",
  java: "class Main（不能用 public class），不帶 package",
  c: "標準 C11，include 常見標頭檔",
  cpp: "C++17，include 常見標頭",
  csharp: "C# 10，Mono 環境",
  visualbasic: "VB.NET，Mono 環境，Module Program 結構",
  sql: "SQLite 3，需先 CREATE TABLE 再查詢",
  r: "Base R，不使用外部套件",
  delphi: "Delphi / Object Pascal，含 {$APPTYPE CONSOLE}",
};

function buildPrompt(existingChapters: Record<LanguageId, string[]>): string {
  const langList = Object.entries(existingChapters)
    .map(([lang, chapters]) => {
      const note = LANGUAGE_NOTES[lang as LanguageId];
      return `- ${lang}（已有章節：${chapters.join(", ")}）注意：${note}`;
    })
    .join("\n");

  return `你是一位程式語言教學專家。請為以下 10 種語言各新增一個進階教學章節，每章 2 個課程單元。

語言清單（括號內為已存在章節，請勿重複）：
${langList}

回傳格式：僅回傳 JSON，不加任何說明或 markdown，格式如下：
{
  "python": [
    {
      "id": "新章節id（英文小寫，用連字號）",
      "title": { "zh-TW": "章節標題", "en": "Chapter Title" },
      "lessons": [
        {
          "id": "課程id",
          "title": { "zh-TW": "課程標題", "en": "Lesson Title" },
          "content": {
            "zh-TW": "Markdown 格式的教學說明，100~200字",
            "en": "Markdown explanation, 80~150 words"
          },
          "defaultCode": "完整可執行的程式碼範例",
          "exercise": {
            "question": { "zh-TW": "練習題目", "en": "Exercise question" },
            "hint": { "zh-TW": "提示", "en": "Hint" },
            "answer": "完整的解答程式碼"
          }
        }
      ]
    }
  ],
  "javascript": [...],
  "java": [...],
  "c": [...],
  "cpp": [...],
  "csharp": [...],
  "visualbasic": [...],
  "sql": [...],
  "r": [...],
  "delphi": [...]
}

重要規則：
1. 所有程式碼必須完整、可直接執行
2. Java 必須用 class Main（不能用 public class）
3. SQL 範例需先 CREATE TABLE 再操作
4. R 只能用 base R 函式
5. Visual Basic 用 Module Program ... End Module 結構
6. 繁體中文（zh-TW）教學說明要清晰易懂
7. 每個語言主題要比現有章節更進階`;
}

function extractJSON(text: string): string {
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start === -1 || end === -1) throw new Error("No JSON found in response");
  return text.slice(start, end + 1);
}

export async function generateContent(): Promise<DynamicContent | null> {
  const apiKey = import.meta.env.VITE_CLAUDE_API_KEY as string | undefined;
  if (!apiKey) return null;

  const prompt = buildPrompt(EXISTING_CHAPTERS);

  const res = await fetch("/api/anthropic/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    signal: AbortSignal.timeout(60_000),
    body: JSON.stringify({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 8000,
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!res.ok) throw new Error(`Claude API error: ${res.status}`);

  const data = await res.json() as {
    content: Array<{ type: string; text: string }>;
  };

  const text = data.content.find((b) => b.type === "text")?.text ?? "";
  const jsonStr = extractJSON(text);
  const languages = JSON.parse(jsonStr) as Partial<Record<LanguageId, Chapter[]>>;

  return {
    version: `ai-${Date.now()}`,
    generatedAt: new Date().toISOString().slice(0, 10),
    languages,
  };
}
