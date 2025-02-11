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
const Footer = lazy(() => import("@/components/Footer"));

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);
  const loaderRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (loaderRef.current) {
        loaderRef.current.classList.add(styles.fadeOut);
      }
      setTimeout(() => {
        setIsLoading(false);
        setShowLoader(false);
      }, 500); // fadeOut 시간과 일치
    }, 0); // 로딩 상태 초기화

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
