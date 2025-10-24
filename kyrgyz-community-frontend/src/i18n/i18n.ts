import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import ru from "./locales/ru.json";
import kg from "./locales/kg.json";
const detector = new LanguageDetector();
detector.addDetector({
  name: "customRuDetector",
  lookup() {
    const lang = navigator.language || navigator.language[0] || "en";
    if (lang.startsWith("ru")) return "kg";
    return lang;
  },
  cacheUserLanguage() {},
});
const savedLang = localStorage.getItem("i18nextLng");
const defaultLang = savedLang || "en";
i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    lng: defaultLang,
    fallbackLng: "en",
    debug: false,
    detection: {
      order: ["customRuDetector", "localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
    interpolation: { escapeValue: false },

    resources: {
      en: {
        translation: en,
      },
      kg: {
        translation: kg,
      },
      ru: {
        translation: ru,
      },
    },
  });

export default i18n;
