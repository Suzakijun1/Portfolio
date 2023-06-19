import { AboutSec } from "./About.styles";
import AboutLogo from "../../Assets/WebDevelopmentBanner.webp";
import htmlpic from "../../Assets/skills/html.png";
import csspic from "../../Assets/skills/css.png";
import jspic from "../../Assets/skills/js.png";
import reactpic from "../../Assets/skills/react.png";
import nodepic from "../../Assets/skills/nodejs.png";
import mysqlpic from "../../Assets/skills/mysql.png";
import gitpic from "../../Assets/skills/git.png";
import mongopic from "../../Assets/skills/mongo-db.png";
import vscodepic from "../../Assets/skills/vscode2.png";
import expresspic from "../../Assets/skills/expressjs.png";
import intelljpic from "../../Assets/skills/Intellij.png";
import javapic from "../../Assets/skills/java.png";
import heroku from "../../Assets/skills/heroku-pic.webp";
import apollopic from "../../Assets/skills/apolloimage.png";
import jquerypic from "../../Assets/skills/jqueryimg.png";
export default function About() {
  const languagesAndDatabases = [
    { name: "HTML", image: htmlpic },
    { name: "CSS", image: csspic },
    { name: "JavaScript", image: jspic },
    { name: "Java", image: javapic },
    { name: "MongoDB", image: mongopic },
    { name: "MySQL", image: mysqlpic },
  ];
  const frameworksAndTechnologies = [
    { name: "React.js", image: reactpic },
    { name: "Node.js", image: nodepic },
    { name: "Express.js", image: expresspic },
    { name: "Apollo", image: apollopic },
    { name: "jQuery", image: jquerypic },
  ];
  const toolsAndPlatforms = [
    { name: "Git", image: gitpic },
    { name: "VS Code", image: vscodepic },
    { name: "IntelliJ", image: intelljpic },
    { name: "Heroku", image: heroku },
  ];

  return (
    <AboutSec className="about-section container-fluid">
      <div className="row">
        <div className="d-flex align-items-center">
          <div className="about-img">
            <img src={AboutLogo} alt="about" className="img-fluid" />
          </div>
          <div className="about-content">
            <h1>About Me</h1>
            <ul>
              <li>
                I am a 26 year old{" "}
                <span className="underline">full-stack developer</span> with{" "}
                <strong>dual bachelor's degree</strong> based in Orlando,
                Florida. With over 8 years of extensive college education in
                diverse fields, I have cultivated a strong passion for learning.
              </li>
              <li className="blue-item">
                In 2020, I <strong>graduated</strong> from{" "}
                <span className="underline">University of South Florida</span>{" "}
                with a <strong>Bachelors of Science</strong> in{" "}
                <strong>"Integrative Animal biology"</strong>.
              </li>
              <li>
                In 2022, I graduated from the{" "}
                <span className="underline">University of South Florida</span>{" "}
                with a <strong>Bachelors of Science</strong> in{" "}
                <strong>"Information Science"</strong> with a concentration in{" "}
                <strong>"Information Security"</strong>.
              </li>
              <li className="test">
                In 2023, I graduated from the{" "}
                <span className="underline">University of Central Florida</span>{" "}
                Coding Bootcamp.
              </li>
              <li>
                I am <strong>proficient</strong> in HTML, CSS, JavaScript,
                Node.js, Express.js, React.js, MongoDB, MySQL, and more.
              </li>
            </ul>
          </div>
        </div>
        <div className="skills-content">
          <h1>Skills</h1>
          <div className="container-fluid text-center">
            <h2> Languages & Databases </h2>
            <div className="row justify-content-center">
              {languagesAndDatabases.map((skill, index) => (
                <div className="skills-img" key={index}>
                  {skill.name}
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="img-fluid"
                  />
                </div>
              ))}
            </div>

            <h3> Frameworks & Technologies </h3>
            <div className="row justify-content-center">
              {frameworksAndTechnologies.map((skill, index) => (
                <div className="skills-img" key={index}>
                  {skill.name}
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="img-fluid"
                  />
                </div>
              ))}
            </div>

            <h4>Tools & Platforms</h4>
            <div className="row justify-content-center">
              {toolsAndPlatforms.map((tool, index) => (
                <div className="skills-img" key={index}>
                  {tool.name}
                  <img src={tool.image} alt={tool.name} className="img-fluid" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AboutSec>
  );
}
