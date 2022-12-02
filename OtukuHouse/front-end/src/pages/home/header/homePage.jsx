import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import routes from "../../../helpers/routes";

export default function homePage() {
  return (
    <Container>
      <Row className="mt-5">
        <Col xs={{ span: 12 }} md={{ span: 6 }} className="mb-4">
          <h1 style={{ color: "black" }}>
            <strong>Bienvenid@ a Otaku House</strong>
          </h1>
          <h2>
            <strong>
              Somos Una Pagina de recomendaciones de anime en la Semana
            </strong>
          </h2>
          <h2>
            <strong>
              Mira los animes estan en tendencia y cuales te recomienda otaku
              house por esta semana :P
            </strong>
          </h2>
          <br></br>
          <div>
            <Link to={routes.login} className="btn btn-light">
              Ingresa
            </Link>{" "}
            <Button
              as={Link}
              to={routes.registro}
              className="ml-1 btn btn-dark"
            >
              crea Una Cuenta
            </Button>
          </div>
        </Col>
        <Col>
          <img
            className="img-fluid"
            src="/img/0805a6650302f8b6699afa9603d0839d.jpg"
            alt="otaku-house"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              objectFit: "cover",
              cursor: "pointer",
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}
