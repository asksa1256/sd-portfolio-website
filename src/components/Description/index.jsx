import styles from './style.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useLayoutEffect, useRef } from 'react'

export default function Description() {
  const phrases = [
    "미켈란젤로의 천지창조에서 신이 아담에게",
    "손을 뻗어 생명력을 불어넣는 것처럼,",
    "동적으로 개발된 인터랙티브 웹은",
    "정적이었던 웹이 살아 움직이게 합니다.",
  ]

  return (
    <div className={styles.description}>
      {
        phrases.map((phrase, index) => {
          return <AnimatedText key={index}>{phrase}</AnimatedText>
        })
      }
    </div>
  )
}

function AnimatedText({children}) {
  const text = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(text.current, {
      scrollTrigger: {
        trigger: text.current,
        start: "0px bottom",  // 브라우저 화면 하단에서부터 시작
        end: "bottom+=400px bottom",  // 각 요소의 400px 아래 지점까지 애니메이션 적용
        scrub: true,
        markers: false,
      },
      left: "-200px",
      opacity: 0,
    })
  }, [])

  return (
    <p ref={text}>{children}</p>
  )
}