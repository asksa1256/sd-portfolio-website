import styles from './style.module.scss'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/all'

export default function IntervalMarquee() {
  const firstText = useRef([]);
  const secondText = useRef([]);
  const marquee = useRef([]);
  let xPercent = 0;
  let speed = 0.05;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(marqueeAnimLeft);
    requestAnimationFrame(marqueeAnimRight);

    gsap.to([marquee.current[0], marquee.current[1]], {
      scrollTrigger: {
        trigger: marquee.current[0],
        start: "-=300px",
        end: "+=300px",
        scrub: true,
        onUpdate: (e) => direction = e.direction * -1
      },
      x: "-=300px",
    })
  }, [])

  const marqueeAnimLeft = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 100) {
      xPercent = 0;
    }

    if (!(firstText.current[0] !== null && secondText.current[0] !== null)) return;
    gsap.set([firstText.current[0], secondText.current[0]], {xPercent: xPercent})

    xPercent += speed * direction;
    requestAnimationFrame(marqueeAnimLeft);
  }

  const marqueeAnimRight = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 100) {
      xPercent = 0;
    }

    if (!(firstText.current[0] !== null && secondText.current[0] !== null)) return;
    gsap.set([firstText.current[1], secondText.current[1]], {xPercent: -xPercent})

    xPercent += speed * direction;
    requestAnimationFrame(marqueeAnimRight);
  }

  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marquee} ref={el => marquee.current[0] = el}>
        <p ref={el => firstText.current[0] = el}>See the Projects<span className={styles.arrow}>↓↓↓</span>Scroll Down</p>
        <p ref={el => secondText.current[0] = el}>See the Projects<span className={styles.arrow}>↓↓↓</span>Scroll Down</p>
      </div>
      <div className={styles.marquee} ref={el => marquee.current[1] = el}>
        <p ref={el => firstText.current[1] = el}>Scroll Down<span className={styles.arrow}>↓↓↓</span>See the Projects</p>
        <p ref={el => secondText.current[1] = el}>Scroll Down<span className={styles.arrow}>↓↓↓</span>See the Projects</p>
      </div>
    </div>
  )
}

