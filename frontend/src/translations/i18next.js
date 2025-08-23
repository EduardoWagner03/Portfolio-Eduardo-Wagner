import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ptBR from "./locales/pt-br.json";
import en from "./locales/en.json";
import es from "./locales/es.json";

i18n.use(initReactI18next).init({
  resources: {
    "pt-br": { translation: ptBR },
    en: { translation: en },
    es: { translation: es },
  },
  lng: "pt-br", // idioma padrão
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;