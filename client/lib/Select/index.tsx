import React, { FC } from "react";
import Select, { Option, ReactSelectProps } from "react-select";
import { theme } from "../../theme";
import {
  customStylesSelect,
  WrapperSelect,
  customStylesSelectMulti,
} from "./styles";

interface ISelectProps {
  options: any[];
  placeholder: string;
  formik: any;
  name: string;
  isMulti?: boolean;
  width?: string;
}

export const SelectField: FC<ISelectProps> = ({
  options,
  formik,
  placeholder,
  name,
  isMulti,
  width,
}) => (
  <WrapperSelect width={width}>
    <Select
      styles={!isMulti ? customStylesSelect : customStylesSelectMulti}
      name={name}
      options={options}
      isMulti={isMulti}
      placeholder={placeholder}
      onChange={(option: Option) => {
        formik.setValues({ ...formik.values, [name]: option.value });
      }}
      value={
        !isMulti
          ? options
            ? options.find((option) => option.value === formik.values[name])
            : ""
          : formik.values[name]
      }
      theme={(themeOrigin) => ({
        ...themeOrigin,
        borderRadius: 0,
        colors: {
          ...themeOrigin.colors,
          primary25: `${theme.Ligth}`,
          primary: `${theme.Terciary}`,
        },
      })}
    />
  </WrapperSelect>
);
