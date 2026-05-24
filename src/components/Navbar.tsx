import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

export default function Navbar() {
  const { t } = useTranslation();

  function toggleLang() {
    const next = i18n.language === "zh-TW" ? "en" : "zh-TW";
    i18n.changeLanguage(next);
    localStorage.setItem("lang", next);
  }

  return (
    <nav className="bg-gray-900 border-b border-gray-800 px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link to="/" className="text-lg font-bold text-blue-400 hover:text-blue-300">
          {"<CodeTeach />"}
        </Link>
        <Link to="/" className="text-sm text-gray-400 hover:text-gray-200">
          {t("app.home")}
        </Link>
        <Link to="/playground" className="text-sm text-gray-400 hover:text-gray-200">
          {t("app.playground")}
        </Link>
      </div>
      <button
        onClick={toggleLang}
        className="text-sm px-3 py-1 rounded border border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400 transition-colors"
      >
        {t("nav.toggleLang")}
      </button>
    </nav>
  );
}
