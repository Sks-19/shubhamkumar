import 'bootstrap/dist/css/bootstrap.min.css';
import './Education.css';

function Education(props) {
    return (
        <>
            <div className="eduCard">
                <div className="eduContent">
                    <p>{props.duration}</p>
                    <h2>{props.universityName}<br /> <span>{props.degree}</span></h2>
                    <ul>
                        <li>
                            <h5>{props.d1}</h5>
                        </li>
                        <li>
                            <h5>{props.d2}</h5>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Education;