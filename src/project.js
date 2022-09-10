import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./project.css";

function Project(props) {
  return (
    <>
      <div className="row projectCard">
        <div className="col-lg-6 col-md-12 col-sm-12 projectContent">
          <div className="detail">
            <h2>
              {props.name}
              <br /> <span>{props.tech_used}</span>
            </h2>
            <h5>{props.desc}</h5>
          </div>
          <div>
            <a
              href={props.link}
              type="button"
              className="btn btn-danger btnLive"
            >
              Live
            </a>
            <a
              href={props.code}
              type="button"
              className="btn btn-success btnCode"
            >
              Code
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 projectImg">
          <img src={props.photo} alt="Evento.png" />
        </div>
      </div>
    </>
  );
}

export default Project;
