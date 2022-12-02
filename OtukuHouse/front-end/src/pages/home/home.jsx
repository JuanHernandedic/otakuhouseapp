import React, { Component } from "react";
import axios from "axios";

export default class Home extends Component {
  onSubmit(e) {
    //snipet pd
    e.preventDefault();

    const HomeObject = {};
    //esto es una api res
    axios
      .post("http://localhost:4000/home", HomeObject)
      .then((res) => console.log(res.data));
  }

  render() {
    return (
      <div>
        <div class="container3">
          <img
            src="/OtukuHouse/front-end/img/spy-form.jpg"
            alt="anya cham"
          ></img>
          <div class="card">
            <h5 class="card-title">inmueble 1</h5>
            <p class="card-text">
              Propiedad rural, Casa con Lote ubicada en el Municipio de Calima
              el Darién.
            </p>
            <a href="inmueble1.html" class="btn btn-success">
              Ver Mas Imagenes
            </a>
          </div>
          <div class="card">
            <h5 class="card-title">inmueble 2</h5>
            <p class="card-text">
              {" "}
              zona urbana a 10 minutos del centro de Buga.
            </p>
            <a href="inmueble2.html" class="btn btn-success">
              Ver Mas Imagenes
            </a>
          </div>
          <div class="card">
            <h5 class="card-title">inmueble 3</h5>
            <p class="card-text">
              Apartaestudio, 1 habitación, un baño, sala de estar..
            </p>
            <a href="inmueble3.html" class="btn btn-success">
              Ver Mas Imagenes
            </a>
          </div>
          <div class="card">
            <h5 class="card-title">inmueble 4</h5>
            <p class="card-text">
              Apartamento 4 piso, 2 habitaciones, 1 baño,sala de estar.
            </p>
            <a href="inmueble4.html" class="btn btn-success">
              Ver Mas Imagenes
            </a>
          </div>
          <div class="card">
            <h5 class="card-title">inmueble 5</h5>
            <p class="card-text">
              Propiedad rural, Casa con Lote ubicada en el Municipio de Calima
              el Darién,.
            </p>
            <a href="inmueble5.html" class="btn btn-success">
              Ver Mas Imagenes
            </a>
          </div>
        </div>
      </div>
    );
  }
}
