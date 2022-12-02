import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import routes from "../../helpers/routes";
import { Link } from "react-router-dom";

export default function noHayPage() {
  return (
    <Container>
      <Row className="mt-5">
        <Col md={{ span: 6, offset: 3 }} className="text-center">
          <img
            style={{ width: "100%" }}
            src="/img/404-not-found.svg"
            alt="error-404"
          />
        </Col>
        <h2>¿Te Has Perdido?</h2>
        <p>
          Vuelve al <Link to={routes.homee}>Inicio</Link>
        </p>
      </Row>
    </Container>
  );
}
