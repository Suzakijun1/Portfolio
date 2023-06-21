import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faEnvelope,
  faPen,
} from "@fortawesome/free-solid-svg-icons";

function CustomNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Navbar.Brand>DYLAN YONG</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" onClick={handleMenuToggle} />
      <Navbar.Collapse
        id="navbar-nav"
        className={isMenuOpen ? "show" : ""}
        style={{ flexDirection: "row-reverse" }}
      >
        <Nav className="ml-auto">
          <Nav.Link as={NavLink} to="/home" activeclassname="active">
            <FontAwesomeIcon icon={faHouse} size="xs" /> Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about" activeclassname="active">
            <FontAwesomeIcon icon={faUser} size="xs" /> About
          </Nav.Link>
          <Nav.Link as={NavLink} to="/work" activeclassname="active">
            <FontAwesomeIcon icon={faPen} size="xs" /> Work
          </Nav.Link>
          <Nav.Link as={NavLink} to="/resume" activeclassname="active">
            <FontAwesomeIcon icon={faUser} size="xs" /> Resume
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact" activeclassname="active">
            <FontAwesomeIcon icon={faEnvelope} size="xs" /> Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
