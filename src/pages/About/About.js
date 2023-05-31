import { AboutSec } from "./About.styles";
import AboutLogo from "../../Assets/WebDevelopmentBanner.webp";
import htmlpic from "../../Assets/skills/html.png";
import csspic from "../../Assets/skills/css.png";
import jspic from "../../Assets/skills/js.png";
import reactpic from "../../Assets/skills/react.png";
import nodepic from "../../Assets/skills/nodejs.png";
import mysqlpic from "../../Assets/skills/mysql.png";

export default function About() {
  return (
    <AboutSec className="about-section container-fluid">
      <div className="row">
        <div className="col-md-12 d-flex align-items-center">
          <div className="about-img">
            <img src={AboutLogo} alt="about" className="img-fluid" />
          </div>
          <div className="about-content">
            <h1>About Me</h1>
            <p>
              I am a full-stack web developer with a 8+ years of diverse college
              educations and a passion for learning. I graduated from University
              of South Florida with a Bachelors of Science in 'Integrative
              Animal biology' and Information Studies with a concentration in
              Information security. I recently graduated from the University of
              Central Florida Coding Bootcamp. I am proficient in HTML, CSS,
              JavaScript, Node.js, Express.js, React.js, MongoDB, MySQL, and
              more. I am a hard worker with a strong work ethic and a desire to
              learn.
            </p>
          </div>
        </div>
        <div className="skills-content">
          <h1>Skills</h1>
          <div className="container-fluid text-center">
            <h2> Languages & Databases </h2>
            <div className="row justify-content-center">
              <div className="skills-img ">
                HTML
                <img src={htmlpic} alt="html" className="img-fluid" />
              </div>
              <div className="skills-img">
                CSS
                <img src={csspic} alt="css" className="img-fluid" />
              </div>
              <div className="skills-img">
                JavaScript
                <img src={jspic} alt="css" className="img-fluid" />
              </div>
              <div className="skills-img">
                React.js
                <img src={reactpic} alt="css" className="img-fluid" />
              </div>
              <div className="skills-img">
                React.js
                <img src={nodepic} alt="css" className="img-fluid" />
              </div>
              <h3> Frameworks & Technologies </h3>
              <div className="row justify-content-center">
                <div className="skills-img">
                  MySQL
                  <img src={mysqlpic} alt="css" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AboutSec>
  );
}
