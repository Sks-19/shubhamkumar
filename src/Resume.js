import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Experience from "./experience";
import ExperienceData from './experience_data';
import Skill from "./skill";
import './Resume.css';

const Resume = () => {
    return (
        <>
            <div className="container-fluid Resume">
                <h1>My <span style={{ fontWeight: "bold" }}>Resume</span></h1>
                <h4 style={{ fontWeight: "bold" }}>Experience :</h4>

                {ExperienceData.map((val) => {
                    return (
                        <Experience
                            duration={val.duration}
                            position={val.position}
                            company={val.company}
                            exp1={val.exp1}
                        />
                    );
                })}

                <h4 style={{ fontWeight: "bold", marginTop: "5%" }}>My Skills :</h4>

                <Skill />
            </div>
        </>
    );

}

export default Resume;