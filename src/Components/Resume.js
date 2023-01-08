import React from "react";
import Experience from "./experience";
import ExperienceData from "../Database/experience_data";
import Education from "./Education";
import EducationData from "../Database/Education_Data";
import Skill from "./skill";
import "../Styles/Resume.scss";

const Resume = () => {
  return (
    <>
      <div
        className="section container-fluid Resume"
        id="resume"
        style={{ backgroundColor: "#015454" }}
      >
        <h1>
          <span style={{ fontWeight: "bold" }}>Resume</span>
        </h1>
        <div className="row mx-1">
          <div className="col col-7">
            <h4 style={{ fontWeight: "bold" }}>Experience :</h4>
          </div>
          {/* <div className="col col-5">
            <a
              href="Shubham Kumar.pdf"
              download="shubham kumar.pdf"
              type="button"
              className="btn btn-primary DownloadCV"
            >
              DOWNLOAD
            </a>
          </div> */}
        </div>

        {ExperienceData.map((val) => {
          return (
            <Experience
              key={val.id}
              duration={val.duration}
              position={val.position}
              company={val.company}
              exp1={val.exp1}
              exp2={val.exp2}
              exp3={val.exp3}
            />
          );
        })}

        <div className="section" id="education">
          <h4 style={{ fontWeight: "bold" }}>Education :</h4>

          {EducationData.map((val) => {
            return (
              <Education
                key={val.id}
                duration={val.duration}
                universityName={val.universityName}
                degree={val.Degree}
                d1={val.d1}
                d2={val.d2}
              />
            );
          })}
        </div>

        <div className="section" id="skill">
          <h4 style={{ fontWeight: "bold", marginTop: "5%" }}>Skills :</h4>

          <Skill />
        </div>
      </div>
    </>
  );
};

export default Resume;
