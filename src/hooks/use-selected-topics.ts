import { useEffect, useState } from 'react';

import { TOPIC_KEY } from '../constants';

export const useSelectedTopics = (storageKey: string, maxLimit: number) => {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  useEffect(() => {
    const storedSelectedTopics = localStorage.getItem(storageKey);
    const parsedSelectedTopics: string[] = storedSelectedTopics
      ? JSON.parse(storedSelectedTopics)
      : [];

    const limitedSelectedTopics = parsedSelectedTopics.slice(0, maxLimit);

    setSelectedTopics(limitedSelectedTopics);
  }, [storageKey, maxLimit]);

  const updateSelectedTopics = (newTopic: string) => {
    if (selectedTopics.includes(newTopic)) {
      const updatedTopics = selectedTopics.filter(topic => topic !== newTopic);
      setSelectedTopics(updatedTopics);
      localStorage.setItem(TOPIC_KEY, JSON.stringify(updatedTopics));
    } else {
      const updatedTopics = [...selectedTopics, newTopic].slice(0, maxLimit);
      setSelectedTopics(updatedTopics);
      localStorage.setItem(TOPIC_KEY, JSON.stringify(updatedTopics));
    }
  };

  return { selectedTopics, updateSelectedTopics, setSelectedTopics };
};
