import React, { useEffect, useContext } from "react";
import {
  DataContainer,
  Title,
  WrapperCounters,
  WrapperFeatures,
} from "./styles";
import { useFormik } from "formik";
// import { ValidationsData } from "./validations";
import { PublicationContext } from "../../Context/PublicationContext";
import { SelectField } from "../../lib/Select";

import { v4 as uuidv4 } from "uuid";
import { Counter } from "../Counter";

export const StepTwoPublication = () => {
  const { setvalidSteps, steps } = useContext(PublicationContext);

  const initialValues = {
    services: [],
    environments: 0,
    bedrooms: 0,
    toilets: 0,
    kitchen: 0,
  };

  const Services = [
    { value: "Wifi", label: "Wifi" },
    { value: "TV", label: "Television" },
    { value: "Cocina", label: "Cocina " },
    { value: "Estacionamiento", label: "Estacionamiento " },
    { value: "Aire Acondicionado", label: "Aire Acondicionado" },
    { value: "Ascensor", label: "Ascensor" },
    { value: "Ropa de Cama", label: "Ropa de Cama" },
    { value: "Calefacción", label: "Calefacción" },
    { value: "Heladera", label: "Heladera" },
    { value: "Horno", label: "Horno" },
    { value: "Cafetera", label: "Cafetera" },
    { value: "Camaras", label: "Cámaras de seguridad en la propiedad" },
  ];

  const formik = useFormik({
    initialValues,
    // validationSchema: ValidationsData,
    onSubmit: async (values) => {
      console.log("values", values);
    },
  });

  useEffect(() => {
    if (
      Object.values(formik.errors).length === 0 &&
      formik.values !== formik.initialValues
    ) {
      console.log("entre");

      const pepe = [...steps];
      pepe[0].disabled = false;
      setvalidSteps(pepe);
    }
  }, [formik.errors]);

  return (
    <>
      <DataContainer onSubmit={formik.handleSubmit}>
        <Title>Servicios</Title>
        <SelectField
          formik={formik}
          name={"services"}
          options={Services}
          placeholder={"Selecciona los servicios de tu alojamiento"}
          isMulti={true}
        />

        <WrapperFeatures>
          <Title>Caracteristicas de tu alojamiento</Title>
          <WrapperCounters>
            <Counter
              label={"Ambientes"}
              name={"environments"}
              value={formik.values.environments}
              onChange={formik.setFieldValue}
            />
            <Counter
              label={"Habitaciones"}
              name={"bedrooms"}
              value={formik.values.bedrooms}
              onChange={formik.setFieldValue}
            />
          </WrapperCounters>
          <WrapperCounters>
            <Counter
              label={"Baños"}
              name={"toilets"}
              value={formik.values.toilets}
              onChange={formik.setFieldValue}
            />
            <Counter
              label={"Cocinas"}
              name={"kitchen"}
              value={formik.values.kitchen}
              onChange={formik.setFieldValue}
            />
          </WrapperCounters>
        </WrapperFeatures>
      </DataContainer>
    </>
  );
};
