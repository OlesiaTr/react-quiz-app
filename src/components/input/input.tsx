import { ChangeEvent, FC } from 'react';
import { DebouncedFunction } from 'debounce';

import { ErrorText, StyledInput } from './input.styled';

export interface Props {
  onChange: DebouncedFunction<(event: ChangeEvent<HTMLInputElement>) => void>;
  isValid: boolean;
  errorDescription: string;
}

const Input: FC<Props> = ({ onChange, isValid, errorDescription }) => {
  return (
    <div style={{ width: '100%' }}>
      <StyledInput
        aria-placeholder="Your email"
        placeholder="Your email"
        onChange={onChange}
      />
      {!isValid && <ErrorText>{errorDescription}</ErrorText>}
    </div>
  );
};

export default Input;
