"use client";
import { useEffect } from "react";
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

export default function Home() {
  useEffect(() => {
    const isTouchDevice =
      navigator.maxTouchPoints || "ontouchstart" in document.documentElement;

    if (!isTouchDevice) {
      (async () => {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        const locomotiveScroll = new LocomotiveScroll();
      })();
    }
  }, []);

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
      </main>
    </PageWrapper>
  );
}
