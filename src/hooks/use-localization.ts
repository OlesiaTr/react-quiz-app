import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { GenericData, QuestionData } from '../types';
import { LanguageLocales } from '../enums';
import { LANGUAGE_ABBREVIATION_KEY, LANGUAGE_KEY } from '../constants';

export const useLocalization = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const initialLanguage =
    localStorage.getItem(LANGUAGE_ABBREVIATION_KEY) || 'en';
  const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage);
  const [selectedTranslation, setSelectedTranslation] = useState<
    QuestionData[] | null
  >(null);
  const [genericTranslation, setGenericTranslation] =
    useState<GenericData | null>(null);

  const getTranslatedData = async (language: string) => {
    try {
      const translatedData = await import(
        `../locales/${language}/questions.json`
      );
      const genericData = await import(`../locales/${language}/generic.json`);

      setSelectedTranslation(translatedData.default);
      setGenericTranslation(genericData.default);
    } catch (error) {
      console.error('Error loading translation data:', error);
    }
  };

  const changeLanguageAndNavigate = (language: string, page: string) => {
    localStorage.setItem(LANGUAGE_KEY, language);
    const selectedLanguageCode =
      LanguageLocales[language as keyof typeof LanguageLocales];

    if (selectedLanguageCode) {
      i18n.changeLanguage(selectedLanguageCode);
      localStorage.setItem(LANGUAGE_ABBREVIATION_KEY, selectedLanguageCode);
      setSelectedLanguage(selectedLanguageCode);
      navigate(`/quiz/${Number(page) + 1}`);
      getTranslatedData(selectedLanguageCode);
    } else {
      console.error('Unsupported language:', language);
    }
  };

  useEffect(() => {
    getTranslatedData(selectedLanguage);
  }, [selectedLanguage]);

  return {
    genericTranslation,
    selectedLanguage,
    selectedTranslation,
    changeLanguageAndNavigate,
  };
};
