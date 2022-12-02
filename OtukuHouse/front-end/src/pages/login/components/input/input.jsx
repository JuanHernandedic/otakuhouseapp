import React from "react";
import "./input.css";

function Input({ atributo, toponchage, param }) {
  return (
    <div>
      <input
        id={atributo.id}
        name={atributo.name}
        placeholder={atributo.placeholder}
        type={atributo.type}
        onChange={(e) => toponchage(e.target.name, e.target.value)}
        className={param ? "input-error" : "regular-stayle"}
      />
    </div>
  );
}

export default Input;
