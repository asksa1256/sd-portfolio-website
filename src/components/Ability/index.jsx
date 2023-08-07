import styles from './style.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useEffect, useRef } from 'react'

export default function Ability() {
  const ability = useRef(null);
  const object = useRef(null);
  const listArr = useRef([]);

  useEffect(() => {
    gsap.registerPlugin();

    /* section title rolling animation */
    gsap.set(".letter", { y: "100%",});
    gsap.to(".letter", {
      scrollTrigger: {
        trigger: ability.current,
        start: "700px bottom",
        toggleActions: "play none none reverse",
      },
        y: "0%",
        stagger: 0.025,
    })

    /* object animation */
    const objectTl = gsap.timeline({
      scrollTrigger: {
        trigger: ability.current,
        start: "800px bottom",
        toggleActions: "play none none reverse",
      },
    });
    objectTl.to(object.current, {
      delay: 2,
      opacity: 1,
    })
    objectTl.to(object.current, {
      left: "1%",
    })

    /* list animation */
    gsap.to(listArr.current, {
      scrollTrigger: {
        trigger: ability.current,
        start: "800px bottom",
        toggleActions: "play none none reverse",
      },
      delay: 2.5,
      y: "0%",
      stagger: 0.05,
    })
    
  }, [])

  return (
    <section className={styles.ability} ref={ability}>
      <div className='sectionTitle'>
        <div className='headingWrap'>
          <SplittingText>Ability</SplittingText>
          <span className={styles.object} ref={object}></span>
        </div>
      </div>
      <ul className={styles.abilityList}>
        <li><span ref={el => listArr.current[0] = el}>HTML5</span></li>
        <li><span ref={el => listArr.current[1] = el}>CSS3</span></li>
        <li><span ref={el => listArr.current[2] = el}>JavaScript</span></li>
        <li><span ref={el => listArr.current[3] = el}>JQuery</span></li>
        <li><span ref={el => listArr.current[4] = el}>Vue.js</span></li>
        <li><span ref={el => listArr.current[5] = el}>TypeScript</span></li>
        <li><span ref={el => listArr.current[6] = el}>React.js</span></li>
        <li><span ref={el => listArr.current[7] = el}>Next.js</span></li>
        <li><span ref={el => listArr.current[8] = el}>XD</span></li>
        <li><span ref={el => listArr.current[9] = el}>PhotoShop</span></li>
      </ul>
    </section>
  )
}

function SplittingText({children}) {
  const characterTitle = useRef(null);

  useEffect(() => {
    /* text split */
    let innerText = characterTitle.current.innerText;
    characterTitle.current.innerText = "";

    for (let letter of innerText) {
      let span = document.createElement("span");
      span.innerText = letter.trim() === "" ? "\xa0" : letter;
      span.classList.add("letter");
      characterTitle.current.appendChild(span);
    }
  }, [])

  return (
    <h3 ref={characterTitle}>{children}</h3>
  )
}