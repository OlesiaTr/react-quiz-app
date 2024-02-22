import { FC, ReactNode } from 'react';
import { Text } from './sub-title.styled';

export interface Props {
  children: ReactNode;
}

const SubTitle: FC<Props> = ({ children }) => {
  return <Text>{children}</Text>;
};

export default SubTitle;
