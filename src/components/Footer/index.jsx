import styles from './style.module.scss'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/all'

export default function Footer() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

  }, [])

  return (
    <footer className={styles.footer}>
      <span className={styles['txt-lg']}>SD&copy;</span>
      <span className={styles['txt-sm']}>2023 Leesangdal.</span>
    </footer>
  )
}

