import styled from 'styled-components';

import { theme } from '../../styles';

export const StyledInput = styled.input`
  min-width: 335px;
  width: 100%;
  min-height: 76px;
  margin-bottom: 10px;
  padding: 0 20px;
  border-radius: 10px;

  border: ${theme.borders.medium} transparent;
  background-color: ${theme.colors.secondaryBg};

  color: ${theme.colors.white};
  ::placeholder {
    color: ${theme.colors.subtitleGrayWithOpacity};
  }

  outline: none;
  transition: ${theme.transition.main};

  &:not(:placeholder-shown):focus-visible {
    border-color: ${theme.colors.mainPink};
  }
`;

export const ErrorText = styled.p`
  color: ${theme.colors.inputError};
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeights['extra-bold']};
`;
