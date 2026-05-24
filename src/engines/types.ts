export type LanguageId =
  | "python"
  | "c"
  | "java"
  | "cpp"
  | "csharp"
  | "javascript"
  | "visualbasic"
  | "r"
  | "sql"
  | "delphi";

export interface RunResult {
  output: string;
  error: string | null;
}
