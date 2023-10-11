import * as Yup from "yup";

export const validateSchema = Yup.object().shape({
  name: Yup.string().required("Campo Obrigatório"),
  email: Yup.string().email("E-mail inválido!").required("Campo Obrigatório"),
  subject: Yup.string().required("Campo Obrigatório"),
  message: Yup.string().required("Campo Obrigatório"),
});
