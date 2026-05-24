import Editor from "@monaco-editor/react";
import type { LanguageId } from "../engines/types";

const MONACO_LANG: Record<LanguageId, string> = {
  python: "python",
  c: "c",
  java: "java",
  cpp: "cpp",
  csharp: "csharp",
  javascript: "javascript",
  visualbasic: "vb",
  r: "r",
  sql: "sql",
  delphi: "pascal",
};

interface Props {
  lang: LanguageId;
  value: string;
  onChange: (value: string) => void;
}

export default function CodeEditor({ lang, value, onChange }: Props) {
  return (
    <Editor
      height="100%"
      language={MONACO_LANG[lang]}
      value={value}
      theme="vs-dark"
      onChange={(v) => onChange(v ?? "")}
      options={{
        fontSize: 14,
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
        lineNumbers: "on",
        tabSize: 4,
        wordWrap: "on",
        automaticLayout: true,
      }}
    />
  );
}
