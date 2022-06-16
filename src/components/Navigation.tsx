import React from "react";
import { NavLink } from "react-router-dom";
import People from "./icons/People";
import Person from "./icons/Person";

const Navigation = () => {
  return (
    <div className="navigation">
      <h2>HRnet</h2>
      <NavLink to="/">
        <div className="button-active">
          <Person />
          <p>Create employee</p>
        </div>
      </NavLink>
      <NavLink to="/employee-list">
        <div className="button">
          <People />
          <p>Show employees</p>
        </div>
      </NavLink>
    </div>
  );
};

export default Navigation;
