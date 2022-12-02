import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import useAuth from "../autentificarUser/useAuth";
import routes from "../helpers/routes";

export default function PrivateRoute({ hasRole: role, ...props }) {
  //   const user = null;
  /*¿Qué es Auth0 Cómo funciona?
Auth0 es un servicio que nos provee todo el mecanismo 
para administrar la autorización y la autenticación de nuestras plataformas.
 Auth0 pretende darle a los
 desarrolladores y a las compañías seguridad en sus aplicaciones sin ser 
 unos expertos.*/
  const location = useLocation();
  const { hasRole, isLogged } = useAuth();
  if (role && !hasRole(role)) return <Redirect to={routes.homee} />;

  if (!isLogged())
    return (
      <Redirect to={{ pathname: routes.login, state: { from: location } }} />
    );
  return <Route {...props} />;
}
