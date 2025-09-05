import i18n, { init } from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import languageDetector from "i18next-browser-languagedetector";

import uzTranslation from "../public/languages/uz.json";
import enTranslation from "../public/languages/en.json";
import ruTranslation from "../public/languages/ru.json";

const language = localStorage.getItem("i18nextLng") || "uz";

i18n.use(Backend).use(languageDetector).use(initReactI18next);
init({
  defaultLang: "uz",
  lang: language,
  debug: true,
  resources: {
    uz: {
      translation: uzTranslation,
    },
    en: {
      translation: enTranslation,
    },
    ru: {
      translation: ruTranslation,
    },
  },
});

export default i18n;
