"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import styles from './style.module.scss'

export default function Project3() {
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
            <p ref={firstText}>Bismuth</p>
            <p ref={secondText}>Bismuth</p>
            <p ref={thirdText}>Bismuth</p>
          </div>
        </div>
      </div>
      <div className="detailContent detailSummary">
        <h2 className="detailTitle">Bismuth(비스무스)</h2>
        <h4 className="detailSubTitle">대시보드 개발</h4>
        <div className="detailCtg">
          <span className="chip">디자인</span>
          <span className="chip">퍼블리싱</span>
        </div>
        <div className="detailList">
          <ul className="left">
            <li>
              <span className="title">링크</span>
              <div className="desc">
                <small>*요청으로 비공개 처리 되었습니다.</small>
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
              <div className="desc">대시보드</div>
            </li>
            <li>
              <span className="title">기간</span>
              <div className="desc">
                <span className="chip">디자인 2일</span>
                <span className="chip">퍼블리싱 5일</span>
              </div>
            </li>
            <li>
              <span className="title">기여도</span>
              <div className="desc">
                <span className="progressTxt">100%</span>
              </div>
            </li>
            <li>
              <span className="title">기타사항</span>
              <div className="desc">-</div>
            </li>
          </ul>
          <div className="right">
            <span className="title">요약</span>
            <div className="desc">
              <p className="phrase">
                그룹웨어 Hi5 개발 중에 클라이언트의 비즈니스 분석 솔루션 추가 요청이 있어서 비스무스를 개발하게 되었습니다. 비스무스는 비즈니스 니즈에 따라 시각화된 데이터를 보고 조건에 따라 검색할 수 있는 대시보드 솔루션이며, 데이터 시각화를 위해 사용된 차트는 Apache ECharts 라이브러리로 제작했습니다. 디자인은 따로 정해진 시안 없이 그룹웨어 Hi5와 동일한 디자인 컨셉으로 진행하기로 해서 디자인과 퍼블리싱을 모두 담당했습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <figure className={`${styles.bg1} bg`}>
        <Image
          src='/images/hi5-1.png'
          alt='비스무스 pc 페이지들 미리보기'
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
          <h5>1. Apache ECharts 라이브러리</h5>
          <p className="phrase">
            화면 기획안 상 차트를 퍼블리싱해야 했는데 해본 적이 없었고, 하드코딩으로 작업하면 개발팀에 전달했을 때 데이터 연결도 어려울 것 같았습니다. 그리고 데이터가 있어야 차트를 표현할 수 있는데 퍼블리싱 당시에는 실데이터가 없던 상황이라서 어디서부터 어떻게 시작해야될 지 헤매다가, 잘 짜여진 라이브러리를 사용하는 게 더 효율적일 것 같다는 생각이 들었습니다.
          </p>
          <h5>1-1. 해결</h5>
          <p className="phrase">
            여러 차트 라이브러리를 찾다가 발견한 게 ECharts 라이브러리였습니다. 오픈소스이고, 처음 사용하는 사람도 쉽게 만들 수 있도록 공식 문서화가 잘 되어 있었으며 차트 종류도 많아서 비스무스가 제공할 데이터에 맞춰 다양한 시각화를 할 수 있었습니다. 퍼블리싱 작업 예상 기간도 반응형 포함 10일에서 7일로 단축되었으며 실 작업 기간은 5일이 소요되었고, 실데이터가 없던 문제도 가데이터가 담긴 json 파일을 만들어서 차트 코드에 연동하면 수치에 맞게 표현이 되어서 동적인 대시보드를 쉽게 만들 수 있었습니다.
          </p>
        </div>
      </div>
      <figure className={`${styles.bg2} bg`}>
        <Image
          src='/images/hi5-1.png'
          alt='eChart.js 차트 이미지'
          width='1024'
          height='600'
        />
        <Image
          src='/images/hi5-1.png'
          alt='페이지 로드 시 차트 애니메이션'
          width='414'
          height='680'
        />
        <Image
          src='/images/hi5-1.png'
          alt='eChart.js 코드 이미지'
          width='1024'
          height='600'
        />
      </figure>
      <div className="detailContent">
        <div className="left"></div>
        <div className="right">
          <h5>2. 숫자 카운트 애니메이션</h5>
          <p className="phrase">
            대시보드의 시각화 대상은 크게 숫자 데이터와 차트 데이터로 나뉘었는데, 차트 데이터를 EChart 라이브러리로 퍼블리싱하니까 자동으로 페이지 로드 시 차트 애니메이션이 지원되는 반면에 숫자 데이터는 정적으로 표시되는 게 어색하고 통일성이 없어 보였습니다.
          </p>
          <h5>2-1. 해결</h5>
          <p className="phrase">
            금융 어플을 이용하다가 통장 잔고 숫자가 카운팅 애니메이션으로 서서히 증가하는 걸 보고 비스무스 대시보드에 적용하면 좋을 것 같아서 CSS와 JavaScript로 애니메이션을 만들었습니다.
          </p>
        </div>
      </div>
      <figure className={`${styles.bg3} bg`}>
        <Image
          src='/images/hi5-1.png'
          alt='숫자 카운트 애니메이션'
          width='414'
          height='680'
        />
        <Image
          src='/images/hi5-1.png'
          alt='숫자 카운트 CSS, JavaScript 코드'
          width='414'
          height='680'
        />
      </figure>
      <div className="detailContent justify-center align-center flex-column text-center">
        <h4>반응형</h4>
      </div>
      <figure className={`${styles.bg4} bg responsiveImages`}>
        <Image
          src='/images/hi5-1.png'
          alt='비스무스 반응형 이미지들'
          width='414'
          height='680'
        />
        <Image
          src='/images/hi5-1.png'
          alt='비스무스 반응형 이미지들'
          width='414'
          height='680'
        />
        <Image
          src='/images/hi5-1.png'
          alt='비스무스 반응형 이미지들'
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
          className="next"
          href={`/project/${currentProjectNum+1}`}
        >
          Next Project
        </Link>
      </div>
    </section>
  )
}