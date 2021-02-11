import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./views/Home";
import AppShell from "./AppShell";
import Dashboard from "./views/Dashboard";
import "./assets/App.scss";
import RequestForm from "../src/components/RequestForm";
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
          <Dashboard />
        </AppShell>
      </Route>

      <Route path="/new_request">
        <AppShell>
          <RequestForm oneWay="oneWay" />
        </AppShell>
      </Route>
    </Switch>
  </Router>
);
export default App;
