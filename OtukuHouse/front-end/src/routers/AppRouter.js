import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../pages/login/login";
import homePage from "../pages/home/header/homePage";
import noHayPage from "../pages/noHayPage/noHayPage";
import recomendacionSemanal from "../pages/recomendaionesPage/recomendacionSemanal";
import Admin from "../pages/admin/Admin";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import roles from "../helpers/roles";
import routes from "../helpers/routes";
import AccounPage from "../pages/cuentausuarioPage/AccounPage";
import Registro from "../pages/registro/registro";

function AppRouter() {
  return (
    <Switch>
      <PublicRoute exact path={routes.homee} component={homePage} />
      <PublicRoute exact path={routes.login} component={Login} />
      <PublicRoute exact path={routes.registro} component={Registro} />
      <PrivateRoute exact path={routes.cuentausuario} component={AccounPage} />
      <PrivateRoute
        hasRole={roles.admin}
        exact
        path={routes.admin}
        component={Admin}
      />
      <PrivateRoute
        exact
        path={routes.recomendacionsemanal}
        component={recomendacionSemanal}
      />

      <Route path="*" component={noHayPage} />
    </Switch>
  );
}
export default AppRouter;
