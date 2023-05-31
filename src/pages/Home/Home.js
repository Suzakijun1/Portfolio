import { HomeSec } from "./Home.styles";
import homeLogo from "../../Assets/crop-pic-of-me2.jpg";
import CodingManPic from "../../Assets/coding-man-image.jpg";
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
              <a href="#" className="btn btn-smart">
                Download CV
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="home-img">
            <img src={homeLogo} alt="home" className="img-fluid custom-img" />
          </div>
        </div>
      </div>

      <div className="stacked-text col-md-4">
        <span>Learn</span>
        <span>Build</span>
        <span>Grow</span>
        {/* <img src={CodingManPic} alt="about" className="img-fluid" /> */}
        <div className="home-social">Find me on social media</div>
      </div>
    </HomeSec>
  );
}
