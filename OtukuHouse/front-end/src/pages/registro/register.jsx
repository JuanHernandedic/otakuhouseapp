import React, { Component } from "react";

//importar axios
import axios from "axios";

export default class Registro extends Component {
  //crear construcor mediante los snippeds conc
  constructor(props) {
    super(props);

    //inicializar los listening snipets bnd

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeClave = this.onChangeClave.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    //crear los objetos de los campos y iniciliazarlo vacios snipets est segundo
    this.state = {
      name: "",
      email: "",
      clave: "",
    };
  }

  //metodos vacios snipts on
  onChangeName(e) {
    //e=evento
    //snipet sst
    this.setState({ name: e.target.value });
  }
  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }
  onChangeClave(e) {
    this.setState({ clave: e.target.value });
  }
  onSubmit(e) {
    //snipet pd
    e.preventDefault();

    //crear el objeto q sea constante
    const registrObject = {
      name: this.state.name,
      email: this.state.email,
      clave: this.state.clave,
    };
    //esto es una api res
    axios
      .post("http://localhost:4000/registro", registrObject)
      .then((res) => console.log(res.data));
    this.setState({ name: "", email: "", clave: "" });
  }
  //incorporar los listening en el formulario xd despues de type="text"
  render() {
    return (
      <div class="Container">
        <div class="card sizeDiv">
          <div class="card-body">
            <form id="form-register" class="pb-4" onSubmit={this.onSubmit}>
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="input-usuario"
                  placeholder="Nombre Usuario"
                  required
                  value={this.state.name}
                  onChange={this.onChangeName}
                ></input>
                <label for="input-usuario">Nombre Usuario</label>
              </div>
              <br></br>
              <div class="form-row">
                <div class="form-floating col-md-4">
                  <input
                    type="password"
                    class="form-control"
                    id="input-contraseña"
                    placeholder="contraseña"
                    value={this.state.clave}
                    onChange={this.onChangeClave}
                    required
                  ></input>
                  <label for="floatingPassword">Contraseña</label>
                </div>
                <br></br>
                <div class="form-floating col-md-4">
                  <input
                    type="password"
                    class="form-control"
                    id="input-contraseña-repeat"
                    placeholder="Repetir contraseña"
                    required
                  ></input>
                  <label for="input-contraseña-repeat">
                    Repetir Contraseña
                  </label>
                </div>
              </div>
              <br></br>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                ></input>
                <label for="floatingInput">Email </label>
              </div>

              <br></br>
              <div class="btn-e">
                <input
                  type="submit"
                  class="btn btn-dark"
                  id="register-btn"
                  value="Registrar"
                ></input>
              </div>
            </form>
            <div
              id="register-error"
              class="alert alert-danger d-none"
              role="alert"
            ></div>
          </div>
        </div>
        <br></br>
        <br></br>
        <a href="index.html">¿Ya tienes cuenta? Iniciar sesión</a>
      </div>
    );
  }
}
