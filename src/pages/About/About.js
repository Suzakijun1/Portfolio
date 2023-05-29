import { AboutSec } from "./About.styles";
import AboutLogo from "../../Assets/WebDevelopmentBanner.webp";

export default function About() {
  return (
    <AboutSec id="aboutSection">
      this is the about page
      <div className="about-section container-fluid">
        <div className="row">
          <div className="col-md-12 d-flex align-items-center">
            <div className="about-img">
              <img src={AboutLogo} alt="about" className="img-fluid" />
            </div>
            <div className="about-content">
              <h1>About Me</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatum, quibusdam, quia, quos voluptates voluptate
                exercitationem quod voluptatibus quas doloribus quidem
                consequuntur. Quisquam, quibusdam, quia, quos voluptates
                voluptate exercitationem quod voluptatibus quas doloribus quidem
                consequuntur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AboutSec>
  );
}
