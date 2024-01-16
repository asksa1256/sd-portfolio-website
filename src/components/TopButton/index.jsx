import { useState, useEffect } from "react";
import styles from "./style.module.scss";
import { motion as m, useMotionValueEvent, useScroll } from "framer-motion";
// import LocomotiveScroll from "locomotive-scroll";

export default function TopButton() {
  const { scrollY, scrollYProgress } = useScroll();
  const [hidden, setHidden] = useState(true);
  // const [toTop, setToTop] = useState(false);

  useMotionValueEvent(scrollY, "change", () => {
    if (scrollYProgress.current > 0.15) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  });

  // function backToTop() {
  //   setToTop(true);
  // }

  // useEffect(() => {
  //   const locomotiveScroll = new LocomotiveScroll();
  //   locomotiveScroll.scrollTo(".pageWrapper", {
  //     offset: 0,
  //     duration: 1,
  //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  //   });

  //   setToTop(false);
  // }, [toTop]);

  return (
    <div className={styles.btnWrap}>
      <m.button
        onClick={backToTop}
        className={styles.topButton}
        type="button"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
      >
        <span className="arrow">↑</span> Top
      </m.button>
    </div>
  );
}
