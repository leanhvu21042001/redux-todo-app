import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import translationEN from "./en/translation.json";
import translationVN from "./vn/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  vn: {
    translation: translationVN,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: false,
    lng: "en",
    resources,
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
  });

export default i18n;
