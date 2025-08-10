import React from "react";
import Portfolio from "./components/Portfolio";

export default function App() {
  return (
    <div className="min-h-screen bg-hero-gradient text-slate-800">
      {/* top bar */}
      <header className="sticky top-0 z-30 bg-white/70 backdrop-blur border-b border-surface-ring">
        <div className="mx-auto max-w-6xl px-4 py-4">
          <h1 className="text-2xl md:text-3xl font-bold text-center">
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              Nitheesh • DevOps
            </span>
          </h1>
        </div>
      </header>

      {/* content */}
      <main className="mx-auto max-w-6xl px-4 py-8 md:py-12 space-y-10 md:space-y-16">
        <Portfolio />
      </main>

      {/* footer */}
      <footer className="py-12 text-center text-slate-600">
        © {new Date().getFullYear()} Nitheesh
      </footer>
    </div>
  );
}
