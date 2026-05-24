import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { LanguageId } from "../engines/types";

interface LangCard {
  id: LanguageId;
  rank: number;
  color: string;
  icon: string;
  description: { "zh-TW": string; en: string };
}

const LANGUAGES: LangCard[] = [
  { id: "python",      rank: 1,  color: "from-yellow-500 to-yellow-700",  icon: "🐍", description: { "zh-TW": "資料科學・AI・自動化", en: "Data Science · AI · Automation" } },
  { id: "c",           rank: 2,  color: "from-blue-500 to-blue-700",       icon: "⚙️", description: { "zh-TW": "系統程式・嵌入式", en: "Systems · Embedded" } },
  { id: "java",        rank: 3,  color: "from-orange-500 to-orange-700",   icon: "☕", description: { "zh-TW": "企業後端・Android", en: "Enterprise · Android" } },
  { id: "cpp",         rank: 4,  color: "from-indigo-500 to-indigo-700",   icon: "🔧", description: { "zh-TW": "遊戲開發・高效能", en: "Game Dev · High Performance" } },
  { id: "csharp",      rank: 5,  color: "from-purple-500 to-purple-700",   icon: "🎮", description: { "zh-TW": "Unity・Windows App", en: "Unity · Windows Apps" } },
  { id: "javascript",  rank: 6,  color: "from-yellow-400 to-yellow-600",   icon: "🌐", description: { "zh-TW": "網頁前後端・全端", en: "Web Frontend & Backend" } },
  { id: "visualbasic", rank: 7,  color: "from-blue-400 to-blue-600",       icon: "🪟", description: { "zh-TW": "Windows 應用・Office 自動化", en: "Windows Apps · Office VBA" } },
  { id: "r",           rank: 8,  color: "from-teal-500 to-teal-700",       icon: "📊", description: { "zh-TW": "統計分析・資料視覺化", en: "Statistics · Data Visualization" } },
  { id: "sql",         rank: 9,  color: "from-green-500 to-green-700",     icon: "🗄️", description: { "zh-TW": "資料庫查詢・數據管理", en: "Database Queries · Data Management" } },
  { id: "delphi",      rank: 10, color: "from-red-500 to-red-700",         icon: "🏛️", description: { "zh-TW": "桌面應用・快速開發", en: "Desktop Apps · RAD" } },
];

export default function Home() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const lang = i18n.language as "zh-TW" | "en";

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-3">{t("app.title")}</h1>
        <p className="text-gray-400 text-lg">{t("app.subtitle")}</p>
      </div>

      <h2 className="text-xl font-semibold text-gray-300 mb-6">
        {t("app.selectLanguage")}
        <span className="ml-2 text-sm text-gray-500">— TIOBE 2026 Top 10</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {LANGUAGES.map((lang_card) => (
          <button
            key={lang_card.id}
            onClick={() => navigate(`/learn/${lang_card.id}`)}
            className="group relative bg-gray-900 border border-gray-800 rounded-xl p-5 text-left hover:border-gray-600 hover:bg-gray-800 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40"
          >
            <div className="flex items-start justify-between mb-3">
              <span className="text-3xl">{lang_card.icon}</span>
              <span className="text-xs text-gray-600 bg-gray-800 group-hover:bg-gray-700 px-2 py-1 rounded-full">
                #{lang_card.rank}
              </span>
            </div>
            <div className={`text-lg font-bold bg-gradient-to-r ${lang_card.color} bg-clip-text text-transparent mb-1`}>
              {t(`languages.${lang_card.id}`)}
            </div>
            <div className="text-xs text-gray-500">
              {lang_card.description[lang as "zh-TW" | "en"] ?? lang_card.description.en}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
