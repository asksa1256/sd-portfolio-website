"use client";
import React, { Suspense, lazy, useState, useEffect, useRef } from "react";
import styles from "./page.module.scss";
import PageWrapper from "@/components/pageWrapper";
import CircularLoader from "@/components/CircularLoader";
const Intro = lazy(() => import("@/components/Intro"));
const Description = lazy(() => import("@/components/Description"));
const Character = lazy(() => import("@/components/Character"));
const Ability = lazy(() => import("@/components/Ability"));
const IntervalMarquee = lazy(() => import("@/components/IntervalMarquee"));
const Projects = lazy(() => import("@/components/Projects"));
const Contact = lazy(() => import("@/components/Contact"));
const Header = lazy(() => import("@/components/Header"));
const Footer = lazy(() => import("@/components/Footer"));

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);
  const loaderRef = useRef(null);

  const goToLinkHandler = (target) => {
    if (typeof window !== "undefined") {
      (async () => {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        const locomotiveScroll = new LocomotiveScroll();
        const targetDOM = document.querySelector(target);

        locomotiveScroll.scrollTo(".pageWrapper", {
          offset:
            target !== "#ability"
              ? targetDOM.offsetTop
              : targetDOM.offsetTop - 200,
          duration: 1,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      })();
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (loaderRef.current) {
        loaderRef.current.classList.add(styles.fadeOut);
      }
      setTimeout(() => {
        setIsLoading(false);
        setShowLoader(false);
      }, 500); // fadeOut 시간과 일치
    }, 500); // 로딩 상태 초기화

    return () => clearTimeout(timer);
  }, []);

  return (
    <PageWrapper>
      <main className={styles.main}>
        {showLoader && (
          <div ref={loaderRef} className={styles.loadingDiv}>
            <CircularLoader />
          </div>
        )}
        {!isLoading && (
          <Suspense fallback={" "}>
            <Header onLinkClicked={goToLinkHandler} />
            <Intro />
            <Description />
            <Character />
            <Ability />
            <IntervalMarquee />
            <Projects />
            <Contact />
            <Footer />
          </Suspense>
        )}
      </main>
    </PageWrapper>
  );
}
