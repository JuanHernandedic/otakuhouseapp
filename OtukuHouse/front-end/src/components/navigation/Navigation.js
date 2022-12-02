import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../autentificarUser/useAuth";
import routes from "../../helpers/routes";

export default function Navigation() {
  const { logout } = useAuth();

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      bg="dark"
      className="col-12"
    >
      <Navbar.Brand as={NavLink} to={routes.homee} className="p-4 ">
        <h1>
          <strong>Otaku House</strong>
        </h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="p-4 ">
          <Nav.Link as={NavLink} to={routes.recomendacionsemanal}>
            Recomendacion semanal
          </Nav.Link>
          <NavDropdown title="Admin">
            <NavDropdown.Item as={NavLink} to={routes.admin}>
              Usuarios
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav className="col-9 justify-content-end">
          <Nav.Link as={NavLink} to={routes.login}>
            Entrar
          </Nav.Link>
          <Nav.Link as={NavLink} to={routes.registro}>
            Registrarse
          </Nav.Link>
          <Nav.Link as={NavLink} to={routes.cuentausuario}>
            Mi Cuenta
          </Nav.Link>
          <Nav.Link to={routes.cuentausuario} onClick={logout}>
            Cerrar Sesion
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
