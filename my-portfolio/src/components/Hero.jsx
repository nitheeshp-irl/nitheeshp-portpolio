import React from "react";
import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section id="home" className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-3 gap-8 items-center">
      <div className="md:col-span-2">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          <span className="bg-gradient-to-br from-slate-900 via-orange-700 to-amber-700 bg-clip-text text-transparent">
            {profile.role}
          </span>
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl">{profile.blurb}</p>
        <div className="mt-6 flex gap-3">
          <a href="#work" className="px-4 py-2 rounded-md text-white bg-[#232F3E] hover:opacity-90">View work</a>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-md border">
            LinkedIn
          </a>
        </div>
      </div>
      <div className="justify-self-end">
        <div className="h-44 w-44 md:h-56 md:w-56 rounded-3xl overflow-hidden shadow-xl border bg-white">
          <img src={profile.avatar} alt="Headshot" className="h-full w-full object-cover"/>
        </div>
        <p className="mt-3 text-sm text-slate-500">{profile.location}</p>
      </div>
    </section>
  );
}
