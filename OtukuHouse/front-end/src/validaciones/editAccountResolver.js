import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import roles from "../helpers/roles";

const schema = yup.object().shape({
  name: yup
    .string("El nombre debe ser un texto -.-")
    .required("Debes ingresar un Nombre UnU"),
  email: yup
    .string("EL email Debe ser UN texto")
    .email("Debe Ingresar Un Email valido")
    .required("debe ingresar un correo electronico valido"),
  role: yup
    .string("el rol debe ser un Texto")
    .oneOf(Object.keys(roles), "el rol no es valido"),
  // .required("debe ingresar un rol valido"),
});

export default yupResolver(schema);
