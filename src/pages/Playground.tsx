import { useState } from "react";
import { useTranslation } from "react-i18next";
import CodeEditor from "../components/CodeEditor";
import OutputPanel from "../components/OutputPanel";
import { runCode } from "../engines/runner";
import type { LanguageId, RunResult } from "../engines/types";

const LANGUAGES: LanguageId[] = [
  "python", "javascript", "sql", "r",
  "c", "cpp", "java", "csharp", "visualbasic", "delphi",
];

const DEFAULT_CODE: Partial<Record<LanguageId, string>> = {
  python: `print("Hello from Python!")`,
  javascript: `console.log("Hello from JavaScript!");`,
  sql: `SELECT 'Hello, SQL!' AS message;`,
  r: `cat("Hello from R!\\n")`,
  c: `#include <stdio.h>\nint main() {\n    printf("Hello from C!\\n");\n    return 0;\n}`,
  cpp: `#include <iostream>\nint main() {\n    std::cout << "Hello from C++!" << std::endl;\n    return 0;\n}`,
  java: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello from Java!");\n    }\n}`,
  csharp: `using System;\nclass Program {\n    static void Main() {\n        Console.WriteLine("Hello from C#!");\n    }\n}`,
  visualbasic: `Module Program\n    Sub Main()\n        Console.WriteLine("Hello from VB!")\n    End Sub\nEnd Module`,
  delphi: `program Hello;\nbegin\n  WriteLn('Hello from Delphi!');\nend.`,
};

export default function Playground() {
  const { t } = useTranslation();
  const [selectedLang, setSelectedLang] = useState<LanguageId>("python");
  const [code, setCode] = useState(DEFAULT_CODE["python"] ?? "");
  const [result, setResult] = useState<RunResult | null>(null);
  const [isRunning, setIsRunning] = useState(false);

  function switchLang(lang: LanguageId) {
    setSelectedLang(lang);
    setCode(DEFAULT_CODE[lang] ?? "");
    setResult(null);
  }

  async function handleRun() {
    setIsRunning(true);
    setResult(null);
    try {
      const res = await runCode(selectedLang, code);
      setResult(res);
    } catch (e) {
      setResult({ output: "", error: String(e) });
    } finally {
      setIsRunning(false);
    }
  }

  return (
    <div className="flex flex-col h-[calc(100vh-49px)]">
      {/* 語言選擇列 */}
      <div className="flex items-center gap-1 px-4 py-2 bg-gray-900 border-b border-gray-800 overflow-x-auto">
        {LANGUAGES.map((lang) => (
          <button
            key={lang}
            onClick={() => switchLang(lang)}
            className={`text-xs px-3 py-1 rounded whitespace-nowrap transition-colors ${
              selectedLang === lang
                ? "bg-blue-600 text-white"
                : "text-gray-400 hover:bg-gray-800 hover:text-gray-200"
            }`}
          >
            {t(`languages.${lang}`)}
          </button>
        ))}
        <div className="ml-auto flex gap-2 shrink-0">
          <button
            onClick={() => setCode(DEFAULT_CODE[selectedLang] ?? "")}
            className="text-xs px-3 py-1 border border-gray-700 rounded text-gray-400 hover:border-gray-500"
          >
            {t("lesson.reset")}
          </button>
          <button
            onClick={handleRun}
            disabled={isRunning}
            className="text-xs px-4 py-1 bg-green-600 hover:bg-green-500 disabled:opacity-50 text-white rounded font-medium"
          >
            ▶ {t("lesson.run")}
          </button>
        </div>
      </div>

      {/* 編輯器 */}
      <div className="flex-1 overflow-hidden">
        <CodeEditor lang={selectedLang} value={code} onChange={setCode} />
      </div>

      {/* 輸出 */}
      <div className="h-44 shrink-0 border-t border-gray-800">
        <OutputPanel result={result} isRunning={isRunning} lang={selectedLang} />
      </div>
    </div>
  );
}
