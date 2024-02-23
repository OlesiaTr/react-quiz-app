import { useLocation, useNavigate } from 'react-router-dom';

import { ProgressBar } from '../components/progress-bar';
import { Title } from '../components/title';
import { AgeOption } from '../components/options';

import { AGE_KEY, TOTAL_AMOUNT_OF_QUESTIONS } from '../constants';
import { getPageNumberFromPath } from '../helpers';

import { useLocalization } from '../hooks';

const AgeSelectPage = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const page = getPageNumberFromPath(pathname);
  const { selectedTranslation } = useLocalization();

  const handleAgeSelect = (gender: string) => {
    localStorage.setItem(AGE_KEY, gender);
    navigate(`/quiz/${Number(page) + 1}`);
  };

  if (selectedTranslation === null) return <h1>Loading...</h1>;

  return (
    <>
      <ProgressBar
        question={Number(page)}
        totalQuestions={TOTAL_AMOUNT_OF_QUESTIONS}
      />
      <section>
        <Title>{selectedTranslation[2].title}</Title>
        <ul>
          {selectedTranslation[2].options.map(({ value }) => (
            <AgeOption
              onClick={() => handleAgeSelect(value)}
              age={value}
              key={value}
            />
          ))}
        </ul>
      </section>
    </>
  );
};

export default AgeSelectPage;
