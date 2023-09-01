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
  const currentProjectNum = 4;
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
            <p ref={firstText}>teraenergy.co.kr</p>
            <p ref={secondText}>teraenergy.co.kr</p>
          </div>
        </div>
      </div>
      <div className="detailContent detailSummary">
        <h2 className="detailTitle">테라에너지</h2>
        <h4 className="detailSubTitle">홈페이지 리뉴얼 퍼블리싱</h4>
        <div className="detailCtg">
          <span className="chip">퍼블리싱</span>
        </div>
        <div className="detailList">
          <ul className="left">
            <li>
              <span className="title">링크</span>
              <div className="desc">
                <Link
                  className="link"
                  href="http://teraenergy.co.kr/index_2022.html"
                  target="_blank"
                >
                  http://teraenergy.co.kr/index_2022.html
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
              <div className="desc">홈페이지</div>
            </li>
            <li>
              <span className="title">기간</span>
              <div className="desc">
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
              <div className="desc">
                GDWEB 디자인 어워드 수상 (2023)
                <br/>
                <Link
                  className="link"
                  href="https://www.gdweb.co.kr/sub/view.asp?displayrow=60&Txt_key=all&Txt_word=&Txt_agnumber=&Txt_fgbn=5&Txt_bcode1=&Txt_gbflag=&Txt_bcode2=&Txt_bcode3=&Txt_bcode4=&Txt_bcode5=&Page=1&str_no=20024"
                  target="_blank"
                >
                  바로가기
                </Link>
              </div>
            </li>
          </ul>
          <div className="right">
            <span className="title">요약</span>
            <div className="desc">
              <p className="phrase">
                테라에너지는 혁신을 추구하는 컨셉에 맞춰 매년 홈페이지를 리뉴얼 해왔습니다. 그중 2021년, 2022년 버전을 작업했으며 2022년 버전에서 GSAP.js 라이브러리를 이용한 재미있는 시도를 했습니다. 원페이지 형식의 간단한 사이트로, GSAP 라이브러리를 이용한 인터랙션이 특징적입니다.<br/>
                <small>* 2023년 버전은 GDWEB 수상작으로 선정되었으며, 해당 버전의 랜딩 페이지 퍼블리싱에 70% 기여했습니다.</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <figure className={`${styles.bg1} bg`}>
        <Image
          src='/images/hi5-1.png'
          alt='테라에너지 pc 홈페이지 미리보기'
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
          <h5>GSAP.js를 사용한 인터랙션</h5>
          <p className="phrase">
            깔끔하고 세련된 리뉴얼 디자인이 HTML, CSS로만 작업하니까 너무 단조로운 느낌이 들어서 인터랙션을 추가하자는 아이디어를 담당 웹 디자이너에 제시했습니다. 그러자 떠오르는 대로 작업해도 된다며 수락했고, 평소 GSAP 라이브러리 사용을 연습하고 있던 저로서는 처음으로 실전에 적용해볼 기회를 얻게 되었습니다. 하지만 반응형이나 스크롤 인터랙션의 시작과 끝 지점을 설정하는 등 디테일한 부분에서 GSAP에 대한 깊은 이해가 요구되었습니다.
          </p>
          <h5>해결</h5>
          <p className="phrase">
            GSAP은 공식 문서 외에도 사용자 커뮤니티가 활성화된 편이어서 조금만 검색해봐도 관련 예시나 에러 해결 방법들이 나왔습니다. 완전히 똑같지는 않아도 비슷한 에러 사례들을 참고해서 라이브러리 사용 도중에 막히는 부분들을 차근차근 해결할 수 있었습니다.
          </p>
        </div>
      </div>
      <figure className={`${styles.bg2} bg`}>
        <Image
          src='/images/hi5-1.png'
          alt='테라에너지 홈페이지 GSAP.js 적용 애니메이션'
          width='1024'
          height='600'
        />
        <Image
          src='/images/hi5-1.png'
          alt='GSAP.js 코드 이미지'
          width='1024'
          height='600'
        />
      </figure>
      <div className="detailContent justify-center align-center flex-column text-center">
        <h4>반응형</h4>
      </div>
      <figure className={`${styles.bg4} bg responsiveImages`}>
        <Image
          src='/images/hi5-1.png'
          alt='테라에너지 반응형 이미지들'
          width='414'
          height='680'
        />
        <Image
          src='/images/hi5-1.png'
          alt='테라에너지 반응형 이미지들'
          width='414'
          height='680'
        />
        <Image
          src='/images/hi5-1.png'
          alt='테라에너지 반응형 이미지들'
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