import React, { useEffect, useContext } from "react";
import Input from "../../lib/Input";
import {
  DataContainer,
  WrapperInputs,
  Title,
  WrapperRadioButton,
} from "./styles";
import { useFormik } from "formik";
import { ValidationsData } from "./validations";
import Select, { Option } from "react-select";
import { theme } from "../../theme";
import { PublicationContext } from "../../Context/PublicationContext";
import { SelectField } from "../../lib/Select";
import RadioButton from "../../lib/RadioButton";
import { v4 as uuidv4 } from "uuid";

const options = [
  { value: "CABA", label: "Ciudad Autonoma de Buenos Aires " },
  { value: "Buenos Aires", label: "Buenos Aires" },
  { value: "Catamarca", label: "Catamarca " },
  { value: "Chaco", label: "Chaco " },
  { value: "Cordoba", label: "Cordoba " },
  { value: "Corrientes", label: "Corrientes" },
  { value: "Mendoza", label: "Mendoza" },
];

const optionsBarrios = [
  { value: "Agronomía", label: "Agronomía" },
  { value: "Almagro", label: "Almagro" },
  { value: "Balvanera", label: "Balvanera " },
  { value: "Barracas", label: "Barracas " },
  { value: "Belgrano", label: "Belgrano " },
  { value: "Boedo", label: "Boedo" },
  { value: "Caballito", label: "Caballito" },
  { value: "Chacarita", label: "Chacarita" },
  { value: "Coghlan", label: "Coghlan" },
  { value: "Colegiales", label: "Colegiales" },
  { value: "Palermo", label: "Palermo" },
];

export const DataPublication = () => {
  const { setvalidSteps, steps } = useContext(PublicationContext);

  const initialValues = {
    name: "",
    street: "",
    number: null,
    province: "",
    location: "",
    accommodation: "",
  };

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
      console.log("entre");

      const pepe = [...steps];
      pepe[0].disabled = false;
      setvalidSteps(pepe);
    }
  }, [formik.errors]);

  return (
    <>
      <DataContainer onSubmit={formik.handleSubmit}>
        <Input
          name={"name"}
          message={
            formik.errors.name && formik.touched.name
              ? { text: formik.errors.name, type: "error" }
              : null
          }
          placeholder={"Coloca un titulo para publicar tu alojamiento"}
          disabled={false}
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
        />
        <Title>Ubicacion</Title>
        <WrapperInputs>
          <Input
            name={"street"}
            message={
              formik.errors.street && formik.touched.street
                ? { text: formik.errors.street, type: "error" }
                : null
            }
            placeholder={"Calle"}
            disabled={false}
            onChange={formik.handleChange}
            value={formik.values.street}
            onBlur={formik.handleBlur}
          />
          <Input
            name={"number"}
            type="number"
            message={
              formik.errors.number && formik.touched.number
                ? { text: formik.errors.number, type: "error" }
                : null
            }
            placeholder={"Numero / Altura"}
            disabled={false}
            onChange={formik.handleChange}
            value={formik.values.number}
            onBlur={formik.handleBlur}
          />
        </WrapperInputs>
        <WrapperInputs>
          <SelectField
            formik={formik}
            name={"province"}
            options={options}
            placeholder={"Provincia"}
          />
          <SelectField
            formik={formik}
            name={"location"}
            options={optionsBarrios}
            placeholder={"Localidad"}
          />
        </WrapperInputs>

        <Title style={{ marginTop: "2rem" }}>Forma de alojamiento</Title>
        <WrapperRadioButton>
          <RadioButton
            id={uuidv4()}
            isSelected={formik.values.accommodation}
            label={"Completo"}
            value={"complete"}
            onChange={() => {
              formik.setValues({ ...formik.values, accommodation: "complete" });
            }}
          />
          <RadioButton
            id={uuidv4()}
            isSelected={formik.values.accommodation}
            label={"Parcial"}
            value={"partial"}
            onChange={() => {
              formik.setValues({ ...formik.values, accommodation: "partial" });
            }}
          />
        </WrapperRadioButton>
      </DataContainer>
    </>
  );
};
