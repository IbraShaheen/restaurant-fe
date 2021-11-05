import React from "react";
import { Route, Switch } from "react-router";
import About from "../About";
import SigninSignup from "../Authentication/SigninSignup";
import Contact from "../Contact";
import Gallary from "../Gallary";
import Home from "../Home";
import MenuList from "../Menu/MenuList";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/gallary">
          <Gallary/>
          </Route>
          <Route path="/signin">
            <SigninSignup/>
          </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/menu">
          <MenuList/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
