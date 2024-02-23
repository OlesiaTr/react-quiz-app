import styled from 'styled-components';
import { theme } from '../../../styles';

export const Item = styled.li`
  width: 100%;
  min-height: 60px;
  padding: 16px 20px;
  border-radius: 16px;
  cursor: pointer;
  transition: ${theme.transition.main};
  user-select: none;

  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights['semi-bold']};
  line-height: 141%;

  background-color: ${theme.colors.secondaryBg};
  border: ${theme.borders.medium} transparent;

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
    font-size: ${theme.fontSizes.xm};

    & + & {
      margin-top: 14px;
    }
  }
`;
