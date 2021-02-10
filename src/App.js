import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Home from "./views/Home";
import AppShell from "./AppShell";
import CreateCourse from "./views/CreateCourse";
import "../src/assets/App.scss";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/dashboard">
        <AppShell>
          <CreateCourse />
        </AppShell>
      </Route>
    </Switch>

  </Router>
);
export default App;
