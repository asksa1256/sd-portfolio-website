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
      <p className={styles.copy}>
        This work is based on &quot;The Creation of Adam&quot; (https://sketchfab.com/3d-models/the-creation-of-adam-4d1727c7b83e4e6284bbadb63dbb537e) by Loïc Norgeot (https://sketchfab.com/norgeotloic) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
      </p>
    </section>
  )
}

