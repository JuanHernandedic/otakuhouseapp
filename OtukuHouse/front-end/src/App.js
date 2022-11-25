import React from "react";

import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import EditStudent from "./components/edit-student.component";
import StudentList from "./components/student-list.component";
import Registro from "./components/register";

function App() {
  return (
    <body>
      <div className="App">
        <Router>
          <header className="App-header">
            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/registro"} className="nav-link"></Link>
              </Nav>
            </Nav>
          </header>

          <Container>
            <Row>
              <Col md={12}>
                <div className="wrapper">
                  <Switch>
                    <Route
                      exact
                      path="/"
                      component={(props) => <Registro {...props} />}
                    />
                    <Route
                      exact
                      path="/registro"
                      component={(props) => <Registro {...props} />}
                    />
                    <Route
                      exact
                      path="/edit-student/:id"
                      component={(props) => <EditStudent {...props} />}
                    />
                    <Route
                      exact
                      path="/student-list"
                      component={(props) => <StudentList {...props} />}
                    />
                  </Switch>
                </div>
              </Col>
            </Row>
          </Container>
        </Router>
      </div>
    </body>
  );
}

export default App;
