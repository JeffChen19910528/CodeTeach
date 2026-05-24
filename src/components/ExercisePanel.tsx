import { useState } from "react";
import { useTranslation } from "react-i18next";
import type { Exercise } from "../content/types";

interface Props {
  exercise: Exercise;
  userCode: string;
}

export default function ExercisePanel({ exercise, userCode }: Props) {
  const { t, i18n } = useTranslation();
  const locale = i18n.language as "zh-TW" | "en";
  const [showHint, setShowHint] = useState(false);
  const [feedback, setFeedback] = useState<"correct" | "incorrect" | null>(null);

  function checkAnswer() {
    const trimmed = userCode.trim();
    const expected = exercise.answer.trim();
    if (!expected) {
      setFeedback("correct");
      return;
    }
    setFeedback(trimmed.includes(expected) ? "correct" : "incorrect");
  }

  return (
    <div className="border-t border-gray-800 px-5 py-4 space-y-3">
      <p className="text-sm font-semibold text-yellow-300">
        📝 {t("lesson.exercise")}
      </p>
      <p className="text-sm text-gray-300">
        {exercise.question[locale] ?? exercise.question.en}
      </p>

      <div className="flex gap-2 flex-wrap">
        <button
          onClick={checkAnswer}
          className="px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white text-xs rounded transition-colors"
        >
          {t("lesson.checkAnswer")}
        </button>
        <button
          onClick={() => setShowHint((v) => !v)}
          className="px-3 py-1 border border-gray-600 hover:border-gray-400 text-gray-300 text-xs rounded transition-colors"
        >
          {t("lesson.hint")}
        </button>
      </div>

      {feedback === "correct" && (
        <p className="text-green-400 text-sm">✓ {t("lesson.correct")}</p>
      )}
      {feedback === "incorrect" && (
        <p className="text-red-400 text-sm">✗ {t("lesson.incorrect")}</p>
      )}
      {showHint && (
        <p className="text-gray-400 text-xs bg-gray-800 px-3 py-2 rounded font-mono">
          {exercise.hint[locale] ?? exercise.hint.en}
        </p>
      )}
    </div>
  );
}
