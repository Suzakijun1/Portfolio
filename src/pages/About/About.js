import { AboutSec } from "./About.styles";
import AboutLogo from "../../Assets/WebDevelopmentBanner.webp";

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
              I am a full-stack web developer with a passion for learning and
              creating. I am currently enrolled in the University of Central
              Florida Coding Bootcamp. I am proficient in HTML, CSS, JavaScript,
              Node.js, Express.js, React.js, MongoDB, MySQL, and more. I am a
              hard worker with a strong work ethic and a desire to learn.
            </p>
          </div>
        </div>
        <div className="skills-content">
          <h1>Skills</h1>
          <p>
            HTML, CSS, JavaScript, Node.js, Express.js, React.js, MongoDB,
            MySQL, and more.
          </p>
        </div>
      </div>
    </AboutSec>
  );
}
