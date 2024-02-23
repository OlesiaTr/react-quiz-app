import styled from 'styled-components';
import { theme } from '../../../styles';

export const Item = styled.li`
  min-width: 335px;
  min-height: 76px;
  padding: 23px 20px;
  border-radius: 16px;
  cursor: pointer;
  transition: ${theme.transition.main};
  user-select: none;

  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.medium};
  line-height: 141%;
  letter-spacing: -0.17px;

  background-color: ${theme.colors.secondaryBg};
  border: ${theme.borders.medium} ${theme.colors.secondaryBg};

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
