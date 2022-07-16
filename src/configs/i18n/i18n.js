import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "../../i18n/en-US.json";
import translationES from "../../i18n/es-ES.json";
import { landType } from "./i18n.const";

export const resources = {
  EN: {
    translation: translationEN,
  },
  ES: {
    translation: translationES,
  },
};

i18n.use(initReactI18next).init({
  fallbackLng: landType.EN,
  keySeparator: ".",
  resources,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
