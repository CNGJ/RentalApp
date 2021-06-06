import * as Yup from "yup";

export const ValidationsData = Yup.object({
  name: Yup.string().required("Debe tener un titulo tu publicacion"),
  street: Yup.string().required("Este campo es obligatorio"),
  number: Yup.number()
    .typeError("Por favor introduzca un numero")
    .integer("debe ser un numero entero")
    .required("Este campo es obligatorio"),
  province: Yup.string().required("Este campo es obligatorio"),
  location: Yup.string().required("Este campo es obligatorio"),
});
