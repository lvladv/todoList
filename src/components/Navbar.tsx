import React from "react";
import {NavLink} from "react-router-dom"

export const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper light-blue darken-2 pd-1 ">
        <a href="/" className="brand-logo">
          React vs TS
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <NavLink to="/">List</NavLink>
          </li>
          <li>
            <NavLink to="/inform">Inform</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
