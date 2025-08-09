import React from "react";
import { motion } from "framer-motion";

export default function SectionWrapper({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
