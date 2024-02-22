import { FC } from 'react';
import { Item } from './language-option.styled';

export interface Props {
  language: string;
  onClick: () => void;
}

const LanguageOption: FC<Props> = ({ language, onClick }) => {
  return <Item onClick={onClick}>{language}</Item>;
};

export default LanguageOption;
