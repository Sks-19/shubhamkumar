import { Card, Timeline } from "antd";
import "../Styles/Education.scss";

function Education(props) {
  return (
    <>
      <Card key={props.key} hoverable bordered={false} className="eduCard">
        <div className="eduContent">
          <p>{props.duration}</p>
          <h2>
            {props.universityName}
            <br /> <span>{props.degree}</span>
          </h2>
          <Timeline>
            <Timeline.Item>
              <h5>{props.d1}</h5>
            </Timeline.Item>
            <Timeline.Item>
              <h5>{props.d2}</h5>
            </Timeline.Item>
          </Timeline>
        </div>
      </Card>
    </>
  );
}

export default Education;
