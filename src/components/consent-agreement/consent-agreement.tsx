import { FC } from 'react';
import { Text } from './consent-agreement.styled';

export interface Props {
  htmlContent: string;
}

const ConsentAgreement: FC<Props> = ({ htmlContent }) => {
  console.log('htmlContent: ', htmlContent);
  return <Text dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default ConsentAgreement;
