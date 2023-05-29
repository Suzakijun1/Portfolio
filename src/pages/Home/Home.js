import { HomeSec } from "./Home.styles";
import { HomeContainer } from "./Home.styles";
import homeLogo from "../../Assets/coding-man-image.jpg";
import Type from "./Type";

export default function Home() {
  return (
    <HomeSec id="aboutSection">
      Hello! This is the Home Page!
      <div className="home-section container-fluid">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
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
