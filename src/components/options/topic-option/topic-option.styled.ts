import styled from 'styled-components';

import { theme } from '../../../styles';

export const Item = styled.li<{ $isChecked: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  overflow-x: hidden;

  width: 88px;
  height: 88px;
  border-radius: 50%;

  cursor: pointer;
  transition: ${theme.transition.main};
  user-select: none;

  background-color: ${({ $isChecked }) =>
    $isChecked ? theme.colors.mainPinkWithOpacity : theme.colors.secondaryBg};
  border: ${theme.borders.medium};
  border-color: ${({ $isChecked }) =>
    $isChecked ? theme.colors.mainPink : theme.colors.secondaryBg};

  &:hover {
    border-color: ${({ $isChecked }) =>
      $isChecked ? theme.colors.mainPink : theme.colors.secondaryBg};
    background-color: ${({ $isChecked }) =>
      $isChecked ? theme.colors.mainPinkWithOpacity : theme.colors.secondaryBg};
  }

  @media screen and (${theme.media.medium}) {
    &:nth-child(even) {
      transform: translateY(15px);
    }
  }
`;

export const Image = styled.img`
  width: 25px;
  height: 25px;
`;

export const Description = styled.p`
  color: ${theme.colors.white};
  text-align: center;
  font-family: ${theme.fonts.nunito};
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights['semi-bold']};
  line-height: 123%;
  letter-spacing: 0.078px;
`;
