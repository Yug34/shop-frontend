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
  return (
    <Router className="App">
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">List</Link>
                    </li>
                    <li>
                        <Link to="/create">Create</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/create">
                    <CreateProduct/>
                </Route>
                <Route path="/">
                    <ListProduct/>
                </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
