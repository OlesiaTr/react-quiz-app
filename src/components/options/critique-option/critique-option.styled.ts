import styled from 'styled-components';
import { theme } from '../../../styles';

export const Item = styled.li<{ $isChecked: boolean }>`
  min-width: 335px;
  min-height: 76px;
  color: ${theme.colors.white};
  background-color: ${({ $isChecked }) =>
    $isChecked ? theme.colors.mainPinkWithOpacity : theme.colors.secondaryBg};

  border: ${theme.borders.medium};
  border-color: ${({ $isChecked }) =>
    $isChecked ? theme.colors.mainPinkWithOpacity : theme.colors.secondaryBg};

  border-radius: 16px;
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

export const Label = styled.label`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.medium};
  line-height: 141%;
  letter-spacing: -0.17px;
  padding: 23px 20px;
  cursor: pointer;

  &::after {
    content: '';
    width: 23px;
    height: 23px;
    border: ${theme.borders.medium} ${theme.colors.mainPink};
    border-radius: 8px;

    input:checked + & {
      background-color: ${theme.colors.mainPink};
      background-image: url(/src/assets/icon-check.svg);
      border: none;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
`;

export const Input = styled.input`
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;

  ${Item} + &:checked {
    background-color: ${theme.colors.mainPink};
  }
`;
