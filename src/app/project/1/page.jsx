"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import styles from './style.module.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-fade';
import { EffectFade, Autoplay } from 'swiper/modules';

export default function Project01() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const marquee = useRef(null);
  const layer = useRef(null);
  const currentProjectNum = 1;
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
  };
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
        <h3 className="detailSubTitle">자사 그룹웨어 솔루션</h3>
        <div className="detailCtg">
          <span className="chip">웹 디자인</span>
          <span className="chip">웹 퍼블리싱</span>
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
                <span className="chip">퍼블리싱 15일</span>
              </div>
            </li>
            <li>
              <span className="title">기여도</span>
              <div className="desc">70%</div>
            </li>
            <li>
              <span className="title">기타사항</span>
              <div className="desc">-</div>
            </li>
          </ul>
          <div className="right">
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
      <div className={`${styles.bg1} bg`}>
        <div className="previewDesktop">
          <iframe className="videoIframe" src="https://www.youtube.com/embed/HQ2FBwXsc2c?si=NGJyb6Lx0tnKniIo&autoplay=1&mute=1&controls=0&loop=1&playlist=HQ2FBwXsc2c&playsinline=1&modestbranding=1&rel=0" title="Groupware Hi5 preview video" frameBorder="0"></iframe>
        </div>
      </div>
      <div className="detailContent">
        <div className="left">
          <h5 className="contentSubTitle">퍼블리셔의 디자인</h5>
        </div>
        <div className="right">
          <p className="phrase">
            프로젝트를 처음 시작했을 때, 디자이너가 따로 배정되지 않아서 프로젝트 팀의 퍼블리셔였던 제가 디자인도 함께 해야 했습니다. 혼자서 취미 삼아 디자인을 해본 적은 있지만 요청에 의해 시작한 디자인은 처음이라서 어디서부터 시작해야 될 지 막막했습니다.
          </p>
          <p className="phrase">
            다행히도 타 직무의 웹 디자이너와 상의하여 피드백을 자주 받아서 그룹웨어 디자인을 마칠 수 있었고, 잘 만들어진 예시들을 레퍼런스 삼는 것도 도움이 되었습니다. 그룹웨어에 테마 변경 기능을 추가할 때 UI 컴포넌트 및 클래스를 재사용하기 수월하도록 스타일 가이드를 작성해본 것도 좋은 경험이었습니다.
          </p>
        </div>
      </div>
      <div className={`${styles.bg2} bg`}>
        <figure className="previewDesktop">
          <Image
            src='/images/hi5-2.png'
            alt='그룹웨어 Hi5 XD 작업 화면'
            fill
          />
        </figure>
      </div>
      <div className="detailContent">
        <div className="left">
          <h5 className="contentSubTitle">Vue.js + TypeScript</h5>
        </div>
        <div className="right">
          <p className="phrase">
            익숙하게 작업해왔던 HTML5, CSS3, JavaScript, JQuery와 달리 Hi5는 Vue.js와 TypeScript를 기반으로 한 프로젝트였습니다. TypeScript는 JavaScript에서 약간 변형된 정도라고 생각되어 큰 어려움 없이 적응할 수 있었지만, Vue.js는 작업 환경 설정부터 문법까지 저의 기존 작업 방식과 많이 달랐으며 컴포넌트 위주의 화면 개발에 대한 사전 지식이 필요했습니다.
          </p>
          <p className="phrase">
            무작정 작업된 코드를 이용해서 작업하는 것보다는 Vue.js의 작동 원리를 알고 해야 더 복잡한 컴포넌트도 만들 수 있고, 컴포넌트 간 연동도 올바르게 할 수 있을 것 같아서 프로젝트 투입 전에 일주일 동안 Vue.js에 관해 조사했습니다. 
          </p>
          <p className="phrase">
            Vue.js에서의 컴포넌트 작동 원리를 이해하는 데에 시간이 조금 걸렸지만 계속 작업을 해보면서 그 구조에 점점 익숙해졌고, 컴포넌트 안에 다른 컴포넌트를 넣어 기능을 추가하는 것도 그다지 어렵지 않았습니다. 이를 통해 컴포넌트 구조가 얼마나 협업에 유용한지 알 수 있었고, 협업을 하면서 간과하기 쉬운 주석의 중요성도 다시 떠오르는 등 여러모로 많이 배우게 된 프로젝트였습니다.
          </p>
        </div>
      </div>
      <div className={`${styles.bg3} bg`}>
        <Swiper
          slidesPerView={1}
          loop={true}
          effect={'fade'}
          fadeEffect={{crossFade: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          modules={[EffectFade, Autoplay]}
          className="slider"
        >
          <SwiperSlide>
            <figure className="imgWrap">
              <Image
                src='/images/hi5-3.jpg'
                alt='대시보드 도넛 차트 코드 일부'
                fill
              />
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="imgWrap">
              <Image
                src='/images/hi5-4.jpg'
                alt='v-for를 사용한 테이블 코드 일부'
                fill
              />
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="imgWrap">
              <Image
                src='/images/hi5-5.jpg'
                alt='v-show를 사용한 알림 더보기 코드 일부'
                fill
              />
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="imgWrap">
              <Image
                src='/images/hi5-6.jpg'
                alt='모달 컴포넌트 코드 일부'
                fill
              />
            </figure>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="detailContent justify-center align-center flex-column text-center">
        <h4 className="contentTitle">Responsive</h4>
      </div>
      <div className={`${styles.bg4} bg`}>
        <div className="previewMobile">
          <iframe 
          className="videoIframe"
          src="https://youtube.com/embed/hL4rCQ_fgNM?si=fUwtwnlpXPkkbqbQ&autoplay=1&mute=1&controls=0&loop=1&playlist=hL4rCQ_fgNM&vq=hd720"
          title="Groupware Hi5 responsive preview video - dashboard"
          frameBorder="0"></iframe>
        </div>
        <figure className="previewMobile">
          <Image
            src='/images/hi5-1.jpg'
            alt='그룹웨어 Hi5 반응형 이미지들'
            fill
          />
        </figure>
        <figure className="previewMobile">
          <Image
            src='/images/hi5-1.jpg'
            alt='그룹웨어 Hi5 반응형 이미지들'
            fill
          />
        </figure>
      </div>
      <div className="pages">
        <Link
          className="prev disabled"
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