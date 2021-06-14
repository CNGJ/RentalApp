import * as Yup from 'yup';

const ValidationsData = Yup.object({
  services: Yup.array().min(2)
});

export default ValidationsData;
