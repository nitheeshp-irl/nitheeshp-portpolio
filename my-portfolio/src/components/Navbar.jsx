import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]"));
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      let current = "home";
      for (const sec of sections) {
        if (window.scrollY + 120 >= sec.offsetTop) current = sec.id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "home", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "articles", label: "Articles" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className={`fixed top-0 left-0 w-full z-50 transition-colors ${
        scrolled ? "bg-white/80 backdrop-blur border-b border-slate-200" : "bg-white/60 backdrop-blur"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-slate-800">
          {profile.name}
        </a>

        <ul className="hidden md:flex gap-6 text-sm">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`transition ${
                  active === l.id ? "text-sky-600" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-700 hover:text-slate-900"><SiGithub /></a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-700 hover:text-slate-900"><SiLinkedin /></a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-slate-700 border border-slate-300 rounded px-3 py-1 text-sm"
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <ul className="max-w-6xl mx-auto px-6 py-3 flex flex-col gap-3 text-sm">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={`block py-2 ${active === l.id ? "text-sky-600" : "text-slate-700"}`}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-4 pt-2">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-slate-700"><SiGithub /></a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-700"><SiLinkedin /></a>
            </li>
          </ul>
        </div>
      )}
    </motion.nav>
  );
}
