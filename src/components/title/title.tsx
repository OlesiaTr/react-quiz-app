import { FC, ReactNode } from 'react';

import { Text } from './title.styled';

export interface Props {
  children: ReactNode;
  htmlContent?: string;
}

const Title: FC<Props> = ({ children, htmlContent }) => {
  return (
    <>
      {htmlContent ? (
        <Text dangerouslySetInnerHTML={{ __html: htmlContent }} />
      ) : (
        <Text>{children}</Text>
      )}
    </>
  );
};

export default Title;
