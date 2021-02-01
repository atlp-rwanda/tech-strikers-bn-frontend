import React from "react";
import "./App.scss";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <h1>welcome to Baretfoot Nomad</h1>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
