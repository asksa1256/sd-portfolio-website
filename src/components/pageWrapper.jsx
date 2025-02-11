"use client";
import { useEffect, useState, Suspense } from "react";
import TopButton from "./TopButton";

export default function PageWrapper({ children }) {
  const [toTop, setToTop] = useState(false);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      locomotiveScroll.scrollTo(".pageWrapper", {
        offset: 0,
        duration: 1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        onComplete: () => {
          setToTop(false);
        },
      });
    })();
  }, [toTop]);

  function toTopHandler() {
    setToTop(true);
  }

  return (
    <div className="pageWrapper">
      {children}
      <TopButton toTop={toTopHandler} />
    </div>
  );
}
