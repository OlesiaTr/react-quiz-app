import { FC, useEffect, useState } from 'react';

import { CRITIQUE_KEY } from '../../../constants';

import { Input, Item, Label } from './critique-option.styled';

export interface Props {
  critique: string;
  onClick: () => void;
  isSelected: boolean;
}

const CritiqueOption: FC<Props> = ({ critique, onClick, isSelected }) => {
  const [isChecked, setIsChecked] = useState(isSelected);

  useEffect(() => {
    const selectedCritiquesString = localStorage.getItem(CRITIQUE_KEY);
    const selectedCritiques: string[] = selectedCritiquesString
      ? JSON.parse(selectedCritiquesString)
      : [];

    setIsChecked(selectedCritiques.includes(critique));
  }, [critique]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onClick();
  };

  return (
    <Item onClick={onClick} $isChecked={isChecked}>
      <Input
        type="checkbox"
        value="true"
        name={critique}
        id={critique}
        onChange={handleCheckboxChange}
        checked={isChecked}
      />
      <Label htmlFor={critique}>
        <span>{critique}</span>
      </Label>
    </Item>
  );
};

export default CritiqueOption;
