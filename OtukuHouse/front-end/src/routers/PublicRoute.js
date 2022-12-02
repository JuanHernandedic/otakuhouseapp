import React from "react";
import { Route, Redirect } from "react-router-dom";
import useAuth from "../autentificarUser/useAuth";
import routes from "../helpers/routes";

export default function PublicRoute(props) {
  //   const user = null;
  /*¿Qué es Auth0 Cómo funciona?
Auth0 es un servicio que nos provee todo el mecanismo 
para administrar la autorización y la autenticación de nuestras plataformas.
 Auth0 pretende darle a los
 desarrolladores y a las compañías seguridad en sus aplicaciones sin ser 
 unos expertos.*/
  const { isLogged } = useAuth();
  if (isLogged()) return <Redirect to={routes.recomendacionsemanal} />;
  return <Route {...props} />;
}
