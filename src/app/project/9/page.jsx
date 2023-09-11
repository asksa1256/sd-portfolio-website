"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import styles from './style.module.scss'

export default function Project09() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const marquee = useRef(null);
  const layer = useRef(null);
  const currentProjectNum = 9;
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
            <p ref={firstText}>Leesangdal Portfolio Site</p>
            <p ref={secondText}>Leesangdal Portfolio Site</p>
          </div>
        </div>
      </div>
      <div className="detailContent detailSummary">
        <h2 className="detailTitle">이상달 포트폴리오 사이트</h2>
        <h4 className="detailSubTitle">포트폴리오 및 자기 소개</h4>
        <div className="detailCtg">
          <span className="chip">웹 디자인</span>
          <span className="chip">웹 퍼블리싱</span>
        </div>
        <div className="detailList">
          <ul className="left">
            <li>
              <span className="title">링크</span>
              <div className="desc">
                <Link
                  className="link disabled"
                  href="/"
                  target="_blank"
                >
                  https://sdlee.vercel.app
                </Link>
              </div>
            </li>
            <li>
              <span className="title">언어</span>
              <div className="desc">
                <span className="chip">Next.js</span>
                <span className="chip">SCSS</span>
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
                - <small>(개인)</small>
              </div>
            </li>
            <li>
              <span className="title">유형</span>
              <div className="desc">웹사이트</div>
            </li>
            <li>
              <span className="title">기간</span>
              <div className="desc">
                <span className="chip">디자인 5일</span>
                <span className="chip">퍼블리싱 14일</span>
              </div>
            </li>
            <li>
              <span className="title">기여도</span>
              <div className="desc">100%</div>
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
                제 포트폴리오들과 저에 대한 소개를 모아서 한 눈에 볼 수 있고, 그동안 해보고 싶었던 인터랙션들이 적용된 개인 포트폴리오 웹사이트 입니다.
              </p>
              <p className="phrase">
                다양하고 흥미로운 동적 웹을 만들 수 있음을 보여주기 위해 스크롤에 따라 반응하는 크고 작은 요소들을 많이 넣었고, 최근 들어 수요가 많아진 SSR(Server-side Rendering) 방식의 Next.js와 CSS를 더 효율적으로 작성할 수 있는 SCSS를 사용하여 개발했습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.bg1} bg`}>
        <figure className="previewDesktop">
          <Image
            src='/images/hi5-1.jpg'
            alt='lsd pc 미리보기'
            fill
          />
          {/* gif나 mp4파일.. */}
        </figure>
      </div>
      <div className="detailContent">
        <div className="left">
          <h5 className="contentSubTitle">디자인 컨셉</h5>
        </div>
        <div className="right">
          <p className="phrase">
            개인 포트폴리오 사이트 작업은 스스로를 브랜딩할 수 있는 좋은 기회라고 생각합니다. 제 이름의 뜻인 ´함께 이룬다´라는 메시지를 담고 싶었는데, 어떻게 전달해야 할 지에 대한 고민이 쉽게 풀리지 않아서 두 가지 디자인 컨셉을 놓고 몇 번의 시행착오를 겪었습니다.
          </p>
          <p className="phrase">
            첫번째는 개인적으로 좋아하는 ´브루탈리즘´과 같은 핵심 내용만 담긴 심플한 컨셉, 두번째는 저의 메시지를 잘 전달해줄 수 있는 미켈란젤로의 ´천지창조´ 작품을 인용하는 컨셉에 착안하여 두 개의 사이트를 작업해보았습니다. 작업이 진행될수록 두번째 컨셉으로 풀어나가는 게 더 수월했고 지금의 웹사이트 디자인이 완성되었습니다.
          </p>
        </div>
      </div>
      <div className={`${styles.bg2} bg`}>
        <figure className="previewDesktop">
          <Image
            src='/images/hi5-1.jpg'
            alt='디자인 컨셉 후보1 (화이트버전)'
            fill
          />
        </figure>
        <figure className="previewDesktop">
          <Image
            src='/images/hi5-1.jpg'
            alt='디자인 컨셉 후보2 (채택안)'
            fill
          />
          {/* gif나 mp4파일.. */}
        </figure>
      </div>
      <div className="detailContent">
        <div className="left">
          <h5 className="contentSubTitle">Next.js</h5>
        </div>
        <div className="right">
          <p className="phrase">
            회사에서 Vue.js 프레임워크를 사용하여 팀 프로젝트로 SPA(Single Page Application) 형식의 그룹웨어를 만들어본 후, 개인 프로젝트에도 같은 형식을 적용해보고 싶었습니다. 
          </p>
          <p className="phrase">
            하지만 Next.js는 라우터 구조상 리액트의 SPA처럼 사용하려면 Next.js에서 기본적으로 제공되는 방식과는 다르게 코딩해야 했고, 리액트나 Next.js에 Vue.js 만큼 익숙하진 않았기 때문에 라우팅이 더 쉽고 간편한 Next.js를 선택했습니다. 
          </p>
          <p className="phrase">
            SPA 형식이 아닐 경우 페이지 전환 시에 깜빡임이 발생하지만, Next.js는 처음부터 모든 페이지 정보를 불러온 뒤 렌더링을 하기 때문에 다행히도 SPA 형식 사이트처럼 깜빡임이 발생하지 않았습니다. 여기에 페이지 전환 애니메이션을 적용해 페이지 간의 흐름이 더 자연스럽고 하나의 유기체로 보이도록 작업했습니다.
          </p>
        </div>
      </div>
      <div className={`${styles.bg3} bg`}>
        <figure className="previewDesktop">
          <Image
            src='/images/hi5-1.jpg'
            alt='next.js 코드 미리보기'
            fill
          />
        </figure>
        <figure className="previewDesktop">
          <Image
            src='/images/hi5-1.jpg'
            alt='scss 코드 미리보기'
            fill
          />
          {/* gif나 mp4파일.. */}
        </figure>
      </div>
      <div className="detailContent justify-center align-center flex-column text-center">
        <h4 className="contentTitle">Responsive</h4>
      </div>
      <div className={`${styles.bg4} bg`}>
        <figure className="previewMobile">
          <Image
            src='/images/hi5-1.jpg'
            alt='lsd 사이트 반응형'
            fill
          />
        </figure>
        <figure className="previewMobile">
          <Image
            src='/images/hi5-1.jpg'
            alt='lsd 사이트 반응형'
            fill
          />
        </figure>
        {/* 반응형 gif나 mp4... */}
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
          href="/about"
        >
          Go to About
        </Link>
      </div>
    </section>
  )
}