import styles from './style.module.css'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

export default function IntervalMarquee() {

  useEffect(() => {
    
  }, [])

  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marquee}>
        <p>Projects<span className={styles.arrow}>↓↓↓</span></p>
        <p>Projects<span className={styles.arrow}>↓↓↓</span></p>
        <p>Projects<span className={styles.arrow}>↓↓↓</span></p>
      </div>
      <div className={styles.marquee}>
        <p>Projects<span className={styles.arrow}>↓↓↓</span></p>
        <p>Projects<span className={styles.arrow}>↓↓↓</span></p>
        <p>Projects<span className={styles.arrow}>↓↓↓</span></p>
      </div>
    </div>
  )
}

