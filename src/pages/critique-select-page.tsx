import { useLocation, useNavigate } from 'react-router-dom';
import { ProgressBar } from '../components/progress-bar';
import { CRITIQUE_KEY, TOTAL_AMOUNT_OF_QUESTIONS } from '../constants';
import { colorizeTitle, getPageNumberFromPath } from '../helpers';
import { useLocalization } from '../hooks';
import { Title } from '../components/title';
import { CritiqueOption } from '../components/options';
import { useEffect, useState } from 'react';
import { Button } from '../components/button';

const AgeSelectPage = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const page = getPageNumberFromPath(pathname);
  const { genericTranslation, selectedLanguage, selectedTranslation } =
    useLocalization();

  const [colorizedTitle, setColorizedTitle] = useState<string>('');

  useEffect(() => {
    if (selectedTranslation) {
      const title = selectedTranslation[3].title;
      const colorizedText = colorizeTitle(title, selectedLanguage);
      setColorizedTitle(colorizedText);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTranslation]);

  const [selectedCritiques, setSelectedCritiques] = useState<string[]>([]);

  useEffect(() => {
    const selectedCritiquesString = localStorage.getItem(CRITIQUE_KEY);
    const selectedCritiques: string[] = selectedCritiquesString
      ? JSON.parse(selectedCritiquesString)
      : [];

    setSelectedCritiques(selectedCritiques);
  }, []);

  const handleCritiqueSelect = (critique: string) => {
    const selectedCritiquesString = localStorage.getItem(CRITIQUE_KEY);
    const selectedCritiques: string[] = selectedCritiquesString
      ? JSON.parse(selectedCritiquesString)
      : [];

    const updatedCritiques = selectedCritiques.includes(critique)
      ? selectedCritiques.filter(selected => selected !== critique)
      : [...selectedCritiques, critique];

    setSelectedCritiques(updatedCritiques);
    localStorage.setItem(CRITIQUE_KEY, JSON.stringify(updatedCritiques));
  };

  const handleBtnClick = () => {
    navigate(`/quiz/${Number(page) + 1}`);
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
        <Title htmlContent={colorizedTitle}>
          {selectedTranslation[3].title}
        </Title>
        <ul style={{ marginBottom: '26px' }}>
          {selectedTranslation[3].options.map(({ value }) => (
            <CritiqueOption
              onClick={() => handleCritiqueSelect(value)}
              critique={value}
              key={value}
              isSelected={selectedCritiques.includes(value)}
            />
          ))}
        </ul>
        <Button selectedItems={selectedCritiques} onClick={handleBtnClick}>
          {genericTranslation.button.next}
        </Button>
      </section>
    </>
  );
};

export default AgeSelectPage;
