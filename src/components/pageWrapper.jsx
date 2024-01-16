"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function PageWrapper({ children }) {
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
      </motion.div>
    </AnimatePresence>
  );
}
