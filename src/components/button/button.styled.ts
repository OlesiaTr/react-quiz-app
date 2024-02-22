import { styled } from 'styled-components';
import { theme } from '../../styles';

export const StyledButton = styled.button`
  width: 100%;
  min-height: 56px;

  background-color: #e4229c;
  color: ${theme.colors.white};
  border: none;
  border-radius: 30px;
  padding: 13px 0;
  user-select: none;

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }
`;
