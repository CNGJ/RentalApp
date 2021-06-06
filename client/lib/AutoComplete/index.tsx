import React, {
  FC,
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import StyledInput, {
  InputContainer,
  FieldMessageWrapper,
  AutoContainer,
  Option,
} from "./styles";
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
  setValue: any;
}
const AutoComplete: FC<InputProps> = (props) => {
  const [hasValue, setHasValue] = useState(false);
  const [displayOptions, setdisplayOptions] = useState(false);
  const ref = useRef(null);
  const [cities, setCities] = useState([
    { name: "Buenos Aires" },
    { name: "Mendoza" },
    { name: "Bariloche" },
    { name: "Cordoba" },
    { name: "La Plata" },
    { name: "La Pampa" },
  ]);
  const [options, setoptions] = useState(null);
  useEffect(() => {
    setHasValue(!!props?.value);
  }, [props.value]);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = (event) => {
    const { current: wrap } = ref;
    if (wrap && !wrap.contains(event.target)) {
      setdisplayOptions(false);
    }
  };

  const handleEntry = (ev, click = false) => {
    if (click) {
      props.setValue(ev);
      setHasValue(!!ev);
      setdisplayOptions(false);
    } else {
      props.onChange(ev);
      setHasValue(!!ev.target.value);
      const optionsFilter = cities.filter((x) =>
        x.name.toLowerCase().includes(ev.target.value.toLowerCase())
      );
      setoptions(optionsFilter);
      if (optionsFilter.length > 0) {
        setdisplayOptions(true);
      }
    }
  };

  return (
    <InputContainer
      ref={ref}
      hasValue={hasValue}
      width={props.width}
      disabled={props.disabled}
      placeholder={props.placeholder}
    >
      <StyledInput
        {...props}
        onChange={(ev) => handleEntry(ev)}
        hasValue={hasValue}
        autoComplete="off"
        placeholder={hasValue ? props.placeholder : ""}
      />
      {displayOptions && (
        <AutoContainer>
          {options.map((v, i) => (
            <Option
              tabIndex="0"
              onClick={() => handleEntry(v.name, true)}
              key={i}
            >
              <span>{v.name}</span>
            </Option>
          ))}
        </AutoContainer>
      )}
      {props.message && <FieldMessage {...props.message} />}
    </InputContainer>
  );
};

export default AutoComplete;
