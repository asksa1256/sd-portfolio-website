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
import { useRouter } from "next/navigation"

export default function Project08() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const marquee = useRef(null);
  const layer = useRef(null);
  const currentProjectNum = 8;
  let xPercent = 0;
  let speed = 0.05;
  let direction = -1;
  const router = useRouter();

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
        <button
            className="back"
            type="button"
            onClick={() => router.push('/')}
          >
            <span className="arrow">←</span>
            <span className="text">Back</span>
        </button>
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
              <p ref={firstText}>wapt.co.kr</p>
              <p ref={secondText}>wapt.co.kr</p>
            </m.div>
          </m.div>
        </m.div>
        <m.div 
          className="detailContent detailSummary"
          variants={Container}
          initial="hidden"
          whileInView="show"
        >
          <m.h2 variants={Item} className="detailTitle">우듬지석란</m.h2>
          <m.h4 variants={Item} className="detailSubTitle">와인, 차 큐레이팅 및 도·소매</m.h4>
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
                    href="http://wapt.co.kr"
                    target="_blank"
                  >
                    http://wapt.co.kr
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
                </div>
              </m.li>
              <m.li variants={Item}>
                <span className="title">고객사</span>
                <div className="desc">
                  우듬지석란
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
                <div className="desc">80%</div>
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
                  우듬지석란은 와인을 소개하는 우듬지, 차를 소개하는 석란으로 구분하여 상품을 큐레이팅 및 판매 중인 오프라인 다목적 공간입니다. 우듬지석란의 홈페이지도 두 컨셉이 구분됨에 따라 페이지를 나눠서 퍼블리싱 했으며, 각 페이지는 여러 섹션이 한 페이지에 담긴 원페이지 형식입니다. 랜딩 페이지에서 로딩 애니메이션 이후, 로고가 좌우로 흩어져 각 페이지로 안내하는 화면 흐름이 특징적입니다.
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
          <div 
            className="previewDesktop"
            variants={Item}
          >
            <iframe className="videoIframe" src="https://www.youtube.com/embed/XvL8FwJgexs?autoplay=1&mute=1&controls=0&loop=1&playlist=XvL8FwJgexs&playsinline=1&rel=0" title="우듬지석란 website preview video" frameBorder="0"></iframe>
          </div>
        </m.div>
        <m.div 
          className="detailContent"
          variants={Container}
          initial="hidden"
          whileInView="show"
        >
          <m.div variants={Item} className="left">
            <h5 className="contentSubTitle">미완성 시안</h5>
          </m.div>
          <m.div variants={Item} className="right">
            <p className="phrase">
              입사 후 첫 프로젝트였는데 개발 중이던 프로젝트를 인수 받아 중간부터 작업하게 되었습니다. 그래서 이미 짜여져 있던 코드와 시안이 있었지만 모두 중간에 멈춘 상태였고 디자인부터 마무리를 해야 하는데 당시에 웹 디자이너도 없던 상황이었습니다.
            </p>
            <p className="phrase">
              비록 웹 디자이너가 없었지만 어느 정도 만들어진 시안이 있었으므로, 컨셉을 유지하는 것에 집중해서 클라이언트의 확인을 받아가며 디자인 작업을 끝낸 뒤 퍼블리싱을 진행했습니다.
            </p>
          </m.div>
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
              src="https://youtube.com/embed/PskDD53gjZI?&controls=0&loop=1&playlist=PskDD53gjZI&vq=hd720&playsinline=1&rel=0"
              title="우듬지석란 website mobile preview video"
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