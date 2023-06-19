import { ResumeSec } from "./Resume.styles";
import Resume from "../../Assets/Dylan_Resume_Update2.jpg";

export default function Home() {
  return (
    <ResumeSec className="home-section">
      <div className="home-content text-center">
        <h1 className="main-name">Resume</h1>
        <div>
          <a
            href="https://github.com/Suzakijun1/Portfolio/blob/main/Dylan's%20Resume%20Updated.pdf"
            download="Dylan_Resume.pdf"
            style={{ fontWeight: "bold", fontSize: "1.5rem" }}
          >
            Download Resume
          </a>
        </div>
        <img src={Resume} alt="resume" className="img-fluid custom-img" />
      </div>
    </ResumeSec>
  );
}
