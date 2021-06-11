import React, { useEffect, useContext } from "react";
import {
  DataContainer,
  Title,
  WrapperCounters,
  WrapperFeatures,
} from "./styles";
import { useFormik } from "formik";
import { ValidationsData } from "./validations";
import { PublicationContext } from "../../../Context/PublicationContext";
import { SelectField } from "../../../lib/Select";

import { v4 as uuidv4 } from "uuid";
import { Counter } from "../../../lib/Counter";

export const StepTwoPublication = () => {
  const { setvalidSteps, steps, setnewPublication } =
    useContext(PublicationContext);

  const initialValues = {
    services: [],
    environments: 1,
    bedrooms: 1,
    toilets: 1,
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
    validationSchema: ValidationsData,
    onSubmit: async (values) => {
      console.log("values", values);
    },
  });

  useEffect(() => {
    if (
      Object.values(formik.errors).length === 0 &&
      formik.values !== formik.initialValues
    ) {
      const disabedSteps = [...steps];
      disabedSteps[0].disabled = false;
      setvalidSteps(disabedSteps);
    }
  }, [formik.errors]);

  useEffect(() => {
    console.log(formik.values, "values");

    setnewPublication((prev) => ({ ...prev, ...formik.values }));
  }, [formik.values]);

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
              disabled={formik.values.environments - 1 === 0}
              value={formik.values.environments}
              onChange={formik.setFieldValue}
            />
            <Counter
              label={"Habitaciones"}
              name={"bedrooms"}
              disabled={formik.values.bedrooms - 1 === 0}
              value={formik.values.bedrooms}
              onChange={formik.setFieldValue}
            />
          </WrapperCounters>
          <WrapperCounters>
            <Counter
              label={"Baños"}
              name={"toilets"}
              disabled={formik.values.toilets - 1 === 0}
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
