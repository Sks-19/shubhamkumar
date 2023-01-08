import "./App.css";
import Footer from "./Components/footer";
import Navbar from "./Components/navbar";
import Scroll from "./Components/scrollUp";
import Loader from "./Components/Loader";
import { lazy, Suspense } from "react";

const ProfileCard = lazy(() => import("./Components/card"));
const Resume = lazy(() => import("./Components/Resume"));
const Work = lazy(() => import("./Components/work"));
const Cert = lazy(() => import("./Components/Cert"));
const ContactMe = lazy(() => import("./Components/Contact"));

function App() {
  // const allSection = document.querySelectorAll(".section");

  // console.log(allSection);
  // const revealSection = function (entries, observer) {
  //   const [entry] = entries;
  //   console.log(entry);

  //   if (entry.isIntersecting) return;
  //   entry.target.classList.remove("section--hidden");
  //   observer.unobserve(entry.target);
  // };

  // const observer = new IntersectionObserver(revealSection, {
  //   root: null,
  //   threshold: 0.15,
  // });

  // allSection.forEach(function (section) {
  //   observer.observe(section);
  //   section.classList.add("section--hidden");
  // });

  return (
    <>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <ProfileCard />
      </Suspense>
      <Scroll />
      <Suspense fallback={<Loader />}>
        <Resume />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Work />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Cert />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <ContactMe />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
