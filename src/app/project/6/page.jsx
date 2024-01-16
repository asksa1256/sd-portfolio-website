"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import styles from "./style.module.scss";
import PageWrapper from "@/components/pageWrapper";
import { motion as m } from "framer-motion";
import { Container, Item } from "@/animation";

const scrollImages = [
  {
    src: "card-html.png",
    width: "510",
    height: "666",
    text: "스크롤 인터랙션 HTML",
  },
  {
    src: "card-css.png",
    width: "640",
    height: "420",
    text: "스크롤 인터랙션 CSS",
  },
  {
    src: "card-js.png",
    width: "364",
    height: "120",
    text: "스크롤 인터랙션 JavaScript",
  },
  {
    src: "card-anim-result.gif",
    width: "700",
    height: "394",
    text: "스크롤 인터랙션 구현 화면",
  },
];

export default function Project06() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const thirdText = useRef(null);
  const marquee = useRef(null);
  const layer = useRef(null);
  const currentProjectNum = 6;
  let xPercent = 0;
  let speed = 0.05;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (window.innerWidth > 768) {
      (async () => {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        const locomotiveScroll = new LocomotiveScroll();
      })();
    }

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
      <section className="projectDetail">
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
              <p ref={firstText}>Cacaorder</p>
              <p ref={secondText}>Cacaorder</p>
              <p ref={thirdText}>Cacaorder</p>
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
            카카오더(Cacaorder)
          </m.h2>
          <m.h4 variants={Item} className="detailSubTitle">
            스마트 오더 솔루션
          </m.h4>
          <m.div variants={Item} className="detailCtg">
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
                  <Link
                    className="link"
                    href="http://teraenergy.co.kr/cacaorder"
                    target="_blank"
                  >
                    http://teraenergy.co.kr/cacaorder
                  </Link>
                </div>
              </m.li>
              <m.li variants={Item}>
                <span className="title">언어</span>
                <div className="desc">
                  <span className="chip">HTML</span>
                  <span className="chip">CSS</span>
                  <span className="chip">JQuery</span>
                </div>
              </m.li>
              <m.li variants={Item}>
                <span className="title">툴</span>
                <div className="desc">
                  <span className="chip">Visual Studio Code</span>
                  <span className="chip">Figma</span>
                </div>
              </m.li>
              <m.li variants={Item}>
                <span className="title">고객사</span>
                <div className="desc">㈜테라에너지 (자사)</div>
              </m.li>
              <m.li variants={Item}>
                <span className="title">유형</span>
                <div className="desc">웹사이트</div>
              </m.li>
              <m.li variants={Item}>
                <span className="title">기간</span>
                <div className="desc">
                  <span className="chip">퍼블리싱 6일</span>
                </div>
              </m.li>
              <m.li variants={Item}>
                <span className="title">기여도</span>
                <div className="desc">
                  <span className="chip">100%</span>
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
                  카카오더는 테라에너지에서 기획한 카페 스마트오더 서비스입니다.
                  프렌차이즈 카페보다는 개인 소상공인 카페 점주들을 주 사용자로
                  두고 개발된 솔루션으로, 온라인 주문/결제, 매장 분석/관리 등의
                  기능을 어플 형식으로 점주에게 고정비 및 광고비 없이 제공하여
                  자금이 넉넉하지 않은 개인 소상공인도 고품질의 편리한
                  사이렌오더 서비스를 이용할 수 있게 해주는 것이 목표입니다.
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
            src="https://www.youtube.com/embed/sZ81D-lEWQ4?autoplay=1&mute=1&controls=0&loop=1&playlist=sZ81D-lEWQ4&playsinline=1&rel=0"
            title="Cacaorder website preview video"
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
            <h5 className="contentSubTitle">스크롤 인터랙션</h5>
          </m.div>
          <m.div variants={Item} className="right">
            <p className="phrase">
              Scrolla.js 라이브러리를 이용하여 스크롤에 따라 각 요소들이 살아
              움직이는 것처럼 스크롤 인터랙션을 구현했습니다.
            </p>
          </m.div>
        </m.div>
        <ImageContainer />
        <m.div
          className="detailContent"
          variants={Container}
          initial="hidden"
          whileInView="show"
        >
          <m.div variants={Item} className="left">
            <h5 className="contentSubTitle">슬라이더 중첩 적용</h5>
          </m.div>
          <m.div variants={Item} className="right">
            <p className="phrase">
              Swiper.js 라이브러리를 사용하여 두 가지 이상의 요소들이 연동되어
              함께 움직이는 슬라이더를 구현했습니다.
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
                src="/images/swiper-js.png"
                alt=""
                width="510"
                height="694"
              />
            </m.figure>
            <p className="altText">슬라이더 코드</p>
            <m.div
              className="imgLayer"
              variants={Container}
              initial=""
              whileInView="slideRight"
              viewport={{ once: true }}
            ></m.div>
          </div>
        </div>
        <div className="imgContainer">
          <div className="imgWrap">
            <m.div
              className="previewDesktop"
              variants={Container}
              initial=""
              whileInView="zoomOut"
              viewport={{ once: true }}
            >
              <iframe
                className="videoIframe"
                src="https://www.youtube.com/embed/rGHmjrm447s?autoplay=1&mute=1&controls=0&loop=1&playlist=rGHmjrm447s&playsinline=1&rel=0"
                title="Swiper.js example"
                frameBorder="0"
              ></iframe>
            </m.div>
            <p className="altText">슬라이더 구현 화면</p>
            <m.div
              className="imgLayer"
              variants={Container}
              initial=""
              whileInView="slideLeft"
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
                src="https://youtube.com/embed/l3kqomBwL2M?&controls=0&loop=1&playlist=l3kqomBwL2M&vq=hd720&playsinline=1&rel=0"
                title="Cacaorder website mobile preview video"
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
      </section>
    </PageWrapper>
  );
}

const ImageContainer = () => {
  return (
    <div>
      {scrollImages.map((props, idx) => {
        return (
          <div key={idx} className="imgContainer">
            <div className="imgWrap">
              <m.figure
                variants={Container}
                initial=""
                whileInView="zoomOut"
                viewport={{ once: true }}
              >
                <Image
                  src={`/images/${props.src}`}
                  alt=""
                  width={props.width}
                  height={props.height}
                />
              </m.figure>
              <p className="altText">{props.text}</p>
              <m.div
                className="imgLayer"
                variants={Container}
                initial=""
                whileInView={idx % 2 !== 0 ? "slideLeft" : "slideRight"}
                viewport={{ once: true }}
              ></m.div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
