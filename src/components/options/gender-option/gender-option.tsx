import { FC } from 'react';

import { Description, Icon, Item } from './gender-option.styled';

export interface Props {
  gender: string;
  onClick: () => void;
  icon: string;
}

const GenderOption: FC<Props> = ({ gender, onClick, icon }) => {
  return (
    <Item onClick={onClick}>
      <Icon src={icon} alt={gender} />
      <Description>{gender}</Description>
    </Item>
  );
};

export default GenderOption;
