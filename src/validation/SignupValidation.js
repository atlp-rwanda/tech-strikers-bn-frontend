import * as yup from "yup";

const signupSchema = yup.object().shape({
  fullname: yup
    .string()
    .min(6, "*Fullname must have at least 6 characters")
    .max(15, "*Fullname can not exceed 15 characters")
    .required("*Fullname is required"),
  username: yup
    .string()
    .min(6, "*Username must be at least 6 characters")
    .max(15, "*Username can not exceed 15 characters")
    .required("*Username is required"),
  password: yup
    .string()
    .min(6, "*Password must be at least 6 characters")
    .max(15, "*Password can not exceed 15 characters")
    .required("*Password is required"),
  email: yup.string().email("*Invalid Email").required("*Email is required"),
});

export default signupSchema;
