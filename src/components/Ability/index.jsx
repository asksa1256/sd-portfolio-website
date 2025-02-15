import styles from "./style.module.scss";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

const sectionName = "ability";

const abilityArr = [
  {
    name: "HTML5",
    className: "html5",
    iconUrl: "/images/logo_html.png",
    color: "#F4652E",
  },
  {
    name: "CSS3",
    className: "css3",
    iconUrl: "/images/logo_css.png",
    color: "#3E9DD6",
  },
  {
    name: "JavaScript",
    className: "javascript",
    iconUrl: "/images/logo_js.png",
    color: "#F0DC4E",
  },
  {
    name: "JQuery",
    className: "jquery",
    iconUrl: "/images/logo_jquery.png",
    color: "#147DC2",
  },
  {
    name: "Vue.js",
    className: "vuejs",
    iconUrl: "/images/logo_vue.png",
    color: "#41B880",
  },
  {
    name: "TypeScript",
    className: "typescript",
    iconUrl: "/images/logo_ts.png",
    color: "#017ACD",
  },
  {
    name: "React.js",
    className: "reactjs",
    iconUrl: "/images/logo_react.png",
    color: "#49B0FD",
  },
  {
    name: "Next.js",
    className: "nextjs",
    iconUrl: "/images/logo_nextjs.png",
    color: "#000",
  },
  {
    name: "Adobe XD",
    className: "xd",
    iconUrl: "/images/logo_xd.png",
    color: "#FF61F3",
  },
  {
    name: "Figma",
    className: "figma",
    iconUrl: "/images/logo_figma.png",
    color: "#A358FF",
  },
  {
    name: "Photoshop",
    className: "photoshop",
    iconUrl: "/images/logo_ps.png",
    color: "#2EA5FF",
  },
  {
    name: "GitHub",
    className: "github",
    iconUrl: "/images/logo_github.png",
    color: "#000",
  },
  {
    name: "GitLab",
    className: "gitlab",
    iconUrl: "/images/logo_gitlab.png",
    color: "#E44326",
  },
];

export default function Ability() {
  const ability = useRef(null);
  const object = useRef(null);
  const preventMouseEvent = useRef(null);

  useEffect(() => {
    gsap.registerPlugin();

    /* section title rolling animation */
    gsap.set(`.letter.${sectionName}`, { y: "100%" });
    gsap.to(`.letter.${sectionName}`, {
      scrollTrigger: {
        trigger: ability.current,
        start: () =>
          innerWidth > 1280
            ? "700px bottom"
            : innerWidth > 650
            ? "100px bottom"
            : "0px bottom",
        toggleActions: "play none none reverse",
      },
      y: "0%",
      stagger: 0.025,
    });

    /* object animation */
    const objectTl = gsap.timeline({
      scrollTrigger: {
        trigger: ability.current,
        start: () =>
          innerWidth > 1280
            ? "700px bottom"
            : innerWidth > 650
            ? "100px bottom"
            : "0px bottom",
        toggleActions: "play none none reverse",
      },
    });
    objectTl.to(object.current, {
      delay: 0.5,
      opacity: 1,
    });

    /* prevent mouseover event before  */
    gsap.to(preventMouseEvent.current, {
      scrollTrigger: {
        trigger: ability.current,
        start: "top-=200px",
        end: "bottom",
        toggleActions: "play none none reverse",
      },
      visibility: "hidden",
      delay: 1.5,
    });

    /* list animation */
    // list items show
    gsap.to(".itemInner", {
      scrollTrigger: {
        trigger: ability.current,
        start: () => (innerWidth > 650 ? "top-=200px" : "0px bottom"),
        end: "bottom",
        toggleActions: "play none none reverse",
      },
      y: "0%",
      delay: 0.75,
      stagger: 0.05,
    });

    // list items hide
    gsap.to(".itemInner", {
      scrollTrigger: {
        trigger: ability.current,
        start: () => (innerWidth > 650 ? "bottom-=400px" : "bottom-=200px"),
        end: "bottom",
        toggleActions: "play none none reverse",
      },
      y: "100%",
      opacity: 0,
      stagger: 0.05,
    });
  }, []);

  return (
    <section id="ability" className={`${styles.ability} ability`} ref={ability}>
      <div className={`${styles.sectionTitle} sectionTitle`}>
        <div className={styles.headingWrap}>
          <span className={styles.object} ref={object}></span>
          <SplittingText>Ability</SplittingText>
        </div>
      </div>
      <ul className={styles.abilityList}>
        <AbilityItem />
        <li className={styles.preventMouseEvent} ref={preventMouseEvent}></li>
      </ul>
    </section>
  );
}

function SplittingText({ children }) {
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
  }, []);

  return <h3 ref={text}>{children}</h3>;
}

function AbilityItem() {
  const listArr = useRef([]);

  const handleMouseEnter = (e, color) => {
    gsap.to(e.currentTarget, {
      backgroundColor: "#fff",
      color: color,
      y: () => (innerWidth > 420 ? -24 : -14),
    });
    e.currentTarget.classList.add(styles.hovered);
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      backgroundColor: "#000",
      color: "#fff",
      y: 0,
    });
    e.currentTarget.classList.remove(styles.hovered);
  };

  return abilityArr?.map((item, i) => {
    const classNm = item.className;
    return (
      <li
        onMouseEnter={(e) => {
          handleMouseEnter(e, item.color);
        }}
        onMouseLeave={(e) => {
          handleMouseLeave(e, item.color);
        }}
        key={"item" + i}
      >
        <span className="itemInner" ref={(el) => (listArr.current[i] = el)}>
          <Image
            src={item.iconUrl}
            alt=""
            fill
            sizes="66px"
            className={styles.icon}
            data-classname={classNm}
          />
          <em>{item.name}</em>
        </span>
      </li>
    );
  });
}
