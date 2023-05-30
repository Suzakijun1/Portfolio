import React from "react";
import { Link } from "react-router-dom";
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
            <Link to="/home" className="nav-link active" aria-current="page">
              <FontAwesomeIcon icon={faHouse} size="xs" />
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/about" className="nav-link active" aria-current="page">
              <FontAwesomeIcon icon={faUser} size="xs" />
              About
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/work" className="nav-link active" aria-current="page">
              <FontAwesomeIcon icon={faPen} size="xs" />
              Work
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link active" aria-current="page">
              <FontAwesomeIcon icon={faEnvelope} size="xs" />
              Contact
            </Link>
          </li>
        </ul>
      </NavbarContainer>
    </nav>
  );
}

export default Navbar;
