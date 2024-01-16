"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TopButton from "./TopButton";

export default function PageWrapper({ children }) {
  const [toTop, setToTop] = useState(false);

  useEffect(() => {
    // const isTouchDevice =
    //   navigator.maxTouchPoints || "ontouchstart" in document.documentElement;

    // if (!isTouchDevice) {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      locomotiveScroll.scrollTo(".pageWrapper", {
        offset: 0,
        duration: 1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        onComplete: () => setToTop(false),
      });
    })();
    // }
  }, [toTop]);

  function toTopHandler() {
    setToTop(true);
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 1 }}
        className="pageWrapper"
      >
        {children}
        <TopButton toTop={toTopHandler} />
      </motion.div>
    </AnimatePresence>
  );
}
