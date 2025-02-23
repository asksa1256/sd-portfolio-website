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
    title: "클릭하면 그룹웨어 솔루션 Hi5 소개 페이지로 이동합니다.",
    alt: "그룹웨어 솔루션 Hi5 썸네일",
  },
  {
    id: 2,
    src: "pj-2.jpg",
    title: "클릭하면 동일이엔티 웹사이트 소개 페이지로 이동합니다.",
    alt: "동일이엔티 웹사이트 썸네일",
  },
  {
    id: 3,
    src: "pj-3.jpg",
    title: "클릭하면 솔루션 비스무스 소개 페이지로 이동합니다.",
    alt: "비즈니스 분석 솔루션 비스무스 썸네일",
  },
  {
    id: 4,
    src: "pj-4.jpg",
    title: "클릭하면 웹사이트 테라에너지 소개 페이지로 이동합니다.",
    alt: "테라에너지 웹사이트 썸네일",
  },
  {
    id: 5,
    src: "pj-5.jpg",
    title: "클릭하면 테라에너지 채용 소개 페이지로 이동합니다.",
    alt: "테라에너지 채용 홈페이지 썸네일",
  },
  {
    id: 6,
    src: "pj-6.jpg",
    title: "클릭하면 솔루션 카카오더 소개 페이지로 이동합니다.",
    alt: "스마트 오더 솔루션 카카오더 홈페이지 썸네일",
  },
  {
    id: 7,
    src: "pj-7.jpg",
    title: "클릭하면 솔루션 셀린 소개 페이지로 이동합니다.",
    alt: "스마트 조명 솔루션 셀린 홈페이지 썸네일",
  },
  {
    id: 8,
    src: "pj-8.jpg",
    title: "클릭하면 우듬지석란 소개 페이지로 이동합니다.",
    alt: "우듬지석란 웹사이트 썸네일",
  },
  {
    id: 9,
    src: "pj-9.jpg",
    title: "클릭하면 저의 포트폴리오 사이트 소개 페이지로 이동합니다.",
    alt: "포트폴리오 사이트 썸네일",
  },
];

const setScrollY = () => {
  sessionStorage.setItem("scrollY", JSON.stringify(window.scrollY));
};

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
    <section id="projects" className={`${styles.projects} projects`}>
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
                title={props.title}
                onClick={setScrollY}
              ></Link>
              <Image
                src={`/images/${props.src}`}
                alt={props.alt}
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
