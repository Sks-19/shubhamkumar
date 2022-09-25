import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Project from "./project";
import ProjectData from "./ProjectData";
import "./Work.css";

const Work = () => {
  return (
    <>
      <div
        className="container-fluid Project"
        id="work"
        style={{ backgroundColor: "#1a252f" }}
      >
        <div className="Project_title">
          <h1>
            <span style={{ fontWeight: "bold" }}>Projects</span>
          </h1>
        </div>
        <br />

        {ProjectData.map((val, i) => (
          <Project
            name={val.name}
            link={val.link}
            tech_used={val.tech_used}
            desc={val.desc}
            photo={val.photo}
            code={val.code}
            key={i}
          />
        ))}
      </div>
    </>
  );
};

export default Work;
