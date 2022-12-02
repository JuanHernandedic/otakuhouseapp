import React, { Component } from "react";

//importar axios
import axios from "axios";

export default class Entrar extends Component {
  //crear construcor mediante los snippeds conc
  constructor(props) {
    super(props);

    //inicializar los listening snipets bnd

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeContraseña = this.onChangeContraseña.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    //crear los objetos de los campos y iniciliazarlo vacios snipets est segundo
    this.state = {
      name: "",
      contraseña: "",
    };
  }

  //metodos vacios snipts on
  onChangeName(e) {
    //e=evento
    //snipet sst
    this.setState({ name: e.target.value });
  }

  onChangeContraseña(e) {
    this.setState({ contraseña: e.target.value });
  }
  onSubmit(e) {
    //snipet pd
    e.preventDefault();

    //crear el objeto q sea constante
    const loginObject = {
      name: this.state.name,
      contraseña: this.state.contraseña,
    };
    //esto es una api res
    axios
      .post("http://localhost:4000/entrar", loginObject)
      .then((res) => console.log(res.data));
    this.setState({ name: "", contraseña: "" });
  }
  //incorporar los listening en el formulario xd despues de type="text"
  render() {
    return (
      <div class="container2">
        <div class="card sizeCD">
          <div class="card-body">
            <form class="pb-4" id="entrar" onSubmit={this.onSubmit}>
              <div class="form-floating col-md-8">
                <input
                  type="text"
                  class="form-control"
                  id="usuario"
                  placeholder="Usuario"
                  required
                  value={this.state.name}
                  onChange={this.onChangeName}
                ></input>
                <label>Usuario</label>
              </div>
              <br></br>
              <br></br>
              <div class="form-floating col-md-8">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Contraseña"
                  required
                  value={this.state.contraseña}
                  onChange={this.onChangeContraseña}
                ></input>
                <label>Contraseña</label>
              </div>
              <br></br>
              <br></br>
              <button
                type="submit"
                class="btn btn-dark btn-block"
                id="BTNENTRAR"
              >
                Entrar
              </button>
            </form>
            <div
              id="login-error"
              class="alert alert-danger d-none"
              role="alert"
            >
              Usuario o Contraseña incorrecto
            </div>
            <div>
              <a href="register.html">¿Aún no tienes cuenta? !Registrate!</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
