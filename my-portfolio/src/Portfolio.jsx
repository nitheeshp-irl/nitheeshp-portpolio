import React from "react";
import { profile } from "../data/profile";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#work", label: "Work" },
    { href: "#stack", label: "Stack" },
    { href: "#experience", label: "Experience" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/75 backdrop-blur border-b">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight">
          <span className="bg-gradient-to-r from-[#232F3E] via-[#FF9900] to-[#FFB84D] bg-clip-text text-transparent">
            {profile.name}
          </span>
        </a>

        {/* desktop */}
        <ul className="hidden md:flex gap-6 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a className="hover:opacity-80" href={l.href}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* mobile toggle */}
        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center px-3 py-2 border rounded"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </nav>

      {/* mobile menu */}
      {open && (
        <ul className="md:hidden max-w-6xl mx-auto px-4 pb-3 flex flex-col gap-3 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                className="block py-2 border-b"
                href={l.href}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
