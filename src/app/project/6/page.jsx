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
    gsap.set([firstText.current, secondText.current, thirdText.current], {xPercent: xPercent})
    xPercent += speed * direction;
    requestAnimationFrame(marqueeAnim);
  }

  return (
    <PageWrapper>
      <section className='projectDetail'>
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
          <m.h2 variants={Item} className="detailTitle">카카오더(Cacaorder)</m.h2>
          <m.h4 variants={Item} className="detailSubTitle">스마트 오더 솔루션</m.h4>
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
                <div className="desc">
                  ㈜테라에너지 (자사)
                </div>
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
                <div className="desc">
                  -
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
                  카카오더는 테라에너지에서 기획한 카페 스마트오더 서비스입니다. 프렌차이즈 카페보다는 개인 소상공인 카페 점주들을 주 사용자로 두고 개발된 솔루션으로, 온라인 주문/결제, 매장 분석/관리 등의 기능을 어플 형식으로 점주에게 고정비 및 광고비 없이 제공하여 자금이 넉넉하지 않은 개인 소상공인도 고품질의 편리한 사이렌오더 서비스를 이용할 수 있게 해주는 것이 목표입니다.
                </m.p>
              </m.div>
            </m.div>
          </m.div>
        </m.div>
        <m.div 
          className={`${styles.bg} bg`}
          variants={Container}
          initial="hidden"
          whileInView="show"
        >
          <div className="previewDesktop">
            <iframe className="videoIframe" src="https://www.youtube.com/embed/sZ81D-lEWQ4?autoplay=1&mute=1&controls=0&loop=1&playlist=sZ81D-lEWQ4&playsinline=1&rel=0" title="Cacaorder website preview video" frameBorder="0"></iframe>
          </div>
        </m.div>
        <m.div 
          className="detailContent"
          variants={Container}
          initial="hidden"
          whileInView="show"
        >
          <m.div variants={Item} className="left">
          <h5 className="contentSubTitle">큐빅 베지어(cubic-bezier) 애니메이션</h5>
          </m.div>
          <m.div variants={Item} className="right">
            <p className="phrase">
              카카오더 홈페이지는 큐빅 베지어 값으로 트랜지션을 적용하여 CSS에서 기본적으로 제공되는 linear 또는 ease-in-out easing보다 더 세련된 사용감을 느낄 수 있습니다.
            </p>
          </m.div>
        </m.div>
        <m.div 
          className={`${styles.bg} bg`}
          variants={Container}
          initial="hidden"
          whileInView="show"
        >
          <figure className="previewDesktop">
            <Image
              src='/images/hi5-1.png'
              alt='큐빅 베지어 적용된 트랜지션 애니메이션'
              fill
            />
          </figure>
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
              Scrolla.js 라이브러리를 이용하여 스크롤에 따라 큼지막한 구역들이 나타나고, 구역 안의 이미지들도 더 작은 단위로 쪼개어 각 요소들이 살아 움직이는 것처럼 보이도록 스크롤 인터랙션을 구현했습니다.
            </p>
          </m.div>
        </m.div>
        <m.div 
          className={`${styles.bg} bg imgTxtContainer`}
          variants={Container}
          initial="hidden"
          whileInView="show"
        >
          <figure className="imgWrap">
            <Image
              src='/images/card-html.png'
              alt=''
              fill
            />
          </figure>
          <p className="text">스크롤 인터랙션 HTML</p>
        </m.div>
        <m.div 
          className={`${styles.bg} bg imgTxtContainer`}
          variants={Container}
          initial="hidden"
          whileInView="show"
        >
          <figure className="imgWrap">
            <Image
              src='/images/card-css.png'
              alt=''
              fill
            />
          </figure>
          <p className="text">스크롤 인터랙션 CSS</p>
        </m.div>
        <m.div 
          className={`${styles.bg} bg imgTxtContainer`}
          variants={Container}
          initial="hidden"
          whileInView="show"
        >
          <figure className="imgWrap">
            <Image
              src='/images/card-js.png'
              alt=''
              fill
            />
          </figure>
          <p className="text">스크롤 인터랙션 JavaScript</p>
        </m.div>
        <m.div 
          className={`${styles.bg} bg imgTxtContainer`}
          variants={Container}
          initial="hidden"
          whileInView="show"
        >
          <figure className="imgWrap">
            <Image
              src='/images/card-anim-result.gif'
              alt=''
              fill
            />
          </figure>
          <p className="text">스크롤 인터랙션 구현 화면</p>
        </m.div>
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
              Swiper.js 라이브러리를 사용하여 두 가지 이상의 요소들이 연동되어 함께 움직이는 복잡한 Swiper 슬라이더를 구현했습니다.
            </p>
          </m.div>
        </m.div>
        <m.div 
          className={`${styles.bg} bg imgTxtContainer`}
          variants={Container}
          initial="hidden"
          whileInView="show"
        >
          <figure className="imgWrap">
            <Image
              src='/images/swiper-js.png'
              alt=''
              fill
            />
          </figure>
          <p className="text">Swiper.js 적용 코드</p>
        </m.div>
        <m.div 
          className={`${styles.bg} bg imgTxtContainer`}
          variants={Container}
          initial="hidden"
          whileInView="show"
        >
          <figure className="imgWrap">
            <div className="previewDesktop">
              <iframe className="videoIframe" src="https://www.youtube.com/embed/rGHmjrm447s?autoplay=1&mute=1&controls=0&loop=1&playlist=rGHmjrm447s&playsinline=1&rel=0" title="Swiper.js example" frameBorder="0"></iframe>
            </div>
          </figure>
          <p className="text">Swiper.js 적용 화면</p>
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
              src="https://youtube.com/embed/l3kqomBwL2M?&controls=0&loop=1&playlist=l3kqomBwL2M&vq=hd720&playsinline=1&rel=0"
              title="Cacaorder website mobile preview video"
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
            className={`prev ${styles.prev}`}
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