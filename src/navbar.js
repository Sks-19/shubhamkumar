import React, { useState } from 'react';
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
                    <h2>
                        <span>S</span>hubham
                        <span>K</span>umar
                    </h2>
                </div>

                <div className={
                    showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}
                    >
                    <ul>
                        <li>
                            <a href='#'>Home</a>
                        </li>
                        <li>
                            <a href='#'>About</a>
                        </li>
                        <li>
                            <a href='#'>Resume</a>
                        </li>
                        <li>
                            <a href='#'>Project</a>
                        </li>
                    </ul>
                </div>

                <div className='social-media'>
                    <div className='hamburger-menu'>
                        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                            <GiHamburgerMenu />
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;