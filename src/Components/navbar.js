import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { GiHamburgerMenu } from "react-icons/gi";
import "../Styles/navbar.scss";

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
          id="navbar"
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <Link
                className="NavLink"
                to="#profile"
                onClick={() => setShowMediaIcons(!showMediaIcons)}
                style={{ color: "white" }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="NavLink"
                to="#resume"
                onClick={() => setShowMediaIcons(!showMediaIcons)}
                style={{ color: "white" }}
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                className="NavLink"
                to="#skill"
                onClick={() => setShowMediaIcons(!showMediaIcons)}
                style={{ color: "white" }}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                className="NavLink"
                to="#work"
                onClick={() => setShowMediaIcons(!showMediaIcons)}
                style={{ color: "white" }}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="NavLink"
                to="#certification"
                onClick={() => setShowMediaIcons(!showMediaIcons)}
                style={{ color: "white" }}
              >
                Certifications
              </Link>
            </li>
            <li>
              <Link
                className="NavLink"
                to="#contactme"
                onClick={() => setShowMediaIcons(!showMediaIcons)}
                style={{ color: "white" }}
              >
                Contact Me
              </Link>
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
