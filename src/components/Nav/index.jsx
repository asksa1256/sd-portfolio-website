import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { links, footerLinks } from "./data";
import { perspective } from "./anim";
import Link from "next/link";

// footer animation
const slideIn = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.75 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
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
    <div className={styles.nav}>
      <div className={styles.body}>
        {links.map((link, i) => {
          const { title, href } = link;
          return (
            <div className={styles.linkContainer} key={`b_${i}`}>
              <motion.div
                href={href}
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <Link href={href} onClick={linkClickHandler}>
                  {title}
                </Link>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
