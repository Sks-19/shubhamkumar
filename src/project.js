import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './project.css';

function Project(props) {
    return(
        <>
         <div className="card_project">
            <div className="content_project">
                <div className='detail'>
                <h2>{props.name}<br/> <span>{props.tech_used}</span></h2>
                <h5>{props.desc}</h5>
            </div>
            </div>
        </div>
        </>
    );
}

export default Project;