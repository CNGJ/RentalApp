import * as Yup from "yup";

export const ValidationsData = Yup.object({
  price: Yup.number()
    .typeError("Debes colocar un precio minimo mayor a 0")
    .integer("debe ser un numero entero")
    .required("Este campo es obligatorio"),
});
