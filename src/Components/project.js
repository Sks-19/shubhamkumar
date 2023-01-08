// import { Card } from "antd";
import { CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// import { Button } from "antd";
import React from "react";
import "../Styles/project.scss";

// const { Meta } = Card;

function Project(props) {
  return (
    <>
      <Card sx={{}} className="projectCard">
        <CardActionArea>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <CardMedia component="img" image={props.photo} alt="project" />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="text-danger"
                >
                  {props.name}
                </Typography>
                <Typography gutterBottom variant="body2" className="text-info">
                  {props.tech_used}
                </Typography>
                <Typography variant="body2" className="text-white">
                  {props.desc}
                </Typography>
              </CardContent>
            </div>
          </div>
        </CardActionArea>

        <CardActions>
          <a
            href={props.link}
            type="button"
            className="btn btn-outline-success w-50"
          >
            Live
          </a>

          <a
            href={props.code}
            type="button"
            className="btn btn-outline-danger w-50"
          >
            Code
          </a>
        </CardActions>
      </Card>
      {/* <Card
        hoverable
        bordered={false}
        className="projectCard"
        cover={<img alt="project.png" src={props.photo} />}
        actions={[
          <a href={props.link} type="button" className="btn">
            Live
          </a>,
          <a href={props.code} type="button" className="btn">
            Code
          </a>,
        ]}
      >
        <Meta
          // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={<h2>{props.name}</h2>}
          description={
            <div className="detail">
              <span>{props.tech_used}</span>
              <h5>{props.desc}</h5>
            </div>
          }
        />
      </Card> */}
    </>
  );
}

export default Project;
