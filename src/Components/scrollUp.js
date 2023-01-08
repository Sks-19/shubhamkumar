import { useState } from "react";
import { useEffect } from "react";
import { MdArrowCircleUp } from "react-icons/md";
import "../Styles/scrollUp.css";

const Scroll = () => {
  const [isVisible, setIsVisible] = useState();

  const listenToScroll = () => {
    let heightHidden = 170;

    const mouseScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (mouseScroll > heightHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  });

  return (
    <>
      {isVisible && (
        <button className="top-btn" onClick={goToTop}>
          <MdArrowCircleUp className="upBttn" />
        </button>
      )}
    </>
  );
};

export default Scroll;
