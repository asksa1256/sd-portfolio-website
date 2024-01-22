"use client";
import { useEffect, useState } from "react";
import TopButton from "./TopButton";
import Header from "./Header";

export default function PageWrapper({ children }) {
  const [toTop, setToTop] = useState(false);
  // const [hrefOffsetTop, setHrefOffsetTop] = useState(0);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      locomotiveScroll.scrollTo(".pageWrapper", {
        offset: 0,
        // offset: hrefOffsetTop,
        duration: 1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        onComplete: () => {
          setToTop(false);
        },
      });
    })();
  }, [toTop]);

  function toTopHandler() {
    // setHrefOffsetTop(0);
    setToTop(true);
  }

  function hrefChangeHandler(href) {
    // const targetHrefOffsetTop = document.querySelector(`${href}`).offsetTop;
    // setHrefOffsetTop(targetHrefOffsetTop);
    // console.log(href);
  }

  return (
    <div className="pageWrapper">
      {/* <Header onHrefHandler={hrefChangeHandler} /> */}
      {children}
      <TopButton toTop={toTopHandler} />
    </div>
  );
}
