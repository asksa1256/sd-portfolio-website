"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import styles from './style.module.scss'

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
    <section className='projectDetail'>
      <div className={`${styles.detailTop} detailTop`}>
        <div className="layer" ref={layer}></div>
        <div className="marqueeContainer">
          <div className="marquee" ref={marquee}>
            <p ref={firstText}>Selene</p>
            <p ref={secondText}>Selene</p>
            <p ref={thirdText}>Selene</p>
          </div>
        </div>
      </div>
      <div className="detailContent detailSummary">
        <h2 className="detailTitle">셀린(Selene)</h2>
        <h4 className="detailSubTitle">스마트 조명 솔루션</h4>
        <div className="detailCtg">
          <span className="chip">웹 퍼블리싱</span>
          <span className="chip">앱 퍼블리싱</span>
        </div>
        <div className="detailList">
          <ul className="left">
            <li>
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
            </li>
            <li>
              <span className="title">언어</span>
              <div className="desc">
                <span className="chip">HTML</span>
                <span className="chip">CSS</span>
                <span className="chip">JavaScript</span>
                <span className="chip">JQuery</span>
                <span className="chip">Flutter</span>
              </div>
            </li>
            <li>
              <span className="title">툴</span>
              <div className="desc">
                <span className="chip">Visual Studio Code</span>
                <span className="chip">IntelliJ</span>
              </div>
            </li>
            <li>
              <span className="title">고객사</span>
              <div className="desc">
                ㈜테라에너지 (자사)
              </div>
            </li>
            <li>
              <span className="title">유형</span>
              <div className="desc">
                <span className="chip">웹사이트</span>
                <span className="chip">어플리케이션</span>
              </div>
            </li>
            <li>
              <span className="title">기간</span>
              <div className="desc">
                <span className="chip">웹사이트 | 퍼블리싱 2일</span>
                <span className="chip">어플리케이션 | 퍼블리싱 4일</span>
              </div>
            </li>
            <li>
              <span className="title">기여도</span>
              <div className="desc">
                <span className="chip">웹사이트 | 100%</span>
                <span className="chip">어플리케이션 | 30%</span>
              </div>
            </li>
            <li>
              <span className="title">기타사항</span>
              <div className="desc">
                -
              </div>
            </li>
          </ul>
          <div className="right">
            <div className="desc">
              <p className="phrase">
                Selene은 스마트 조명 어플리케이션으로 스마트홈 서비스처럼 어플을 통해 조명을 제어하고, 스케줄을 설정하고, 실시간으로 실내 조명의 점소등 상태 및 이상 유무를 IoT 통신으로 확인할 수 있는 시스템입니다. 본 제품은 Flutter로 개발되었으며 상용화를 목표로 제작된 소개 페이지가 있습니다. 
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.bg} bg`}>
        <figure className="previewDesktop">
          <Image
            src='/images/hi5-1.png'
            alt='셀린 pc 미리보기'
            fill
          />
          {/* gif나 mp4파일로 보여주기.. */}
        </figure>
      </div>
      <div className="detailContent">
        <div className="left">
          <h5 className="contentSubTitle">Flutter</h5>
        </div>
        <div className="right">
          <p className="phrase">
            Selene 소개 페이지는 기존에 HTML, CSS, JQuery 또는 JavaScript로 하던 방식과 똑같이 퍼블리싱 하면 되어서 어려움이 없었지만, Selene 어플리케이션은 iOS와 Android의 호환성을 고려하여 Flutter로 개발하게 되었기 때문에 네이티브 앱을 퍼블리싱하기 위해 Flutter와 Dart 관련 지식이 요구되었습니다.
          </p>
          <p className="phrase">
            Flutter로 어떤 앱을 만들 수 있는지, Flutter로 개발했을 때의 이점은 무엇인지 이해하며 강의나 간단한 앱 클론 코딩으로 감을 익혔습니다. 다만 JavaScript에 대한 이해도가 높지 않을 때 작업했기 때문에 데이터 연동이 필요한 부분이나 복잡한 구현은 프론트엔드 개발자에 전달해서 작업 시간이 지연되지 않도록 했습니다. 
          </p>
        </div>
      </div>
      <div className={`${styles.bg} bg`}>
        <figure className="previewDesktop">
          <Image
            src='/images/hi5-1.png'
            alt='Selene 앱 화면 캡처'
            fill
          />
        </figure>
        <figure className="previewDesktop">
          <Image
            src='/images/hi5-1.png'
            alt='Flutter 코드 작업 부분 캡처'
            fill
          />
        </figure>
      </div>
      <div className="detailContent justify-center align-center flex-column text-center">
        <h4 className="contentTitle">Responsive</h4>
      </div>
      <div className={`${styles.bg} bg`}>
        <figure className="preivewMobile">
          <Image
            src='/images/hi5-1.png'
            alt='Selene 홈페이지 반응형 이미지'
            fill
          />
        </figure>
        {/* 반응형 gif나 mp4 파일들... */}
      </div>
      <div className="pages">
        <Link
          className="prev"
          href={`/project/${currentProjectNum-1}`}
        >
          Prev Project
        </Link>
        <Link
          className="next"
          href={`/project/${currentProjectNum+1}`}
        >
          Next Project
        </Link>
      </div>
    </section>
  )
}