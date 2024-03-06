import { styled } from 'styled-components';

import { theme } from '../../styles';

export const StyledButton = styled.button`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  width: calc(100% - 40px);
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
    transform: translateX(0);
    width: 100%;
  }
`;
