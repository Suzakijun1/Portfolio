import React, { useState, useEffect } from "react";
import { WorkSec } from "./Work.styles";
import BiteBud from "../../Assets/biteBud.png";
import MentalOasis from "../../Assets/mental-oasis-picture.png";
import heroShowdown from "../../Assets/hero-showdown-pic.jpg";
import CrowPicture from "../../Assets/Crow_picture.png";
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
      title: "Crow",
      image: CrowPicture,
      description:
        "Crow is a desktop application that provides users with a customizable dashboard for storing macros and functions.",
      projectLink: "",
      githubLink: "https://github.com/Suzakijun1/Desktop-Dashboard",
      technologyUsed: "React, Electron.js, Node.js",
    },
    {
      title: "Superhero Showdown",
      image: heroShowdown,
      description:
        "Superhero Showdown is an interactive web game with two exciting modes, 'Higher Lower' and 'Draft Game', delivering an exhilarating superhero experience with strategic battles and a responsive interface.",
      projectLink: "https://hero-showdown.herokuapp.com/",
      githubLink: "https://github.com/Suzakijun1/Higher-Lower-Game",
      technologyUsed:
        "React, Node.js, Express.js, MongoDB, GraphQL, Apollo, Heroku",
      dropdownComponent: <MyDropdown3 />,
    },

    {
      title: "Mental Oasis",
      image: MentalOasis,
      description:
        "Mental Oasis is a mental health tracker with medication intake, inspirational quotes, customizable calendar, journal entries, and helpline links for holistic well-being improvement. ",
      projectLink: "#",
      githubLink: "https://github.com/DavidPeguero/Mental-Oasis",
      technologyUsed: "HTML, CSS, JavaScript, Node.js, Express.js, mySQL",
      dropdownComponent: <MyDropdown2 />,
    },
    {
      title: "BiteBud (Requires New API Key)",
      image: BiteBud,
      description:
        "Bite-Bud is an innovative web application designed to enhance users' exploration of cities and states. By leveraging data from third-party APIs, this application enables users to effortlessly search and discover local restaurants and attractions in their desired locations.",
      projectLink: "https://suzakijun1.github.io/BiteBud/",
      githubLink: "https://github.com/Suzakijun1/BiteBud",
      technologyUsed: "HTML, CSS, JavaScript, Two Server-side APIs",
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
                    <p className="card-text">
                      <strong>Technologies used:</strong>{" "}
                      {project.technologyUsed}
                    </p>
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
