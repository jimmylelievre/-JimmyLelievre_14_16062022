import React from "react";
import { NavLink } from "react-router-dom";
import People from "./icons/People";
import Person from "./icons/Person";

const Navigation = () => {
  return (
    <div className="navigation">
      <h2>HRnet</h2>
      <NavLink
        to="/"
        className={(nav) => (nav.isActive ? "button-active " : "")}
      >
        <Person />
        <p>Create employee</p>
      </NavLink>
      <NavLink
        to="/employee-list"
        className={(nav) => (nav.isActive ? "button-active " : "")}
      >
        <People />
        <p>Show employees</p>
      </NavLink>
    </div>
  );
};

export default Navigation;
