import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { GiHamburgerMenu } from "react-icons/gi";
import './navbar.css';

function Navbar() {

    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <>
            <nav className='main-nav'>

                <div className='logo'>
                    <h3>
                        <span>S</span>hubham
                        <span>K</span>umar
                    </h3>
                </div>

                <div className={
                    showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}
                >
                    <ul>
                        <li>
                            <NavLink className="NavLink" to='/'>About</NavLink>
                        </li>
                        <li>
                            <NavLink className="NavLink" to='/resume'>Resume</NavLink>
                        </li>
                        <li>
                            <NavLink className="NavLink" to='/work'>Project</NavLink>
                        </li>
                        <li>
                            <NavLink className="NavLink" to='/contactme'>Contact Me</NavLink>
                        </li>
                    </ul>
                </div>

                <div className='social-media'>
                    <div className='hamburger-menu'>
                        <a href="/" onMouseOver={() => setShowMediaIcons(!showMediaIcons)}>
                            <GiHamburgerMenu />
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;