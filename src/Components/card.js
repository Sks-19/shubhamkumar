import { HashLink as Link } from "react-router-hash-link";
import image from "../Images/Shubham.JPG";
import "../Styles/card.scss";
import { CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// import { Card } from "antd";

function ProfileCard() {
  return (
    <>
      <div
        id="profile"
        className="container-fluid"
        style={{
          background:
            "linear-gradient(to top right, #011f44 70%, #1d6354 140%)",
        }}
      >
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 my-4">
            <Card className="our-team">
              <CardActionArea>
                <div className="picture">
                  <CardMedia
                    component="img"
                    image={image}
                    alt="profile"
                    className="img-fluid"
                  />
                </div>
                <CardContent>
                  <Typography
                    gutterBottom
                    varient="h2"
                    component="h2"
                    className="team-content"
                  >
                    <h2 className="name">
                      <span>S</span>hubham <span>K</span>umar
                    </h2>
                  </Typography>
                  <hr className="Hr" />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="title"
                  >
                    <span>W</span>EB <span>D</span>EVELOPER
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link
                  to="#resume"
                  type="button"
                  className="btn btn-primary w-50"
                >
                  RESUME
                </Link>
                <Link
                  to="#work"
                  type="button"
                  className="btn btn-outline-primary w-50"
                >
                  PROJECTS
                </Link>
              </CardActions>
            </Card>
            {/* <Card
              hoverable
              bordered={false}
              loading={false}
              className="our-team"
            >
              <div className="picture">
                <img className="img-fluid" src={image} alt="Shubham Kumar" />
              </div>
              <div className="team-content">
                <h2 className="name">
                  <span>S</span>hubham <span>K</span>umar
                </h2>
                <hr className="Hr" />
                <h4 className="title">
                  <span>W</span>EB <span>D</span>EVELOPER
                </h4>
              </div>
              <Link
                to="#resume"
                type="button"
                className="btn btn-primary resumeSubmit"
              >
                RESUME
              </Link>
              <Link
                to="#work"
                type="button"
                className="btn btn-primary projectSubmit"
              >
                PROJECTS
              </Link>
            </Card> */}
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6 my-4">
            <Card
              style={{
                background: "transparent",
                marginTop: "5%",
              }}
            >
              <div className="About">
                <h1 className="Hello">
                  About <span style={{ fontWeight: "bold" }}>Me</span>
                </h1>
                <br />
                <p>
                  I'm a Software Engineer with <strong>2 years</strong> of
                  experience in <strong>Web Development</strong>, with
                  proficiency in <b>web technologies</b> like
                  <strong>
                    {" "}
                    React, JavaScript, HTML5, CSS3, and Bootstrap
                  </strong>
                  , building large-scale web applications, cross-browser
                  platforms, and design constraints on the web, and building
                  responsive user interfaces.
                </p>
                <div className="downloadCV">
                  <a
                    href="Shubham Kumar.pdf"
                    download="shubham kumar.pdf"
                    type="button"
                    className="btn btn-success submit"
                  >
                    DOWNLOAD CV
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
