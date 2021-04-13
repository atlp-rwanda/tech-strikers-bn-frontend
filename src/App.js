import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./views/Home";
import Roles from "./views/Roles";
import AdminPage from "./views/Admin";
import AppShell from "./AppShell";
import Dashboard from "./views/Dashboard";
import "./assets/App.scss";
import Verify from "./views/Verify";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        exact
        path="/confirmation/api/v1/user/confirmation/:token"
        component={Verify}
      />
      <Route path="/AdminPage">
        <AppShell>
          <AdminPage />
        </AppShell>
      </Route>
      <Route path="/Roles">
        <AppShell>
          <Roles />
        </AppShell>
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
