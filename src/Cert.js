import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Certification from "./certification";
import CertData from "./CertData";
import "./Work.css";

const Cert = () => {
  return (
    <>
      <div className="container-fluid Project" id="certification">
        <div className="Project_title">
          <h1>
            <span style={{ fontWeight: "bold" }}>Certifications</span>
          </h1>
        </div>
        <br />

        {CertData.map((val, i) => (
          <Certification
            name={val.name}
            link={val.link}
            organization={val.organization}
            issueDate={val.issueDate}
            Id={val.Id}
            image={val.image}
            key={i}
          />
        ))}
      </div>
    </>
  );
};

export default Cert;
