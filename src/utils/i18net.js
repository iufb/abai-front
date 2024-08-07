import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationKZ from "./locales/kz/tr.json";
import translationRu from "./locales/rus/tr.json";

// the translations
const resources = {
  kz: {
    translation: translationKZ,
  },
  ru: {
    translation: translationRu,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "kz", // default language
    fallbackLng: "kz", // fallback language
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
