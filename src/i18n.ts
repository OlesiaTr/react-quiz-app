import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enQuestions from './locales/en/questions.json';
import enGeneric from './locales/en/generic.json';
import deQuestions from './locales/de/questions.json';
import deGeneric from './locales/de/generic.json';
import esQuestions from './locales/es/questions.json';
import esGeneric from './locales/es/generic.json';
import frQuestions from './locales/fr/questions.json';
import frGeneric from './locales/fr/generic.json';
import uaQuestions from './locales/ua/questions.json';
import uaGeneric from './locales/ua/generic.json';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: { questions: enQuestions, generic: enGeneric },
    de: { questions: deQuestions, generic: deGeneric },
    es: { questions: esQuestions, generic: esGeneric },
    fr: { questions: frQuestions, generic: frGeneric },
    ua: { questions: uaQuestions, generic: uaGeneric },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
