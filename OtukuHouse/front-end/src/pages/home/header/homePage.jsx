import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import routes from "../../../helpers/routes";

export default function homePage() {
  return (
    <Container>
      <Row className="mt-5">
        <Col xs={{ span: 12 }} md={{ span: 6 }} className="mb-4">
          <h2>Bienvid@ a Otaku House</h2>
          <p>Somos Una Paguina de recomendaciones de anime en la Semana</p>
          <p>
            mira que animes estan en tendecia y cuales te recomienda otaku house
            por esta semana
          </p>
          <div>
            <Link to={routes.login}>Ingresa</Link> o
            <Button as={Link} to={routes.registro} className="ml-1">
              crea Una Cuenta
            </Button>
          </div>
        </Col>
        <Col>
          <img
            className="img-fluid"
            src="/img/spy-form.jpg"
            alt="otaku-house"
          />
          <p>onicham</p>
        </Col>
      </Row>
    </Container>
  );
}
