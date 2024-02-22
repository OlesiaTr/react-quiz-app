import styled from 'styled-components';
import { theme } from '../../../styles';

export const Item = styled.li`
  width: 100%;
  min-height: 60px;
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.m};
  background-color: ${theme.colors.secondaryBg};
  font-weight: ${theme.fontWeights['semi-bold']};
  line-height: 141%;
  border: ${theme.borders.medium} transparent;
  border-radius: 16px;
  padding: 16px 20px;
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
    font-size: ${theme.fontSizes.xm};

    & + & {
      margin-top: 14px;
    }
  }
`;
