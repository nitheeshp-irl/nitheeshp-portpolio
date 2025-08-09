import React from "react";
import { profile } from "../data/profile";

export default function Stack() {
  if (!profile.stack?.length) return null;
  return (
    <section id="stack" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Tech Stack</h2>
      <div className="flex flex-wrap gap-2">
        {profile.stack.map((item) => (
          <span
            key={item}
            className="inline-flex items-center rounded-full border px-3 py-1 text-sm bg-gradient-to-r from-[#232F3E]/10 via-[#FF9900]/10 to-[#FFB84D]/10"
            title={item}
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
