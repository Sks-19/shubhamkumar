import React from "react";
import Certification from "./certification";
import CertData from "../Database/CertData";
import "../Styles/Work.scss";

const Cert = () => {
  return (
    <>
      <div
        className="section container-fluid Project"
        id="certification"
        style={{ backgroundColor: "#313715" }}
      >
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
