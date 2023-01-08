import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Footer() {
  return (
    <>
      <footer
        className="text-center text-white"
        style={{ backgroundColor: "#000000" }}
      >
        <div className="container pt-4">
          <section>
            <a
              className="btn btn-link btn-floating btn-lg text-white m-1"
              href="https://www.hackerrank.com/Shubham_Kumar_45?hr_r=1"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <FaHackerrank />
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-white m-1"
              href="https://leetcode.com/Sharma1945/"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <SiLeetcode />
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-white m-1"
              href="https://www.linkedin.com/in/shubham-kumar19/"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <BsLinkedin />
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-white m-1"
              href="https://github.com/Sks-19"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <BsGithub />
            </a>
          </section>

          <div className="text-center p-4">
            © 2022 by
            <h6 className="d-inline text-white"> Shubham Kumar</h6>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
