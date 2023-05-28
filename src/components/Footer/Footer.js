import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <nav className="navbar fixed-bottom bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <FontAwesomeIcon icon={faGithub} beat />
          Fixed bottom
        </a>
      </div>
    </nav>
  );
}

export default Footer;
