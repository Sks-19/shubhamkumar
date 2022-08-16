import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import image from './Images/Shubham.JPG';
import './card.css';
import { FaFacebookSquare, 
  FaInstagramSquare, 
  FaGitSquare,
FaLinkedin } 
  from 'react-icons/fa';


function Card() {
    return(
        <>
        <div className="row justify-content-center">

        <div className="col-sm-12 col-md-6 col-lg-6">
        <div className="our-team">
            <div className="picture">
              <img className="img-fluid" src={image} alt="Shubham Kumar" />
            </div>
            <div className="team-content">
              <h2 className="name"><span>S</span>hubham <span>K</span>umar</h2>
              <hr className='Hr'/>
              <h4 className="title"><span>W</span>EB <span>D</span>EVELOPER</h4>
            </div>
            <div className='icon'>
            <ul className="social">
              <li><a href="https://m.facebook.com/100006499862197/" ><FaFacebookSquare className='facebook'/></a></li>
              <li><a href="https://github.com/Sks-19" ><FaGitSquare className='facebook'/></a></li>
              <li><a href="https://www.linkedin.com/in/shubham-kumar19/" ><FaLinkedin className='facebook'/></a></li>
              <li><a href="https://www.instagram.com/_.shubham.kr.sharma._/" ><FaInstagramSquare className='instagram'/></a></li>
            </ul>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="About">
                <h1 className='Hello'>About <span  style= {{fontWeight: "bold"}}>Me</span></h1>
                <h5>I am a Frontend Developer.</h5>
                <br />
                <p>
                For the past 18 months, I am working with TCS which is one of the biggest IT company in the country, as a Data Analyst. 
                Where my day-to-day job is to maintain the flow of data to the downstream client. 
                We are maintaining the data quality from different sources in the data warehouse.
                <br />
                <br />
                During my engineering, I developed a love for web technology since I love to create beautiful and performant products with a delightful user experience.
                During my last year of engineering I was working with a start-up Digital1x1 which was supposed to provide IT and marketing services to early-stage startups, 
                as a frontend developer where I was working on the company websites with other team members, 
                and provided services such as designing, developing web page-tool as per team requirements.
                </p>
                <a href='Shubham_Ku.pdf' 
                    download="Sk_Resume.pdf"
                    type="button" 
                    className='btn btn-secondary submit'>
                    DOWNLOAD CV
                </a> 
            </div> 
        </div>
    </div>

    </>
    );
}

export default Card;