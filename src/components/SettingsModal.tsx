import { useSettings } from "../contexts/SettingsContext";

interface Props {
  onClose: () => void;
}

const OUTPUT_COLORS = [
  { label: "綠色", value: "#4ade80" },
  { label: "白色", value: "#ffffff" },
  { label: "青色", value: "#22d3ee" },
  { label: "黃色", value: "#facc15" },
];

const ERROR_COLORS = [
  { label: "紅色", value: "#f87171" },
  { label: "橙色", value: "#fb923c" },
  { label: "粉紅", value: "#f472b6" },
];

export default function SettingsModal({ onClose }: Props) {
  const { settings, updateSettings } = useSettings();

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 border border-gray-700 rounded-lg p-6 w-80 shadow-xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-sm font-semibold text-gray-200">⚙ 設定 / Settings</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-300 text-lg leading-none"
          >
            ✕
          </button>
        </div>

        <div className="mb-4">
          <label className="text-xs text-gray-400 block mb-2">
            編輯器字體大小 / Editor Font Size:{" "}
            <span className="text-blue-400">{settings.editorFontSize}px</span>
          </label>
          <input
            type="range"
            min={10}
            max={24}
            step={1}
            value={settings.editorFontSize}
            onChange={e => updateSettings({ editorFontSize: Number(e.target.value) })}
            className="w-full accent-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="text-xs text-gray-400 block mb-2">
            輸出字體大小 / Output Font Size:{" "}
            <span className="text-blue-400">{settings.outputFontSize}px</span>
          </label>
          <input
            type="range"
            min={10}
            max={24}
            step={1}
            value={settings.outputFontSize}
            onChange={e => updateSettings({ outputFontSize: Number(e.target.value) })}
            className="w-full accent-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="text-xs text-gray-400 block mb-2">
            輸出文字顏色 / Output Color
          </label>
          <div className="flex gap-2">
            {OUTPUT_COLORS.map(c => (
              <button
                key={c.value}
                title={c.label}
                onClick={() => updateSettings({ outputColor: c.value })}
                className={`w-7 h-7 rounded-full border-2 transition-all ${
                  settings.outputColor === c.value
                    ? "border-white scale-110"
                    : "border-transparent"
                }`}
                style={{ backgroundColor: c.value }}
              />
            ))}
          </div>
        </div>

        <div className="mb-5">
          <label className="text-xs text-gray-400 block mb-2">
            錯誤文字顏色 / Error Color
          </label>
          <div className="flex gap-2">
            {ERROR_COLORS.map(c => (
              <button
                key={c.value}
                title={c.label}
                onClick={() => updateSettings({ errorColor: c.value })}
                className={`w-7 h-7 rounded-full border-2 transition-all ${
                  settings.errorColor === c.value
                    ? "border-white scale-110"
                    : "border-transparent"
                }`}
                style={{ backgroundColor: c.value }}
              />
            ))}
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full text-xs py-2 rounded bg-blue-600 hover:bg-blue-500 text-white transition-colors"
        >
          關閉 / Close
        </button>
      </div>
    </div>
  );
}
