import React, { useEffect, useContext } from "react";
import Input from "../../lib/Input";
import { DataContainer, Title } from "./styles";
import { useFormik } from "formik";
// import { ValidationsData } from "./validations";
import Select, { Option } from "react-select";
import { theme } from "../../theme";
import { PublicationContext } from "../../Context/PublicationContext";
import { SelectField } from "../../lib/Select";
import RadioButton from "../../lib/RadioButton";
import { v4 as uuidv4 } from "uuid";

export const StepTwoPublication = () => {
  const { setvalidSteps, steps } = useContext(PublicationContext);

  const initialValues = {
    services: [],
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
      </DataContainer>
    </>
  );
};
