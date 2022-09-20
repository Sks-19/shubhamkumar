import React from "react";
import "./certification.css";

const Certification = (props) => {
  return (
    <>
      <div className="row certCard">
        <div className="col-lg-6 col-md-12 col-sm-12 certContent">
          <div className="detail">
            <h2>
              {props.name}
              <br /> <span>{props.organization}</span>
            </h2>
            <p className="text-white">Issued {props.issueDate}</p>
            <p className="text-white">Credential ID : {props.Id}</p>
          </div>
          <div>
            <a
              href={props.link}
              type="button"
              className="btn btn-info text-white btnLive"
            >
              Show Credential
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 certImg">
          <img src={props.image} alt="Evento.png" />
        </div>
      </div>
    </>
  );
};

export default Certification;
