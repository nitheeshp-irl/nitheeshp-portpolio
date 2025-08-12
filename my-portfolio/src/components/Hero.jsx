import React from "react";
import { motion } from "framer-motion";
import { profile } from "../data/profile";
import SectionWrapper from "./SectionWrapper";

export default function Hero() {
  return (
    <section id="home" className="pt-28 bg-gradient-to-br from-gray-50 to-white text-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10 items-center">
        <div className="md:col-span-2">
          <SectionWrapper>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-animate-gradient">
              {profile.name}
            </h1>
            <p className="mt-3 text-xl text-gradient-cool font-semibold">{profile.tagline}</p>
            <p className="mt-5 text-slate-600 max-w-3xl">{profile.about}</p>
            <div className="mt-7 flex gap-3">
              <a href="#projects" className="px-4 py-2 rounded-md text-white bg-gradient-to-r from-[#FF9900] to-[#0ea5e9] hover:opacity-90 shadow">
                View Work
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-md border border-slate-300 hover:bg-slate-100">
                LinkedIn
              </a>
            </div>
          </SectionWrapper>
        </div>

        <div className="md:justify-self-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="h-44 w-44 md:h-56 md:w-56 rounded-3xl overflow-hidden shadow-2xl border bg-white"
          >
            <img src={profile.avatar} alt={`${profile.name} headshot`} className="h-full w-full object-cover" />
          </motion.div>
          <p className="mt-3 text-sm text-slate-500">{profile.location}</p>
        </div>
      </div>
    </section>
  );
}
