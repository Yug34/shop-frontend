import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ListProduct from "./pages/ListProducts";
import CreateProduct from "./pages/CreateProduct";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Nav, Navbar} from "react-bootstrap";

function App() {
  return (
    <Router className="App">
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/" style={{marginLeft: "15px"}}>Kabra-Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">List all products</Nav.Link>
              <Nav.Link href="/create">Create product</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/create">
            <CreateProduct />
          </Route>
          <Route path="/" exact>
            <ListProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
