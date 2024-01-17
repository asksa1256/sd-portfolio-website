"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import styles from "./style.module.scss";
import PageWrapper from "@/components/pageWrapper";
import { motion as m, AnimatePresence } from "framer-motion";
import { Container, Item } from "@/animation";

export default function Project03() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const thirdText = useRef(null);
  const marquee = useRef(null);
  const layer = useRef(null);
  const currentProjectNum = 3;
  let xPercent = 0;
  let speed = 0.05;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();

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
          <Link className="back" href="/" scroll={false}>
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
                <p ref={firstText}>Bismuth</p>
                <p ref={secondText}>Bismuth</p>
                <p ref={thirdText}>Bismuth</p>
              </m.div>
            </m.div>
          </m.div>
          <div className="detailContent detailSummary">
            <m.h2
              className="detailTitle"
              variants={Container}
              initial="hidden"
              whileInView="show"
            >
              Bismuth(비스무스)
            </m.h2>
            <m.h4
              variants={Container}
              initial="hidden"
              whileInView="show"
              className="detailSubTitle"
            >
              비즈니스 분석 솔루션
            </m.h4>
            <m.div
              className="detailCtg"
              variants={Container}
              initial="hidden"
              whileInView="show"
            >
              <m.span variants={Item} className="chip">
                웹 디자인
              </m.span>
              <m.span variants={Item} className="chip">
                웹 퍼블리싱
              </m.span>
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
                    <small>*요청으로 비공개 처리 되었습니다.</small>
                  </div>
                </m.li>
                <m.li variants={Item}>
                  <span className="title">언어</span>
                  <div className="desc">
                    <span className="chip">HTML</span>
                    <span className="chip">CSS</span>
                    <span className="chip">JavaScript</span>
                    <span className="chip">JQuery</span>
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
                    ㈜테라에너지 <small>(자사)</small>
                  </div>
                </m.li>
                <m.li variants={Item}>
                  <span className="title">유형</span>
                  <div className="desc">대시보드</div>
                </m.li>
                <m.li variants={Item}>
                  <span className="title">기간</span>
                  <div className="desc">
                    <span className="chip">디자인 3일</span>
                    <span className="chip">퍼블리싱 7일</span>
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
                    비스무스는 비즈니스 니즈에 따라 시각화된 데이터를 보고
                    조건에 따라 검색할 수 있는 대시보드 솔루션이며, 데이터
                    시각화를 위해 사용된 차트는 Apache ECharts 라이브러리로
                    제작했습니다. 디자인은 따로 정해진 시안 없이 그룹웨어 Hi5와
                    동일한 디자인 컨셉으로 진행하기로 해서 디자인과 퍼블리싱을
                    모두 담당했습니다.
                  </m.p>
                </m.div>
              </m.div>
            </m.div>
          </div>
          <m.div
            className="previewDesktop"
            variants={Container}
            initial="hidden"
            whileInView="show"
          >
            <iframe
              className="videoIframe"
              src="https://www.youtube.com/embed/VNKbcab5bp4?autoplay=1&mute=1&controls=0&loop=1&playlist=VNKbcab5bp4&playsinline=1&rel=0"
              title="Bismuth preview video"
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
              <h5 className="contentSubTitle">Apache ECharts</h5>
            </m.div>
            <m.div variants={Item} className="right">
              <p className="phrase">
                화면 기획안 상 차트를 퍼블리싱해야 했는데 해본 적이 없었고,
                하드코딩으로 작업하면 개발팀에 전달했을 때 데이터 연결도 어려울
                것 같았습니다. 그리고 데이터가 있어야 차트를 표현할 수 있는데
                퍼블리싱 당시에는 실데이터가 없던 상황이라서 어디서부터 어떻게
                시작해야될 지 헤매다가, 잘 짜여진 라이브러리를 사용하는 게 더
                효율적일 것 같다는 생각이 들었습니다.
              </p>
              <p className="phrase">
                여러 차트 라이브러리를 찾다가 발견한 게 ECharts
                라이브러리였습니다. 오픈소스이고, 처음 사용하는 사람도 쉽게 만들
                수 있도록 공식 문서화가 잘 되어 있었으며 차트 종류도 많아서
                비스무스가 제공할 데이터에 맞춰 다양한 시각화를 할 수
                있었습니다. 퍼블리싱 작업 예상 기간도 반응형 포함 10일에서 7일로
                단축되었으며 실 작업 기간은 5일이 소요되었고, 실데이터가 없던
                문제도 가데이터가 담긴 json 파일을 만들어서 차트 코드에 연동하면
                수치에 맞게 표현이 되어서 동적인 대시보드를 쉽게 만들 수
                있었습니다.
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
                  src="/images/bis-2.jpg"
                  alt=""
                  width="776"
                  height="434"
                />
              </m.figure>
              <p className="altText">물가 상승률 차트 구현 화면</p>
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
                  src="/images/bis-3.jpg"
                  alt=""
                  width="1232"
                  height="846"
                />
              </m.figure>
              <p className="altText">물가 상승률 차트 코드</p>
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
              <h4 className="contentSubTitle">숫자 카운트 애니메이션</h4>
            </m.div>
            <m.div variants={Item} className="right">
              <p className="phrase">
                대시보드의 시각화 대상은 크게 숫자 데이터와 차트 데이터로
                나뉘었는데, 차트 데이터를 EChart 라이브러리로 퍼블리싱하니까
                자동으로 페이지 로드 시 차트 애니메이션이 지원되는 반면에 숫자
                데이터는 정적으로 표시되는 게 어색하고 통일성이 없어 보였습니다.
              </p>
              <p className="phrase">
                금융 어플을 이용하다가 통장 잔고 숫자가 카운팅 애니메이션으로
                서서히 증가하는 걸 보고 비스무스 대시보드에 적용하면 좋을 것
                같아서 CSS와 JavaScript로 애니메이션을 만들었습니다.
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
                  src="/images/bis-cnt-cd2.jpg"
                  alt=""
                  width="472"
                  height="578"
                />
              </m.figure>
              <p className="altText">숫자 카운트 HTML</p>
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
                  src="/images/bis-cnt-cd.jpg"
                  alt=""
                  width="556"
                  height="742"
                />
              </m.figure>
              <p className="altText">숫자 카운트 JavaScript</p>
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
                  src="https://youtube.com/embed/vIZegSfQztU?&controls=0&loop=1&playlist=vIZegSfQztU&vq=hd720&playsinline=1&rel=0"
                  title="Bismuth mobile preview video"
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
