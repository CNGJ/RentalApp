import * as Yup from "yup";

export const ValidationsLogin = Yup.object({
  email: Yup.string()
    .email("Este email no es valido")
    .required("El email es obligatorio"),
  password: Yup.string()
    .required("La contraseña es obligatoria")
    .min(8, "La contraseña debe tener al menos 8 caracteres"),
});

export const ValidationsRegister = Yup.object({
  name: Yup.string().required("El nombre es obligatorio"),
  lastname: Yup.string().required("Tu apellido es obligatorio"),
  email: Yup.string()
    .email("Este email no es valido")
    .required("El email es obligatorio"),
  password: Yup.string()
    .required("La contraseña es obligatoria")
    .min(8, "La contraseña debe tener al menos 8 caracteres"),
  password2: Yup.string()
    .required("Verifica tu contraseña")
    .oneOf([Yup.ref("password"), null], "Las contraseñas no son iguales")
    .min(8, "La contraseña debe tener al menos 8 caracteres"),
});
