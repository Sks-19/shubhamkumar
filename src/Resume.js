import React from "react";
import Experience from "./experience";
import ExperienceData from './experience_data';
import Skill from "./skill";

const Resume = () => {
    return (
        <>
            <div className='Resume'>
                <h1>My <span style={{ fontWeight: "bold" }}>Resume</span></h1>
            </div>
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
        </>
    );

}

export default Resume;