import styles from './style.module.css'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef, useEffect } from 'react'
import {motion} from 'framer-motion'

export default function Intro() {
  const backgroundImage = useRef(null);
  const introImage = useRef(null);
  const textWrap = useRef(null);
  const layer = useRef(null);

  const headings = [
    "Web Publisher",
    "Frontend Developer",
    "Leesangdal"
  ]

  // useEffect vs useLayoutEffect
  // useEffect: DOM이 mount 된 후에 코드를 실행
  // useLayoutEffect: DOM이 mount 되기 전에 코드를 실행
  // 화면이 깜빡일 때는 useLayoutEffect를 사용.
  // 그 외 데이터 fetch / event handler / state reset 등 대부분의 경우에는 useEffect 사용을 권장.
  // react 환경에서 gsap 적용법: useRef를 이용해 ref명.current로 요소를 선택하여 사용.

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const textWrapChildren = textWrap.current.children;
    const childrenArr = Array.prototype.slice.call(textWrapChildren);
    childrenArr.forEach((el, i) => {
      el.classList.add(`text${i+1}`);
    })

    /* text rolling animation */
    const tl = gsap.timeline();
    tl.fromTo(".text1 .letter", 
    {
      y: "100%",
    },
    {
      y: "0%",
      duration: .15,
      stagger: 0.03,
    })
    tl.to(".text1", {
      y: "-100%",
      delay: 0.75,
      duration: 0.5,
    })
    tl.fromTo(".text2 .letter", 
    {
      y: "100%",
    },
    {
      y: "-100%",
      duration: .15,
      stagger: 0.03,
    })
    tl.to(".text2", {
      y: "-200%",
      delay: 0.75,
      duration: 1,
    })
    tl.fromTo(".text3 .letter", 
    {
      y: "-100%",
    },
    {
      y: "-200%",
      duration: .15,
      stagger: 0.03,
    })

    /* background images reveal after text rolling animation */
    tl.fromTo(layer.current, {
      y: 0
    }, {
      y: "100%",
      duration: 3,
      ease: "expo.inOut"
    })
    tl.fromTo(introImage.current, {
      opacity: 0,
      height: 0,
    }, 
    {
      height: 580,
      opacity: 1,
      duration: 1.5,
      delay: -1,
      ease: "power4.inOut"
    })

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top",
        end: "+=500px", // top 지점에서부터 500px 동안 애니메이션
        scrub: false,  // 스크롤바와 연동
      }
    })
    scrollTl
    .from(backgroundImage.current, {clipPath: "inset(10%)"})
    .to(introImage.current, {clipPath: "inset(50%)"}, 0) // to에서 마지막에 ',0' => from과 to의 동작이 동시에 일어나도록 함
  })

  return (
    <section className={styles.intro}>
      <div 
        ref={backgroundImage}
        className={styles.backgroundImage}
      >
        <Image
          src="/images/main_img1.jpg"
          alt="background image"
          fill
        />
        <motion.div
          ref={layer}
          className={styles.layer}>
        </motion.div>
      </div>

      <div className={styles.introContainer}>
        <motion.div 
          ref={introImage} 
          data-scroll 
          data-scroll-speed="0.1" 
          className={styles.introImage}
          initial={{opacity:0}}
        >
          <Image
            src="/images/main_img2.png"
            alt="image"
            fill
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: .5,
            }
          }}
          ref={textWrap}
          data-scroll
          data-scroll-speed="0.2" 
          className={styles.introHeadingWrap} 
        >
          {
            headings.map((heading, index) => {
              return <SplittingText key={index}>{heading}</SplittingText>
            })
          }
        </motion.div>
      </div>
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
      span.classList.add("letter");
      text.current.appendChild(span);
    }
  }, [])

  return (
    <h2 ref={text}>{children}</h2>
  )
}