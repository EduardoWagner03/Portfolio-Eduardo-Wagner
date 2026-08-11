import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import pt from "./pt";
import en from "./en";

const DICTIONARIES = { pt, en };
const STORAGE_KEY = "ew-portfolio-lang";

const I18nContext = createContext(null);

function readStoredLang() {
  if (typeof window === "undefined") return "pt";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "pt" || stored === "en") return stored;
  // Sem preferência salva: segue o idioma do navegador, com PT como padrão.
  return navigator.language?.toLowerCase().startsWith("en") ? "en" : "pt";
}

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(readStoredLang);

  useEffect(() => {
    const dict = DICTIONARIES[lang];
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = dict.meta.locale;
    document.title = dict.meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", dict.meta.description);
  }, [lang]);

  const toggleLang = useCallback(
    () => setLang((current) => (current === "pt" ? "en" : "pt")),
    []
  );

  const value = useMemo(
    () => ({ lang, setLang, toggleLang, t: DICTIONARIES[lang] }),
    [lang, toggleLang]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n precisa estar dentro de I18nProvider");
  return context;
}
