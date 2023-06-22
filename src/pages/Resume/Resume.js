import { ResumeSec } from "./Resume.styles";
import Resume from "../../Assets/Dylan Yong's Resume.pdf";
import Resume1 from "../../Assets/Dylan Yong's Resume-1.png";
import Fade from "react-reveal/Fade";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);
  if (isLoading) {
    return null;
  }
  return (
    <ResumeSec className="home-section">
      <Fade bottom>
        <div className="home-content text-center">
          <h1 className="main-name">Resume</h1>
          <div>
            <a
              href={Resume}
              download="Dylan_Resume.pdf"
              style={{ fontWeight: "bold", fontSize: "1.5rem" }}
            >
              Download Resume
            </a>
          </div>
          <img src={Resume1} alt="resume" className="resume-image" />
        </div>
      </Fade>
    </ResumeSec>
  );
}
