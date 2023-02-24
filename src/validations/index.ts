import * as yup from "yup";

export const validationLogin = yup.object().shape({
  email: yup
    .string()
    .required("Campo Obrigatório")
    .email("Formato de e-mail incorreto"),
  password: yup.string().required("Campo Obrigatório"),
});
export const validationRegister = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().email().required("Campo obrigatório"),
  cpf: yup.string().length(11).required("Campo obrigatório"),
  cellphone: yup.number().required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas são diferentes"),
  description: yup.string().required("Campo obrigatório"),
  dateOfBirth: yup.date().required("Campo obrigatório"),
  isAdvertiser: yup
    .boolean()
    .transform((v) => (v === "Comprador" ? (v = false) : (v = true))),
  cep: yup.number().required("Campo obrigatório"),
  state: yup.string().required("Campo obrigatório"),
  street: yup.string().required("Campo obrigatório"),
  number: yup.string().required("Campo obrigatório"),
  city: yup.string().required("Campo obrigatório"),
  complement: yup.string().notRequired(),
  Image: yup.string().url().notRequired(),
});
