import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { links } from "./data";
import Link from "next/link";

// animation
const slideIn = {
  initial: {
    y: "100%",
  },
  enter: (i) => ({
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.75 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    y: "100%",
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export default function Nav(props) {
  const linkClickHandler = (e) => {
    e.preventDefault();
    const targetLink = e.target.getAttribute("href");
    props.onLinkClicked(targetLink);
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.body}>
        {links.map((link, i) => {
          const { title, href } = link;
          return (
            <li className={styles.linkContainer} key={`b_${i}`}>
              <motion.div
                href={href}
                custom={i}
                variants={slideIn}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <Link href={href} onClick={linkClickHandler}>
                  {title}
                </Link>
              </motion.div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
