import { HomeSec } from "./Home.styles";
import { HomeContainer } from "./Home.styles";
import homeLogo from "../../Assets/coding-man-image.jpg";

export default function Home() {
  return (
    <HomeSec id="aboutSection">
      Hello! This is the Home Page!
      <div className="home-section container-fluid">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <div className="home-content">
              Hello, I'm <strong className="main-name">Dylan Yong</strong>
              <p className="sub-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum.
              </p>
              <div className="home-btn">
                <a href="#" className="btn btn-outline">
                  Hire Me
                </a>
                <a href="#" className="btn btn-smart">
                  Download CV
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-block">
            <div className="home-img">
              <img src={homeLogo} alt="home" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </HomeSec>
  );
}
