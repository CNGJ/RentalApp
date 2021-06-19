import { useFormik } from 'formik';
import React, { FC, useEffect, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Input from '../../../lib/Input';
import { DataContainer, WrapperInputs, Title, WrapperRadioButton } from './styles';
import ValidationsData from './validations';
import { PublicationContext } from '../../../Context/PublicationContext';
import SelectField from '../../../lib/Select';
import RadioButton from '../../../lib/RadioButton';

const locationMocks = {
  Argentina: [
    {
      name: { value: 'CABA', label: 'Ciudad Autonoma de Buenos Aires ' },
      locations: [
        { value: 'Agronomía', label: 'Agronomía' },
        { value: 'Almagro', label: 'Almagro' },
        { value: 'Balvanera', label: 'Balvanera ' },
        { value: 'Barracas', label: 'Barracas ' },
        { value: 'Belgrano', label: 'Belgrano ' },
        { value: 'Boedo', label: 'Boedo' },
        { value: 'Caballito', label: 'Caballito' },
        { value: 'Chacarita', label: 'Chacarita' },
        { value: 'Coghlan', label: 'Coghlan' },
        { value: 'Colegiales', label: 'Colegiales' },
        { value: 'Palermo', label: 'Palermo' }
      ]
    },
    {
      name: { value: 'Buenos Aires', label: 'Buenos Aires' },
      locations: [
        { value: 'Agronomía', label: 'Agronomía' },
        { value: 'Almagro', label: 'Almagro' },
        { value: 'Balvanera', label: 'Balvanera ' },
        { value: 'Barracas', label: 'Barracas ' },
        { value: 'Belgrano', label: 'Belgrano ' },
        { value: 'Boedo', label: 'Boedo' },
        { value: 'Caballito', label: 'Caballito' },
        { value: 'Chacarita', label: 'Chacarita' },
        { value: 'Coghlan', label: 'Coghlan' },
        { value: 'Colegiales', label: 'Colegiales' },
        { value: 'Palermo', label: 'Palermo' }
      ]
    },
    {
      name: { value: 'Catamarca', label: 'Catamarca ' },
      locations: [
        { value: 'Agronomía', label: 'Agronomía' },
        { value: 'Almagro', label: 'Almagro' },
        { value: 'Balvanera', label: 'Balvanera ' },
        { value: 'Barracas', label: 'Barracas ' },
        { value: 'Belgrano', label: 'Belgrano ' },
        { value: 'Boedo', label: 'Boedo' },
        { value: 'Caballito', label: 'Caballito' },
        { value: 'Chacarita', label: 'Chacarita' },
        { value: 'Coghlan', label: 'Coghlan' },
        { value: 'Colegiales', label: 'Colegiales' },
        { value: 'Palermo', label: 'Palermo' }
      ]
    }
  ]
};

const DataPublication: FC = () => {
  const { setvalidSteps, steps, setnewPublication } = useContext(PublicationContext);
  const [provinces, setprovinces] = useState([]);
  const [locations, setlocations] = useState([]);
  const initialValues = {
    name: '',
    street: '',
    number: null,
    province: '',
    location: '',
    accommodation: ''
  };

  useEffect(() => {
    const provincias = Object.values(locationMocks.Argentina).reduce((acc, el) => {
      acc.push(el.name);
      return acc;
    }, []);
    setprovinces(provincias);
  }, []);

  const formik = useFormik({
    initialValues,
    validationSchema: ValidationsData,
    onSubmit: async values => {
      console.log('values', values);
    }
  });

  useEffect(() => {
    if (Object.values(formik.errors).length === 0 && formik.values !== formik.initialValues) {
      const auxSteps = [...steps];
      auxSteps[0].disabled = false;
      setvalidSteps(auxSteps);
    }
  }, [formik.errors]);

  useEffect(() => {
    if (formik.values.province !== '') {
      const locaciones = Object.values(locationMocks.Argentina).filter(x => x.name.value === formik.values.province)[0]
        .locations;
      setlocations(locaciones);
    }
  }, [formik.values.province]);

  useEffect(() => {
    const { name, street, number, province, location, accommodation } = formik.values;
    setnewPublication(prev => ({
      ...prev,
      name,
      location: { street, number, location, province }
    }));
  }, [formik.values]);

  return (
    <>
      <DataContainer onSubmit={formik.handleSubmit}>
        <Input
          name={'name'}
          message={formik.errors.name && formik.touched.name ? { text: formik.errors.name, type: 'error' } : null}
          placeholder={'Coloca un titulo para publicar tu alojamiento'}
          disabled={false}
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
        />
        <Title>Ubicacion</Title>
        <WrapperInputs>
          <Input
            name={'street'}
            message={
              formik.errors.street && formik.touched.street ? { text: formik.errors.street, type: 'error' } : null
            }
            placeholder={'Calle'}
            disabled={false}
            marginR="1rem"
            onChange={formik.handleChange}
            value={formik.values.street}
            onBlur={formik.handleBlur}
          />
          <Input
            name={'number'}
            type="number"
            message={
              formik.errors.number && formik.touched.number
                ? { text: formik.errors.number.toString(), type: 'error' }
                : null
            }
            placeholder={'Numero / Altura'}
            disabled={false}
            onChange={formik.handleChange}
            value={formik.values.number}
            onBlur={formik.handleBlur}
          />
        </WrapperInputs>
        <WrapperInputs>
          <SelectField
            formik={formik}
            marginR={'1rem'}
            name={'province'}
            options={provinces}
            placeholder={'Provincia'}
          />
          <SelectField
            formik={formik}
            disabled={locations.length === 0}
            name={'location'}
            options={locations}
            placeholder={'Localidad'}
          />
        </WrapperInputs>

        <Title style={{ marginTop: '2rem' }}>Forma de alojamiento</Title>
        <WrapperRadioButton>
          <RadioButton
            id={uuidv4()}
            isSelected={formik.values.accommodation}
            label={'Completo'}
            value={'complete'}
            onChange={() => {
              formik.setValues({ ...formik.values, accommodation: 'complete' });
            }}
          />
          <RadioButton
            id={uuidv4()}
            isSelected={formik.values.accommodation}
            label={'Parcial'}
            value={'partial'}
            onChange={() => {
              formik.setValues({ ...formik.values, accommodation: 'partial' });
            }}
          />
        </WrapperRadioButton>
      </DataContainer>
    </>
  );
};

export default DataPublication;
