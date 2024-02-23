import { QuestionData } from '../types';

export const getTopicsBasedOnAge = (
  age: string,
  selectedTranslation: QuestionData[]
) => {
  const generalTopics = selectedTranslation[4].options;

  const additionalTopics = selectedTranslation
    .filter(
      question => question.type === 'bubble' && question.title.includes(age)
    )
    .flatMap(question => question.options.map(option => option));

  return [...additionalTopics, ...generalTopics];
};
