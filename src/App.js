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
  var btn = document.getElementById("go-up");
  window.addEventListener("scroll", function () {
    btn.classList.toggle("show", window.scrollY > 200);
  });
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
