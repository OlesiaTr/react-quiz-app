import { FC } from 'react';

import { Description, Image, Item } from './topic-option.styled';

export interface Props {
  topic: string;
  onClick: () => void;
  icon: string;
  isSelected: boolean;
}

const TopicOption: FC<Props> = ({ topic, onClick, icon, isSelected }) => {
  return (
    <Item onClick={onClick} $isChecked={isSelected}>
      <Image src={icon} alt={topic} />
      <Description>{topic}</Description>
    </Item>
  );
};

export default TopicOption;
