import * as yup from "yup";

export const validationShemaName = yup.object().shape({
  name: yup.string().required(),
});



export const validationShema = yup.object().shape({
  name: yup.string().required(),
  tel: yup
    .string()
    .matches(/^\+380\d{9}$/),
  adress: yup
    .string()
    .required()
    .min(8),
 
});
