import { useState } from "react";
import styles from "./style.module.scss";
import { motion as m, useMotionValueEvent, useScroll } from "framer-motion";

export default function TopButton(props) {
  const { scrollY, scrollYProgress } = useScroll();
  const [hidden, setHidden] = useState(true);

  useMotionValueEvent(scrollY, "change", () => {
    if (scrollYProgress.current > 0.15) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  });

  function backToTop() {
    props.toTop();
  }

  return (
    <div className={styles.btnWrap}>
      <m.button
        onClick={backToTop}
        className={styles.topButton}
        type="button"
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
      >
        <span className="arrow">↑</span> Top
      </m.button>
    </div>
  );
}
