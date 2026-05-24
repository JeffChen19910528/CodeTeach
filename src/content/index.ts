import type { LanguageId } from "../engines/types";
import type { Chapter } from "./types";
import pythonChapters from "./python";
import javascriptChapters from "./javascript";
import sqlChapters from "./sql";
import cChapters from "./c";
import cppChapters from "./cpp";
import javaChapters from "./java";
import csharpChapters from "./csharp";
import visualbasicChapters from "./visualbasic";
import rChapters from "./r";
import delphiChapters from "./delphi";
import { getDynamicChapters, mergeChapters } from "../services/contentUpdater";

const contentMap: Record<LanguageId, Chapter[]> = {
  python: pythonChapters,
  javascript: javascriptChapters,
  sql: sqlChapters,
  c: cChapters,
  cpp: cppChapters,
  java: javaChapters,
  csharp: csharpChapters,
  visualbasic: visualbasicChapters,
  r: rChapters,
  delphi: delphiChapters,
};

export function getChapters(lang: LanguageId): Chapter[] {
  const staticChapters = contentMap[lang] ?? [];
  const dynamicChapters = getDynamicChapters(lang);
  return mergeChapters(staticChapters, dynamicChapters);
}
