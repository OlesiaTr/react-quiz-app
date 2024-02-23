import {
  AGE_KEY,
  CRITIQUE_KEY,
  EMAIL_KEY,
  GENDER_KEY,
  LANGUAGE_KEY,
  TOPIC_KEY,
} from '../constants';
import { GenericData, QuestionData, QuizItem } from '../types';

export const getQuizData = (
  genericTranslation: GenericData | null,
  selectedTranslation: QuestionData[] | null
): QuizItem[] => {
  const savedLanguage = localStorage.getItem(LANGUAGE_KEY);

  const savedGender = localStorage.getItem(GENDER_KEY);

  const savedAge = localStorage.getItem(AGE_KEY);

  const selectedCritiques = localStorage.getItem(CRITIQUE_KEY);
  const savedCritiques: string[] = selectedCritiques
    ? JSON.parse(selectedCritiques)
    : [];

  const selectedTopics = localStorage.getItem(TOPIC_KEY);
  const savedTopics: string[] = selectedTopics
    ? JSON.parse(selectedTopics)
    : [];

  const savedEmail = localStorage.getItem(EMAIL_KEY);

  const result = [
    {
      order: 1,
      title: selectedTranslation![0].title,
      type: selectedTranslation![0].type,
      answer: savedLanguage,
    },
    {
      order: 2,
      title: selectedTranslation![1].title,
      type: selectedTranslation![1].type,
      answer: savedGender,
    },
    {
      order: 3,
      title: selectedTranslation![2].title,
      type: selectedTranslation![2].type,
      answer: savedAge,
    },
    {
      order: 4,
      title: selectedTranslation![3].title,
      type: selectedTranslation![3].type,
      answer: savedCritiques,
    },
    {
      order: 5,
      title: selectedTranslation![4].title,
      type: selectedTranslation![4].type,
      answer: savedTopics,
    },
    {
      order: 6,
      title: genericTranslation!.email.title,
      type: genericTranslation!.email.type,
      answer: savedEmail,
    },
  ];

  return result;
};
