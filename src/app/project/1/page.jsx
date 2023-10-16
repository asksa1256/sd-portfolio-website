"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import styles from './style.module.scss'
import PageWrapper from "@/components/pageWrapper"
import { motion as m } from "framer-motion"
import { Container, Item } from "@/animation"

export default function Project01() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const marquee = useRef(null);
  const layer = useRef(null);
  const currentProjectNum = 1;
  let xPercent = 0;
  let speed = 0.05;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (window.innerWidth > 768) {
      (
        async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default;
          const locomotiveScroll = new LocomotiveScroll();
        }
      )()
    }

    requestAnimationFrame(marqueeAnim);
    gsap.to(marquee.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: true,
        onUpdate: (e) => direction = e.direction * -1
      },
      x: "-=300px",
    })

    gsap.to(layer.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: true,
      },
      opacity: 1,
    })
  }, [])

  const marqueeAnim = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 100) {
      xPercent = 0;
    }

    if (!(firstText.current !== null && secondText.current !== null)) return;
    gsap.set([firstText.current, secondText.current], {xPercent: xPercent})
    xPercent += speed * direction;
    requestAnimationFrame(marqueeAnim);
  }

  return (
    <PageWrapper>
      <section className='projectDetail'>
        <Link
            className="back"
            href="/"
            scroll={false}
          >
            <span className="arrow">←</span>
            <span className="text">Back</span>
        </Link>
        <m.div className={`${styles.detailTop} detailTop`}
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
              <p ref={firstText}>Groupware Hi5</p>
              <p ref={secondText}>Groupware Hi5</p>
            </m.div>
          </m.div>
        </m.div>
        <div className="detailContent detailSummary">
          <m.h2 
            variants={Container}
            initial="hidden"
            whileInView="show" 
            className="detailTitle"
          >
            Groupware Hi5
          </m.h2>
          <m.h3 
            variants={Container}
            initial="hidden"
            whileInView="show" 
            className="detailSubTitle"
          >
            자사 그룹웨어 솔루션
          </m.h3>
          <m.div 
            variants={Container}
            initial="hidden"
            whileInView="show" 
            className="detailCtg"
          >
            <m.span variants={Item} className="chip">웹 디자인</m.span>
            <m.span variants={Item} className="chip">웹 퍼블리싱</m.span>
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
                  <span className="chip">Vue.js</span>
                  <span className="chip">TypeScript</span>
                  <span className="chip">Bootstrap v5.0</span>
                </div>
              </m.li>
              <m.li variants={Item}>
                <span className="title">툴</span>
                <div className="desc">
                  <span className="chip">Visual Studio Code</span>
                  <span className="chip">Adobe XD</span>
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
                <div className="desc">솔루션</div>
              </m.li>
              <m.li variants={Item}>
                <span className="title">기간</span>
                <div className="desc">
                  <span className="chip">디자인 10일</span>
                  <span className="chip">퍼블리싱 15일</span>
                </div>
              </m.li>
              <m.li variants={Item}>
                <span className="title">기여도</span>
                <div className="desc">70%</div>
              </m.li>
              <m.li variants={Item}>
                <span className="title">기타사항</span>
                <div className="desc">-</div>
              </m.li>
            </m.ul>
            <m.div variants={Item} className="right">
              <m.div className="desc"
                variants={Container}
                initial="hidden"
                whileInView="show"
              >
                <m.p variants={Item} className="phrase">
                  좋은 그룹웨어들이 시장에 이미 많이 배포되어 있지만 모두 체험판이거나 유료라는 단점이 있었고, 테라에너지의 특성에 맞는 그룹웨어를 찾아서 제한적으로 사용하기 보다는 직접 맞춤형 그룹웨어를 만들자는 의견에 따라 그룹웨어 시스템을 자체 개발하여 도입했습니다.
                </m.p>
                <m.p variants={Item} className="phrase">
                  개발 언어로 Vue.js, TypeScript를 사용하여 싱글 페이지 어플리케이션 형식으로 만들었으며 깔끔하고 편리한 UI를 접목시켜 회사 내부에서 쉽고 빠르게 사용할 수 있는 무료 그룹웨어를 개발한 결과, 전반적인 업무를 한 곳에서 다룰 수 있어 업무 효율성이 많이 개선되고 비용 부담을 줄이면서도 편리한 업무 환경을 구축할 수 있게 되었습니다.
                </m.p>
              </m.div>
            </m.div>
          </m.div>
        </div>
        <div className={`${styles.bg} bg`}>
          <m.div 
            className="previewDesktop"
            variants={Container}
            initial="hidden"
            whileInView="show"
          >
            <iframe className="videoIframe" src="https://www.youtube.com/embed/kfB0Pa9sItk?si=4CsonfECNJ8M-Uki&autoplay=1&mute=1&controls=0&loop=1&playlist=kfB0Pa9sItk&playsinline=1&rel=0" title="Groupware Hi5 preview video" frameBorder="0"></iframe>
          </m.div>
        </div>
        <m.div 
          className="detailContent"
          variants={Container}
          initial="hidden"
          whileInView="show"  
        >
          <m.div variants={Item} className="left">
            <h5 className="contentSubTitle">디자인 및 스타일 가이드 작업</h5>
          </m.div>
          <m.div variants={Item} className="right">
            <p className="phrase">
              프로젝트를 처음 시작했을 때, 디자이너가 따로 배정되지 않아서 프로젝트 팀의 퍼블리셔였던 제가 디자인도 함께 해야 했습니다. 혼자서 취미 삼아 디자인을 해본 적은 있지만 요청에 의해 시작한 디자인은 처음이라서 어디서부터 시작해야 될 지 막막했습니다.
            </p>
            <p className="phrase">
              다행히도 타 직무의 웹 디자이너와 상의하여 피드백을 자주 받아서 그룹웨어 디자인을 마칠 수 있었고, 잘 만들어진 예시들을 레퍼런스 삼는 것도 도움이 되었습니다. 그룹웨어에 테마 변경 기능을 추가할 때 UI 컴포넌트 및 클래스를 재사용하기 수월하도록 스타일 가이드를 작성해본 것도 좋은 경험이었습니다.
            </p>
          </m.div>
        </m.div>
        <div className={`${styles.bg} bg`}>
          <m.div 
            className="previewDesktop"
            variants={Container}
            initial="hidden"
            whileInView="show"
          >
            <Image
              src='/images/hi5-2.png'
              alt='그룹웨어 Hi5 XD 작업 화면'
              fill
            />
          </m.div>
        </div>
        <m.div 
          className="detailContent"
          variants={Container}
          initial="hidden"
          whileInView="show"  
        >
          <m.div variants={Item} className="left">
            <h5 className="contentSubTitle">Vue.js + TypeScript</h5>
          </m.div>
          <m.div variants={Item} className="right">
            <p className="phrase">
              Vue.js는 작업 환경 설정부터 문법까지 저의 기존 작업 방식(HTML5, CSS3, JavaScript 또는 JQuery를 이용한 방식)과 많이 달랐으며 컴포넌트 위주의 화면 개발에 대한 사전 지식이 필요했습니다.
            </p>
            <p className="phrase">
              Vue.js에서의 컴포넌트 작동 원리를 이해하는 데에 시간이 조금 걸렸지만 동료들과 협업 해보면서 혼자 퍼블리싱 해도 크게 무리가 없을 정도로 적응할 수 있었고, 컴포넌트 안에 다른 컴포넌트를 넣어 기능을 추가하는 등 컴포넌트 구조의 이점들을 파악할 수 있었던 좋은 경험이었습니다.
            </p>
          </m.div>
        </m.div>
        <div className={`${styles.bg} bg imgTxtContainer`}>
          <m.div 
            className="imgWrap"
            variants={Container}
            initial="hidden"
            whileInView="show"
          >
            <Image
              src='/images/hi5-3.jpg'
              alt=''
              fill
              className="codeImg"
            />
            <Image
              src='/images/hi5-7.png'
              alt=''
              fill
              className="dpImg"
            />
            <p className="altText">대시보드 도넛 차트 코드 및 구현 화면</p>
          </m.div>
        </div>
        <m.div
          className={`${styles.bg} bg imgTxtContainer`}
          variants={Container}
          initial="hidden"
          whileInView="show"
        >
          <figure className="imgWrap">
            <Image
              src='/images/hi5-4.jpg'
              alt=''
              fill
            />
          </figure>
          <p className="text">v-for를 사용한 테이블 코드</p>
        </m.div>
        <m.div
          className={`${styles.bg} bg imgTxtContainer`}
          variants={Container}
          initial="hidden"
          whileInView="show"
        >
          <figure className="imgWrap">
            <Image
              src='/images/hi5-5.jpg'
              alt=''
              fill
            />
          </figure>
          <p className="text">v-show를 사용한 알림 더보기</p>
        </m.div>
        <m.div
          className={`${styles.bg} bg imgTxtContainer`}
          variants={Container}
          initial="hidden"
          whileInView="show"
        >
          <figure className="imgWrap">
            <Image
              src='/images/hi5-6.jpg'
              alt=''
              fill
            />
          </figure>
          <p className="text">모달 컴포넌트</p>
        </m.div>
        <m.div 
          className="responsiveWrap"
          variants={Container}
          initial="hidden"
          whileInView="show" 
        >
          <m.div variants={Item} className="detailContent justify-center align-center flex-column text-center">
            <h4 className="contentTitle">Responsive</h4>
          </m.div>
          <m.div variants={Item} className={`${styles.bg} bg`}>
            <div className="previewMobile">
              <iframe 
              className="videoIframe"
              src="https://youtube.com/embed/pD5YUcStZ30?si=QHu7lOgLW2QaXrWT&controls=0&loop=1&playlist=pD5YUcStZ30&vq=hd720&playsinline=1&rel=0"
              title="Groupware Hi5 responsive preview video - dashboard"
              frameBorder="0"></iframe>
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
            className={`prev disabled ${styles.prev}`}
            href={`/project/${currentProjectNum-1}`}
          >
            <span className="arrow">←</span>
            <span className="text">Prev Project</span>
          </Link>
          <Link
            className={`next ${styles.next}`}
            href={`/project/${currentProjectNum+1}`}
          >
            <span className="text">Next Project</span>
            <span className="arrow">→</span>
          </Link>
        </m.div>
      </section>
    </PageWrapper>
  )
}