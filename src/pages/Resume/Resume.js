import { ResumeSec } from "./Resume.styles";
import Resume from "../../Assets/Dylan's Resume 41024_1.jpg";

export default function Home() {
  return (
    <ResumeSec className="home-section">
      <div className="home-content">
        <h1 className="main-name">Resume</h1>
      </div>
      This is my resume page
      <img src={Resume} alt="resume" className="img-fluid custom-img" />
    </ResumeSec>
  );
}
