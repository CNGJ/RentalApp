import React, { FC } from 'react';
import { WrapperRadioo as WrapperRadio, RadioOuter, RadioInner, Label } from './styles';

interface IRadioButtonProps {
  label: string;
  value: string;
  isSelected: string;
  id: any;
  onChange: (a: any) => void;
}

const RadioButton: FC<IRadioButtonProps> = ({ label, value, isSelected, id, onChange }) => {
  return (
    <>
      <WrapperRadio
        onClick={() => {
          onChange(value);
        }}
      >
        <RadioOuter
          selected={value !== isSelected}
          // className={`radio-outer-circle ${value !== selected && "unselected"}`}
        >
          <RadioInner
            selected={value !== isSelected}
            // className={`radio-inner-circle ${value !== isSelected && "unselected-circle"}`}
          />
        </RadioOuter>
        <Label>{label}</Label>
      </WrapperRadio>
    </>
  );
};

export default RadioButton;
