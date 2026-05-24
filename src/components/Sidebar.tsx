import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { Chapter } from "../content/types";

interface Props {
  chapters: Chapter[];
}

export default function Sidebar({ chapters }: Props) {
  const { lang, chapterId, lessonId } = useParams();
  const { i18n, t } = useTranslation();
  const locale = i18n.language as "zh-TW" | "en";

  return (
    <aside className="w-60 shrink-0 bg-gray-900 border-r border-gray-800 overflow-y-auto">
      <div className="px-4 py-3 border-b border-gray-800">
        <span className="text-xs uppercase tracking-widest text-gray-500">{t("lesson.chapters")}</span>
      </div>
      {chapters.map((chapter) => (
        <div key={chapter.id}>
          <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider bg-gray-900/80">
            {chapter.title[locale] ?? chapter.title.en}
          </div>
          {chapter.lessons.map((lesson) => {
            const isActive = chapterId === chapter.id && lessonId === lesson.id;
            return (
              <Link
                key={lesson.id}
                to={`/learn/${lang}/${chapter.id}/${lesson.id}`}
                className={`block px-5 py-2 text-sm transition-colors ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-400 hover:bg-gray-800 hover:text-gray-200"
                }`}
              >
                {lesson.title[locale] ?? lesson.title.en}
              </Link>
            );
          })}
        </div>
      ))}
    </aside>
  );
}
