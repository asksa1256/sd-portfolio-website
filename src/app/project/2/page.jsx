"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import styles from './style.module.scss'

export default function Project02() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const marquee = useRef(null);
  const layer = useRef(null);
  const currentProjectNum = 2;
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
            <p ref={firstText}>Dongil ENT</p>
            <p ref={secondText}>Dongil ENT</p>
          </div>
        </div>
      </div>
      <div className="detailContent detailSummary">
        <h2 className="detailTitle">동일이엔티</h2>
        <h4 className="detailSubTitle">조명 사업 및 전기/통신 공사</h4>
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
                  href="http://dient.co.kr"
                  target="_blank"
                >
                  dient.co.kr
                </Link>
              </div>
            </li>
            <li>
              <span className="title">언어</span>
              <div className="desc">
                <span className="chip">HTML</span>
                <span className="chip">CSS</span>
                <span className="chip">JQuery</span>
                <span className="chip">JavaScript</span>
              </div>
            </li>
            <li>
              <span className="title">툴</span>
              <div className="desc">
                <span className="chip">EditPlus</span>
              </div>
            </li>
            <li>
              <span className="title">고객사</span>
              <div className="desc">
                동일이엔티
              </div>
            </li>
            <li>
              <span className="title">유형</span>
              <div className="desc">웹사이트</div>
            </li>
            <li>
              <span className="title">기간</span>
              <div className="desc">
                <span className="chip">퍼블리싱 12일</span>
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
              <div className="desc">그누보드(CMS) 사용</div>
            </li>
          </ul>
          <div className="right">
            <span className="title">요약</span>
            <div className="desc">
              <p className="phrase">
                기존의 동일이엔티 홈페이지는 회사 소개와 자사 상품 목록이 나열된 페이지가 있는 단순한 형태였는데 디자인 리뉴얼을 진행하면서 카탈로그, 설치가이드, 인재채용 등 동일이엔티가 다루고 있는 상세 컨텐츠들이 추가되어 사이트가 더욱 다채로워졌습니다.
              </p>
              <p className="phrase">
                또한 디자인이 정적인 디자인에서 트렌디하게 바뀌었기 때문에 그 느낌을 살리기 위해 인터랙션 요소를 너무 과하지 않은 선에서 적용했습니다. 사이트의 주 사용자가 4~50대 남성이기 때문에 애니메이션이 많으면 오히려 가독성과 사용성이 낮아질 것을 고려했습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <figure className={`${styles.bg1} bg`}>
        <Image
          src='/images/hi5-1.png'
          alt='동일이엔티 pc 페이지들 미리보기'
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
          <h5>생소했던 CMS(Content Management System)</h5>
          <p className="phrase">
            동일이엔티 홈페이지는 그누보드로 제작되어 있었습니다. 그 상태에서 디자인 리뉴얼을 요청받았는데, 이전에 무료 CMS인 그누보드로 사이트 만드는 연습을 해보긴 했지만 실전에서는 처음이었습니다. 최대한 빨리 퍼블리싱 해달라는 요청에 CMS 솔루션 없이 HTML부터 만들 때와 비슷하게 반응형을 포함해서 10일로 작업 기간을 잡았지만, CMS의 파일 구조는 생각보다 훨씬 복잡했으며 전임자의 코드에서 수정을 해야 되는 부분도 있어서 기존 코드를 이해하는 것에도 시간이 필요했습니다.
          </p>
          <h5>해결</h5>
          <p className="phrase">
            항상 기한 내에 작업을 마쳐왔지만 이번에는 그누보드의 복잡한 구조상 시간이 더 필요하다 판단해서 작업 셋째 날에 컨펌 담당자한테 기한을 4~5일 늘려달라고 요청했습니다. 마감까지 시간이 꽤 남은 시점에서 미리 말씀드렸기 때문에 별 문제 없이 클라이언트와도 상의하여 작업 기간을 늘리고, 기한에 맞춰서 작업을 성공적으로 마쳤습니다.
          </p>
        </div>
      </div>
      <figure className={`${styles.bg2} bg`}>
        <Image
          src='/images/hi5-1.png'
          alt='그누보드 적용된 동일이엔티 페이지들 영상'
          width='1024'
          height='600'
        />
        {/* 컴포넌트 개발 코드 + 드래그 앤 드랍 컴포넌트 주석 캡쳐 */}
      </figure>
      <div className="detailContent justify-center align-center flex-column text-center">
        <h4>반응형</h4>
      </div>
      <figure className={`${styles.bg3} bg responsiveImages`}>
        <Image
          src='/images/hi5-1.png'
          alt='동일이엔티 반응형 이미지들'
          width='414'
          height='680'
        />
        <Image
          src='/images/hi5-1.png'
          alt='동일이엔티 반응형 이미지들'
          width='414'
          height='680'
        />
        <Image
          src='/images/hi5-1.png'
          alt='동일이엔티 반응형 이미지들'
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