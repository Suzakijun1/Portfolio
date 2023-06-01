import React from "react";
import { FooterContainer } from "./Footer.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <nav className="navbar fixed-bottom d-flex justify-content-center">
      <FooterContainer className="container-fluid justify-content-center">
        <a className="navbar-brand" href="https://github.com/Suzakijun1">
          <FontAwesomeIcon icon={faGithub} size="lg" />
          Github
        </a>
        <a
          className="navbar-brand"
          href="https://www.linkedin.com/in/dylan-yong-96830524a/"
        >
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
          Linkedin
        </a>
      </FooterContainer>
    </nav>
  );
}

export default Footer;
