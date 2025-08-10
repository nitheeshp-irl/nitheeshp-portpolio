import React from "react";
import { useInView } from "react-intersection-observer";

import HeaderNav from "./HeaderNav";      // floating right-top pill nav
import Experience from "./Experience";    // your experience section
import Skills from "./Skills";            // your skills grid (fixed icons/colors)
import Projects from "./Projects";        // your projects section
import Articles from "./Articles";        // pulls real links from freeCodeCamp

// Simple animated section wrapper
function Section({ id, children, threshold = 0.2, delay = 0 }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold });

  return (
    <section
      id={id}
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={[
        "scroll-mt-28", // offset for sticky nav
        "opacity-0 translate-y-4 transition-all duration-700",
        inView ? "opacity-100 translate-y-0" : "",
      ].join(" ")}
    >
      {children}
    </section>
  );
}

// Soft gradient divider between sections
function Divider() {
  return (
    <div className="relative my-10 sm:my-12">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 -top-8 h-16 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.08),transparent_60%)]" />
    </div>
  );
}

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">
      {/* Floating right-top nav (Experience | Skills | Projects | Articles) */}
      <HeaderNav />

      {/* Page container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Intro / Hero (optional – keep minimal so the top nav has space) */}
        <header className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Nitheesh • <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">DevOps</span>
          </h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Building reliable delivery pipelines, cloud foundations, and observability that scale.
          </p>
        </header>

        {/* Experience FIRST */}
        <Section id="experience" threshold={0.15}>
          <Experience />
        </Section>

        <Divider />

        {/* Skills */}
        <Section id="skills" threshold={0.15} delay={60}>
          <Skills />
        </Section>

        <Divider />

        {/* Projects */}
        <Section id="projects" threshold={0.15} delay={120}>
          <Projects />
        </Section>

        <Divider />

        {/* Articles (links sourced from freeCodeCamp author page in Articles.jsx) */}
        <Section id="articles" threshold={0.15} delay={180}>
          <Articles />
        </Section>

        {/* Footer */}
        <footer className="mt-14 sm:mt-20 flex items-center justify-center py-8 text-sm text-slate-500">
          © {new Date().getFullYear()} Nitheesh
        </footer>
      </div>
    </main>
  );
}
