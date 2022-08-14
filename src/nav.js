import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './nav.css';

function Nav () {
    return(
        <>
            <nav className="Nav">
            <ul>
            <li>
                <h1>My Profile</h1>
            </li>
            </ul>
            <ul>
            <li>
                <a href="#">Contat Me</a>
            </li>
            <li>
                <a href="#">Skills</a>
            </li>
            <li>
                <a href="#">Projects</a>
            </li>
            <li>
                <a href="#">Experiences</a>
            </li>
            </ul>
             <div className="animation start-home"></div>
            </nav>
        </>

    );
}

export default Nav;