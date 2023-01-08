// import { Card } from "antd";
import React from "react";
import { CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "../Styles/certification.scss";

// const { Meta } = Card;

const Certification = (props) => {
  return (
    <>
      <Card className="certCard">
        <CardActionArea>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <CardMedia
                component="img"
                image={props.image}
                alt="certificate"
              />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="text-primary"
                >
                  {props.name}
                </Typography>
                <Typography gutterBottom variant="body2" className="text-info">
                  Issued &nbsp;{props.issueDate}
                </Typography>
                <Typography variant="body2" className="text-white">
                  Credential ID : {props.Id}
                </Typography>
              </CardContent>
            </div>
          </div>
        </CardActionArea>

        <CardActions>
          <a
            href={props.link}
            type="button"
            className="btn btn-outline-success  text-white w-100"
          >
            Show Credential
          </a>
        </CardActions>
      </Card>
      {/* <Card
        hoverable
        className="certCard"
        cover={<img alt="project.png" src={props.image} />}
        actions={[
          <a href={props.link} type="button" className="btn  text-white">
            Show Credential
          </a>,
        ]}
      >
        <Meta
          // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={<h2>{props.name}</h2>}
          description={
            <div className="detail">
              <span>{props.organization}</span>
              <p className="text-white">Issued {props.issueDate}</p>
              <p className="text-white">Credential ID : {props.Id}</p>
            </div>
          }
        />
      </Card> */}
      {/* <div className="py-4">
        <div className="row certCard">
          <div className="col-lg-6 col-md-12 col-sm-12 certContent">
            <div className="detail">
              <h2>
                <span>{props.organization}</span>
              </h2>
              <p className="text-white">Issued {props.issueDate}</p>
              <p className="text-white">Credential ID : {props.Id}</p>
            </div>
            <div>
              <a
                href={props.link}
                type="button"
                className="btn btn-info text-white btnShow"
              >
                Show Credential
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 certImg">
            <img src={props.image} alt="Evento.png" />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Certification;
