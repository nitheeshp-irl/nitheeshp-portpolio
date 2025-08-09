import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Articles from "./components/Articles";
import Footer from "./components/Footer";

export default function App() {
  React.useEffect(() => {
    const prev = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "smooth";
    return () => (document.documentElement.style.scrollBehavior = prev || "");
  }, []);

  return (
    <div className="bg-white text-slate-800">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key="page"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <Hero />
          <Experience />
          <Skills />
          <Projects />
          <Articles />
          <Footer />
        </motion.main>
      </AnimatePresence>
    </div>
  );
}
