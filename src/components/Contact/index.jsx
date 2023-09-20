import styles from './style.module.scss'
import { useEffect, useRef } from 'react'
import Hands from '../Hands';

export default function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.textWrap}>
        <h3>Contact</h3>
        <p>publee226@gmail.com</p>
      </div>
      <Hands/>
    </section>
  )
}

