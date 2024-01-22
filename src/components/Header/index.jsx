import styles from "./style.module.scss";
import Button from "../Button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "../Nav";

const menu = {
  open: {
    width: "480px",
    height: "650px",
    top: "-25px",
    right: "-25px",
    transition: {
      duration: 0.75,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
  closed: {
    width: "100px",
    height: "40px",
    top: "0px",
    right: "0px",
    transition: {
      duration: 0.75,
      type: "tween",
      delay: 0.35,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export default function Header(props) {
  const [isActive, setIsActive] = useState(false);

  return (
    <header className={styles.header}>
      <motion.div
        className={styles.menu}
        variants={menu} // const 'menu' function
        animate={isActive ? "open" : "closed"} // variants에서 지정한 메서드의 애니메이션을 조건에 따라 실행
        initial="closed"
      >
        <AnimatePresence>
          {isActive && <Nav onLinkClicked={props.onHrefHandler} />}
        </AnimatePresence>
      </motion.div>
      <Button
        isActive={isActive}
        toggleMenu={() => {
          setIsActive(!isActive);
        }}
      />
    </header>
  );
}
