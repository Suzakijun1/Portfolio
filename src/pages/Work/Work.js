import { WorkSec } from "./Work.styles";
import BiteBud from "../../Assets/biteBud.png";
import MentalOasis from "../../Assets/mental-oasis-picture.png";
import { MyDropdown, MyDropdown2 } from "./Dropdown";

export default function Work() {
  return (
    <WorkSec id="workSection">
      <h2 className="work-header d-flex justify-content-center align-items-center">
        My Recent <strong className="purple"> Projects </strong>
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
                  Bite-Bud is an innovative web application designed to enhance
                  users' exploration of cities and states. By leveraging data
                  from third-party APIs, this application enables users to
                  effortlessly search and discover local restaurants and
                  attractions in their desired locations. With real-time
                  information, Bite-Bud empowers users to make informed
                  decisions and embark on memorable experiences during their
                  travels.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <a
                    href="https://suzakijun1.github.io/BiteBud/"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    View Project
                  </a>
                  <a
                    href="https://github.com/Suzakijun1/BiteBud"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    View Github
                  </a>
                  <MyDropdown />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={MentalOasis} className="card-img-top" alt="project" />
              <div className="card-body">
                <h5 className="card-title">Mental Oasis</h5>
                <p className="card-text">
                  Mental Oasis showcases a comprehensive mental health tracker
                  that empowers users to take control of their well-being. With
                  features such as medication intake tracking, inspirational
                  quotes, a customizable calendar, journal entries, and links to
                  helpline websites, the project aims to reduce the negative
                  impact of mental health challenges. By combining these
                  elements, the mental health tracker offers users a holistic
                  tool to actively monitor and improve their mental well-being.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <a href="#" className="btn btn-primary">
                    View Project
                  </a>
                  <a
                    href="https://github.com/DavidPeguero/Mental-Oasis"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    View Github
                  </a>
                  <MyDropdown2 />
                </div>
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
                <h5 className="card-title">Superhero Showdown</h5>
                <p className="card-text">
                  Superhero Showdown is an interactive web game with two modes:
                  "Higher Lower" and "Draft Game". In "Draft Game", players
                  strategically build teams and engage in turn-based battles. In
                  "Higher Lower", players compare and choose attributes. Game
                  stats are tracked and stored using MongoDB, viewable in user
                  profiles.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <a
                    href="https://hero-showdown.herokuapp.com/"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    View Project
                  </a>
                  <a
                    href="https://github.com/Suzakijun1/Higher-Lower-Game"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    View Github
                  </a>
                  <MyDropdown />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WorkSec>
  );
}
