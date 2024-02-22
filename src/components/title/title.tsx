import { FC, ReactNode } from 'react';
import { Text } from './title.styled';

export interface Props {
  children: ReactNode;
}

const Title: FC<Props> = ({ children }) => {
  return <Text>{children}</Text>;
};

export default Title;
