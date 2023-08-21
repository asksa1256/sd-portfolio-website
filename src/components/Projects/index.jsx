import styles from './style.module.scss'
import {useState, useRef, useEffect} from 'react'
import gsap from 'gsap'
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/all'
import { useTransform, useScroll, motion } from 'framer-motion'
import useDimension from '@/useDimension'

const images = [
  "pj-1.jpg",
  "pj-2.jpg",
  "pj-3.jpg",
  "pj-4.jpg",
  "pj-5.jpg",
  "pj-6.jpg",
  "pj-7.jpg",
  "pj-8.jpg",
]

export default function Projects() {
  const container = useRef(null);
  const {height} = useDimension();
  
  const scrollProgress = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })
  const y = useTransform(scrollProgress.scrollYProgress, [0, 1], [0, height * 1.5]) 
  const y2 = useTransform(scrollProgress.scrollYProgress, [0, 1], [0, height * 1]) 
  const y3 = useTransform(scrollProgress.scrollYProgress, [0, 1], [0, height * 1.25])

  return (
    <section className={styles.projects}>
      <div className={styles.gallery} ref={container}>
        <Column 
          images={[images[0], images[1], images[2]]} 
          y={y}
        />
        <Column 
          images={[images[3], images[4], images[5]]}
          y={y2}
        />
        <Column 
          images={[images[6], images[7]]}
          y={y3}
        />
      </div>
      <div className={styles.spacer}></div>
    </section>
  )
}

const Column = ({images, y=0}) => {
  return (
    <motion.div style={{y}} className={styles.column}>
      {
        images.map((src, idx) => {
          return <div key={idx} className={styles.imageContainer}>
            <Image
              src={`/images/${src}`}
              alt="image"
              fill
            />
          </div>
        })
      }
    </motion.div>
  )
}