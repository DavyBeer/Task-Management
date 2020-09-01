import React from "react";
import { NavLink } from "react-router-dom";

const NavTab = (props) => {
  var activeStyle = {
    color: "green",
    fontWeight: "bold"
  };

  var NavStyle = {
    margin: "10px"
  };
  return (
    <NavLink style={NavStyle} activeStyle={activeStyle} to={props.to}>
      {props.label}
    </NavLink>
  );
};

export default NavTab;
