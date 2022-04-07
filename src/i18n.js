import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Detect from "detect-browser-language";

i18n.use(initReactI18next).init({
  resources: { en: {} },
  lng: Detect(),
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
  fallbackLng: ["en"],
});

export default i18n;
