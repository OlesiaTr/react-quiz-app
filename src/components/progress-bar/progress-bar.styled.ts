import { styled } from 'styled-components';

import { theme } from '../../styles';

export const Section = styled.section`
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
  width: 100%;

  color: white;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  margin-bottom: 8px;
`;

export const GoBackBtn = styled.button<{ $isGoBackBtnShown: boolean }>`
  background: none;
  border: none;
  cursor: ${({ $isGoBackBtnShown }) =>
    $isGoBackBtnShown ? 'pointer' : 'default'};
  transition: ${theme.transition.main};
  opacity: ${({ $isGoBackBtnShown }) => ($isGoBackBtnShown ? 1 : 0)};
  animation: ${({ $isGoBackBtnShown }) =>
      $isGoBackBtnShown ? 'fadeIn' : 'none'}
    0.5s ease;

  &:active svg path {
    stroke: ${theme.colors.secondaryPink};
  }
`;

export const QuestionContainer = styled.p`
  margin: 0 auto;
  font-size: ${theme.fontSizes.xm};
  font-weight: ${theme.fontWeights['extra-bold']};
  line-height: 111%;

  @media screen and (${theme.media.medium}) {
    font-size: ${theme.fontSizes.l};
  }
`;

export const CurrentQuestion = styled.span`
  color: ${theme.colors.secondaryPink};
`;

export const Bar = styled.div`
  width: 100%;
  height: 4px;
  background-color: ${theme.colors.white};
  border-radius: 5px;
  overflow: hidden;

  @media screen and (${theme.media.medium}) {
    height: 10px;
  }
`;

export const ProgressPercent = styled.div<{ $progressPercent: number }>`
  width: ${props => props.$progressPercent}%;
  height: 100%;
  background-color: ${theme.colors.secondaryPink};
  transition: width 1s;
  border-radius: 10px;
`;
