import React from "react";
import img from './Images/Shubham.JPG';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import InstagramIcon from '@material-ui/icons/Instagram';
import './Profile.css';

function Profile() {
    return (
        <>
        <div className='container-fluid'>
        <div className='row row1'>
        <div className="col-12 col-sm-12 col-md-6 col-lg-5">
          <div className="our-team">
            <div className="picture">
              <img className="img-fluid" src={img} alt="Shubham Kumar" />
            </div>
            <div className="team-content">
              <h2 className="name">Shubham <br /> Kumar</h2>
              <hr className='Hr'/>
              <h4 className="title">WEB DEVELOPER</h4>
            </div>
            <div className='icon'>
            {/* <ul className="social">
              <li><a href="/" ><FacebookIcon /></a></li>
              <li><a href="/" ><TwitterIcon /></a></li>
              <li><a href="/" ><LinkedInIcon /></a></li>
              <li><a href="/" ><InstagramIcon /></a></li>
            </ul> */}
            </div>
          </div>
        </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4">
            <h1 className='Hello'><strong>Hello</strong></h1>
            <p className='p1'><strong>Here's who I am & what I do</strong></p>
            <button type="button" className="button btn btn-primary btn-block">Resume</button>
            <button type="button" className="button btn btn-outline-primary btn-block">Projects</button>
            <p className='text'>I'm a Full Stack Developer. I have knowledge of React, Node and Web Designing. 
            I am having one year experience as an Assistant System Engineer in Tata Consultancy Services. </p>
          </div>
          </div>
        </div>
        </>
    );
}

export default Profile;