// src/components/HeaderNav.jsx
import React, { useEffect, useMemo, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const SECTIONS = [
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "articles", label: "Articles" },
  { id: "contact", label: "Contact" },
];

export default function HeaderNav() {
  const [activeId, setActiveId] = useState("experience");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // cache section elements
  const targets = useMemo(
    () => SECTIONS.map(s => document.getElementById(s.id)).filter(Boolean),
    // re-evaluate once on mount; sections exist after first paint
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        // trigger when 25% of section is visible
        root: null,
        rootMargin: "0px 0px -60% 0px",
        threshold: [0.25, 0.6],
      }
    );

    targets.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [targets]);

  const handleJump = (e, id) => {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const basePill =
    "rounded-full border shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-slate-200";
  const scrolledRing = scrolled ? "shadow-md" : "";

  return (
    <>
      {/* Desktop / Tablet: floating top-right pill */}
      <nav
        className={`hidden md:flex fixed z-40 top-6 right-6 ${basePill} ${scrolledRing}`}
        aria-label="Primary"
      >
        <ul className="flex items-center gap-1 px-2 py-1">
          {SECTIONS.map(s => {
            const isActive = activeId === s.id;
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={e => handleJump(e, s.id)}
                  className={[
                    "px-3 py-2 text-sm rounded-full transition",
                    isActive
                      ? "bg-gradient-to-r from-indigo-500 to-pink-500 text-white"
                      : "text-slate-700 hover:bg-slate-100",
                  ].join(" ")}
                >
                  {s.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile: compact button → sheet menu */}
      <div className="md:hidden fixed z-40 top-4 right-4">
        <button
          className={`flex items-center gap-2 px-3 py-2 ${basePill} ${scrolledRing}`}
          onClick={() => setOpen(v => !v)}
          aria-expanded={open}
          aria-label="Open navigation"
        >
          {open ? <FiX /> : <FiMenu />}
          <span className="text-sm">Menu</span>
        </button>

        {open && (
          <div
            className="mt-2 w-44 rounded-2xl border border-slate-200 bg-white/95 backdrop-blur shadow-lg overflow-hidden"
            role="menu"
          >
            {SECTIONS.map(s => {
              const isActive = activeId === s.id;
              return (
                <a
                  key={s.id}
                  role="menuitem"
                  href={`#${s.id}`}
                  onClick={e => handleJump(e, s.id)}
                  className={[
                    "block px-4 py-3 text-sm",
                    isActive
                      ? "bg-gradient-to-r from-indigo-500 to-pink-500 text-white"
                      : "text-slate-700 hover:bg-slate-50",
                  ].join(" ")}
                >
                  {s.label}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
