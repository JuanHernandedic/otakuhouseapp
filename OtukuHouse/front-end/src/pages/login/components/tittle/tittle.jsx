import React from "react";
import "./tittle.css";

function Tittle({ text }) {
  // si utilizamos la forma const o props.text se debe colocae el parametrop props pero
  //es mas facil colocar la desestructuracion en lo paramentros tal cual como esta
  //   const { text } = props;
  return (
    <div className="tittle-container">
      {/* {props.text} */}
      <label className="titulo-label">{text}</label>
    </div>
  );
}

export default Tittle;
