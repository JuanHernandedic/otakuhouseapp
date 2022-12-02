import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  password: yup
    .string("la contraseña debe ser un texto -.-")
    .required("Debes ingresar una contraseña UnU")
    .min(6, "la contraseña debe tener almenos 6 caracteres._."),
});

export default yupResolver(schema);
