"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import styles from './style.module.scss'

export default function Project06() {
  const firstText = useRef(null);
  const secondText = useRef(null);
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
    gsap.set([firstText.current, secondText.current], {xPercent: xPercent})
    xPercent += speed * direction;
    requestAnimationFrame(marqueeAnim);
  }

  return (
    <section className='projectDetail'>
      <div className={`${styles.detailTop} detailTop`}>
        <div className="layer" ref={layer}></div>
        <div className="marqueeContainer">
          <div className="marquee" ref={marquee}>
            <p ref={firstText}>Cacaorder</p>
            <p ref={secondText}>Cacaorder</p>
          </div>
        </div>
      </div>
      <div className="detailContent detailSummary">
        <h2 className="detailTitle">카카오더(Cacaorder)</h2>
        <h4 className="detailSubTitle">스마트 오더 솔루션</h4>
        <div className="detailCtg">
          <span className="chip">웹 퍼블리싱</span>
        </div>
        <div className="detailList">
          <ul className="left">
            <li>
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
            </li>
            <li>
              <span className="title">언어</span>
              <div className="desc">
                <span className="chip">HTML</span>
                <span className="chip">CSS</span>
                <span className="chip">JavaScript</span>
                <span className="chip">JQuery</span>
              </div>
            </li>
            <li>
              <span className="title">툴</span>
              <div className="desc">
                <span className="chip">Visual Studio Code</span>
                <span className="chip">Figma</span>
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
              <div className="desc">웹사이트</div>
            </li>
            <li>
              <span className="title">기간</span>
              <div className="desc">
                <span className="chip">퍼블리싱 6일</span>
              </div>
            </li>
            <li>
              <span className="title">기여도</span>
              <div className="desc">
                <span className="chip">웹사이트 | 100%</span>
                <span className="chip">관리자웹 | 40%</span>
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
                카카오더는 테라에너지에서 기획한 카페 스마트오더 서비스입니다. 프렌차이즈 카페보다는 개인 소상공인 카페 점주들을 주 사용자로 두고 개발된 솔루션으로, 온라인 주문/결제, 매장 분석/관리 등의 기능을 어플 형식으로 점주에게 고정비 및 광고비 없이 제공하여 자금이 넉넉하지 않은 개인 소상공인도 고품질의 편리한 사이렌오더 서비스를 이용할 수 있게 해주는 것이 목표입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.bg1} bg`}>
        <figure className="previewDesktop">
          <Image
            src='/images/hi5-1.png'
            alt='카카오더 pc 미리보기'
            fill
          />
          {/* gif나 mp4파일로 보여주기.. */}
        </figure>
      </div>
      <div className="detailContent">
        <div className="left">
        <h5 className="contentSubTitle">서비스 이해하기</h5>
        </div>
        <div className="right">
          <p className="phrase">
            카카오더 서비스 제공 방식은 사용자앱과 관리자앱으로 나뉘어져 있는데 사용자앱은 네이티브 앱으로, 관리자앱은 하이브리드 웹앱 형식으로 개발되었습니다. 당시 네이티브 앱 개발 경험이 없었기 때문에 웹 어플리케이션에 반응형으로 모바일까지 호환되는 관리자앱을 퍼블리싱하게 되었는데, 데이터 유형에 따라 출력되는 모달창이나 화면이 다르게 나와야 되기 때문에 데이터가 유효한지에 대한 검증도 해야 했습니다. 그러기 위해서는 서비스에 대한 이해가 필수적이었습니다.
          </p>
          <p className="phrase">
            퍼블리싱을 시작하기 전에 해당 프로젝트팀에 같이 배정된 디자이너, 퍼블리셔들과 서비스에 대해 본인이 이해하고 있는게 맞는지, 더 나은 의견이 있는지 제시하기 위해서 각자 화면 흐름도를 만들어 비교해보기도 했습니다. 이 과정에서 화면 흐름도를 직접 제작해보는 게 프로젝트의 이해에 큰 영향을 미친다는 걸 알게 되었습니다. 퍼블리싱을 시작하고부터는 데이터 유효성을 검증해야 하는 경우의 수를 생각해서 데이터를 직접적으로 다루고 있는 백엔드 개발자들한테 한번씩 확인을 받고 진행하여 실수를 최소한으로 줄일 수 있었습니다.
          </p>
        </div>
      </div>
      <div className={`${styles.bg2} bg`}>
        <figure className="previewDesktop">
          <Image
            src='/images/hi5-1.png'
            alt='쿼카 화면흐름도 내 작업본 이미지'
            fill
          />
        </figure>
      </div>
      <div className="detailContent justify-center align-center flex-column text-center">
        <h4 className="contentTitle">Responsive</h4>
      </div>
      <div className={`${styles.bg4} bg`}>
        <figure className="previewMobile">
          <Image
            src='/images/hi5-1.png'
            alt='카카오더 홈페이지 반응형 이미지'
            fill
          />
        </figure>
        <figure className="previewMobile">
          <Image
            src='/images/hi5-1.png'
            alt='카카오더 홈페이지 반응형 이미지'
            fill
          />
        </figure>
        <figure className="previewMobile">
          <Image
            src='/images/hi5-1.png'
            alt='카카오더 홈페이지 반응형 이미지'
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