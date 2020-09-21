import React, { Fragment } from "react";
import "../src/components/css/App.css";
import Main from "./components/pages/Main";
import Login from "./components/pages/Login";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
      </Switch>
    </Fragment>
  );
}

export default App;
