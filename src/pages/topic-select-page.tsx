import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { ProgressBar } from '../components/progress-bar';
import { Title } from '../components/title';
import { TopicOption } from '../components/options';
import { Button } from '../components/button';
import { SubTitle } from '../components/sub-title';

import {
  GENRES_MAX_LIMIT,
  TOPIC_KEY,
  TOTAL_AMOUNT_OF_QUESTIONS,
} from '../constants';
import { getPageNumberFromPath } from '../helpers';

import { useLocalization, useSelectedTopics } from '../hooks';

const AgeSelectPage = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const page = getPageNumberFromPath(pathname);
  const { genericTranslation, selectedTranslation } = useLocalization();
  const { selectedTopics, updateSelectedTopics, setSelectedTopics } =
    useSelectedTopics(TOPIC_KEY, GENRES_MAX_LIMIT);

  useEffect(() => {
    const selectedTopicsString = localStorage.getItem(TOPIC_KEY);
    const selectedTopics: string[] = selectedTopicsString
      ? JSON.parse(selectedTopicsString)
      : [];

    setSelectedTopics(selectedTopics);
  }, [setSelectedTopics]);

  const handleTopicSelect = (topic: string) => {
    updateSelectedTopics(topic);
  };

  const handleBtnClick = () => {
    navigate(`/loading`);
  };

  if (selectedTranslation === null || genericTranslation === null)
    return <h1>Loading...</h1>;

  return (
    <>
      <ProgressBar
        question={Number(page)}
        totalQuestions={TOTAL_AMOUNT_OF_QUESTIONS}
      />
      <section>
        <Title>{selectedTranslation[4].title}</Title>
        <SubTitle>{selectedTranslation[4]['sub-title']}</SubTitle>
        <ul
          style={{
            marginBottom: '36px',
            display: 'grid',
            justifyContent: 'center',
            gridTemplateColumns: 'repeat(auto-fill,100px)',
            gap: '8px',
          }}
        >
          {selectedTranslation[4].options.map(({ icon, value }) => (
            <TopicOption
              onClick={() => handleTopicSelect(value)}
              topic={value}
              icon={icon!}
              key={value}
              isSelected={selectedTopics.includes(value)}
            />
          ))}
        </ul>
        <Button selectedItems={selectedTopics} onClick={handleBtnClick}>
          {genericTranslation.button.next}
        </Button>
      </section>
    </>
  );
};

export default AgeSelectPage;
