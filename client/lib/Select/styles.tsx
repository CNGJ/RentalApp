/* eslint-disable no-unneeded-ternary */
import styled from 'styled-components';
import theme from '../../theme';

export const WrapperSelect = styled.div`
  width: ${({ width }) => (width ? width : '100%')};
  margin-right: ${({ marginR }) => marginR && `${marginR}`};
`;

export const customStylesSelect = {
  container: (provided, state) => ({
    ...provided,
    boxShadow: 'rgb(0 0 0 / 20%) 0px 2px 5px;',
    height: '46px;',
    borderRadius: '0.5rem;'
  }),
  control: (provided, state) => ({
    ...provided,
    height: '46px;',
    borderRadius: '0.5rem;'
  }),
  placeholder: (provided, state) => ({
    ...provided,
    padding: '0.8125rem 1rem;'
  }),
  multiValue: (provided, state) => ({
    ...provided,
    backgroundColor: 'rgba(255, 99, 71, 0.7);',
    color: 'white;'
  }),
  multiValueLabel: (provided, state) => ({
    ...provided,
    color: 'white;'
  })
};

export const customStylesSelectMulti = {
  container: (provided, state) => ({
    ...provided,
    boxShadow: 'rgb(0 0 0 / 20%) 0px 2px 5px;',
    borderRadius: '0.5rem;'
  }),
  control: (provided, state) => ({
    ...provided,
    borderRadius: '0.5rem;'
  }),
  placeholder: (provided, state) => ({
    ...provided,
    padding: '0.8125rem 1rem;'
  }),
  multiValue: (provided, state) => ({
    ...provided,
    backgroundColor: 'rgba(255, 99, 71, 0.7);',
    color: 'white;'
  }),
  multiValueLabel: (provided, state) => ({
    ...provided,
    color: 'white;'
  })
};
