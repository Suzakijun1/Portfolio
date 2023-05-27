import React from "react";
import { NavbarContainer } from "./Navbar.styles";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <NavbarContainer className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link active"
              aria-current="page"
              href="#aboutSection"
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link active"
              aria-current="page"
              href="#workSection"
            >
              Work
            </a>
          </li>
        </ul>
      </NavbarContainer>
    </nav>
  );
}

export default Navbar;
