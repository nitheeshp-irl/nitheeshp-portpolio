import React from "react";
import { articles } from "../data/articles";

export default function CaseStudies() {
  return (
    <section id="work" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Selected Work</h2>
      <div className="grid md:grid-cols-3 gap-5">
        {articles.map(a => (
          <article key={a.url} className="border rounded-2xl p-5 bg-white shadow hover:shadow-md transition-shadow">
            <h3 className="font-semibold leading-snug">{a.title}</h3>
            <p className="text-sm text-slate-600 mt-2">{a.summary}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {a.tags.map(t => (
                <span key={t} className="text-xs border rounded-full px-2 py-1 bg-white border-slate-200">{t}</span>
              ))}
            </div>
            <div className="mt-4">
              <a href={a.url} target="_blank" rel="noopener noreferrer" className="text-sm underline decoration-[#FF9900] underline-offset-4">Read</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
