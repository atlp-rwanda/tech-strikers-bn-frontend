import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./views/Home";
import AppShell from "./AppShell";
import Dashboard from "./views/Dashboard";
import "./assets/App.scss";
import PasswordReset from "./components/PasswordReset";
import PasswordConfirmPassword from "./components/PasswordConfirmPassword";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/reset">
        <PasswordReset />
      </Route>
      <Route path="/password_reset">
        <PasswordConfirmPassword />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/dashboard">
        <AppShell>
          <Dashboard />
        </AppShell>
      </Route>
    </Switch>
  </Router>
);
export default App;
