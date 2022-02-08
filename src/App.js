import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Create from "./components/create-project.component";
import Edit from "./components/edit-project.component";
import List from "./components/project-list.component";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/create-project"} className="nav-link">
                  Project CRUD APP
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-project"} className="nav-link">
                    Create Project
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/project-list"} className="nav-link">
                    Project List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={(props) => <Create {...props} />}
                  />
                  <Route
                    exact
                    path="/create-project"
                    component={(props) => <Create {...props} />}
                  />
                  <Route
                    exact
                    path="/edit-project/:id"
                    component={(props) => <Edit {...props} />}
                  />
                  <Route
                    exact
                    path="/project-list"
                    component={(props) => <List {...props} />}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
