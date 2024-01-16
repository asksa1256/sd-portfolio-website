"use client";
// import { useEffect } from "react";
import styles from "./page.module.scss";
import Intro from "@/components/Intro";
import Description from "@/components/Description";
import Projects from "@/components/Projects";
import Ability from "@/components/Ability";
import Character from "@/components/Character";
import IntervalMarquee from "@/components/IntervalMarquee";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/pageWrapper";
import TopButton from "@/components/TopButton";

export default function Home() {
  // useEffect(() => {
  //   const isTouchDevice =
  //     navigator.maxTouchPoints || "ontouchstart" in document.documentElement;

  //   if (!isTouchDevice) {
  //     (async () => {
  //       const LocomotiveScroll = (await import("locomotive-scroll")).default;
  //       const locomotiveScroll = new LocomotiveScroll();
  //       // locomotiveScroll.scrollTo(".pageWrapper", {
  //       //   offset: 0,
  //       //   duration: 1,
  //       //   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  //       // });
  //       // console.log("test");
  //     })();
  //   }
  // }, []);

  return (
    <PageWrapper>
      <main className={styles.main}>
        <Intro />
        <Description />
        <Character />
        <Ability />
        <IntervalMarquee />
        <Projects />
        <Contact />
        <Footer />
        <TopButton />
      </main>
    </PageWrapper>
  );
}
