import React from "react";
import SectionWrapper from "./SectionWrapper";
import { profile } from "../data/profile";
import { FiExternalLink } from "react-icons/fi";

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionWrapper>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-10">Projects</h2>
        </SectionWrapper>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profile.projects.map((p, i) => (
            <SectionWrapper key={p.link} delay={i * 0.06}>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold text-slate-800">{p.name}</h3>
                  <FiExternalLink className="text-slate-500" />
                </div>
                <p className="mt-2 text-slate-600">{p.description}</p>
                {p.tags?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 rounded-full border border-slate-200 bg-slate-50 text-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
              </a>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
