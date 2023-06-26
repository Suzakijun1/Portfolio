import React, { useState, useEffect } from "react";
import { HomeSec } from "./Home.styles";
import homeLogo from "../../Assets/crop-pic-of-me2.jpg";
import Type from "./Type";
import { Link } from "react-router-dom";
import vsCodePicture from "../../Assets/vs-coding-pic2.png";
import Fade from "react-reveal/Fade";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <HomeSec className="home-section container-fluid mt-5">
      <Fade>
        <div className="row">
          <div className="col-md-6 text-center">
            <div className="home-content">
              Hello, I'm <strong className="main-name">Dylan Yong</strong>
              <Type className="sub-content"></Type>
              <div className="home-btn">
                <Link
                  to="/work"
                  className="btn btn-outline border btn-primary bg-gradient"
                  aria-current="page"
                >
                  Check out my work!
                </Link>
                <Link
                  to="/resume"
                  className="btn btn-outline border btn-primary bg-gradient"
                >
                  View my Resume!
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <div className="home-img">
              <img src={homeLogo} alt="home" className="img-fluid custom-img" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="stacked-text col-md-4">
            <span>Learn</span>
            <span>Build</span>
            <span>Grow</span>
          </div>
          <section className="cta-section col-md-4">
            <h2>Lets Get to Work!</h2>
            <p>I am available for freelance work and collaborations.</p>
            <Link to="/contact" className="cta-button">
              Get In Touch
            </Link>
          </section>
          <section className="col-md-4">
            <img
              src={vsCodePicture}
              alt="vs-code-pic"
              className="img-fluid vs-code-pic"
            />
          </section>
        </div>
      </Fade>
    </HomeSec>
  );
}
