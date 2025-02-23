import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./style.module.scss";
import Image from "next/image";

const items = [
  {
    url: "https://asksa1256.github.io/3d-sphere-reflection",
    imgUrl: "/images/3d-sphere.png",
    alt: "3D 구형 반사체",
    imgWidth: 800,
    imgHeight: 540,
    sizes: "(max-width: 600px) 100vw, 40vw",
    title: "3D sphere reflection",
    tag: ["Three.js", "Webpack", "WebGL"],
  },
];

export default function MoreThings() {
  const moreThings = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const pageContainer = document.querySelector(".moreThings");

    // smooth scroll init
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      locomotiveScroll.scrollTo(".pageWrapper", {
        offset: 0,
        duration: 1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      window.addEventListener("scroll", ScrollTrigger.update);

      ScrollTrigger.scrollerProxy(pageContainer, {
        scrollTop() {
          return window.scrollY;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: pageContainer.style.transform ? "transform" : "fixed",
      });

      let pinWrap = document.querySelector(".pin-wrap");
      let pinWrapWidth = pinWrap.offsetWidth;
      let horizontalScrollLength = pinWrapWidth - window.innerWidth;

      // Pinning and horizontal scrolling
      gsap.to(".pin-wrap", {
        scrollTrigger: {
          scroller: pageContainer,
          scrub: 1,
          trigger: "#horizonScrollPin",
          pin: true,
          pinSpacing: true,
          start: "top top",
          end: `+=${pinWrapWidth / 4}`,
        },
        x: -horizontalScrollLength,
        ease: "none",
      });
    })();

    /* section title rolling animation */
    gsap.set(`.letter`, { y: "100%" });
    gsap.to(`.letter`, {
      scrollTrigger: {
        trigger: moreThings.current,
        start: () =>
          innerWidth <= 1280 && innerWidth > 650
            ? "100px bottom"
            : "0px bottom",
        toggleActions: "play none none reverse",
      },
      y: "0%",
      stagger: 0.025,
    });
  }, []);

  return (
    <section
      id="MoreThings"
      className={`${styles.moreThings} moreThings`}
      ref={moreThings}
    >
      <div className={styles.sectionTitle}>
        <h2>
          <div className={styles.headingWrap}>
            <SplittingText>More things</SplittingText>
          </div>
          <div className={styles.headingWrap}>
            <SplittingText>to see...</SplittingText>
          </div>
        </h2>
      </div>
      <section id="horizonScrollPin">
        <div className="pin-wrap">
          <h2>
            <AnimatedText>
              새로운 세상이 더 넓고 다채로울 수 있도록 다양한 시도를 하고
              있습니다.
            </AnimatedText>
          </h2>
          <div className={styles.card}>
            <a
              href="https://asksa1256.github.io/3d-sphere-reflection"
              target="_blank"
            >
              <Image
                src="/images/3d-sphere.png"
                alt=""
                width={800}
                height={540}
                sizes="(max-width: 600px) 100vw, 40vw"
              />
            </a>
            <div className={styles.desc}>
              <h4>3D sphere reflection</h4>
              <ul className={`${styles.chips} chips`}>
                <span className="chip">Three.js</span>
                <span className="chip">Webpack</span>
                <span className="chip">WebGL</span>
              </ul>
              <p>구체 안에 배경화면이 반사되어 나타나는 3D 모션</p>
            </div>
          </div>
          <div className={styles.card}>
            <a
              href="https://asksa1256.github.io/draggable-viewport/"
              target="_blank"
            >
              <Image
                src="/images/draggable-viewport.png"
                alt=""
                width={700}
                height={340}
                sizes="(max-width: 600px) 100vw, 40vw"
              />
            </a>
            <div className={styles.desc}>
              <h4>Draggable Gallery</h4>
              <ul className={`${styles.chips} chips`}>
                <span className="chip">HTML</span>
                <span className="chip">CSS</span>
                <span className="chip">JavaScript</span>
                <span className="chip">GSAP</span>
              </ul>
              <p>드래그 앤 드롭으로 화면 내에서 상하좌우로 움직이는 갤러리</p>
            </div>
          </div>
          <div className={styles.card}>
            <a href="https://codepen.io/asksa1256/pen/gbOMOdr" target="_blank">
              <Image
                src="/images/text-reveal-scroll.png"
                alt=""
                width={724}
                height={376}
                sizes="(max-width: 600px) 100vw, 40vw"
              />
            </a>
            <div className={styles.desc}>
              <h4>Text reveal on scroll</h4>
              <ul className={`${styles.chips} chips`}>
                <span className="chip">HTML</span>
                <span className="chip">CSS</span>
                <span className="chip">JavaScript</span>
                <span className="chip">GSAP</span>
              </ul>
              <p>스크롤에 따라 텍스트가 나타나는 인터랙션</p>
            </div>
          </div>
          <div className={styles.card}>
            <a href="https://codepen.io/asksa1256/pen/JojKjWm" target="_blank">
              <Image
                src="/images/gnb-indicate.gif"
                alt=""
                width={420}
                height={340}
                sizes="(max-width: 600px) 100vw, 40vw"
              />
            </a>
            <div className={styles.desc}>
              <h4>GNB 메뉴 클릭 인터랙션</h4>
              <ul className={`${styles.chips} chips`}>
                <span className="chip">HTML</span>
                <span className="chip">CSS</span>
                <span className="chip">JavaScript</span>
              </ul>
              <p>메뉴를 클릭하면 해당 항목으로 active 배경이 이동하는 GNB</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

function SplittingText({ children }) {
  const text = useRef(null);

  useEffect(() => {
    let innerText = text.current.innerText;
    text.current.innerText = "";

    for (let letter of innerText) {
      let span = document.createElement("span");
      span.innerText = letter.trim() === "" ? "\xa0" : letter;
      span.classList.add("letter");
      text.current.appendChild(span);
    }
  }, []);

  return <span ref={text}>{children}</span>;
}

function AnimatedText({ children }) {
  const text = useRef(null);

  useEffect(() => {
    gsap.from(text.current, {
      scrollTrigger: {
        trigger: text.current,
        start: "0px bottom", // 브라우저 화면 하단에서부터 시작
        end: "bottom+=400px bottom", // 각 요소의 400px 아래 지점까지 애니메이션 적용
        scrub: true,
        markers: false,
      },
      left: "-120px",
      opacity: 0,
    });
  }, []);

  return <p ref={text}>{children}</p>;
}
