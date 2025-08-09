import React from "react";
import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-12">
      <div className="border rounded-2xl p-6 bg-white shadow">
        <h2 className="text-2xl md:text-3xl font-bold">Contact</h2>
        <p className="text-slate-700 mt-2">Want to build something together or need AWS help? Let’s talk.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href={profile.links.email} className="px-4 py-2 rounded-md text-white bg-[#232F3E] hover:opacity-90">Email</a>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-md border">LinkedIn</a>
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-md border">GitHub</a>
        </div>
      </div>
    </section>
  );
}
