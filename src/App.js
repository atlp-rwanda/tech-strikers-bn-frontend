import React from "react";
import "../src/assets/App.scss";
import Login from "./components/Login";
// import Approval from "./views/approval/Approval";
import Table from "./views/approval/Table";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <h1>welcome to Baretfoot Nomad</h1>
          <li>
            <Link to="/login">Login</Link>
            <br></br>
            {/* <Link to="/approval">Approval</Link> */}
            <Link to="/table">table</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        {/* <Route path="/approval">
          <Approval />
        </Route> */}
        <Route path="/table">
          <Table />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
