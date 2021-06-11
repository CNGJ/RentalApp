import React, { FC } from "react";
import {
  WrapperCounter,
  CounterInfo,
  TitleCounter,
  CounterButtons,
  CounterButton,
} from "./styles";

interface CounterProps {
  name: string;
  label: string;
  onChange: any;
  value: any;
  disabled?: boolean;
}

export const Counter: FC<CounterProps> = ({
  label,
  value,
  onChange,
  name,
  disabled,
}) => {
  return (
    <>
      <WrapperCounter>
        <CounterInfo>
          <TitleCounter>{label} </TitleCounter>
          <TitleCounter>{value}</TitleCounter>
        </CounterInfo>

        <CounterButtons>
          <CounterButton
            type="button"
            disabled={disabled ? disabled : value - 1 === -1}
            onClick={() => onChange(name, value - 1)}
          >
            -
          </CounterButton>
          <CounterButton
            type="button"
            onClick={() => onChange(name, value + 1)}
            plus
          >
            +
          </CounterButton>
        </CounterButtons>
      </WrapperCounter>
    </>
  );
};
