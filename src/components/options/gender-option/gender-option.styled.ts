import styled from 'styled-components';
import { theme } from '../../../styles';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  min-width: 101px;
  min-height: 144px;
  background-color: ${theme.colors.secondaryBg};

  border: ${theme.borders.medium} transparent;
  border-radius: 12px;
  cursor: pointer;
  transition: ${theme.transition.main};
  user-select: none;

  & + & {
    margin-left: 12px;
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
    min-width: 116px;
    min-height: 148px;

    & + & {
      margin-left: 14px;
    }
  }
`;

export const Icon = styled.img`
  width: 52px;
  height: 52px;

  @media screen and (${theme.media.medium}) {
    width: 62px;
    height: 62px;
  }
`;

export const Description = styled.p`
  color: ${theme.colors.white};
  font-family: ${theme.fonts.nunito};
  letter-spacing: 0.03px;
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeights['semi-bold']};
  line-height: 133%;

  @media screen and (${theme.media.medium}) {
    font-size: ${theme.fontSizes.m};
  }
`;
