import { useLocation } from 'react-router-dom';

import { ProgressBar } from '../components/progress-bar';
import { Title } from '../components/title';
import { SubTitle } from '../components/sub-title';
import { LanguageOption } from '../components/options';

import { TOTAL_AMOUNT_OF_QUESTIONS } from '../constants';
import { getPageNumberFromPath } from '../helpers';

import { useLocalization } from '../hooks';

const LanguageSelectPage = () => {
  const { pathname } = useLocation();
  const page = getPageNumberFromPath(pathname);
  const { selectedTranslation, changeLanguageAndNavigate } = useLocalization();

  const handleLanguageSelect = (language: string) => {
    changeLanguageAndNavigate(language, page);
  };

  if (selectedTranslation === null) return <h1>Loading...</h1>;

  return (
    <>
      <ProgressBar
        question={Number(page)}
        totalQuestions={TOTAL_AMOUNT_OF_QUESTIONS}
        isGoBackBtnShown={false}
      />

      <section>
        <Title>{selectedTranslation[0].title}</Title>
        <SubTitle>{selectedTranslation[0]['sub-title']}</SubTitle>
        <ul>
          {selectedTranslation[0].options.map(({ value }) => (
            <LanguageOption
              onClick={() => handleLanguageSelect(value)}
              language={value}
              key={value}
            />
          ))}
        </ul>
      </section>
    </>
  );
};

export default LanguageSelectPage;
