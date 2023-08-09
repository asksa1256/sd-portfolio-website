import styles from './style.module.css'
import {useState, useRef, useEffect} from 'react'
import gsap from 'gsap'
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/all'

const sectionName = "projects";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(0);
  const imageContainer = useRef(null);
  const project = useRef(null);
  const pjTitleObject = useRef(null);

  const projects = [
    {
      title: "Groupware Hi5",
      src: "pj1.jpg"
    },
    {
      title: "Dong-il ENT",
      src: "pj2.jpg"
    },
    {
      title: "TERAENERGY",
      src: "pj3.jpg"
    },
    {
      title: "CACAORDER",
      src: "pj4.jpg"
    },
  ]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    /* section title rolling animation */
    gsap.set(`.letter.${sectionName}`, { y: "100%",});
    gsap.to(`.letter.${sectionName}`, {
      scrollTrigger: {
        trigger: projects.current,
        start: "0px bottom",
        toggleActions: "play none none reverse",
      },
        y: "0%",
        stagger: 0.025,
    })

    ScrollTrigger.create({
      trigger: imageContainer.current,
      start: "top-=100px",
      end: document.body.offsetHeight,
      pin: true,
      markers: false,
    })
  }, [])

  return (
    <section className={styles.projects} ref={projects}>
      <div className='sectionTitle'>
        <div className='headingWrap'>
          <SplittingText>Projects</SplittingText>
          <span className={styles.object} ref={pjTitleObject}></span>
        </div>
      </div>
      <div className={styles.projectDescription}>
        <div ref={imageContainer} className={styles.imageContainer}>
          <Image
            src={`/images/${projects[selectedProject].src}`}
            alt="image"
            fill
          />
        </div>
        <div className={styles.column}>
          <p>
          제3항의 승인을 얻지 못한 때에는 그 처분 또는 명령은 그때부터 효력을 상실한다. 이 경우 그 명령에 의하여 개정 또는 폐지되었던 법률은 그 명령이 승인을 얻지 못한 때부터 당연히 효력을 회복한다.
          </p>
        </div>
        <div className={styles.column}>
          <p>
          대통령은 국무회의의 의장이 되고, 국무총리는 부의장이 된다. 군사재판을 관할하기 위하여 특별법원으로서 군사법원을 둘 수 있다. 모든 국민은 언론·출판의 자유와 집회·결사의 자유를 가진다. 누구든지 체포 또는 구속을 당한 때에는 적부의 심사를 법원에 청구할 권리를 가진다. 국민의 모든 자유와 권리는 국가안전보장·질서유지 또는 공공복리를 위하여 필요한 경우에 한하여 법률로써 제한할 수 있으며, 제한하는 경우에도 자유와 권리의 본질적인 내용을 침해할 수 없다.
          </p>
        </div>
      </div>
      <ul className={styles.projectList}>
        {
          projects.map( (project, idx) => {
            return (<li onMouseOver={() => {setSelectedProject(idx)}} className={styles.projectEl} key={`p_${idx}`}>
              <p>{project.title}</p> 
            </li>)
          } )
        }
      </ul>
    </section>
  )
}

function SplittingText({children}) {
  const text = useRef(null);

  useEffect(() => {
    /* text split */
    let innerText = text.current.innerText;
    text.current.innerText = "";

    for (let letter of innerText) {
      let span = document.createElement("span");
      span.innerText = letter.trim() === "" ? "\xa0" : letter;
      span.classList.add("letter", sectionName);
      text.current.appendChild(span);
    }
  }, [])

  return (
    <h3 ref={text}>{children}</h3>
  )
}