import type { LanguageId, RunResult } from "./types";

const WANDBOX_API = "https://wandbox.org/api/compile.json";

interface WandboxResponse {
  status: string;
  program_output?: string;
  program_error?: string;
  compiler_error?: string;
}

const WANDBOX_COMPILER: Partial<Record<LanguageId, string>> = {
  c:      "gcc-head-c",
  cpp:    "gcc-head",
  java:   "openjdk-jdk-22+36",
  csharp: "mono-6.12.0.199",
  delphi: "fpc-3.2.2",
  sql:    "sqlite-3.46.1",
};

// Java: Wandbox 預設存檔為 prog.java，public class 會與檔名不符
function preprocessJava(code: string): string {
  return code.replace(/\bpublic\s+(class\s)/g, "$1");
}

// Visual Basic → C# 轉譯器（支援教學常用語法）
function transpileVBtoCS(vb: string): string {
  const lines = vb.split("\n");
  const out: string[] = ["using System;", "using System.Collections.Generic;", ""];
  let indent = 0;
  const pad = () => "    ".repeat(indent);

  for (let raw of lines) {
    const line = raw.trim();
    if (!line || line.startsWith("'")) {
      if (line.startsWith("'")) out.push(pad() + "// " + line.slice(1).trim());
      else out.push("");
      continue;
    }

    // Imports → using
    if (/^Imports\s+/i.test(line)) {
      out.push("using " + line.replace(/^Imports\s+/i, "") + ";");
      continue;
    }

    // Module / Class 開頭
    if (/^(Public\s+)?(Module|Class)\s+(\w+)/i.test(line)) {
      const name = line.replace(/^(Public\s+)?(Module|Class)\s+/i, "");
      out.push(pad() + `public class ${name} {`);
      indent++;
      continue;
    }

    // End Module / End Class / End Sub / End Function / End If / Next / Loop
    if (/^End\s+(Module|Class|Sub|Function)/i.test(line)) {
      indent = Math.max(0, indent - 1);
      out.push(pad() + "}");
      continue;
    }
    if (/^End\s+If/i.test(line)) { indent = Math.max(0, indent - 1); out.push(pad() + "}"); continue; }
    if (/^Next(\s+\w+)?$/i.test(line)) { indent = Math.max(0, indent - 1); out.push(pad() + "}"); continue; }
    if (/^Loop$/i.test(line)) { indent = Math.max(0, indent - 1); out.push(pad() + "}"); continue; }
    if (/^Wend$/i.test(line)) { indent = Math.max(0, indent - 1); out.push(pad() + "}"); continue; }

    // Sub / Function 宣告
    if (/^(Public\s+|Private\s+|Protected\s+)?(Shared\s+|Static\s+)?Sub\s+/i.test(line)) {
      const isMain = /\bMain\b/i.test(line);
      if (isMain) {
        out.push(pad() + "public static void Main(string[] args) {");
      } else {
        const m = line.match(/Sub\s+(\w+)\s*\(([^)]*)\)/i);
        const name = m ? m[1] : "Method";
        const args = m ? m[2] : "";
        out.push(pad() + `public static void ${name}(${transpileParams(args)}) {`);
      }
      indent++;
      continue;
    }
    if (/^(Public\s+|Private\s+)?(Shared\s+)?Function\s+/i.test(line)) {
      const m = line.match(/Function\s+(\w+)\s*\(([^)]*)\)\s+As\s+(\w+)/i);
      if (m) {
        const retType = mapType(m[3]);
        out.push(pad() + `public static ${retType} ${m[1]}(${transpileParams(m[2])}) {`);
      } else {
        out.push(pad() + "public static object Function1() {");
      }
      indent++;
      continue;
    }

    // Dim 變數宣告
    if (/^Dim\s+/i.test(line)) {
      const m = line.match(/^Dim\s+(\w+)\s+As\s+(\w+)(?:\s*=\s*(.+))?/i);
      if (m) {
        const type = mapType(m[2]);
        const val = m[3] ? ` = ${transpileExpr(m[3])}` : "";
        out.push(pad() + `${type} ${m[1]}${val};`);
      } else {
        out.push(pad() + "var " + line.replace(/^Dim\s+/i, "").replace(/\s+As\s+\w+/i, "") + ";");
      }
      continue;
    }

    // If ... Then
    if (/^If\s+.+\s+Then$/i.test(line)) {
      const cond = line.replace(/^If\s+/i, "").replace(/\s+Then$/i, "");
      out.push(pad() + `if (${transpileExpr(cond)}) {`);
      indent++;
      continue;
    }
    // Else If
    if (/^ElseIf\s+.+\s+Then$/i.test(line)) {
      indent = Math.max(0, indent - 1);
      const cond = line.replace(/^ElseIf\s+/i, "").replace(/\s+Then$/i, "");
      out.push(pad() + `} else if (${transpileExpr(cond)}) {`);
      indent++;
      continue;
    }
    if (/^Else$/i.test(line)) {
      indent = Math.max(0, indent - 1);
      out.push(pad() + "} else {");
      indent++;
      continue;
    }

    // For i = start To end [Step n]
    if (/^For\s+\w+\s*=\s*.+\s+To\s+/i.test(line)) {
      const m = line.match(/^For\s+(\w+)\s*=\s*(.+?)\s+To\s+(.+?)(?:\s+Step\s+(.+))?$/i);
      if (m) {
        const [, v, start, end, step] = m;
        const stepNum = step ? transpileExpr(step) : "1";
        const op = stepNum === "1" ? "++" : `+= ${stepNum}`;
        out.push(pad() + `for (int ${v} = ${transpileExpr(start)}; ${v} <= ${transpileExpr(end)}; ${v}${op}) {`);
      } else {
        out.push(pad() + "for (;;) {");
      }
      indent++;
      continue;
    }

    // While
    if (/^While\s+/i.test(line)) {
      const cond = line.replace(/^While\s+/i, "");
      out.push(pad() + `while (${transpileExpr(cond)}) {`);
      indent++;
      continue;
    }

    // Return
    if (/^Return\s+/i.test(line)) {
      out.push(pad() + `return ${transpileExpr(line.replace(/^Return\s+/i, ""))};`);
      continue;
    }

    // 一般陳述式：Console.Write*, 指派, 方法呼叫
    let stmt = transpileExpr(line);
    if (!stmt.endsWith(";") && !stmt.endsWith("{") && !stmt.endsWith("}")) {
      stmt += ";";
    }
    out.push(pad() + stmt);
  }

  // 補上最後的 }
  while (indent > 0) { indent--; out.push("    ".repeat(indent) + "}"); }
  return out.join("\n");
}

