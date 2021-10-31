import React from "react";
import { Route, Switch } from "react-router";
import About from "../About";
import Signup from "../Authentication/Signup";
import Contact from "../Contact";
import Gallary from "../Gallary";
import Home from "../Home";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/gallary">
          <Gallary/>
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
