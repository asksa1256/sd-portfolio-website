import styles from './style.module.css'
import Image from 'next/image'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import Tilt from 'react-parallax-tilt';

export default function Character() {
  const object = useRef(null);
  const character = useRef(null);
  const cards = useRef(null);
  const cardArr = useRef([]);

  useEffect(() => {
    /* section title rolling animation */
    gsap.set(".letter", { y: "100%",});
    gsap.to(".letter", {
      scrollTrigger: {
        trigger: character.current,
        start: "-100px bottom",  // 브라우저 화면 하단에서부터 시작
      },
        y: "0%",
        stagger: 0.025,
    })

    /* object animation */
    gsap.to(object.current, {
      scrollTrigger: {
        trigger: object.current,
      },
      delay: 1,
      opacity: 1,
      rotate: "15deg",
    })

    /* cards animation */
    gsap.to(cardArr.current, {
      scrollTrigger: {
        trigger: cardArr.current,
        start: "0px bottom",  // 브라우저 화면 하단에서부터 시작
      },
      delay: 1,
      opacity: 1,
      stagger: 0.25,
      duration: 0.5,
    })
  }, [])
  

  return (
    <section className={styles.character} ref={character}>
      <div className='headingWrap'>
        <SplittingText>Characteristic</SplittingText>
        <span className={styles.object} ref={object}></span>
      </div>
      <ul className={styles.cards} ref={cards}>
        <li className={`${styles.card} ${styles.card1}`} ref={el => cardArr.current[0] = el}>
          <Tilt className={styles.tiltWrap}>
            <div className={styles.tiltInner}>
              <span className={styles.deco}></span>
              <span className={styles.deco}></span>
              <h4>도전</h4>
              <p className={styles.desc}>
                <span className={styles.en}>:Challenge</span>
                언제나 새로운 기술에 열려있는 마음으로, 실험과 시도를 멈추지 않습니다.
              </p>
            </div>
          </Tilt>
        </li>
        <li className={`${styles.card} ${styles.card2}`} ref={el => cardArr.current[1] = el}>
          <Tilt className={styles.tiltWrap}>
            <div className={styles.tiltInner}>
              <span className={styles.deco}></span>
              <span className={styles.deco}></span>
              <h4>균형</h4>
              <p className={styles.desc}>
                <span className={styles.en}>:Balance</span>
                새로움을 접목시키면서도 웹 접근성, 브라우저 호환성과 같은 기본 규칙을 지켜서 둘 사이의 균형을 유지합니다.
              </p>
            </div>
          </Tilt>
        </li>
        <li className={`${styles.card} ${styles.card3}`} ref={el => cardArr.current[2] = el}>
          <Tilt className={styles.tiltWrap}>
            <div className={styles.tiltInner}>
              <span className={styles.deco}></span>
              <span className={styles.deco}></span>
              <h4>유연함</h4>
              <p className={styles.desc}>
                <span className={styles.en}>:Flexibility</span>
                변하기 쉬운 사용자의 요구사항과, 구현할 수 있는 기술 사이의 타협점을 잘 찾아서 적용합니다.
              </p>
            </div>
          </Tilt>
        </li>
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