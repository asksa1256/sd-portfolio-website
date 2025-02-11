import styles from "./style.module.scss";
import { motion as m, useMotionValueEvent, useScroll } from "framer-motion";
import { useState, useRef } from "react";

export default function Footer() {
  const footer = useRef(null);
  const { scrollY, scrollYProgress } = useScroll();
  const [hidden, setHidden] = useState(true);

  useMotionValueEvent(scrollY, "change", () => {
    if (scrollYProgress.current > 0.97) {
      setHidden(false);
      footer.current.classList.remove("hide");
    } else {
      setHidden(true);
    }
  });

  return (
    <footer ref={footer} className={`${styles.footer} hide`}>
      <m.div
        className={styles.footerInner}
        variants={{
          visible: 0,
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <span className={styles["txt-lg"]}>SD&copy;</span>
        <span className={styles["txt-sm"]}>2023 Leesangdal.</span>
      </m.div>
    </footer>
  );
}
