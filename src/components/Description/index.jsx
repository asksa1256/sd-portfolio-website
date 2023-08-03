import styles from './style.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useLayoutEffect, useRef } from 'react'

export default function Description() {
  const phrases = [
    "멋진 걸 좋아하고,",
    "멋진 웹을 좋아해서",
    "웹퍼블리싱부터 시작해",
    "인터랙티브 개발로 영역을 넓히고 있습니다.",
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
      left: "-120px",
      opacity: 0,
    })
  }, [])

  return (
    <p ref={text}>{children}</p>
  )
}