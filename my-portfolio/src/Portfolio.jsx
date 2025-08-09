import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Portfolio() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white text-slate-800">
      {/* Navbar */}
      <Navbar />

      {/* About */}
      <section id="about" data-aos="fade-up">
        <About />
      </section>

      {/* Skills (no AOS wrapper – has Framer Motion animations inside) */}
      <Skills />

      {/* Experience */}
      <section id="experience" data-aos="fade-up">
        <Experience />
      </section>

      {/* Projects */}
      <section id="projects" data-aos="fade-up">
        <Projects />
      </section>

      {/* Contact */}
      <section id="contact" data-aos="fade-up">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
