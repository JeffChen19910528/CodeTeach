import type { LanguageId, RunResult } from "./types";
import { runWithPiston } from "./pistonRunner";

// ── JavaScript (native) ──────────────────────────────────────────────────────

function runJavaScript(code: string): RunResult {
  const logs: string[] = [];
  const originalLog = console.log;
  const originalError = console.error;
  let errorMsg: string | null = null;

  console.log = (...args: unknown[]) => logs.push(args.map(String).join(" "));
  console.error = (...args: unknown[]) => logs.push("[error] " + args.map(String).join(" "));

  try {
    // eslint-disable-next-line no-new-func
    new Function(code)();
  } catch (e) {
    errorMsg = e instanceof Error ? e.message : String(e);
  } finally {
    console.log = originalLog;
    console.error = originalError;
  }

  return { output: logs.join("\n"), error: errorMsg };
}

// ── SQL (sql.js) ─────────────────────────────────────────────────────────────

let sqlJsInstance: import("sql.js").SqlJsStatic | null = null;

async function getSqlJs() {
  if (!sqlJsInstance) {
    const initSqlJs = (await import("sql.js")).default;
    const isBrowser = typeof window !== "undefined";
    sqlJsInstance = await initSqlJs({
      locateFile: (file: string) =>
        isBrowser
          ? `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.12.0/${file}`
          : new URL(`../../node_modules/sql.js/dist/${file}`, import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1"),
    });
  }
  return sqlJsInstance;
}

async function runSQL(code: string): Promise<RunResult> {
  try {
    const SQL = await getSqlJs();
    const db = new SQL.Database();
    const results = db.exec(code);
    db.close();

    if (results.length === 0) return { output: "(no output)", error: null };

    const lines: string[] = [];
    for (const res of results) {
      lines.push(res.columns.join(" | "));
      lines.push(res.columns.map(() => "---").join("-|-"));
      for (const row of res.values) {
        lines.push(row.map(String).join(" | "));
      }
    }
    return { output: lines.join("\n"), error: null };
  } catch (e) {
    return { output: "", error: e instanceof Error ? e.message : String(e) };
  }
}

// ── Python (Pyodide) ─────────────────────────────────────────────────────────

let pyodideInstance: unknown = null;

async function getPyodide() {
  if (!pyodideInstance) {
    // @ts-expect-error pyodide loaded from CDN
    const { loadPyodide } = await import(/* @vite-ignore */ "https://cdn.jsdelivr.net/pyodide/v0.27.3/full/pyodide.mjs");
    pyodideInstance = await loadPyodide();
  }
  return pyodideInstance as { runPythonAsync: (code: string) => Promise<unknown>; globals: { get: (k: string) => unknown } };
}

async function runPython(code: string): Promise<RunResult> {
  try {
    const pyodide = await getPyodide();
    const output: string[] = [];
    const wrappedCode = `
import sys, io
_buf = io.StringIO()
sys.stdout = _buf
sys.stderr = _buf
try:
${code.split("\n").map(l => "    " + l).join("\n")}
finally:
    sys.stdout = sys.__stdout__
    sys.stderr = sys.__stderr__
_buf.getvalue()
`;
    const result = await pyodide.runPythonAsync(wrappedCode);
    output.push(String(result ?? ""));
    return { output: output.join(""), error: null };
  } catch (e) {
    return { output: "", error: e instanceof Error ? e.message : String(e) };
  }
}

// ── R (WebR) ─────────────────────────────────────────────────────────────────

let webRInstance: unknown = null;

async function getWebR() {
  if (!webRInstance) {
    // @ts-expect-error webr loaded dynamically
    const { WebR } = await import(/* @vite-ignore */ "https://webr.r-wasm.org/latest/webr.mjs");
    const webR = new WebR();
    await webR.init();
    webRInstance = webR;
  }
  return webRInstance as { evalRString: (code: string) => Promise<string> };
}

async function runR(code: string): Promise<RunResult> {
  try {
    const webR = await getWebR();
    const result = await webR.evalRString(`paste(capture.output({\n${code}\n}), collapse="\\n")`);
    return { output: result, error: null };
  } catch (e) {
    return { output: "", error: e instanceof Error ? e.message : String(e) };
  }
}

// ── Dispatcher ───────────────────────────────────────────────────────────────
// JS / Python / R → offline WASM/native (no internet needed)
// C / C++ / Java / C# / VB / Delphi / SQL → Wandbox API (free, no install needed)

export async function runCode(lang: LanguageId, code: string): Promise<RunResult> {
  switch (lang) {
    case "javascript":
      return runJavaScript(code);
    case "python":
      return runPython(code);
    case "r":
      return runR(code);
    default:
      return runWithPiston(lang, code);
  }
}
