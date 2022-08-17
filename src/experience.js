import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './experience.css';

function Experience(props) {
    return (
        <>
            <div className="cardex">
                <div className="contentex">
                    <div className='detail'>
                        <p>{props.duration}</p>
                        <h2>{props.position}<br /> <span>{props.company}</span></h2>
                        <ul>
                            <li>
                                <h5>{props.exp1}</h5>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Experience;