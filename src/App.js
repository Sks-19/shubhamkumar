import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
// import Nav from './nav';
import Card from './card';
import Footer from './footer';
import Experience from './experience';
import ExperienceData from './experience_data';
import Project from './project';
import Skill from './skill';
import ProjectData from './ProjectData';
import Contact_me from './Contact';
import Navbar from './navbar';
// import Profile from './Profile';

function App() {
  return (
    <>
      <Navbar />
        <div className="container">
          <Card />
        <div className='Resume'>
          <h1>My <span  style= {{fontWeight: "bold"}}>Resume</span></h1>
        </div>
          <h4 style= {{fontWeight: "bold"}}>Experience :</h4>

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
          <h4 style= {{fontWeight: "bold", marginTop: "5%"}}>Project :</h4>

          {ProjectData.map((val) => {
            return (
                    <Project
                      name={val.name}
                      tech_used={val.tech_used}
                      desc = {val.desc}
                    />
                  );
          })} 

          <h4 style= {{fontWeight: "bold", marginTop: "5%"}}>My Skills :</h4>

          <Skill />
          <Contact_me />

        </div>
        <Footer />
    </>
  );
}

export default App;
