import { FC } from 'react';
import { SubTitle, Title } from './quiz-completion-message.styled';

export interface Props {
  title: string;
  subTitle: string;
}

const QuizCompletionMessage: FC<Props> = ({ title, subTitle }) => {
  return (
    <>
      <Title>{title}</Title>
      <SubTitle> {subTitle} </SubTitle>
    </>
  );
};

export default QuizCompletionMessage;
