import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export interface Settings {
  editorFontSize: number;
  outputFontSize: number;
  outputColor: string;
  errorColor: string;
}

export const DEFAULT_SETTINGS: Settings = {
  editorFontSize: 14,
  outputFontSize: 14,
  outputColor: "#4ade80",
  errorColor: "#f87171",
};

const STORAGE_KEY = "codeteach_settings";

interface SettingsContextValue {
  settings: Settings;
  updateSettings: (partial: Partial<Settings>) => void;
}

const SettingsContext = createContext<SettingsContextValue>({
  settings: DEFAULT_SETTINGS,
  updateSettings: () => {},
});

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<Settings>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) as Partial<Settings> };
    } catch {
      // ignore
    }
    return DEFAULT_SETTINGS;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {
      // ignore
    }
  }, [settings]);

  function updateSettings(partial: Partial<Settings>) {
    setSettings(prev => ({ ...prev, ...partial }));
  }

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}
