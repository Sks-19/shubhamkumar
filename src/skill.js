import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./skills.css";
import {
  FaReact,
  FaPython,
  FaHtml5,
  FaBootstrap,
  FaSass,
} from "react-icons/fa";
import { DiJavascript, DiCss3 } from "react-icons/di";
import { SiTypescript, SiRedux } from "react-icons/si";
import { AiFillApi } from "react-icons/ai";

function Skill() {
  return (
    <>
      <div className="py-2">
        <label className="label">
          <FaReact className="mx-1" />
          React.js
        </label>
        <div class="progress progressBar">
          <div
            class="progress-bar progress-bar-striped"
            role="progressbar"
            style={{ width: "60%", backgroundColor: "#02d3d1" }}
            aria-valuenow="10"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            60%
          </div>
        </div>
        <label className="label">
          <DiJavascript className="mx-1" />
          JavaScript
        </label>
        <div class="progress progressBar">
          <div
            class="progress-bar progress-bar-striped"
            role="progressbar"
            style={{ width: "70%", backgroundColor: "#02d3d1" }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            70%
          </div>
        </div>
        <label className="label">
          <FaPython className="mx-1" />
          Python
        </label>
        <div class="progress progressBar">
          <div
            class="progress-bar progress-bar-striped"
            role="progressbar"
            style={{ width: "70%", backgroundColor: "#02d3d1" }}
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            70%
          </div>
        </div>
        <label className="label">
          <FaHtml5 className="mx-1" />
          HTML5
        </label>
        <div class="progress progressBar">
          <div
            class="progress-bar progress-bar-striped"
            role="progressbar"
            style={{ width: "80%", backgroundColor: "#02d3d1" }}
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            80%
          </div>
        </div>
        <label className="label">
          <DiCss3 className="mx-1" />
          CSS
        </label>
        <div class="progress progressBar">
          <div
            class="progress-bar progress-bar-striped"
            role="progressbar"
            style={{ width: "80%", backgroundColor: "#02d3d1" }}
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            80%
          </div>
        </div>
        <label className="label">
          <FaBootstrap className="mx-1" />
          Bootstrap
        </label>
        <div class="progress progressBar">
          <div
            class="progress-bar progress-bar-striped"
            role="progressbar"
            style={{ width: "70%", backgroundColor: "#02d3d1" }}
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            70%
          </div>
        </div>
        <label className="label">
          <SiTypescript className="mx-1" />
          TypeScript
        </label>
        <div class="progress progressBar">
          <div
            class="progress-bar progress-bar-striped"
            role="progressbar"
            style={{ width: "50%", backgroundColor: "#02d3d1" }}
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            50%
          </div>
        </div>
        <label className="label">
          <FaSass className="mx-1" />
          SASS
        </label>
        <div class="progress progressBar">
          <div
            class="progress-bar progress-bar-striped"
            role="progressbar"
            style={{ width: "50%", backgroundColor: "#02d3d1" }}
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            50%
          </div>
        </div>
        <label className="label">
          <SiRedux className="mx-1" />
          Redux
        </label>
        <div class="progress progressBar">
          <div
            class="progress-bar progress-bar-striped"
            role="progressbar"
            style={{ width: "40%", backgroundColor: "#02d3d1" }}
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            40%
          </div>
        </div>
        <label className="label">
          <AiFillApi className="mx-1" />
          RESTful API
        </label>
        <div class="progress progressBarLast">
          <div
            class="progress-bar progress-bar-striped"
            role="progressbar"
            style={{ width: "40%", backgroundColor: "#02d3d1" }}
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            40%
          </div>
        </div>
      </div>
    </>
  );
}

export default Skill;
