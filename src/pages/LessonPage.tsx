import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import Sidebar from "../components/Sidebar";
import LessonContent from "../components/LessonContent";
import CodeEditor from "../components/CodeEditor";
import OutputPanel from "../components/OutputPanel";
import ExercisePanel from "../components/ExercisePanel";
import { getChapters } from "../content";
import { runCode } from "../engines/runner";
import type { LanguageId, RunResult } from "../engines/types";

export default function LessonPage() {
  const { lang, chapterId, lessonId } = useParams<{
    lang: string;
    chapterId?: string;
    lessonId?: string;
  }>();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const chapters = getChapters(lang as LanguageId);
  const allLessons = chapters.flatMap((ch) =>
    ch.lessons.map((l) => ({ chapterId: ch.id, lesson: l }))
  );

  const currentIndex = allLessons.findIndex(
    (item) => item.chapterId === chapterId && item.lesson.id === lessonId
  );

  const currentItem =
    currentIndex >= 0
      ? allLessons[currentIndex]
      : allLessons[0];

  const [code, setCode] = useState(currentItem?.lesson.defaultCode ?? "");
  const [result, setResult] = useState<RunResult | null>(null);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!chapterId || !lessonId) {
      const first = allLessons[0];
      if (first) navigate(`/learn/${lang}/${first.chapterId}/${first.lesson.id}`, { replace: true });
    }
  }, [lang, chapterId, lessonId]);

  useEffect(() => {
    if (currentItem) {
      setCode(currentItem.lesson.defaultCode);
      setResult(null);
    }
  }, [chapterId, lessonId]);

  const handleRun = useCallback(async () => {
    if (!currentItem) return;
    setIsRunning(true);
    setResult(null);
    try {
      const res = await runCode(lang as LanguageId, code);
      setResult(res);
    } catch (e) {
      setResult({ output: "", error: String(e) });
    } finally {
      setIsRunning(false);
    }
  }, [lang, code, currentItem]);

  function navigate_lesson(direction: -1 | 1) {
    const target = allLessons[currentIndex + direction];
    if (target) navigate(`/learn/${lang}/${target.chapterId}/${target.lesson.id}`);
  }

  if (!currentItem) {
    return (
      <div className="flex items-center justify-center h-full text-gray-500 pt-20">
        找不到課程內容 / Lesson not found
      </div>
    );
  }

  const lesson = currentItem.lesson;

  return (
    <div className="flex h-[calc(100vh-49px)]">
      <Sidebar chapters={chapters} />

      <div className="flex flex-1 overflow-hidden">
        {/* 左：教學說明 */}
        <div className="w-80 shrink-0 flex flex-col border-r border-gray-800 overflow-hidden">
          <LessonContent lesson={lesson} />
          {lesson.exercise && (
            <ExercisePanel exercise={lesson.exercise} userCode={code} />
          )}
          <div className="flex justify-between px-4 py-3 border-t border-gray-800">
            <button
              onClick={() => navigate_lesson(-1)}
              disabled={currentIndex <= 0}
              className="text-xs px-3 py-1 rounded border border-gray-700 text-gray-400 hover:border-gray-500 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              ◀ {t("lesson.prev")}
            </button>
            <button
              onClick={() => navigate_lesson(1)}
              disabled={currentIndex >= allLessons.length - 1}
              className="text-xs px-3 py-1 rounded border border-gray-700 text-gray-400 hover:border-gray-500 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              {t("lesson.next")} ▶
            </button>
          </div>
        </div>

        {/* 右：編輯器 + 輸出 */}
        <div className="flex flex-col flex-1 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-900 border-b border-gray-800">
            <span className="text-xs text-gray-500 font-mono">
              {lang} — {lesson.title["zh-TW"] ?? lesson.title.en}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => setCode(lesson.defaultCode)}
                className="text-xs px-3 py-1 border border-gray-700 rounded text-gray-400 hover:border-gray-500"
              >
                {t("lesson.reset")}
              </button>
              <button
                onClick={handleRun}
                disabled={isRunning}
                className="text-xs px-4 py-1 bg-green-600 hover:bg-green-500 disabled:opacity-50 text-white rounded font-medium transition-colors"
              >
                ▶ {t("lesson.run")}
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-hidden">
            <CodeEditor lang={lang as LanguageId} value={code} onChange={setCode} />
          </div>

          <div className="h-40 shrink-0 border-t border-gray-800">
            <OutputPanel result={result} isRunning={isRunning} lang={lang as LanguageId} />
          </div>
        </div>
      </div>
    </div>
  );
}
