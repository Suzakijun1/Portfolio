import React from "react";
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
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              <FontAwesomeIcon icon={faHouse} size="xs" />
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link active"
              aria-current="page"
              href="#aboutSection"
            >
              <FontAwesomeIcon icon={faUser} size="xs" />
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link active"
              aria-current="page"
              href="#workSection"
            >
              <FontAwesomeIcon icon={faPen} size="xs" />
              Work
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link active"
              aria-current="page"
              href="#contactSection"
            >
              <FontAwesomeIcon icon={faEnvelope} size="xs" />
              Contact
            </a>
          </li>
        </ul>
      </NavbarContainer>
    </nav>
  );
}

export default Navbar;
