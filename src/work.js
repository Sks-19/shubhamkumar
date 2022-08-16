import React from "react";
import Project from './project'
import ProjectData from './ProjectData';

const Work = () => {
    return (
        <>
            <div className='Resume'>
                <h1>My <span style={{ fontWeight: "bold" }}>Project</span></h1>
            </div>
            <br />

            {ProjectData.map((val) => {
                return (
                    <Project
                        name={val.name}
                        tech_used={val.tech_used}
                        desc={val.desc}
                    />
                );
            })}
        </>
    );
}

export default Work;