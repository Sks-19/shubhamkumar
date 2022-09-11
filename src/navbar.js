import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { GiHamburgerMenu } from "react-icons/gi";
import "./navbar.css";

function Navbar() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h3>
            <span>S</span>
            <span>K</span>
          </h3>
        </div>

        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <NavLink
                className="NavLink"
                to="/shubhamkumarportfolio"
                onClick={() => setShowMediaIcons(!showMediaIcons)}
                style={{ color: "white" }}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className="NavLink"
                to="/resume"
                onClick={() => setShowMediaIcons(!showMediaIcons)}
                style={{ color: "white" }}
              >
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink
                className="NavLink"
                to="/work"
                onClick={() => setShowMediaIcons(!showMediaIcons)}
                style={{ color: "white" }}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                className="NavLink"
                to="/contactme"
                onClick={() => setShowMediaIcons(!showMediaIcons)}
                style={{ color: "white" }}
              >
                Contact Me
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="social-media">
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu className="hamburger" />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
