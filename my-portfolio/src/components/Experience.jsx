import React from "react";
import SectionWrapper from "./SectionWrapper";
import { profile } from "../data/profile";
import { MdWork } from "react-icons/md";

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionWrapper>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-10">Experience</h2>
        </SectionWrapper>

        <div className="grid gap-6">
          {profile.experience.map((job, i) => (
            <SectionWrapper key={job.company + i} delay={i * 0.08}>
              <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow transition">
                <header className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-3">
                    <span className="text-sky-600"><MdWork /></span>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800">{job.role}</h3>
                      <p className="text-slate-600">{job.company}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500">{job.period}</p>
                </header>
                <ul className="mt-4 list-disc list-inside text-slate-700">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
