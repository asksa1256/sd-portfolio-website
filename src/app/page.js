"use client"
import {useEffect} from 'react'
import styles from './page.module.scss'
import Intro from '@/components/Intro'
import Description from '@/components/Description'
import Projects from '@/components/Projects'
import Ability from '@/components/Ability'
import Character from '@/components/Character'
import IntervalMarquee from '@/components/IntervalMarquee'
import Footer from '@/components/Footer'

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
    <main className={styles.main}>
      <Intro/>
      <Description/>
      <Character/>
      <Ability/>
      <IntervalMarquee/>
      <Projects/>
      <Footer/>
    </main>
  )
}
