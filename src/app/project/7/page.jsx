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

export default function Project07() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const thirdText = useRef(null);
  const marquee = useRef(null);
  const layer = useRef(null);
  const currentProjectNum = 7;
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
    gsap.set([firstText.current, secondText.current, thirdText.current], {
      xPercent: xPercent,
    });
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
                <p ref={firstText}>Selene</p>
                <p ref={secondText}>Selene</p>
                <p ref={thirdText}>Selene</p>
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
              셀린(Selene)
            </m.h2>
            <m.h4 variants={Item} className="detailSubTitle">
              스마트 조명 솔루션
            </m.h4>
            <m.div variants={Item} className="detailCtg">
              <span className="chip">웹 퍼블리싱</span>
              <span className="chip">앱 퍼블리싱</span>
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
                    <Link
                      className="link"
                      href="http://teraenergy.co.kr/teled"
                      target="_blank"
                    >
                      http://teraenergy.co.kr/teled
                    </Link>
                  </div>
                </m.li>
                <m.li variants={Item}>
                  <span className="title">언어</span>
                  <div className="desc">
                    <span className="chip">HTML</span>
                    <span className="chip">CSS</span>
                    <span className="chip">JavaScript</span>
                    <span className="chip">JQuery</span>
                    <span className="chip">Flutter</span>
                  </div>
                </m.li>
                <m.li variants={Item}>
                  <span className="title">툴</span>
                  <div className="desc">
                    <span className="chip">Visual Studio Code</span>
                    <span className="chip">IntelliJ</span>
                  </div>
                </m.li>
                <m.li variants={Item}>
                  <span className="title">고객사</span>
                  <div className="desc">㈜테라에너지 (자사)</div>
                </m.li>
                <m.li variants={Item}>
                  <span className="title">유형</span>
                  <div className="desc">
                    <span className="chip">웹사이트</span>
                    <span className="chip">어플리케이션</span>
                  </div>
                </m.li>
                <m.li variants={Item}>
                  <span className="title">기간</span>
                  <div className="desc">
                    <span className="chip">웹사이트 | 퍼블리싱 2일</span>
                    <span className="chip">어플리케이션 | 퍼블리싱 4일</span>
                  </div>
                </m.li>
                <m.li variants={Item}>
                  <span className="title">기여도</span>
                  <div className="desc">
                    <span className="chip">웹사이트 | 100%</span>
                    <span className="chip">어플리케이션 | 30%</span>
                  </div>
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
                    Selene은 스마트 조명 어플리케이션으로 스마트홈 서비스처럼
                    어플을 통해 조명을 제어하고, 스케줄을 설정하고, 실시간으로
                    실내 조명의 점소등 상태 및 이상 유무를 IoT 통신으로 확인할
                    수 있는 시스템입니다. 본 제품은 Flutter로 개발되었으며
                    상용화를 목표로 제작된 소개 페이지가 있습니다.
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
              src="https://www.youtube.com/embed/dO6C2ubBYQE?autoplay=1&mute=1&controls=0&loop=1&playlist=dO6C2ubBYQE&playsinline=1&rel=0"
              title="Selene website preview video"
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
              <h5 className="contentSubTitle">Flutter</h5>
            </m.div>
            <m.div variants={Item} className="right">
              <p className="phrase">
                Selene 소개 페이지는 기존에 HTML, CSS, JQuery 또는 JavaScript로
                하던 방식과 똑같이 퍼블리싱 하면 되어서 어려움이 없었지만,
                Selene 어플리케이션은 iOS와 Android의 호환성을 고려하여
                Flutter로 개발하게 되었기 때문에 네이티브 앱을 퍼블리싱하기 위해
                Flutter와 Dart 관련 지식이 요구되었습니다.
              </p>
              <p className="phrase">
                Flutter로 어떤 앱을 만들 수 있는지, Flutter로 개발했을 때의
                이점은 무엇인지 이해하며 강의나 간단한 앱 클론 코딩으로 감을
                익혔습니다. 다만 JavaScript에 대한 이해도가 높지 않을 때
                작업했기 때문에 데이터 연동이 필요한 부분이나 복잡한 구현은
                프론트엔드 개발자에 전달해서 작업 시간이 지연되지 않도록
                했습니다.
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
                  src="/images/teled-app-code.png"
                  alt=""
                  width="784"
                  height="830"
                />
              </m.figure>
              <p className="altText">Selene 대시보드 코드</p>
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
                  src="/images/teled-app-dashboard.jpg"
                  alt=""
                  width="700"
                  height="438"
                />
              </m.figure>
              <p className="altText">Selene 대시보드 구현 화면</p>
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
                  src="https://youtube.com/embed/VjcpCgH5ntI?&controls=0&loop=1&playlist=VjcpCgH5ntI&vq=hd720&playsinline=1&rel=0"
                  title="Selene website mobile preview video"
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
            <Link
              className={`next ${styles.next}`}
              href={`/project/${currentProjectNum + 1}`}
            >
              <span className="text">Next Project</span>
              <span className="arrow">→</span>
            </Link>
          </m.div>
        </m.section>
      </AnimatePresence>
    </PageWrapper>
  );
}
