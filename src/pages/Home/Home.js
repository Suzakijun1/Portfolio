import React, { useState, useEffect } from "react";
import { HomeSec } from "./Home.styles";
import homeLogo from "../../Assets/crop-pic-of-me2.jpg";
import Type from "./Type";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import vsCodePicture from "../../Assets/vs-coding-pic2.png";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "80vh" }}
    >
      <HomeSec className="home-section container-fluid">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6 text-center">
            <Fade>
              <div className="home-content">
                <strong> Dylan Yong</strong>

                <div className="home-img">
                  <img
                    src={homeLogo}
                    alt="home"
                    className="img-fluid custom-img"
                    style={{ width: "400px" }} // Adjust the width to your preference
                  />
                </div>
                <Type className="sub-content"></Type>
                <div className="mt-4 d-flex justify-content-around">
                  <Link to="/work" className="cta-button" aria-current="page">
                    Check out my work!
                  </Link>
                  <Link to="/resume" className="cta-button">
                    View my Resume!
                  </Link>
                  <Link to="/contact" className="cta-button">
                    Get In Touch
                  </Link>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </HomeSec>
    </div>
  );
}
