import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock Wandbox/Piston API（避免單元測試發出真實網路請求）
vi.mock("../engines/pistonRunner", () => ({
  runWithPiston: vi.fn(async (lang: string, code: string) => {
    if (lang === "c" && code.includes("printf")) {
      return { output: "Hello from C!\n", error: null };
    }
    if (lang === "java" && code.includes("System.out")) {
      return { output: "Hello from Java!\n", error: null };
    }
    if (lang === "cpp" && code.includes("cout")) {
      return { output: "Hello from C++!\n", error: null };
    }
    if (lang === "csharp" && code.includes("Console")) {
      return { output: "Hello from C#!\n", error: null };
    }
    if (lang === "visualbasic" && code.includes("Console")) {
      return { output: "Hello from VB!\n", error: null };
    }
    if (lang === "delphi" && code.includes("WriteLn")) {
      return { output: "Hello from Delphi!\n", error: null };
    }
    if (lang === "sql") {
      if (/SELECT/i.test(code)) return { output: "id  name\n1   Alice", error: null };
      if (/SELEC\b/i.test(code)) return { output: "", error: "near \"SELEC\": syntax error" };
      return { output: "", error: null };
    }
    return { output: "", error: "Compilation error" };
  }),
}));

import { runCode } from "../engines/runner";

// ── JavaScript ────────────────────────────────────────────────────────────────

describe("JavaScript 執行引擎", () => {
  it("正常執行並回傳 console.log 輸出", async () => {
    const result = await runCode("javascript", `console.log("hello");`);
    expect(result.error).toBeNull();
    expect(result.output).toBe("hello");
  });

  it("多行輸出以換行分隔", async () => {
    const result = await runCode("javascript", `console.log("a");\nconsole.log("b");`);
    expect(result.output).toBe("a\nb");
  });

  it("語法錯誤時回傳 error 而非拋出例外", async () => {
    const result = await runCode("javascript", `const x = (`);
    expect(result.error).not.toBeNull();
    expect(result.output).toBe("");
  });

  it("執行時錯誤（ReferenceError）也能捕捉", async () => {
    const result = await runCode("javascript", `notDefined();`);
    expect(result.error).not.toBeNull();
  });

  it("數值計算結果正確", async () => {
    const result = await runCode("javascript", `console.log(2 + 3);`);
    expect(result.output).toBe("5");
  });
});

// ── SQL (Wandbox SQLite) ──────────────────────────────────────────────────────

describe("SQL 執行引擎", () => {
  it("SELECT 查詢回傳欄位與資料", async () => {
    const result = await runCode("sql", `CREATE TABLE t (id INTEGER, name TEXT);
INSERT INTO t VALUES (1, 'Alice');
SELECT * FROM t;`);
    expect(result.error).toBeNull();
    expect(result.output).toContain("Alice");
  });

  it("語法錯誤時回傳 error", async () => {
    const result = await runCode("sql", `SELEC * FORM nowhere`);
    expect(result.error).not.toBeNull();
  });

  it("非 SELECT 語句回傳 null error", async () => {
    const result = await runCode("sql", `CREATE TABLE empty_t (id INTEGER);`);
    expect(result.error).toBeNull();
  });
});

// ── Piston（雲端執行）────────────────────────────────────────────────────────

describe("Piston 雲端執行引擎", () => {
  it("C 語言可執行並回傳輸出", async () => {
    const code = `#include <stdio.h>\nint main() { printf("Hello from C!\\n"); return 0; }`;
    const result = await runCode("c", code);
    expect(result.error).toBeNull();
    expect(result.output).toContain("Hello from C!");
  });

  it("Java 可執行並回傳輸出", async () => {
    const code = `public class Main { public static void main(String[] args) { System.out.println("Hello from Java!"); } }`;
    const result = await runCode("java", code);
    expect(result.error).toBeNull();
    expect(result.output).toContain("Hello from Java!");
  });

  it("C++ 可執行並回傳輸出", async () => {
    const code = `#include <iostream>\nint main() { std::cout << "Hello from C++!" << std::endl; return 0; }`;
    const result = await runCode("cpp", code);
    expect(result.error).toBeNull();
    expect(result.output).toContain("Hello from C++!");
  });

  it("C# 可執行並回傳輸出", async () => {
    const code = `using System;\nclass Program { static void Main() { Console.WriteLine("Hello from C#!"); } }`;
    const result = await runCode("csharp", code);
    expect(result.error).toBeNull();
    expect(result.output).toContain("Hello from C#!");
  });

  it("Visual Basic 可執行並回傳輸出", async () => {
    const code = `Module Program\n  Sub Main()\n    Console.WriteLine("Hello from VB!")\n  End Sub\nEnd Module`;
    const result = await runCode("visualbasic", code);
    expect(result.error).toBeNull();
    expect(result.output).toContain("Hello from VB!");
  });

  it("Delphi 可執行並回傳輸出", async () => {
    const code = `program Hello;\nbegin\n  WriteLn('Hello from Delphi!');\nend.`;
    const result = await runCode("delphi", code);
    expect(result.error).toBeNull();
    expect(result.output).toContain("Hello from Delphi!");
  });

  it("程式碼錯誤時回傳 error", async () => {
    const result = await runCode("c", `invalid code`);
    expect(result.error).not.toBeNull();
    expect(result.output).toBe("");
  });
});
