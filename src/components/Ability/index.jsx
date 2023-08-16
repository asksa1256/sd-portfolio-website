import styles from './style.module.css'
import gsap from 'gsap'
import Image from 'next/image';
import { useEffect, useRef } from 'react'

const sectionName = "ability";

const abilityArr = [
  {
    name: 'HTML5',
    iconUrl: '/images/logo_html.png',
    color: '#F4652E',
  },
  {
    name: 'CSS3',
    iconUrl: '/images/logo_css.png',
    color: '#3E9DD6',
  },
  {
    name: 'JavaScript',
    iconUrl: '/images/logo_js.png',
    color: '#F0DC4E',
  },
  {
    name: 'JQuery',
    iconUrl: '/images/logo_jquery.png',
    color: '#147DC2',
  },
  {
    name: 'Vue.js',
    iconUrl: '/images/logo_vue.png',
    color: '#41B880',
  },
  {
    name: 'TypeScript',
    iconUrl: '/images/logo_ts.png',
    color: '#017ACD',
  },
  {
    name: 'React.js',
    iconUrl: '/images/logo_react.png',
    color: '#49B0FD',
  },
  {
    name: 'Next.js',
    iconUrl: '/images/logo_nextjs.png',
    color: '#000',
  },
  {
    name: 'XD',
    iconUrl: '/images/logo_xd.png',
    color: '#470136',
  },
  {
    name: 'Photoshop',
    iconUrl: '/images/logo_ps.png',
    color: '#001E36',
  },
]

export default function Ability() {
  const ability = useRef(null);
  const object = useRef(null);
  const preventMouseEvent = useRef(null);

  useEffect(() => {
    gsap.registerPlugin();

    /* section title rolling animation */
    gsap.set(`.letter.${sectionName}`, { y: "100%",});
    gsap.to(`.letter.${sectionName}`, {
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
        start: "700px bottom",
        toggleActions: "play none none reverse",
      },
    });
    objectTl.to(object.current, {
      delay: 0.5,
      opacity: 1,
    })

    /* list animation */
    gsap.to(".itemInner", {
      scrollTrigger: {
        trigger: ability.current,
        start: "700px bottom",
        toggleActions: "play none none reverse",
      },
      y: "0%",
      delay: 0.75,
      stagger: 0.05,
    })

    gsap.to(preventMouseEvent.current, {
      scrollTrigger: {
        trigger: ability.current,
        start: "700px bottom",
      },
      visibility: "hidden",
      delay: 1.5,
    })
    
  }, [])

  return (
    <section className={`${styles.ability} ability`} ref={ability}>
      <div className={`${styles.sectionTitle} sectionTitle`}>
        <div className={styles.headingWrap}>
          <span className={styles.object} ref={object}></span>
          <SplittingText>Ability</SplittingText>
        </div>
      </div>
      <ul className={styles.abilityList}>
        <AbilityItem/>
        <li className={styles.preventMouseEvent} ref={preventMouseEvent}></li>
      </ul>
    </section>
  )
}

function SplittingText({children}) {
  const text = useRef(null);

  useEffect(() => {
    /* text split */
    let innerText = text.current.innerText;
    text.current.innerText = "";

    for (let letter of innerText) {
      let span = document.createElement("span");
      span.innerText = letter.trim() === "" ? "\xa0" : letter;
      span.classList.add("letter", sectionName);
      text.current.appendChild(span);
    }
  }, [])

  return (
    <h3 ref={text}>{children}</h3>
  )
}

function AbilityItem() {
  const listArr = useRef([]);

  const handleMouseEnter = (e, color) => {
    gsap.to(e.currentTarget, {backgroundColor: "#fff", color: color, y: -24})
  }

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {backgroundColor: "#000", color: "#fff", y: 0})
  }

  return (
    abilityArr.map((item, i) => {
      return (
        <li
          onMouseEnter={(e) => {handleMouseEnter(e, item.color)}} 
          onMouseLeave={(e) => {handleMouseLeave(e, item.color)}} 
          key={'item' + i}
        >
          <span className='itemInner' ref={el => listArr.current[i] = el}>
            <Image 
              src={item.iconUrl}
              alt='' 
              fill
              className={styles.icon}
            />
            <em>{item.name}</em>
          </span>
        </li>
      )
    })
  )
}