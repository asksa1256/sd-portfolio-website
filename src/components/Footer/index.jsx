import styles from './style.module.scss'
import { useEffect, useRef } from 'react'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles['txt-lg']}>SD&copy;</span>
      <span className={styles['txt-sm']}>2023 Leesangdal.</span>
    </footer>
  )
}

