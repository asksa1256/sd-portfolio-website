"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import styles from "./style.module.scss";
import PageWrapper from "@/components/pageWrapper";
import { AnimatePresence, motion as m } from "framer-motion";
import { Container, Item } from "@/animation";

export default function Project05() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const marquee = useRef(null);
  const layer = useRef(null);
  const currentProjectNum = 5;
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
                <p ref={firstText}>TERAENERGY TEAM</p>
                <p ref={secondText}>TERAENERGY TEAM</p>
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
              테라에너지 채용
            </m.h2>
            <m.h4 variants={Item} className="detailSubTitle">
              자사 채용 안내 사이트
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
                      href="http://teraenergy.co.kr/team"
                      target="_blank"
                    >
                      http://teraenergy.co.kr/team
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
                  <div className="desc">㈜테라에너지 (자사)</div>
                </m.li>
                <m.li variants={Item}>
                  <span className="title">유형</span>
                  <div className="desc">웹사이트</div>
                </m.li>
                <m.li variants={Item}>
                  <span className="title">기간</span>
                  <div className="desc">
                    <span className="chip">퍼블리싱 4일</span>
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
                    테라에너지는 별도의 채용 사이트 없이 구인 포털 사이트를
                    이용해왔는데, 2022년에 공식 페이지 리뉴얼을 진행하면서 채용
                    사이트도 새롭게 추가하여 이용하고 있습니다. 기존의 포털
                    사이트에서 정형적으로 주어진 포맷에 따라 공고를 올리는
                    방식은 테라에너지 홈페이지의 트렌디한 디자인과 맞지 않기
                    때문에 컨셉을 통일하고자 만들어졌으며, 이러한 전체적인
                    리뉴얼을 통해 20대 지원자들의 지원률이 증가했습니다.
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
              src="https://www.youtube.com/embed/0kM0-IS-iPE?autoplay=1&mute=1&controls=0&loop=1&playlist=0kM0-IS-iPE&playsinline=1&rel=0"
              title="Teraenergy Team website preview video"
              frameBorder="0"
            ></iframe>
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
                  src="https://youtube.com/embed/h-jGjP41Ags?&controls=0&loop=1&playlist=h-jGjP41Ags&vq=hd720&playsinline=1&rel=0"
                  title="Teraenergy Team mobile preview video"
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
