import { WorkSec } from "./Work.styles";
import BiteBud from "../../Assets/biteBud.png";

export default function Work() {
  return (
    <WorkSec id="workSection">
      this is the work page
      <h2 className="work-header">
        My Recent <strong className="purple">Works </strong>
      </h2>
      <p style={{ color: "white" }}>
        Here are a few projects I've worked on recently.
      </p>
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-md-4">
            <div className="card d-flex justify-content-center align-items-center">
              <img src={BiteBud} className="card-img-top" alt="project" />
              <div className="card-body">
                <h5 className="card-title">BiteBud</h5>
                <p className="card-text">
                  Bite-Bud is a web application that allows users to search for
                  local restaurants and attractions in any city and state of
                  their choice. The application retrieves data from third-party
                  APIs to provide users with relevant information about nearby
                  restaurants and attractions.
                </p>
                <a
                  href="https://suzakijun1.github.io/BiteBud/"
                  target="_blank"
                  className="btn btn-primary"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src=""
                className="card-img-top"
                alt="project"
                style={{ height: "200px", width: "200px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Project 2</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum, quibusdam.
                </p>
                <a href="#" className="btn btn-primary">
                  View Project
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src=""
                className="card-img-top"
                alt="project"
                style={{ height: "200px", width: "200px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Project 3</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum, quibusdam.
                </p>
                <a href="#" className="btn btn-primary">
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WorkSec>
  );
}
