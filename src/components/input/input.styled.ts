import styled from 'styled-components';
import { theme } from '../../styles';

export const StyledInput = styled.input`
  min-width: 335px;
  width: 100%;
  margin-bottom: 10px;
  min-height: 76px;
  border: ${theme.borders.medium} transparent;
  padding: 0 20px;
  border-radius: 10px;
  background-color: ${theme.colors.secondaryBg};
  color: ${theme.colors.white};
  outline: none;
  transition: ${theme.transition.main};

  ::placeholder {
    color: ${theme.colors.subtitleGrayWithOpacity};
  }

  &:not(:placeholder-shown):focus-visible {
    border-color: ${theme.colors.mainPink};
  }
`;

export const ErrorText = styled.p`
  color: ${theme.colors.inputError};
  font-size: 14px;
  font-weight: ${theme.fontWeights['extra-bold']};
`;
