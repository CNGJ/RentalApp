import React, { FC } from 'react';
import Select, { Option, ReactSelectProps } from 'react-select';
import theme from '../../theme';
import { customStylesSelect, WrapperSelect, customStylesSelectMulti } from './styles';

interface ISelectProps {
  options: any[];
  placeholder: string;
  formik: any;
  name: string;
  isMulti?: boolean;
  width?: string;
  disabled?: boolean;
  marginR?: string;
}
const SelectField: FC<ISelectProps> = ({ options, formik, placeholder, name, isMulti, width, disabled, marginR }) => (
  <WrapperSelect width={width} marginR={marginR}>
    <Select
      styles={!isMulti ? customStylesSelect : customStylesSelectMulti}
      name={name}
      isDisabled={disabled}
      options={options}
      isMulti={isMulti}
      placeholder={placeholder}
      onChange={(option: Option) => {
        if (!isMulti) {
          formik.setValues({ ...formik.values, [name]: option.value });
        } else {
          formik.setValues({
            ...formik.values,
            [name]: option
          });
        }
      }}
      value={
        // eslint-disable-next-line no-nested-ternary
        !isMulti ? (options ? options.find(option => option.value === formik.values[name]) : '') : formik.values[name]
      }
      theme={themeOrigin => ({
        ...themeOrigin,
        borderRadius: 0,
        colors: {
          ...themeOrigin.colors,
          primary25: `${theme.Ligth}`,
          primary: `${theme.Terciary}`
        }
      })}
    />
  </WrapperSelect>
);

export default SelectField;
