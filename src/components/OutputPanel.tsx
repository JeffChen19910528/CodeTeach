import { useTranslation } from "react-i18next";
import type { RunResult } from "../engines/types";
import type { LanguageId } from "../engines/types";
import { useSettings } from "../contexts/SettingsContext";

const OFFLINE_LANGS: LanguageId[] = ["javascript", "python", "r"];

interface Props {
  result: RunResult | null;
  isRunning: boolean;
  lang?: LanguageId;
}

export default function OutputPanel({ result, isRunning, lang }: Props) {
  const { t } = useTranslation();
  const { settings } = useSettings();
  const isOnlineLang = lang && !OFFLINE_LANGS.includes(lang);

  return (
    <div className="h-full flex flex-col bg-gray-950">
      <div className="px-4 py-2 border-b border-gray-800 flex items-center justify-between">
        <span className="text-xs text-gray-500 uppercase tracking-wider">{t("lesson.output")}</span>
        {isOnlineLang && (
          <span className="text-xs text-blue-500/70">
            ☁ {t("lesson.onlineExecution")}
          </span>
        )}
      </div>
      <div
        className="flex-1 p-4 font-mono overflow-auto"
        style={{ fontSize: `${settings.outputFontSize}px` }}
      >
        {isRunning && (
          <span className="text-yellow-400 animate-pulse">
            {isOnlineLang ? t("lesson.runningOnline") : t("lesson.running")}
          </span>
        )}
        {!isRunning && result && (
          <>
            {result.output && (
              <pre className="whitespace-pre-wrap" style={{ color: settings.outputColor }}>
                {result.output}
              </pre>
            )}
            {result.error && (
              <pre className="whitespace-pre-wrap" style={{ color: settings.errorColor }}>
                ⚠ {result.error}
              </pre>
            )}
            {!result.output && !result.error && (
              <span className="text-gray-600">(no output)</span>
            )}
          </>
        )}
        {!isRunning && !result && (
          <span className="text-gray-700">{t("lesson.tryIt")} ▶</span>
        )}
      </div>
    </div>
  );
}
