import { HomeSec } from "./Home.styles";
import homeLogo from "../../Assets/crop-pic-of-me2.jpg";
import Type from "./Type";

export default function Home() {
  return (
    <HomeSec className="home-section container-fluid mt-5">
      <div className="row ms-5">
        <div className="col-md-6 text-center">
          <div className="home-content">
            Hello, I'm <strong className="main-name">Dylan Yong</strong>
            <Type className="sub-content"></Type>
            <div className="home-btn">
              <a
                href="#"
                className="btn btn-outline border btn-primary bg-gradient"
              >
                Check out my work!
              </a>
              <a
                href="#"
                className="btn btn-outline border btn-primary bg-gradient"
              >
                View my Resume!
              </a>
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
          <a href="mailto:your-email@example.com" className="cta-button">
            Get In Touch
          </a>
        </section>
      </div>
    </HomeSec>
  );
}
