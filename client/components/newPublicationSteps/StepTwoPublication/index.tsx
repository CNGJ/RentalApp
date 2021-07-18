import { useFormik } from 'formik';
// import { v4 as uuidv4 } from 'uuid';
import React, { useEffect, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DataContainer, Title, WrapperCounters, WrapperFeatures } from './styles';
import ValidationsData from './validations';
import { PublicationContext } from '../../../Context/PublicationContext';
import SelectField from '../../../lib/Select';
import Counter from '../../../lib/Counter';

function validateStep(formik, steps: any, setvalidSteps: (a: any) => void) {
  if (formik.values.services.length > 0) {
    const disabedSteps = [...steps];
    disabedSteps[1].disabled = false;
    setvalidSteps(disabedSteps);
  } else if (!steps[1].disabled) {
    const disabedSteps = [...steps];
    disabedSteps[1].disabled = true;
    setvalidSteps(disabedSteps);
  }
}

const StepTwoPublication = () => {
  const { setvalidSteps, steps, setnewPublication } = useContext(PublicationContext);

  const initialValues = {
    services: [],
    environments: 1,
    bedrooms: 1,
    toilets: 1,
    kitchen: 0
  };

  // #region MOCK ZONE

  const Services = [
    { value: 'Wifi', label: 'Wifi' },
    { value: 'TV', label: 'Television' },
    { value: 'Cocina', label: 'Cocina ' },
    { value: 'Estacionamiento', label: 'Estacionamiento ' },
    { value: 'Aire Acondicionado', label: 'Aire Acondicionado' },
    { value: 'Ascensor', label: 'Ascensor' },
    { value: 'Ropa de Cama', label: 'Ropa de Cama' },
    { value: 'Calefacción', label: 'Calefacción' },
    { value: 'Heladera', label: 'Heladera' },
    { value: 'Horno', label: 'Horno' },
    { value: 'Cafetera', label: 'Cafetera' },
    { value: 'Camaras', label: 'Cámaras de seguridad en la propiedad' }
  ];

  // #endregion

  const formik = useFormik({
    initialValues,
    validationSchema: ValidationsData,
    onSubmit: async values => {
      console.log('values', values);
    }
  });

  useEffect(() => {
    validateStep(formik, steps, setvalidSteps);
    const { services, environments, bedrooms, toilets, kitchen } = formik.values;

    const filterService = services.reduce((acc, el) => {
      acc.push(el.value);
      return acc;
    }, []);

    setnewPublication(prev => ({
      ...prev,
      features: [
        { name: 'bedrooms', amount: bedrooms },
        { name: 'toilets', amount: toilets },
        { name: 'kitchen', amount: kitchen },
        { name: 'environments', amount: environments }
      ],
      services: filterService
    }));
  }, [formik.values]);

  const features = [
    { labelOne: 'Ambientes', nameOne: 'environments', labelTwo: 'Habitaciones', nameTwo: 'bedrooms' },
    { labelOne: 'Baños', nameOne: 'toilets', labelTwo: 'Cocinas', nameTwo: 'kitchen' }
  ];

  return (
    <>
      <DataContainer onSubmit={formik.handleSubmit}>
        <Title>Servicios</Title>
        <SelectField
          formik={formik}
          name={'services'}
          options={Services}
          placeholder={'Selecciona los servicios de tu alojamiento'}
          isMulti={true}
        />

        <WrapperFeatures>
          <Title>Caracteristicas de tu alojamiento</Title>
          {features.map((e, i) => {
            return (
              <WrapperCounters key={uuidv4()}>
                <Counter
                  label={e.labelOne}
                  name={e.nameOne}
                  disabled={formik.values[e.nameOne] - 1 === 0}
                  value={formik.values[e.nameOne]}
                  onChange={formik.setFieldValue}
                />
                <Counter
                  label={e.labelTwo}
                  name={e.labelTwo}
                  disabled={formik.values[e.nameTwo] - 1 === 0}
                  value={formik.values[e.nameTwo]}
                  onChange={formik.setFieldValue}
                />
              </WrapperCounters>
            );
          })}
        </WrapperFeatures>
      </DataContainer>
    </>
  );
};

export default StepTwoPublication;
