import { FC, ReactNode } from 'react';
import { StyledButton } from './button.styled';

export interface Props {
  children: ReactNode;
  selectedItems?: string[];
  onClick: () => void;
}

const Button: FC<Props> = ({ children, selectedItems, onClick }) => {
  return (
    <StyledButton
      disabled={selectedItems && selectedItems.length === 0}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
