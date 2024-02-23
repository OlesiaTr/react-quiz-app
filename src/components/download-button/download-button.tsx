import { FC } from 'react';

import { StyledButton } from './download-button.styled';

export interface Props {
  text: string;
  onClick: () => void;
}

const DownloadButton: FC<Props> = ({ text, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <img src="/src/assets/icon-download.svg" alt="download icon" />
      {text}
    </StyledButton>
  );
};

export default DownloadButton;
