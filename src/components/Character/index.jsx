import styles from './style.module.scss'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import Tilt from 'react-parallax-tilt';
import useDimension from '@/useDimension'

const sectionName = "character";

export default function Character() {
  const object = useRef(null);
  const character = useRef(null);
  const cardsWrap = useRef(null);
  const cards = useRef(null);
  const cardArr = useRef([]);
  const line = useRef(null);
  const {width} = useDimension();

  useEffect(() => {
    /* section title rolling animation */
    gsap.set(`.letter.${sectionName}`, { y: "100%",});
    gsap.set(".tip", { y: "100%",});

    gsap.to(`.letter.${sectionName}`, {
      scrollTrigger: {
        trigger: character.current,
        start: "-100px bottom",
      },
        y: "0%",
        stagger: 0.025,
    })
    gsap.to(".tip", {
      scrollTrigger: {
        trigger: character.current,
        start: "0px bottom",
      },
      y: "0%",
      delay: 2,  
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
    // if (width > 420) return;
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

    gsap.set(line.current, {left: "50%", top: "50%"})

    const cardsTl = gsap.timeline({
      scrollTrigger: {
        trigger: cardsWrap.current,
        start: "top 250px",
        end: () => innerWidth > 420 ? "+=200%" : "+=500%",
        scrub: true,
        pin: true,
      }
    });
    cardsTl.to(cardArr.current[0], {
      left: () => innerWidth > 420 ? "18%" : "12%"
    })
    cardsTl.to(cardArr.current[1], {
      left: () => innerWidth > 420 ? "0%" : "-70%"
    })
    cardsTl.to(cardArr.current[2], {
      left: () => innerWidth > 420 ? "-18%" : "-152%"
    })
    cardsTl.to(cards.current, {
      rotateY: "90deg",
    })
    cardsTl.to(line.current, {
      opacity: 1,
    })
    cardsTl.to(line.current, {
      height: "2px",
    })
    cardsTl.to(line.current, {
      borderWidth: "1px",
    })
    cardsTl.to(line.current, {
      width: "100vw",
    })
    
  }, [])
  

  return (
    <section className={styles.character} ref={character}>
      <div className='sectionTitle'>
        <div className='headingWrap'>
          <SplittingText>Characteristic</SplittingText>
          <span className={styles.object} ref={object}></span>
        </div>
        <p className='tip'>{width > 420 ? ": 카드에 마우스를 올려보세요." : ": 카드를 클릭해보세요."}</p>
      </div>
      <div className={styles.cardsWrap} ref={cardsWrap}>
        <ul className={styles.cards} ref={cards}>
          <li className={`${styles.card} ${styles.card1}`} ref={el => cardArr.current[0] = el}>
            <Tilt className={styles.tiltWrap}>
              <div className={styles.tiltInner}>
                <span className={styles.deco}></span>
                <span className={styles.deco}></span>
                <h4>호기심</h4>
                <p className={styles.desc}>
                  <span className={styles.en}>:Curiosity</span>
                  정적인 요소들이 동적으로 바뀌는 상상을 하고, 이에 따른 다양한 시도와 실험을 해보는 것을 좋아합니다.
                </p>
              </div>
            </Tilt>
          </li>
          <li className={`${styles.card} ${styles.card2}`} ref={el => cardArr.current[1] = el}>
            <Tilt className={styles.tiltWrap}>
              <div className={styles.tiltInner}>
                <span className={styles.deco}></span>
                <span className={styles.deco}></span>
                <h4>소통</h4>
                <p className={styles.desc}>
                  <span className={styles.en}>:Communication</span>
                  혼자 달려가지 않고, 원활한 소통으로 모두를 위한 화면을 개발하는 것을 중요하게 생각하고 실천합니다.
                </p>
              </div>
            </Tilt>
          </li>
          <li className={`${styles.card} ${styles.card3}`} ref={el => cardArr.current[2] = el}>
            <Tilt className={styles.tiltWrap}>
              <div className={styles.tiltInner}>
                <span className={styles.deco}></span>
                <span className={styles.deco}></span>
                <h4>끈기</h4>
                <p className={styles.desc}>
                  <span className={styles.en}>:Patience</span>
                  구현하기로 한 것은 될 때까지 시도하고, 에러는 해결할 때까지 포기하지 않습니다.
                </p>
              </div>
            </Tilt>
          </li>
        </ul>
        <div className={styles.line} ref={line}></div>
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
      span.classList.add("letter", sectionName);
      text.current.appendChild(span);
    }
  }, [])

  return (
    <h3 ref={text}>{children}</h3>
  )
}