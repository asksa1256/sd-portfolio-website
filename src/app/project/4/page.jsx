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

export default function Project04() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const thirdText = useRef(null);
  const marquee = useRef(null);
  const layer = useRef(null);
  const currentProjectNum = 4;
  let xPercent = 0;
  let speed = 0.05;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // 뒤로가기 -> 스크롤 위치 복원
    const scrollY = sessionStorage.getItem("scrollY");

    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      locomotiveScroll.scrollTo(parseFloat(scrollY), {
        duration: 0, // 즉시 스크롤 이동
        disableLerp: true, // 부드러운 스크롤 비활성화
      });
    })();

    // marquee
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
                <p ref={firstText}>TERAENERGY</p>
                <p ref={secondText}>TERAENERGY</p>
                <p ref={thirdText}>TERAENERGY</p>
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
              테라에너지
            </m.h2>
            <m.h4 variants={Item} className="detailSubTitle">
              자사 공식 사이트
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
                      href="http://teraenergy.co.kr/index_2022.html"
                      target="_blank"
                    >
                      http://teraenergy.co.kr/index_2022.html
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
                  <div className="desc">
                    ㈜테라에너지 <small>(자사)</small>
                  </div>
                </m.li>
                <m.li variants={Item}>
                  <span className="title">유형</span>
                  <div className="desc">웹사이트</div>
                </m.li>
                <m.li variants={Item}>
                  <span className="title">기간</span>
                  <div className="desc">
                    <span className="chip">퍼블리싱 5일</span>
                  </div>
                </m.li>
                <m.li variants={Item}>
                  <span className="title">기여도</span>
                  <div className="desc">100%</div>
                </m.li>
                <m.li variants={Item}>
                  <span className="title">기타사항</span>
                  <div className="desc">
                    GDWEB 디자인 어워드 선정 (2023)
                    <br />
                    <Link
                      className="link"
                      href="https://www.gdweb.co.kr/sub/view.asp?displayrow=60&Txt_key=all&Txt_word=&Txt_agnumber=&Txt_fgbn=5&Txt_bcode1=&Txt_gbflag=&Txt_bcode2=&Txt_bcode3=&Txt_bcode4=&Txt_bcode5=&Page=1&str_no=20024"
                      target="_blank"
                    >
                      바로가기<i className="external-link-icon"></i>
                    </Link>
                  </div>
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
                    테라에너지는 혁신을 추구하는 컨셉에 맞춰 매년 홈페이지를
                    리뉴얼 해왔습니다. 그중 2021년, 2022년 버전을 작업했으며
                    2022년 버전에서 GSAP.js 라이브러리를 이용한 재미있는 시도를
                    했습니다. 원페이지 형식의 간단한 사이트로, GSAP 라이브러리를
                    이용한 인터랙션이 특징적입니다.
                    <br />
                    <small>
                      * 2023년 버전은 GDWEB 수상작으로 선정되었으며, 해당 버전의
                      랜딩 페이지 퍼블리싱에 70% 기여했습니다.
                    </small>
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
              src="https://www.youtube.com/embed/dbZZJq-tayI?autoplay=1&mute=1&controls=0&loop=1&playlist=dbZZJq-tayI&playsinline=1&rel=0"
              title="Teraenergy website preview video"
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
              <h5 className="contentSubTitle">GSAP.js</h5>
            </m.div>
            <m.div variants={Item} className="right">
              <p className="phrase">
                깔끔하고 세련된 리뉴얼 디자인이 HTML, CSS로만 작업하니까 너무
                단조로운 느낌이 들어서 인터랙션을 추가하자는 아이디어를 담당 웹
                디자이너에 제시했습니다. 그러자 떠오르는 대로 작업해도 된다며
                수락했고, 평소 GSAP 라이브러리 사용을 연습하고 있던 저로서는
                처음으로 실전에 적용해볼 기회를 얻게 되었습니다. 하지만
                반응형이나 스크롤 인터랙션의 시작과 끝 지점을 설정하는 등
                디테일한 부분에서 GSAP에 대한 깊은 이해가 요구되었습니다.
              </p>
              <p className="phrase">
                GSAP은 공식 문서 외에도 사용자 커뮤니티가 활성화된 편이어서
                조금만 검색해봐도 관련 예시나 에러 해결 방법들이 나왔습니다.
                완전히 똑같지는 않아도 비슷한 에러 사례들을 참고해서 라이브러리
                사용 도중에 막히는 부분들을 차근차근 해결할 수 있었습니다.
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
                  src="/images/te-gsap-1.png"
                  alt=""
                  width="616"
                  height="836"
                />
              </m.figure>
              <p className="altText">스크롤 인터랙션 코드</p>
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
                  src="/images/te-gsap-2.png"
                  alt=""
                  width="614"
                  height="676"
                />
              </m.figure>
              <p className="altText">텍스트 애니메이션 코드</p>
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
                  title="Teraenergy website mobile preview video"
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
