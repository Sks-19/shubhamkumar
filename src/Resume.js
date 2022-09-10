import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Experience from "./experience";
import ExperienceData from "./experience_data";
import Education from "./Education";
import EducationData from "./Education_Data";
import Skill from "./skill";
import "./Resume.css";

const Resume = () => {
  return (
    <>
      <div className="container-fluid Resume">
        <h1>
          My <span style={{ fontWeight: "bold" }}>Resume</span>
        </h1>
        <div className="row mx-1">
          <div className="col col-7">
            <h4 style={{ fontWeight: "bold" }}>Experience :</h4>
          </div>
          <div className="col col-5">
            <a
              href="Shubham Kumar.pdf"
              download="shubham kumar.pdf"
              type="button"
              className="btn btn-primary DownloadCV"
            >
              DOWNLOAD CV
            </a>
          </div>
        </div>

        {ExperienceData.map((val) => {
          return (
            <Experience
              duration={val.duration}
              position={val.position}
              company={val.company}
              exp1={val.exp1}
              exp2={val.exp2}
              exp3={val.exp3}
            />
          );
        })}

        <h4 style={{ fontWeight: "bold" }}>Education :</h4>

        {EducationData.map((val) => {
          return (
            <Education
              duration={val.duration}
              universityName={val.universityName}
              degree={val.Degree}
              d1={val.d1}
              d2={val.d2}
            />
          );
        })}

        <h4 style={{ fontWeight: "bold", marginTop: "5%" }}>My Skills :</h4>

        <Skill />
      </div>
    </>
  );
};

export default Resume;
