import { FC } from 'react';

import { Item } from './age-option.styled';

export interface Props {
  age: string;
  onClick: () => void;
}

const AgeOption: FC<Props> = ({ age, onClick }) => {
  return <Item onClick={onClick}>{age}</Item>;
};

export default AgeOption;
