import React, { useEffect, useContext } from 'react';
import { useFormik } from 'formik';
import {
  DataContainer,
  Title,
  WrapperCounters as WrapperTerms,
  WrapperFeatures,
  WrapperPrice,
  Price,
  FinalPrice
} from './styles';
import ValidationsData from './validations';
import { PublicationContext } from '../../../Context/PublicationContext';
import SelectField from '../../../lib/Select';

import Counter from '../../../lib/Counter';
import Input from '../../../lib/Input';

const StepThreePublication = () => {
  const { setvalidSteps, steps, setnewPublication } = useContext(PublicationContext);

  const initialValues = {
    price: null,
    adults: 1,
    sex: 'Ambos',
    kids: 0,
    kidsOption: '',
    pets: 0,
    pestType: ''
  };

  // #region MOCK ZONE
  /** Esto tiene que venir del back */

  const optionsSex = [
    { value: 'Ambos', label: 'Ambos ' },
    { value: 'Hombre', label: 'Hombre' },
    { value: 'Mujer', label: 'Mujer' }
  ];

  const optionsKids = [
    { value: 'Ambos', label: 'Ambos ' },
    { value: 'Bebes', label: 'Bebes' },
    { value: 'Niños', label: 'Niños' }
  ];

  const optionsPets = [
    { value: 'Perros', label: 'Perros' },
    { value: 'Gatos', label: 'Gatos' },
    { value: 'Otros', label: 'Otros' }
  ];

  /** */
  // #endregion

  const formik = useFormik({
    initialValues,
    validationSchema: ValidationsData,
    onSubmit: async values => {
      console.log('values', values);
    }
  });

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  useEffect(() => {
    const isValid = Object.values(formik.errors).length === 0 && formik.values !== formik.initialValues;

    if (isValid) {
      const pepe = [...steps];
      pepe[2].disabled = false;
      setvalidSteps(pepe);
    } else if (!steps[2].disabled) {
      const disabedSteps = [...steps];
      disabedSteps[2].disabled = true;
      setvalidSteps(disabedSteps);
    }
  }, [formik.errors]);

  const { price, adults, sex, kids, kidsOption, pets, pestType } = formik.values;

  useEffect(() => {
    setnewPublication(prev => ({
      ...prev,
      price,
      terms: { adults, kids, pets, sex }
    }));
  }, [formik.values]);

  return (
    <>
      <DataContainer onSubmit={formik.handleSubmit}>
        <WrapperPrice>
          <Input
            name={'price'}
            message={
              formik.errors.price && formik.touched.price
                ? { text: formik.errors.price.toString(), type: 'error' }
                : null
            }
            width={'50%'}
            type="number"
            marginB={'0'}
            placeholder={'Precio por noche'}
            disabled={false}
            onChange={formik.handleChange}
            value={formik.values.price}
            onBlur={formik.handleBlur}
          />
          <div>
            <Price>{formik.values.price ? formatter.format(formik.values.price) : '0.00'}</Price>
            {formik.values.price && (
              <FinalPrice>{`Precio final por noche:  ${formatter.format(formik.values.price * 1.08)}`}</FinalPrice>
            )}
          </div>
        </WrapperPrice>

        <WrapperFeatures>
          <Title>Detalla los terminos para las personas que quieran alojarse</Title>
          <WrapperTerms>
            <Counter
              label={'Adultos'}
              name={'adults'}
              disabled={formik.values.adults - 1 === 0}
              value={formik.values.adults}
              onChange={formik.setFieldValue}
            />
            <SelectField
              formik={formik}
              name={'sex'}
              options={optionsSex}
              width={'24rem'}
              placeholder={'terminos en el sexo de los huespedes'}
            />
          </WrapperTerms>
          <WrapperTerms>
            <Counter label={'Niños'} name={'kids'} value={formik.values.kids} onChange={formik.setFieldValue} />
            <SelectField
              formik={formik}
              name={'kidsOption'}
              disabled={formik.values.kids === 0}
              options={optionsKids}
              width={'24rem'}
              placeholder={'terminos la edad de los niños'}
            />
          </WrapperTerms>
          <WrapperTerms>
            <Counter label={'Mascotas'} name={'pets'} value={formik.values.pets} onChange={formik.setFieldValue} />
            <SelectField
              formik={formik}
              name={'pestType'}
              disabled={formik.values.pets === 0}
              options={optionsPets}
              width={'24rem'}
              placeholder={'Tipo de mascotas '}
            />
          </WrapperTerms>
        </WrapperFeatures>
      </DataContainer>
    </>
  );
};

export default StepThreePublication;
