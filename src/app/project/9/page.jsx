"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import styles from "./style.module.scss";
import PageWrapper from "@/components/pageWrapper";
import { AnimatePresence, motion as m } from "framer-motion";
import { Container, Item } from "@/animation";

export default function Project09() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const marquee = useRef(null);
  const layer = useRef(null);
  const currentProjectNum = 9;
  let xPercent = 0;
  let speed = 0.05;
  let direction = -1;

  // 뒤로가기 -> 스크롤 위치 복원
  function scrollRestore() {
    const scrollY = sessionStorage.getItem("scrollY");

    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      locomotiveScroll.scrollTo(parseFloat(scrollY), {
        duration: 0, // 즉시 스크롤 이동
        disableLerp: true, // 부드러운 스크롤 비활성화
      });
    })();
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    requestAnimationFrame(marqueeAnim);
    gsap.to(marquee.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: true,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-=300px",
    });

    gsap.to(layer.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: true,
      },
      opacity: 1,
    });
  }, []);

  const marqueeAnim = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 100) {
      xPercent = 0;
    }

    if (!(firstText.current !== null && secondText.current !== null)) return;
    gsap.set([firstText.current, secondText.current], { xPercent: xPercent });
    xPercent += speed * direction;
    requestAnimationFrame(marqueeAnim);
  };

  return (
    <PageWrapper>
      <AnimatePresence mode="wait">
        <m.section
          className="projectDetail"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 1 }}
        >
          <Link className="back" href="/" onClick={scrollRestore}>
            <span className="arrow">←</span>
            <span className="text">Back</span>
          </Link>
          <m.div
            className={`${styles.detailTop} detailTop`}
            variants={Container}
            initial="hidden"
            whileInView="show"
          >
            <div className="layer" ref={layer}></div>
            <m.div
              className="marqueeContainer"
              variants={Container}
              initial="hidden"
              whileInView="show"
            >
              <m.div variants={Item} className="marquee" ref={marquee}>
                <p ref={firstText}>Leesangdal Portfolio Site</p>
                <p ref={secondText}>Leesangdal Portfolio Site</p>
              </m.div>
            </m.div>
          </m.div>
          <m.div
            className="detailContent detailSummary"
            variants={Container}
            initial="hidden"
            whileInView="show"
          >
            <m.h2 variants={Item} className="detailTitle">
              Lee Sangdal Portfolio Website
            </m.h2>
            <m.h4 variants={Item} className="detailSubTitle">
              포트폴리오 웹사이트
            </m.h4>
            <m.div variants={Item} className="detailCtg">
              <span className="chip">웹 디자인</span>
              <span className="chip">웹 퍼블리싱</span>
            </m.div>
            <m.div variants={Item} className="detailList">
              <m.ul
                className="left"
                variants={Container}
                initial="hidden"
                whileInView="show"
              >
                <m.li variants={Item}>
                  <span className="title">링크</span>
                  <div className="desc">
                    <Link className="link disabled" href="/" target="_blank">
                      https://sdlee.vercel.app
                    </Link>
                  </div>
                </m.li>
                <m.li variants={Item}>
                  <span className="title">언어</span>
                  <div className="desc">
                    <span className="chip">Next.js</span>
                    <span className="chip">SCSS</span>
                  </div>
                </m.li>
                <m.li variants={Item}>
                  <span className="title">툴</span>
                  <div className="desc">
                    <span className="chip">Visual Studio Code</span>
                  </div>
                </m.li>
                <m.li variants={Item}>
                  <span className="title">고객사</span>
                  <div className="desc">
                    - <small>(개인)</small>
                  </div>
                </m.li>
                <m.li variants={Item}>
                  <span className="title">유형</span>
                  <div className="desc">웹사이트</div>
                </m.li>
                <m.li variants={Item}>
                  <span className="title">기간</span>
                  <div className="desc">
                    <span className="chip">디자인 10일</span>
                    <span className="chip">퍼블리싱 14일</span>
                  </div>
                </m.li>
                <m.li variants={Item}>
                  <span className="title">기여도</span>
                  <div className="desc">100%</div>
                </m.li>
                <m.li variants={Item}>
                  <span className="title">기타사항</span>
                  <div className="desc">-</div>
                </m.li>
              </m.ul>
              <m.div variants={Item} className="right">
                <m.div
                  className="desc"
                  variants={Container}
                  initial="hidden"
                  whileInView="show"
                >
                  <m.p variants={Item} className="phrase">
                    그동안 해보고 싶었던 인터랙션들이 적용된 개인 포트폴리오
                    웹사이트 입니다. 다양하고 흥미로운 동적 웹을 만들 수 있음을
                    보여주기 위해 스크롤에 따라 반응하는 크고 작은 요소들을 많이
                    넣었고, SSR(Server-side Rendering) 방식의 Next.js와 CSS를 더
                    효율적으로 작성할 수 있는 SCSS를 사용하여 제작했습니다.
                  </m.p>
                </m.div>
              </m.div>
            </m.div>
          </m.div>
          <m.div
            className="previewDesktop"
            variants={Container}
            initial="hidden"
            whileInView="show"
          >
            <iframe
              className="videoIframe"
              src="https://www.youtube.com/embed/lxbcBCpACPQ?si=uXAY9PZmFERNq9Xb&autoplay=1&mute=1&controls=0&loop=1&playlist=lxbcBCpACPQ&playsinline=1&rel=0"
              title="Lee Sangdal portfolio website preview video"
              frameBorder="0"
            ></iframe>
          </m.div>
          <m.div
            className="detailContent"
            variants={Container}
            initial="hidden"
            whileInView="show"
          >
            <m.div variants={Item} className="left">
              <h5 className="contentSubTitle">디자인 컨셉</h5>
            </m.div>
            <m.div variants={Item} className="right">
              <p className="phrase">
                제 이름의 뜻인 ´함께 이룬다´라는 메시지를 담고자 미켈란젤로의
                ´천지창조´를 인용했습니다. 작품 이외의 영역은 검정색과 흰색
                위주로 사용하여 전체적으로 너무 복잡해보이지 않도록 했고, 메인
                페이지의 경우에는 스크롤 인터랙션에 따라 각 섹션들이 부드럽게
                이어지는 애니메이션에 비중을 두었습니다.
              </p>
              <p className="phrase">
                서브 페이지에서도 컨셉을 유지하기 위해 화면 최상단에 큰 이미지를
                먼저 배치하고, 하단에 상세 설명과 이미지들이 나타나는 보편적인
                방식을 적용했으며 화려한 애니메이션 보다는 내용에 더 집중할 수
                있도록 단순하고 깔끔하게 표현했습니다.
              </p>
            </m.div>
          </m.div>
          <div className="imgContainer">
            <div className="imgWrap">
              <m.figure
                variants={Container}
                initial=""
                whileInView="zoomOut"
                viewport={{ once: true }}
              >
                <Image
                  src="/images/pc-main-full.png"
                  alt=""
                  width="200"
                  height="888"
                />
              </m.figure>
              <p className="altText">메인 디자인</p>
              <m.div
                className="imgLayer"
                variants={Container}
                initial=""
                whileInView="slideLeft"
                viewport={{ once: true }}
              ></m.div>
            </div>
          </div>
          <div className="imgContainer">
            <div className="imgWrap">
              <m.figure
                variants={Container}
                initial=""
                whileInView="zoomOut"
                viewport={{ once: true }}
              >
                <Image
                  src="/images/pc-detail-full.png"
                  alt=""
                  width="200"
                  height="464"
                />
              </m.figure>
              <p className="altText">상세 디자인</p>
              <m.div
                className="imgLayer"
                variants={Container}
                initial=""
                whileInView="slideRight"
                viewport={{ once: true }}
              ></m.div>
            </div>
          </div>
          <m.div
            className="detailContent"
            variants={Container}
            initial="hidden"
            whileInView="show"
          >
            <m.div variants={Item} className="left">
              <h5 className="contentSubTitle">Next.js</h5>
            </m.div>
            <m.div variants={Item} className="right">
              <p className="phrase">
                회사에서 Vue.js 프레임워크를 사용하여 SPA(Single Page
                Application) 형식의 그룹웨어를 만들어보고 나서 그 형식에 매력을
                느껴 개인 프로젝트에도 적용해보고 싶었고, Vue.js보다 많이 쓰이는
                React.js로 제작하려다가 React사에서 지원하는 Next.js에 관심이
                생겼습니다.
              </p>
              <p className="phrase">
                Next.js는 라우터 구조상 SPA처럼 사용하려면 Next.js에서
                기본적으로 제공되는 방식과 다르게 코딩해야 했지만, 페이지 전환
                시 깜빡임이 거의 없다는 점이 SPA와 매우 유사해보이고 라우팅은
                리액트보다 훨씬 간편해서 새로운 환경임에도 적응을 빨리 할 수
                있었습니다.
              </p>
              <p className="phrase">
                여기에 페이지 전환 애니메이션, 로딩 애니메이션을 적용해 페이지
                이동을 더 자연스럽게 만들고자 노력했습니다.
              </p>
            </m.div>
          </m.div>
          <m.div
            className="responsiveWrap"
            variants={Container}
            initial="hidden"
            whileInView="show"
          >
            <m.div
              variants={Item}
              className="detailContent justify-center align-center flex-column text-center"
            >
              <h4 className="contentTitle">Responsive</h4>
            </m.div>
            <m.div variants={Item} className="align-center">
              <div className="previewMobile">
                <iframe
                  className="videoIframe"
                  src="https://youtube.com/embed/gHAHVtJQsyk?&controls=0&loop=1&playlist=gHAHVtJQsyk&vq=hd720&playsinline=1&rel=0"
                  title="Lee Sangdal portfolio website mobile preview video"
                  frameBorder="0"
                ></iframe>
              </div>
            </m.div>
          </m.div>
          <m.div
            className="pages"
            variants={Container}
            initial="hidden"
            whileInView="show"
          >
            <Link
              className={`prev ${styles.prev}`}
              href={`/project/${currentProjectNum - 1}`}
            >
              <span className="arrow">←</span>
              <span className="text">Prev Project</span>
            </Link>
            <Link className={`next ${styles.next}`} href="/" scroll={false}>
              <span className="text">Back to main</span>
            </Link>
          </m.div>
        </m.section>
      </AnimatePresence>
    </PageWrapper>
  );
}
