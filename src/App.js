import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
//import { Routes, Route } from "react-router-dom";
import Card from "./card";
import Footer from "./footer";
import Resume from "./Resume";
import Work from "./work";
import ContactMe from "./Contact";
import Cert from "./Cert";
import Navbar from "./navbar";
import { MdArrowCircleUp } from "react-icons/md";

function App() {
  let btn = document.getElementById("go-up");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 90 ||
      document.documentElement.scrollTop > 90
    ) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  }

  return (
    <>
      <Navbar />
      <Card />
      <a id="go-up" href="#">
        <MdArrowCircleUp className="upBttn" />
      </a>
      <Resume />
      <Work />
      <Cert />
      <ContactMe />

      {/* <Routes>
        <Route path="/shubhamkumarportfolio" element={<Card />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/work" element={<Work />} />
        <Route path="/certification" element={<Cert />} />
        <Route path="/contactme" element={<ContactMe />} />
      </Routes> */}

      <Footer />
    </>
  );
}

export default App;
