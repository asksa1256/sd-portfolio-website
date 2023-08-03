import styles from './style.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useEffect, useRef } from 'react'

export default function Description() {
  const circle = useRef(null);
  const ellipse = useRef(null);
  const bigEllipse = useRef(null);
  const circleText = useRef(null);
  const ellipseText = useRef(null);
  const bigEllipseText = useRef(null);

  const phrases = [
    "멋진 걸 좋아하고,",
    "멋진 웹을 좋아해서",
    "웹 퍼블리싱과 인터랙션 개발을 넘어",
    "프론트엔드 개발로",
    "영역을 넓혀 가고 있습니다."
  ]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(circle.current, {
      scrollTrigger: {
        trigger: bigEllipse.current,
        start: "0px bottom",  // 브라우저 화면 하단에서부터 시작
        end: "bottom+=400px bottom",  // 각 요소의 400px 아래 지점까지 애니메이션 적용
      },
      strokeDashoffset: 210,
      duration: 1,
    })
    gsap.to(ellipse.current, {
      scrollTrigger: {
        trigger: bigEllipse.current,
        start: "0px bottom",  // 브라우저 화면 하단에서부터 시작
        end: "bottom+=400px bottom",  // 각 요소의 400px 아래 지점까지 애니메이션 적용
      },
      strokeDashoffset: 520,
      delay: 0.3,
      duration: 1.5,
    })
    gsap.to(bigEllipse.current, {
      scrollTrigger: {
        trigger: bigEllipse.current,
        start: "0px bottom",  // 브라우저 화면 하단에서부터 시작
        end: "bottom+=400px bottom",  // 각 요소의 400px 아래 지점까지 애니메이션 적용
      },
      strokeDashoffset: 95,
      delay: 0.5,
      duration: 1.75,
    })
    gsap.fromTo([circleText.current, ellipseText.current, bigEllipseText.current], {
      opacity: 0,
    }, {
      scrollTrigger: {
        trigger: bigEllipse.current,
        start: "0px bottom",  // 브라우저 화면 하단에서부터 시작
        end: "bottom+=400px bottom",  // 각 요소의 400px 아래 지점까지 애니메이션 적용
      },
      opacity: 1,
      delay: 1,
      duration: 1.5,
      stagger: 0.25,
    })
  }, [])

  return (
    <div className={styles.description}>
      <div className={styles.left}>
      {
        phrases.map((phrase, index) => {
          return <AnimatedText key={index}>{phrase}</AnimatedText>
        })
      }
      </div>
      <div className={styles.right}>
        <div className={styles.circleWrap}>
          <svg 
            className={styles.circle} 
            viewBox="0 0 600 250"
            perserveaspectratio="xMinYMid"
          >
            <circle cx="110" cy="150" r="40" ref={circle}></circle>
            <text x="110" y="150" textAnchor="middle" alignmentBaseline='middle' ref={circleText}>인터랙션 개발</text>
          </svg>
          <svg 
            className={styles.ellipse} 
            viewBox="0 0 600 250"
            perserveaspectratio="xMinYMid"
          >
            <ellipse cx="250" cy="150" rx="220" ry="75" ref={ellipse}></ellipse>
            <text x="250" y="150" textAnchor="middle" alignmentBaseline='middle' ref={ellipseText}>웹 퍼블리싱</text>
          </svg>
          <svg 
            className={`${styles.ellipse} ${styles.big}`} 
            viewBox="0 0 600 250"
            perserveaspectratio="xMinYMid"
          >
            <ellipse cx="320" cy="150" rx="320" ry="100" ref={bigEllipse}></ellipse>
            <text x="540" y="150" textAnchor="middle" alignmentBaseline='middle' ref={bigEllipseText}>프론트엔드 개발</text>
          </svg>
        </div>
      </div>
    </div>
    
  )
}

function AnimatedText({children}) {
  const text = useRef(null);

  useEffect(() => {
    // gsap.registerPlugin(ScrollTrigger);

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