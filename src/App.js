import React, { useEffect, useState } from "react";
import './App.css';
import ListProduct from "./pages/ListProducts";
import CreateProduct from "./pages/CreateProduct";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
  useEffect(() => {
    fetch("http://localhost:3000/catalog/list")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
  }, []);

  return (
    <Router className="App">
        <Switch>
            <Route path="/">
                <ListProduct/>
            </Route>
            <Route path="/create">
                <CreateProduct/>
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
