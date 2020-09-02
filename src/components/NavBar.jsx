import React from "react";
import { Switch, Route } from "react-router-dom";
import NavTab from "./NavTab.jsx";

const NavBar = () => {
  return (
    <div>
      <NavTab to="/about" label="About" />
      <NavTab to="/todo" label="Todo" />
      <NavTab to="/contact" label="Contact" />
    </div>
  );
};

export default NavBar;
