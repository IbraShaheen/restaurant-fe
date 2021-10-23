import React from "react";
import { Route, Switch } from "react-router";
import About from "../About";
import Gallary from "../Gallary";
import Home from "../Home";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/gallary">
          <Gallary/>
          </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
