"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import styles from './style.module.scss'

export default function Project05() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const marquee = useRef(null);
  const layer = useRef(null);
  const currentProjectNum = 5;
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
            <p ref={firstText}>teraenergy.co.kr/team</p>
            <p ref={secondText}>teraenergy.co.kr/team</p>
          </div>
        </div>
      </div>
      <div className="detailContent detailSummary">
        <h2 className="detailTitle">테라에너지 채용</h2>
        <h4 className="detailSubTitle">자사 채용 안내 사이트</h4>
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
                  href="http://teraenergy.co.kr/team"
                  target="_blank"
                >
                  http://teraenergy.co.kr/team
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
                <span className="chip">퍼블리싱 4일</span>
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
                테라에너지는 별도의 채용 사이트 없이 구인 포털 사이트를 이용해왔는데, 2022년에 공식 페이지 리뉴얼을 진행하면서 채용 사이트도 새롭게 추가하여 이용하고 있습니다. 기존의 포털 사이트에서 정형적으로 주어진 포맷에 따라 공고를 올리는 방식은 테라에너지 홈페이지의 트렌디한 디자인과 맞지 않기 때문에 컨셉을 통일하고자 만들어졌으며, 이러한 전체적인 리뉴얼을 통해 20대 지원자들의 지원률이 증가했습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.bg1} bg`}>
        <figure className="previewDesktop">
          <Image
            src='/images/hi5-1.png'
            alt='테라에너지 채용 pc 미리보기'
            fill
          />
          {/* gif나 mp4파일로 보여주기.. */}
        </figure>
      </div>
      <div className="detailContent justify-center align-center flex-column text-center">
        <h4 className="contentTitle">Responsive</h4>
      </div>
      <div className={`${styles.bg4} bg`}>
        <figure className="previewMobile">
          <Image
            src='/images/hi5-1.png'
            alt='테라에너지 채용 반응형 이미지들'
            fill
          />
        </figure>
        <figure className="previewMobile">
          <Image
            src='/images/hi5-1.png'
            alt='테라에너지 채용 반응형 이미지들'
            fill
          />
        </figure>
        <figure className="previewMobile">
          <Image
            src='/images/hi5-1.png'
            alt='테라에너지 채용 반응형 이미지들'
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