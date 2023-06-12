import { ResumeSec } from "./Resume.styles";
import Resume from "../../Assets/Dylan_Resume_Update2.jpg";

export default function Home() {
  return (
    <ResumeSec className="home-section">
      <div className="home-content text-center">
        <h1 className="main-name">Resume</h1>
        <img src={Resume} alt="resume" className="img-fluid custom-img" />
      </div>
    </ResumeSec>
  );
}
