"use client"
import {useEffect} from 'react'
import styles from './page.module.css'
import Intro from '@/components/Intro'
import Description from '@/components/Description'
import Projects from '@/components/Projects'
import Ability from '@/components/Ability'
import Character from '@/components/Character'

export default function Home() {
  useEffect(() => {

    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()

  }, [])
  
  return (
    <main className={styles.main}>
      <Intro/>
      <Description/>
      <Character/>
      <Ability/>
      {/* <Projects/> */}
    </main>
  )
}
