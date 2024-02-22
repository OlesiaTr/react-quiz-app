import styled from 'styled-components';
import { theme } from '../../../styles';

export const Item = styled.li`
  min-width: 335px;
  min-height: 76px;
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.m};
  background-color: ${theme.colors.secondaryBg};
  font-weight: ${theme.fontWeights.medium};
  line-height: 141%;
  letter-spacing: -0.17px;
  border: ${theme.borders.medium} ${theme.colors.secondaryBg};
  border-radius: 16px;
  padding: 23px 20px;
  cursor: pointer;
  transition: ${theme.transition.main};
  user-select: none;

  & + & {
    margin-top: 12px;
  }

  &:hover {
    border-color: ${theme.colors.mainPink};
  }

  &:active {
    border-color: ${theme.colors.mainPink};
    background-color: ${theme.colors.mainPinkWithOpacity};
  }

  @media screen and (${theme.media.medium}) {
    min-width: 420px;

    font-size: ${theme.fontSizes.xm};

    & + & {
      margin-top: 14px;
    }
  }
`;
