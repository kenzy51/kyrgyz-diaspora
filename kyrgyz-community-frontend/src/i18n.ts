import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          home: "Home",
          events: "Events",
          resources: "Resources",
          about: "About",
          createEvent: "Create Event",
          unionKg: "Union KG",
        },
      },
      kg: {
        translation: {
          home: "Башкы бет",
          events: "Иш-чаралар",
          resources: "Ресурстар",
          about: "Биз жөнүндө",
          createEvent: "Иш-чара кошуу",
          unionKg: "Юнион КГ",
        },
      },
      ru: {
        translation: {
          home: "Главная",
          events: "События",
          resources: "Ресурсы",
          about: "О нас",
          createEvent: "Добавить событие",
          unionKg: "Юнион КГ",
        },
      },
    },
  });

export default i18n;
