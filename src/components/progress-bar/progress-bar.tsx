import { FC, useEffect, useState } from 'react';
import { ArrowLeftIcon } from '../../assets/icons';
import {
  Bar,
  Container,
  CurrentQuestion,
  GoBackBtn,
  ProgressPercent,
  QuestionContainer,
  Section,
} from './progress-bar.styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { getPageNumberFromPath } from '../../helpers';

export interface Props {
  question: number;
  totalQuestions: number;
  isGoBackBtnShown?: boolean;
}

const ProgressBar: FC<Props> = ({
  question,
  totalQuestions,
  isGoBackBtnShown = true,
}) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const page = getPageNumberFromPath(pathname);
  const [progressPercent, setProgressPercent] = useState(0);

  useEffect(() => {
    const newProgressPercent = (question / totalQuestions) * 100;
    setProgressPercent(newProgressPercent);
  }, [question, totalQuestions]);

  const handleBtnClick = () => {
    navigate(`/quiz/${Number(page) - 1}`);
  };

  return (
    <Section>
      <Container>
        <GoBackBtn
          $isGoBackBtnShown={isGoBackBtnShown}
          onClick={handleBtnClick}
        >
          <ArrowLeftIcon />
        </GoBackBtn>

        <QuestionContainer>
          <CurrentQuestion>{question}</CurrentQuestion>
          <span>/{totalQuestions}</span>
        </QuestionContainer>
      </Container>
      <Bar>
        <ProgressPercent $progressPercent={progressPercent} />
      </Bar>
    </Section>
  );
};

export default ProgressBar;
