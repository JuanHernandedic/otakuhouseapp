import React, { useState } from "react";
import "./registre.css";
import axios from "axios";
import routes from "../../helpers/routes";

export default function Registro() {
  //hooks o ganchos

  const [nombre, setNombre] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  function agregarUsuario() {
    var usuario = {
      name: nombre,
      contraseña: contraseña,
      email: email,
      role: role,
    };
    console.log(usuario);
    axios
      .post("http://localhost:4000/usuariosOtakuhouse/crearusuario", usuario)
      .then((res) => alert("usuario creado exitosamente BIENVENIDO"));
  }

  return (
    <div className="container ">
      <div className="card ">
        <div className="card-body">
          <form id="form-register" className="pb-3">
            <div className="form-group mt-3">
              <label for="input-usuario">Nombre de usuario</label>
              <input
                type="text"
                className="form-control"
                value={nombre}
                onChange={(e) => {
                  setNombre(e.target.value);
                }}
              ></input>
            </div>
            <div className="mt-4">
              <div className="form-group col-12">
                <label for="input-contraseña">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  value={contraseña}
                  onChange={(e) => {
                    setContraseña(e.target.value);
                  }}
                ></input>
              </div>
            </div>

            <div className="mt-4">
              <label for="input-telefono">Email</label>
              <input
                type="text"
                className="form-control"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
            </div>
            <div className="mt-4">
              <label for="input-direccion_cliente">Rol</label>
              <input
                type="text"
                className="form-control"
                value={role}
                onChange={(e) => {
                  setRole(e.target.value);
                }}
              ></input>
            </div>
            <div className="mt-4">
              <button onClick={agregarUsuario} className="btn btn-dark">
                Registrate
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
