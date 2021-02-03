import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import AppShell from "./AppShell";
import CreateCourse from "./views/CreateCourse";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
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
