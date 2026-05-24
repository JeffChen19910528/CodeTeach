import ReactMarkdown from "react-markdown";
import { useTranslation } from "react-i18next";
import type { Lesson } from "../content/types";

interface Props {
  lesson: Lesson;
}

export default function LessonContent({ lesson }: Props) {
  const { i18n } = useTranslation();
  const locale = i18n.language as "zh-TW" | "en";
  const content = lesson.content[locale] ?? lesson.content.en;

  return (
    <div className="h-full overflow-y-auto px-6 py-5 prose prose-invert prose-sm max-w-none
      prose-headings:text-blue-300 prose-code:text-yellow-300 prose-code:bg-gray-800
      prose-pre:bg-gray-800 prose-pre:border prose-pre:border-gray-700
      prose-a:text-blue-400 prose-strong:text-white prose-table:text-sm
      prose-th:text-gray-300 prose-td:text-gray-400">
      <h2 className="text-lg font-bold text-white mb-4">
        {lesson.title[locale] ?? lesson.title.en}
      </h2>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
