import { AboutSec } from "./About.styles";
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
import EducationCard from "../../components/EducationCard/EducationCard";
import AboutMeCard from "../../components/AboutMeCard/AboutMe";

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
      <div className="about-content">
        <h1>About Me</h1>
        <AboutMeCard />
        <div className="education-content">
          <h1>Education</h1>
          <EducationCard />
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
