import styles from "./style.module.scss";
import ToggleButton from "../ToggleButton";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import Nav from "../Nav";
import useDimension from "@/useDimension";

export default function Header(props) {
  const [isActive, setIsActive] = useState(false);
  const header = useRef();
  const { width } = useDimension();

  const menu = {
    open: {
      width: width > 1280 ? "480px" : width > 1024 ? "380px" : "100%",
      height: width > 1024 ? "auto" : "100vh",
      top: width > 1024 ? "-24px" : 0,
      right: width > 1024 ? "-24px" : 0,
      borderRadius: width > 1024 ? "24px" : 0,
      transition: {
        duration: 0.75,
        type: "tween",
        ease: [0.76, 0, 0.24, 1],
      },
    },
    closed: {
      width: width > 1024 && width <= 1280 ? "84px" : "100px",
      height: width > 1024 && width <= 1280 ? "32px" : "40px",
      top: width > 1024 ? 0 : "24px",
      right: width > 1024 ? 0 : "24px",
      transition: {
        duration: 0.75,
        type: "tween",
        delay: 0.35,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const onLinkClicked = (target) => {
    props.onLinkClicked(target);
    setIsActive(!isActive);
  };

  useEffect(() => {
    gsap.to(header.current, {
      opacity: 1,
      delay: 8, // 인트로 애니메이션 끝난 후 표시
    });
  }, []);

  return (
    <header className={styles.header} ref={header}>
      <motion.div
        className={styles.menu}
        variants={menu}
        animate={isActive ? "open" : "closed"} // variants에서 지정한 메서드의 애니메이션을 조건에 따라 실행
        initial="closed"
      >
        <AnimatePresence>
          {isActive && <Nav onLinkClicked={onLinkClicked} />}
        </AnimatePresence>
      </motion.div>
      <ToggleButton
        isActive={isActive}
        toggleMenu={() => {
          setIsActive(!isActive);
        }}
      />
    </header>
  );
}
