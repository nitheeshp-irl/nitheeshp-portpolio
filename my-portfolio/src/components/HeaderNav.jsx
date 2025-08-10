import React, { useEffect, useMemo, useState } from "react";

const SECTIONS = [
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "articles", label: "Articles" },
];

export default function HeaderNav() {
  const [active, setActive] = useState(SECTIONS[0].id);

  // Scroll spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // pick the most visible section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      {
        root: null,
        threshold: [0.25, 0.5, 0.75],
        rootMargin: "-15% 0px -55% 0px", // emphasizes center of viewport
      }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const nav = useMemo(
    () =>
      SECTIONS.map((s) => {
        const isActive = active === s.id;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            aria-current={isActive ? "page" : undefined}
            className={[
              "inline-flex items-center rounded-xl border px-5 py-2 text-[15px] font-semibold shadow-sm transition-colors",
              isActive
                ? "border-indigo-200 bg-indigo-50 text-slate-900"
                : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
            ].join(" ")}
          >
            {s.label}
          </a>
        );
      }),
    [active]
  );

  return (
    <div
      className="
        fixed right-6 top-4 z-50
        flex gap-4 rounded-2xl bg-white/70 p-2 backdrop-blur supports-[backdrop-filter]:bg-white/50
        ring-1 ring-slate-200 shadow-lg
      "
    >
      {nav}
    </div>
  );
}
