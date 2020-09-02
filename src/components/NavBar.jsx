import React from "react";
import Switch from "react-router-dom";
import { NavTab, Route } from "./NavTab.jsx";

const NavBar = () => {
  return (
    <div>
      <NavTab to="/about" label="About" />
      <NavTab to="/todo" label="Todo" />
      <NavTab to="/contact" label="Contact" />
    </div>
    <Switch>
        <Route exact path="/" component={About} />
        <Route path="/about" component={About} />
        <Route path="/todo" component={Todo} />
        <Route path="/contact" component={Contact} />
    </Switch>
  );
};

export default NavBar;
