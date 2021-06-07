import React from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../images/SA transparent.png";
import "./navBar.css";

function Navbar() {
  return (
    <div>
      <div className="Navbar">
        <Link to="/">
          <img className="logo" src={Logo} />
        </Link>

        <div className="Navbar__option">
          <NavLink className="navtag" to="/scholarship">
            Scholarship
          </NavLink>

          <NavLink className="navtag" to="/internship">
            Internship
          </NavLink>

          <NavLink className="navtag" to="/exchange">
            Exchange Program
          </NavLink>

          <NavLink className="navtag" to="/oppertunity">
            Oppertunity
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
