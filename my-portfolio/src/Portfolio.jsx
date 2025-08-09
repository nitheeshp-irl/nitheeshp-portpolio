// src/Portfolio.jsx
import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";       // has its own Framer Motion stagger
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Articles from "./components/Articles";   // keep/remove if you don't use it
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Portfolio() {
  useEffect(() => {
    AOS.init({
      duration: 800,          // smooth but snappy
      easing: "ease-out-cubic",
      once: true,             // animate on first view only
      offset: 40,
    });
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white text-slate-800 min-h-screen">
      {/* Sticky navbar (already light-themed in your Navbar.jsx) */}
      <Navbar />

      {/* About */}
      <section id="about" data-aos="fade-up">
        <About />
      </section>

      {/* Skills BEFORE Experience — no AOS wrapper because Skills.jsx already animates with Framer Motion */}
      <Skills />

      {/* Experience */}
      <section id="experience" data-aos="fade-up">
        <Experience />
      </section>

      {/* Projects */}
      <section id="projects" data-aos="fade-up">
        <Projects />
      </section>

      {/* Articles (optional) */}
      {Articles && (
        <section id="articles" data-aos="fade-up">
          <Articles />
        </section>
      )}

      {/* Contact */}
      <section id="contact" data-aos="fade-up">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
