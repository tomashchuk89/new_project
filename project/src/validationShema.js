import * as yup from "yup";

export const validationShema = yup.object().shape({
  name: yup.string().required("Please enter a name"),
  tel: yup
    .string()
    .matches(/^\+380\d{9}$/, "Please enter a valid phone number"),
  adress: yup
    .string()
    .required("Please enter a address")
    .min(8, "The address is short, enter more than 8 characters"),
});
