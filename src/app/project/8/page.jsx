"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import styles from './style.module.scss'

export default function Project08() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const marquee = useRef(null);
  const layer = useRef(null);
  const currentProjectNum = 8;
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
            <p ref={firstText}>wapt.co.kr</p>
            <p ref={secondText}>wapt.co.kr</p>
          </div>
        </div>
      </div>
      <div className="detailContent detailSummary">
        <h2 className="detailTitle">우듬지석란</h2>
        <h4 className="detailSubTitle">와인, 차 큐레이팅 및 도·소매</h4>
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
                  href="http://wapt.co.kr"
                  target="_blank"
                >
                  http://wapt.co.kr
                </Link>
              </div>
            </li>
            <li>
              <span className="title">언어</span>
              <div className="desc">
                <span className="chip">HTML</span>
                <span className="chip">CSS</span>
                <span className="chip">JQuery</span>
              </div>
            </li>
            <li>
              <span className="title">툴</span>
              <div className="desc">
                <span className="chip">Visual Studio Code</span>
              </div>
            </li>
            <li>
              <span className="title">고객사</span>
              <div className="desc">
                우듬지석란
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
                <span className="progressTxt">80%</span>
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
            <span className="title">요약</span>
            <div className="desc">
              <p className="phrase">
                우듬지석란은 와인을 소개하는 우듬지, 차를 소개하는 석란으로 구분하여 상품을 큐레이팅 및 판매 중인 오프라인 다목적 공간입니다. 우듬지석란의 홈페이지도 두 컨셉이 구분됨에 따라 페이지를 나눠서 퍼블리싱 했으며, 각 페이지는 여러 섹션이 한 페이지에 담긴 원페이지 형식입니다. 랜딩 페이지에서 로딩 애니메이션 이후, 로고가 좌우로 흩어져 각 페이지로 안내하는 화면 흐름이 특징적입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <figure className={`${styles.bg1} bg`}>
        <Image
          src='/images/hi5-1.png'
          alt='우듬지석란 pc 미리보기'
          width='1024'
          height='600'
        />
        {/* gif나 mp4파일로 보여주기.. */}
      </figure>
      <div className="detailContent">
        <div className="left">
          <h4>과제</h4>
        </div>
        <div className="right">
          <h5>미완성 상태의 시안</h5>
          <p className="phrase">
            입사 후 첫 프로젝트였는데 개발 중이던 프로젝트를 인수 받아 중간부터 작업하게 되었습니다. 그래서 이미 짜여져 있던 코드와 시안이 있었지만 모두 중간에 멈춘 상태였고 디자인부터 마무리를 해야 하는데 당시에 웹 디자이너도 없던 상황이었습니다.
          </p>
          <h5>해결</h5>
          <p className="phrase">
            비록 웹 디자이너가 없었지만 어느 정도 만들어진 시안이 있었으므로, 컨셉을 유지하는 것에 집중해서 클라이언트의 확인을 받아가며 디자인 작업을 끝낸 뒤 퍼블리싱을 진행했습니다.
          </p>
        </div>
      </div>
      <div className="detailContent justify-center align-center flex-column text-center">
        <h4>반응형</h4>
      </div>
      <figure className={`${styles.bg4} bg responsiveImages`}>
        <Image
          src='/images/hi5-1.png'
          alt='우듬지석란 홈페이지 반응형 이미지'
          width='414'
          height='680'
        />
        <Image
          src='/images/hi5-1.png'
          alt='우듬지석란 홈페이지 반응형 이미지'
          width='414'
          height='680'
        />
        <Image
          src='/images/hi5-1.png'
          alt='우듬지석란 사용자앱 반응형 이미지'
          width='414'
          height='680'
        />
        {/* 반응형 gif나 mp4 파일들... */}
      </figure>
      <div className="pages">
        <Link
          className="prev"
          href={`/project/${currentProjectNum-1}`}
        >
          Prev Project
        </Link>
        <Link
          className="next disabled"
          href={`/project/${currentProjectNum+1}`}
        >
          Next Project
        </Link>
      </div>
    </section>
  )
}