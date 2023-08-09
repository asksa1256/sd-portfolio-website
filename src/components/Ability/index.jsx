import styles from './style.module.css'
import gsap from 'gsap'
import Image from 'next/image';
import { useEffect, useRef } from 'react'

const abilityArr = [
  {
    name: 'HTML5',
    iconUrl: '/images/logo_html.png',
  },
  {
    name: 'CSS3',
    iconUrl: '/images/logo_css.png',
  },
  {
    name: 'JavaScript',
    iconUrl: '/images/logo_js.png',
  },
  {
    name: 'JQuery',
    iconUrl: '/images/logo_jquery.png',
  },
  {
    name: 'Vue.js',
    iconUrl: '/images/logo_vue.png',
  },
  {
    name: 'TypeScript',
    iconUrl: '/images/logo_ts.png',
  },
  {
    name: 'React.js',
    iconUrl: '/images/logo_react.png',
  },
  {
    name: 'Next.js',
    iconUrl: '/images/logo_nextjs.png',
  },
  {
    name: 'XD',
    iconUrl: '/images/logo_xd.png',
  },
  {
    name: 'Photoshop',
    iconUrl: '/images/logo_ps.png',
  },
]

export default function Ability() {
  const ability = useRef(null);
  const object = useRef(null);
  // const listArr = useRef([]);

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
    gsap.to(".itemInner", {
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
        <div className={styles.headingWrap}>
          <SplittingText>Ability</SplittingText>
          <span className={styles.object} ref={object}></span>
        </div>
      </div>
      <ul className={styles.abilityList}>
        <AbilityItem/>
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

function AbilityItem() {
  const listArr = useRef([]);

  return (
    abilityArr.map((item, i) => {
      return (
        <li key={'item' + i}>
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