import React from "react";
import { profile } from "../data/profile";

export default function Experience() {
  if (!profile.experience?.length) return null;
  return (
    <section id="experience" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Experience</h2>
      <div className="grid gap-5">
        {profile.experience.map((job) => (
          <article key={`${job.company}-${job.period}`} className="border rounded-2xl p-6 bg-white shadow">
            <div className="flex items-start justify-between flex-wrap gap-2">
              <div>
                <h3 className="text-lg font-semibold">
                  {job.title} <span className="text-slate-600">· {job.company}</span>
                </h3>
                <p className="text-sm text-slate-500">{job.period} • {job.location}</p>
              </div>
            </div>
            {job.bullets?.length ? (
              <ul className="mt-4 grid gap-2 text-sm text-slate-700 list-disc pl-5">
                {job.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