function mapType(vbType: string): string {
  const map: Record<string, string> = {
    Integer: "int", Long: "long", Double: "double", Single: "float",
    String: "string", Boolean: "bool", Char: "char", Object: "object",
    Decimal: "decimal", Byte: "byte", Short: "short",
  };
  return map[vbType] ?? vbType.toLowerCase();
}

function transpileParams(params: string): string {
  if (!params.trim()) return "";
  return params.split(",").map(p => {
    const m = p.trim().match(/(\w+)\s+As\s+(\w+)/i);
    return m ? `${mapType(m[2])} ${m[1]}` : p.trim();
  }).join(", ");
}

function transpileExpr(expr: string): string {
  return expr
    .replace(/\bAnd\b/g, "&&").replace(/\bOr\b/g, "||").replace(/\bNot\b/g, "!")
    .replace(/\bTrue\b/g, "true").replace(/\bFalse\b/g, "false")
    .replace(/\bMod\b/g, "%")
    .replace(/\bCStr\(([^)]+)\)/g, "$1.ToString()")
    .replace(/\bCInt\(([^)]+)\)/g, "Convert.ToInt32($1)")
    .replace(/\bCDbl\(([^)]+)\)/g, "Convert.ToDouble($1)")
    .replace(/\bLen\(([^)]+)\)/g, "$1.Length")
    .replace(/\bUBound\(([^)]+)\)/g, "$1.Length - 1")
    .replace(/<>/g, "!=")
    .replace(/\bConsole\.Write\b/g, "Console.Write")
    .replace(/\bConsole\.WriteLine\b/g, "Console.WriteLine");
}

// SQL: 前置 .mode column 讓輸出格式化
function preprocessSQL(code: string): string {
  return ".headers on\n.mode column\n" + code;
}

async function callWandbox(compiler: string, code: string): Promise<RunResult> {
  try {
    const res = await fetch(WANDBOX_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ compiler, code }),
    });
    if (!res.ok) return { output: "", error: `API error: ${res.status}` };

    const data: WandboxResponse = await res.json();
    const compileError = data.compiler_error?.trim() ?? "";
    const output = (data.program_output ?? "").trim();
    const runtimeError = (data.program_error ?? "").trim();

    if (compileError) return { output: "", error: compileError };
    return { output: output + (runtimeError ? "\n" + runtimeError : ""), error: null };
  } catch (e) {
    const offline = typeof navigator !== "undefined" && !navigator.onLine;
    return {
      output: "",
      error: offline
        ? "No internet connection. Please connect to run this language."
        : `Network error: ${e instanceof Error ? e.message : String(e)}`,
    };
  }
}

export async function runWithPiston(lang: LanguageId, code: string): Promise<RunResult> {
  if (lang === "visualbasic") {
    const csCode = transpileVBtoCS(code);
    return callWandbox("mono-6.12.0.199", csCode);
  }

  if (lang === "sql") {
    return callWandbox("sqlite-3.46.1", preprocessSQL(code));
  }

  const compiler = WANDBOX_COMPILER[lang];
  if (!compiler) return { output: "", error: `Language "${lang}" not supported.` };

  const processedCode = lang === "java" ? preprocessJava(code) : code;
  return callWandbox(compiler, processedCode);
}
