import styled from 'styled-components';
import { theme } from '../../../styles';

export const Item = styled.li<{ $isChecked: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;

  width: 88px;
  height: 88px;

  cursor: pointer;

  background-color: ${({ $isChecked }) =>
    $isChecked ? theme.colors.mainPinkWithOpacity : theme.colors.secondaryBg};

  border: ${theme.borders.medium};
  border-color: ${({ $isChecked }) =>
    $isChecked ? theme.colors.mainPink : theme.colors.secondaryBg};

  border-radius: 50%;
  transition: ${theme.transition.main};
  user-select: none;

  &:hover {
    border-color: ${theme.colors.mainPink};
  }

  &:active {
    border-color: ${theme.colors.mainPink};
    background-color: ${theme.colors.mainPinkWithOpacity};
  }

  &:nth-child(even) {
    transform: translateY(15px);
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
