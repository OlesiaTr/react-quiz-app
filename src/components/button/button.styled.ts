import { styled } from 'styled-components';

import { theme } from '../../styles';

export const StyledButton = styled.button`
  position: sticky;
  bottom: 0;
  left: 0;

  width: 100%;
  min-height: 56px;
  border: none;
  border-radius: 30px;

  color: ${theme.colors.white};

  background-color: #e4229c;

  user-select: none;

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }

  @media screen and (${theme.media.medium}) {
    position: static;
  }
`;
