import React from "react";
import SectionWrapper from "./SectionWrapper";
import { profile } from "../data/profile";
import { FiExternalLink } from "react-icons/fi";

export default function Articles() {
  return (
    <section id="articles" className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionWrapper>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Articles</h2>
        </SectionWrapper>
        <div className="grid gap-4">
          {profile.articles.map((a, i) => (
            <SectionWrapper key={a.link} delay={i * 0.05}>
              <a
                href={a.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm hover:shadow-md transition"
              >
                <span className="text-slate-800 group-hover:text-sky-700">{a.title}</span>
                <FiExternalLink className="text-slate-500 group-hover:text-sky-700" />
              </a>
            </SectionWrapper>
          ))}
          <SectionWrapper delay={0.25}>
            <a
              href={profile.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm text-sky-700 hover:underline underline-offset-4"
            >
              View all on freeCodeCamp →
            </a>
          </SectionWrapper>
        </div>
      </div>
    </section>
  );
}
