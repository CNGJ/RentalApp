import React, { FC, InputHTMLAttributes, useEffect, useState } from "react";
import StyledInput, { InputContainer, FieldMessageWrapper } from "./style";
interface IFieldMessage {
  text: string;
  type?: "help" | "error";
}

const FieldMessage: FC<IFieldMessage> = ({ text, type = "help" }) => (
  <FieldMessageWrapper type={type}>{text}</FieldMessageWrapper>
);

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  message?: IFieldMessage;
  "data-testid"?: string;
}
const Input: FC<InputProps> = (props) => {
  const [hasValue, setHasValue] = useState(false);
  useEffect(() => {
    setHasValue(!!props?.value);
  }, [props.value]);
  return (
    <InputContainer
      hasValue={hasValue}
      width={props.width}
      disabled={props.disabled}
      placeholder={props.placeholder}
    >
      <StyledInput
        {...props}
        onChange={(ev) => {
          props.onChange(ev);
          setHasValue(!!ev.target.value);
        }}
        hasValue={hasValue}
        placeholder={hasValue ? props.placeholder : ""}
      />
      {props.message && <FieldMessage {...props.message} />}
    </InputContainer>
  );
};

export default Input;
