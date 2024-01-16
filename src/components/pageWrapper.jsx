"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TopButton from "./TopButton";

export default function PageWrapper({ children }) {
  useEffect(() => {
    const isTouchDevice =
      navigator.maxTouchPoints || "ontouchstart" in document.documentElement;

    if (!isTouchDevice) {
      (async () => {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        const locomotiveScroll = new LocomotiveScroll();
      })();
    }
  }, []);

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
        <TopButton />
      </motion.div>
    </AnimatePresence>
  );
}
