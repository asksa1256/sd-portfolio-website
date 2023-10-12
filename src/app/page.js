"use client"
import {Suspense, useEffect} from 'react'
import styles from './page.module.scss'
import Intro from '@/components/Intro'
import Description from '@/components/Description'
import Projects from '@/components/Projects'
import Ability from '@/components/Ability'
import Character from '@/components/Character'
import IntervalMarquee from '@/components/IntervalMarquee'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import PageWrapper from '@/components/pageWrapper'
import Loading from './loading'

export default function Home() {
  useEffect(() => {
    if (window.innerWidth > 768) {
      (
        async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default;
          const locomotiveScroll = new LocomotiveScroll();
        }
      )()
    }
  }, [])
  
  return (
    <Suspense fallback={<Loading />}>
    {/* <PreLoading/> */}
      <PageWrapper>
        <main className={styles.main}>
          <Intro/>
          <Description/>
          <Character/>
          <Ability/>
          <IntervalMarquee/>
          <Projects/>
          <Contact/>
          <Footer/>
        </main>
      </PageWrapper>
    </Suspense>
  )
}
