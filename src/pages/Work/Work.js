import React, { useState, useEffect } from "react";
import { WorkSec } from "./Work.styles";
import BiteBud from "../../Assets/biteBud.png";
import MentalOasis from "../../Assets/mental-oasis-picture.png";
import heroShowdown from "../../Assets/hero-showdown-pic.jpg";
import { MyDropdown, MyDropdown2, MyDropdown3 } from "./Dropdown";
import Zoom from "react-reveal/Zoom";
export default function Work() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return null;
  }

  const projects = [
    {
      title: "Superhero Showdown",
      image: heroShowdown,
      description:
        "Superhero Showdown is an interactive web game that combines the powers of React, Node.js, Express.js, MongoDB, GraphQL, Apollo, and Heroku. With two exciting game modes, 'Higher Lower' and 'Draft Game', players can immerse themselves in the world of superheroes. In 'Draft Game', strategic team building and turn-based battles await, while 'Higher Lower' challenges players to compare and choose attributes wisely. Game stats, powered by MongoDB and GraphQL, are securely stored and accessible in user profiles. With a responsive and engaging user interface built using React, Superhero Showdown delivers an exhilarating gaming experience for superhero enthusiasts.",
      projectLink: "https://hero-showdown.herokuapp.com/",
      githubLink: "https://github.com/Suzakijun1/Higher-Lower-Game",
      technologyUsed: "React, Node.js, Express.js, MongoDB, GraphQL, Apollo, Heroku",
      dropdownComponent: <MyDropdown3 />,
    },

    {
      title: "Mental Oasis",
      image: MentalOasis,
      description:
        "Mental Oasis showcases a comprehensive mental health tracker that empowers users to take control of their well-being. With features such as medication intake tracking, inspirational quotes, a customizable calendar, journal entries, and links to helpline websites, the project aims to reduce the negative impact of mental health challenges. By combining these elements, the mental health tracker offers users a holistic tool to actively monitor and improve their mental well-being.",
      projectLink: "#",
      githubLink: "https://github.com/DavidPeguero/Mental-Oasis",
      dropdownComponent: <MyDropdown2 />,
    },
    {
      title: "BiteBud (Requires New API Key)",
      image: BiteBud,
      description:
        "Bite-Bud is an innovative web application designed to enhance users' exploration of cities and states. By leveraging data from third-party APIs, this application enables users to effortlessly search and discover local restaurants and attractions in their desired locations. With real-time information, Bite-Bud empowers users to make informed decisions and embark on memorable experiences during their travels.",
      projectLink: "https://suzakijun1.github.io/BiteBud/",
      githubLink: "https://github.com/Suzakijun1/BiteBud",
      dropdownComponent: <MyDropdown />,
    },
  ];

  return (
    <WorkSec id="workSection">
      <Zoom duration={2000} distance="40px">
        <h2 className="work-header d-flex justify-content-center align-items-center">
          My Recent&nbsp;<strong className="purple"> Projects </strong>
        </h2>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <div className="container-fluid">
          {" "}
          {/* Add a container for responsive layout */}
          <div className="row">
            {projects.map((project, index) => (
              <div className="col-md-6 col-lg-4 mb-4" key={index}>
                <div className="card h-100">
                  <img
                    src={project.image}
                    className="card-img-top"
                    alt="project"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                      <a
                        href={project.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary mb-2"
                      >
                        View Project
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary mb-2"
                      >
                        View GitHub
                      </a>
                      {project.dropdownComponent}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Zoom>
    </WorkSec>
  );
}
