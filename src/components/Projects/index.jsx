import styles from "./style.module.scss";
import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useTransform, useScroll, motion } from "framer-motion";
import useDimension from "@/useDimension";
import Link from "next/link";

const images = [
  {
    id: 1,
    src: "pj-1.jpg",
  },
  {
    id: 2,
    src: "pj-2.jpg",
  },
  {
    id: 3,
    src: "pj-3.jpg",
  },
  {
    id: 4,
    src: "pj-4.jpg",
  },
  {
    id: 5,
    src: "pj-5.jpg",
  },
  {
    id: 6,
    src: "pj-6.jpg",
  },
  {
    id: 7,
    src: "pj-7.jpg",
  },
  {
    id: 8,
    src: "pj-8.jpg",
  },
  {
    id: 9,
    src: "pj-9.jpg",
  },
];

export default function Projects() {
  const container = useRef(null);
  const { height } = useDimension();

  const scrollProgress = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollProgress.scrollYProgress,
    [0, 1],
    [0, height * 1.5]
  );
  const y2 = useTransform(
    scrollProgress.scrollYProgress,
    [0, 1],
    [0, height * 1]
  );
  const y3 = useTransform(
    scrollProgress.scrollYProgress,
    [0, 1],
    [0, height * 1.25]
  );

  useEffect(() => {
    /* mobile list animation */
    // list items show
    if (innerWidth < 650) {
      const boxes = gsap.utils.toArray(".projects .inner");

      Array.prototype.forEach.call(boxes, function (box) {
        gsap.fromTo(
          box,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.5,
            scrollTrigger: {
              trigger: box,
              start: "0px bottom",
              end: "bottom",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }
  }, []);

  return (
    <section className={`${styles.projects} projects`}>
      <ul className={styles.gallery} ref={container}>
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
      </ul>
    </section>
  );
}

const Column = ({ images, y = 0 }) => {
  const { width } = useDimension();

  return (
    <motion.li style={width > 650 ? { y } : 0} className={styles.column}>
      {images?.map((props, idx) => {
        return (
          <div key={idx} className={styles.imageContainer}>
            <div className={`${styles.inner} inner`}>
              <Link
                className={styles.link}
                href={`/project/${props.id}`}
                scroll={true}
              ></Link>
              <Image
                src={`/images/${props.src}`}
                alt="image"
                fill
                sizes="612px"
              />
              <figure className={styles.star}>
                <Image src="/images/star_wt.png" alt="" fill sizes="80px" />
              </figure>
            </div>
          </div>
        );
      })}
    </motion.li>
  );
};
