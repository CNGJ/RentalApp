import * as Yup from "yup";

export const ValidationsData = Yup.object({
  services: Yup.array().min(2),
});
