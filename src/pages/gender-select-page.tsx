import { useLocation, useNavigate } from 'react-router-dom';
import { ProgressBar } from '../components/progress-bar';
import { GENDER_KEY, TOTAL_AMOUNT_OF_QUESTIONS } from '../constants';
import { getPageNumberFromPath } from '../helpers';
import { useLocalization } from '../hooks';
import { Title } from '../components/title';
import { SubTitle } from '../components/sub-title';
import { GenderOption } from '../components/options';

const GenderSelectPage = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const page = getPageNumberFromPath(pathname);
  const { selectedTranslation } = useLocalization();

  const handleGenderSelect = (gender: string) => {
    localStorage.setItem(GENDER_KEY, gender);
    navigate(`/quiz/${Number(page) + 1}`);
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
        <Title>{selectedTranslation[1].title}</Title>
        <SubTitle>{selectedTranslation[1]['sub-title']}</SubTitle>
        <ul style={{ display: 'flex', justifyContent: 'center' }}>
          {selectedTranslation[1].options.map(({ icon, value }) => (
            <GenderOption
              onClick={() => handleGenderSelect(value)}
              gender={value}
              icon={icon!}
              key={value}
            />
          ))}
        </ul>
      </section>
    </>
  );
};

export default GenderSelectPage;
