import { FC, ReactNode } from 'react';

import { StyledButton } from './button.styled';

export interface Props {
  children: ReactNode;
  selectedItems?: string[];
  isDisabled?: boolean;
  onClick: () => void;
}

const Button: FC<Props> = ({
  children,
  selectedItems,
  onClick,
  isDisabled,
}) => {
  return (
    <StyledButton
      disabled={(selectedItems && selectedItems.length === 0) || isDisabled}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
