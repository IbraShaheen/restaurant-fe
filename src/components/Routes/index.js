import React from "react";
import { Route, Switch } from "react-router";
import Home from "../Home";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
