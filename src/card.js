import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { HashLink as Link } from "react-router-hash-link";
import image from "./Images/Shubham.JPG";
import "./card.css";

function Card() {
  return (
    <>
      <div
        id="profile"
        className="container-fluid"
        style={{
          //#011f44 85%, #1d6354 110%
          background:
            "linear-gradient(to top right, #011f44 70%, #1d6354 140%)",
        }}
      >
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 my-4">
            <div className="our-team">
              <div className="picture">
                <img className="img-fluid" src={image} alt="Shubham Kumar" />
              </div>
              <div className="team-content">
                <h2 className="name">
                  <span>S</span>hubham <span>K</span>umar
                </h2>
                <hr className="Hr" />
                <h4 className="title">
                  <span>W</span>EB <span>D</span>EVELOPER
                </h4>
              </div>
              <Link
                to="#resume"
                type="button"
                className="btn btn-primary resumeSubmit"
              >
                RESUME
              </Link>
              <Link
                to="#work"
                type="button"
                className="btn btn-primary projectSubmit"
              >
                PROJECTS
              </Link>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6 my-4">
            <div className="About">
              <h1 className="Hello">
                About <span style={{ fontWeight: "bold" }}>Me</span>
              </h1>
              <br />
              <p>
                I'm a Software Engineer with 1.8 years of experience in Web
                Development, with proficiency in web technologies like React,
                JavaScript, HTML5, CSS3, and Bootstrap, building large-scale web
                applications, cross-browser platforms, and design constraints on
                the web, and building responsive user interfaces.
              </p>
              <div className="downloadCV">
                <a
                  href="Shubham Kumar.pdf"
                  download="shubham kumar.pdf"
                  type="button"
                  className="btn btn-success submit"
                >
                  DOWNLOAD CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
