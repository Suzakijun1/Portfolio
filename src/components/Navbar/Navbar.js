import React from "react";
import { NavLink } from "react-router-dom";
import { NavbarContainer } from "./Navbar.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <NavbarContainer className="container-fluid">
        <div className="navbar-brand">DYLAN YONG</div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              to="/home"
              activeclassname="active"
              className="nav-link"
              aria-current="page"
            >
              <FontAwesomeIcon icon={faHouse} size="xs" />
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/about"
              activeclassname="active"
              className="nav-link"
              aria-current="page"
            >
              <FontAwesomeIcon icon={faUser} size="xs" />
              About
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/work"
              activeclassname="active"
              className="nav-link"
              aria-current="page"
            >
              <FontAwesomeIcon icon={faPen} size="xs" />
              Work
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/resume"
              activeclassname="active"
              className="nav-link"
              aria-current="page"
            >
              <FontAwesomeIcon icon={faUser} size="xs" />
              Resume
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              activeclassname="active"
              className="nav-link"
              aria-current="page"
            >
              <FontAwesomeIcon icon={faEnvelope} size="xs" />
              Contact
            </NavLink>
          </li>
        </ul>
      </NavbarContainer>
    </nav>
  );
}

export default Navbar;
