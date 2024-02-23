import { styled } from 'styled-components';
import { theme } from '../../styles';

export const StyledButton = styled.button`
  width: 100%;
  min-height: 56px;
  padding: 13px 0;
  border: none;
  border-radius: 30px;

  color: ${theme.colors.white};

  background-color: #e4229c;

  user-select: none;

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }
`;
