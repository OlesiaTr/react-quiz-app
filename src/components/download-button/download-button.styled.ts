import styled from 'styled-components';
import { theme } from '../../styles';

export const StyledButton = styled.button`
  font-weight: ${theme.fontWeights['semi-bold']};
  font-size: ${theme.fontSizes.m};
  line-height: 147%;
  color: ${theme.colors.secondaryWhite};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  background: transparent;
  border: 0;

  &:active {
    color: ${theme.colors.mainPink};
  }
`;
