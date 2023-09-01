"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import styles from './style.module.scss'

export default function Project1() {
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
    <section className='projectDetail'>
      <div className={`${styles.detailTop} detailTop`}>
        <div className="layer" ref={layer}></div>
        <div className="marqueeContainer">
          <div className="marquee" ref={marquee}>
            <p ref={firstText}>Groupware Hi5</p>
            <p ref={secondText}>Groupware Hi5</p>
          </div>
        </div>
      </div>
      <div className="detailContent detailSummary">
        <h2 className="detailTitle">Groupware Hi5</h2>
        <h4 className="detailSubTitle">자사 그룹웨어 솔루션 개발</h4>
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
                <span className="chip">Vue.js</span>
                <span className="chip">TypeScript</span>
                <span className="chip">Bootstrap v5.0</span>
              </div>
            </li>
            <li>
              <span className="title">툴</span>
              <div className="desc">
                <span className="chip">Visual Studio Code</span>
                <span className="chip">Adobe XD</span>
              </div>
            </li>
            <li>
              <span className="title">고객사</span>
              <div className="desc">
                ㈜테라에너지 <small>(자사)</small>
              </div>
            </li>
            <li>
              <span className="title">유형</span>
              <div className="desc">솔루션</div>
            </li>
            <li>
              <span className="title">기간</span>
              <div className="desc">
                <span className="chip">디자인 10일</span>
                <span className="chip">퍼블리싱 30일</span>
              </div>
            </li>
            <li>
              <span className="title">기여도</span>
              <div className="desc">
                <span className="progressTxt">70%</span>
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
                좋은 그룹웨어들이 시장에 이미 많이 배포되어 있지만 모두 체험판이거나 유료라는 단점이 있었고, 테라에너지의 특성에 맞는 그룹웨어를 찾아서 제한적으로 사용하기 보다는 직접 맞춤형 그룹웨어를 만들자는 의견에 따라 그룹웨어 시스템을 자체 개발하여 도입했습니다.
              </p>
              <p className="phrase">
                개발 언어로 Vue.js, TypeScript를 사용하여 싱글 페이지 어플리케이션 형식으로 만들었으며 깔끔하고 편리한 UI를 접목시켜 회사 내부에서 쉽고 빠르게 사용할 수 있는 무료 그룹웨어를 개발한 결과, 전반적인 업무를 한 곳에서 다룰 수 있어 업무 효율성이 많이 개선되고 비용 부담을 줄이면서도 편리한 업무 환경을 구축할 수 있게 되었습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <figure className={`${styles.bg1} bg`}>
        <Image
          src='/images/hi5-1.png'
          alt='그룹웨어 Hi5 대시보드 미리보기'
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
          <h5>1. 디자인</h5>
          <p className="phrase">
            프로젝트를 처음 시작했을 때, 디자이너가 따로 배정되지 않아서 프로젝트 팀의 퍼블리셔였던 제가 디자인도 함께 해야 했습니다. 혼자서 취미 삼아 디자인을 해본 적은 있지만 요청에 의해 시작한 디자인은 처음이라서 어디서부터 시작해야 될 지 막막했습니다.
          </p>
          <h5>1-1. 해결</h5>
          <p className="phrase">
            다른 팀의 경력직 웹 디자이너님과 상의하여 디자인 피드백을 자주 받고, 잘 만들어진 그룹웨어 예시들을 레퍼런스 삼아 컨텐츠에 맞게 디자인 했습니다. 또한 클라이언트가 테마 변경 기능 추가를 원해서 프론트엔드 개발자들도 스타일 변경하기가 쉽도록 스타일 가이드를 작성했습니다. 
          </p>
        </div>
      </div>
      <figure className={`${styles.bg2} bg`}>
        <Image
          src='/images/hi5-1.png'
          alt='그룹웨어 Hi5 스타일 가이드 작성 예시'
          width='1024'
          height='600'
        />
        {/* hi5 스타일 가이드 예시 캡쳐본 */}
      </figure>
      <div className="detailContent">
        <div className="left">
        </div>
        <div className="right">
          <h5>2. 새로운 언어</h5>
          <p className="phrase">
            익숙하게 작업해왔던 HTML5, CSS3, JavaScript, JQuery와 달리 Hi5는 Vue.js와 TypeScript로 개발 언어가 결정되었습니다. TypeScript는 JavaScript에서 약간 변형된 정도라고 생각되어 큰 어려움 없이 적응할 수 있었지만, Vue.js는 작업 환경 설정부터 문법까지 저의 기존 작업 방식과 많이 달랐으며 컴포넌트 위주의 화면 개발에 대한 사전 지식이 필요했습니다.
          </p>
          <h5>2-1. 해결</h5>
          <p className="phrase">
            무작정 작업된 코드를 이용해서 작업하는 것보다는 Vue.js의 작동 원리를 알고 해야 더 복잡한 컴포넌트도 만들 수 있고, 컴포넌트 간 연동도 올바르게 할 수 있을 것 같아서 프로젝트 투입 전에 일주일 동안 Vue.js에 관해 조사했습니다. Vue.js에서의 컴포넌트 작동 원리를 이해하는 데에 시간이 조금 걸렸지만 한번 이해하고 나니 컴포넌트 간에 데이터를 주고 받을 때도 큰 어려움 없이 해낼 수 있었고, 드래그 앤 드랍 등 다른 팀원이 만들어놓은 컴포넌트의 기능을 내 컴포넌트에 옮겨 붙일 때도 수월하게 작업이 가능했습니다. 이때 저는 <b>컴포넌트 형태가 얼마나 프론트엔드 협업 개발에 유용한지,</b> 그리고 <b>주석의 중요성</b>에 대해 깨달을 수 있었습니다.
          </p>
        </div>
      </div>
      <figure className={`${styles.bg3} bg`}>
        <Image
          src='/images/hi5-1.png'
          alt='그룹웨어 Hi5 컴포넌트 개발 코드 일부'
          width='1024'
          height='600'
        />
        {/* 컴포넌트 개발 코드 + 드래그 앤 드랍 컴포넌트 주석 캡쳐 */}
      </figure>
      <div className="detailContent justify-center align-center flex-column text-center">
        <div className="left">
          <h4>반응형</h4>
        </div>
        <div className="right">
          <p className="phrase">
            그룹웨어 Hi5의 반응형은 처음부터 사용하기로 협의했던 BootStrap 5버전과 CSS를 함께 사용했습니다. 반응형을 편하게 작업하려고 부트스트랩을 선택했는데 막상 작업해보니 그룹웨어의 모든 요소에 대응할 수는 없었고, HTML 코드도 너무 지저분해진다는 의견이 있어서 CSS의 media query로 더 섬세하게 breakpoint를 설정했습니다. 
          </p>
        </div>
      </div>
      <figure className={`${styles.bg4} bg`}>
        <Image
          src='/images/hi5-1.png'
          alt='그룹웨어 Hi5 반응형 이미지들'
          width='414'
          height='680'
        />
        <Image
          src='/images/hi5-1.png'
          alt='그룹웨어 Hi5 반응형 이미지들'
          width='414'
          height='680'
        />
        <Image
          src='/images/hi5-1.png'
          alt='그룹웨어 Hi5 반응형 이미지들'
          width='414'
          height='680'
        />
        {/* 반응형 gif나 mp4 파일들... */}
      </figure>
      <div className="pages">
        <Link
          className="prev"
          href='/'
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