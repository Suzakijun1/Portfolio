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

  const handleNavItemClick = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { to: "/home", text: "Home", icon: faHouse },
    { to: "/about", text: "About", icon: faUser },
    { to: "/work", text: "Work", icon: faPen },
    { to: "/resume", text: "Resume", icon: faUser },
    { to: "/contact", text: "Contact", icon: faEnvelope },
  ];

  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <div className="nav-title" style={{ marginLeft: "20px" }}>
        <Navbar.Brand>DYLAN YONG</Navbar.Brand>
      </div>
      <Navbar.Toggle aria-controls="navbar-nav" onClick={handleMenuToggle} />
      <Navbar.Collapse
        id="navbar-nav"
        style={{ flexDirection: isMenuOpen ? "row-reverse" : "row" }}
      >
        <Nav
          className={`ml-auto ${isMenuOpen ? "text-center" : "text-center"}`}
        >
          {navLinks.map((link, index) => (
            <Nav.Link
              key={index}
              as={NavLink}
              to={link.to}
              activeClassName="active"
              onClick={handleMenuToggle}
            >
              <FontAwesomeIcon icon={link.icon} size="xs" /> {link.text}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
