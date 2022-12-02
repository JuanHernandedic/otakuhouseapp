import React from "react";
import "./login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import useAuth from "../../autentificarUser/useAuth";
import { useLocation } from "react-router-dom";
import routes from "../../helpers/routes";

function Login() {
  const location = useLocation();
  const { login } = useAuth();

  const userCredentials = {
    name: "",
    contraseña: "",
  };

  return (
    <div class="container py-3">
      <div class="card my-5">
        <div class="card-body">
          <div class="row m-3">
            <div class="col-md-12">
              <div class="col-md-12">
                <h3 class="">Bienvenido a OtakuHouse.</h3>
                <form id="form-login">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="usuario"
                      placeholder="Usuario"
                      required
                    ></input>
                  </div>

                  <div class="form-group mt-3">
                    <input
                      type="password"
                      class="form-control"
                      id="contraseña"
                      placeholder="Contraseña"
                      required
                    />
                  </div>
                  <br></br>
                  <button
                    className="btn btn-dark"
                    onClick={() => login(userCredentials, location.state?.from)}
                  >
                    iniciar Sesion
                  </button>
                </form>
                <div className="m-4">
                  <a href={routes.registro}>
                    ¿Aún no tienes cuenta? !Registrate!
                  </a>
                </div>
                <div
                  id="login-error"
                  class="alert alert-danger d-none"
                  role="alert"
                >
                  Usuario o Contraseña incorrecto
                </div>
              </div>
              <div class="col-md-5 bg-Logo-Garden2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
