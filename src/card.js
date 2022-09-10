import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { NavLink } from "react-router-dom";
import image from "./Images/Shubham.JPG";
import "./card.css";

function Card() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
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
              <NavLink
                to="/resume"
                type="button"
                className="btn btn-primary resumeSubmit"
              >
                RESUME
              </NavLink>
              <NavLink
                to="/work"
                type="button"
                className="btn btn-primary projectSubmit"
              >
                PROJECTS
              </NavLink>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6">
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
                  className="btn btn-primary submit"
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
