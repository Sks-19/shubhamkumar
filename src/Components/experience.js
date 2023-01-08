import { Card, Timeline } from "antd";
import "../Styles/experience.scss";

function Experience(props) {
  return (
    <>
      <Card key={props.key} hoverable bordered={false} className="expCard">
        <div className="expContent">
          <p>{props.duration}</p>
          <h2>
            {props.position}
            <br /> <span>{props.company}</span>
          </h2>
          <Timeline>
            <Timeline.Item>
              <h5>{props.exp1}</h5>
            </Timeline.Item>
            <Timeline.Item>
              <h5>{props.exp2}</h5>
            </Timeline.Item>
            <Timeline.Item>
              <h5>{props.exp3}</h5>
            </Timeline.Item>
          </Timeline>
        </div>
      </Card>
    </>
  );
}

export default Experience;
