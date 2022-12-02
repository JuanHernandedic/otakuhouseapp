import React from "react";
import Footer from "../footer/footer";
import Navigation from "../navigation/Navigation";
import "./layout.css";
//children es un parametro especial q renderiza todo lo q tiene dentro layout osea el switch de approuter
export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <body>
        {children}
        <Footer />
      </body>
    </div>
  );
}
