import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/eng/tr.json"; // English translations
import translationRu from "./locales/rus/tr.json"; // German translations

// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRu,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "ru", // default language
    fallbackLng: "ru", // fallback language
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
