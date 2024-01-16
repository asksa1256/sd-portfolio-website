"use client";
import "./globals.css";
import { useEffect } from "react";
import gsap from "gsap";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function RootLayout({ children }) {
  useEffect(() => {
    const isTouchDevice =
      navigator.maxTouchPoints || "ontouchstart" in document.documentElement;
    let cursor = document.querySelector(".cursorBall");
    let cursorText = document.querySelector(".cursorText");
    const links = document.querySelectorAll("a");

    if (isTouchDevice === false) {
      document.addEventListener("mousemove", (e) => {
        cursor.style.top = e.clientY + "px";
        cursor.style.left = e.clientX + "px";
      });

      const onMouseEnterLink = () => {
        gsap.to(cursor, { scale: 4 });
        cursorText.style.display = "block";
      };

      const onMouseLeaveLink = () => {
        gsap.to(cursor, { scale: 1 });
        cursorText.style.display = "none";
      };

      const onMouseClickLink = () => {
        gsap.to(cursor, { scale: 1 });
        cursorText.style.display = "none";
      };

      links.forEach((link) => {
        link.addEventListener("mouseenter", onMouseEnterLink);
        link.addEventListener("mouseleave", onMouseLeaveLink);
        link.addEventListener("click", onMouseClickLink);
      });
    } else {
      cursor.style.display = "none";
    }
  });

  return (
    <html lang="ko">
      <head>
        <title>Leesangdal Portfolio Website</title>
        <meta name="description" content="Generated by create next app" />
      </head>
      <body>
        <div className="cursorBall">
          <span className="cursorText">more</span>
        </div>
        <ProgressBar
          height="4px"
          color="#fff"
          options={{ showSpinner: true }}
          shallowRouting
        />
        {children}
      </body>
    </html>
  );
}
