import styles from './style.module.scss'
import { motion as m, useMotionValueEvent, useScroll } from "framer-motion"
import { useState } from 'react'

export default function Footer() {
  const { scrollY, scrollYProgress } = useScroll();
  const [hidden, setHidden] = useState(true);
    
  useMotionValueEvent(scrollY, "change", () => {
    if (scrollYProgress.current > 0.97) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  })

  return (
    <footer className={styles.footer}>
      <m.div 
        className={styles.footerInner}
        variants={{
          visible: 0,
          hidden: {y: "-100%"}
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{duration: .3, ease: "easeInOut"}}
      >
        <span className={styles['txt-lg']}>SD&copy;</span>
        <span className={styles['txt-sm']}>2023 Leesangdal.</span>
      </m.div>
    </footer>
  )
}

