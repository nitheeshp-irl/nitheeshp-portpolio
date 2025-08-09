import React from "react";
import { motion } from "framer-motion";
import { profile } from "./data/profile";

export default function Portfolio() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-purple-900 via-black to-black"
      >
        <motion.img
          src={profile.avatar}
          alt={profile.name}
          className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          className="mt-6 text-4xl font-bold"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          {profile.name}
        </motion.h1>
        <motion.p
          className="mt-2 text-lg opacity-80"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {profile.title}
        </motion.p>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-10">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profile.projects.map((proj, i) => (
            <motion.div
              key={i}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-white/20 hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h4 className="text-xl font-semibold text-white">{proj.name}</h4>
              <p className="mt-2 text-gray-200">{proj.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-10">
          Experience
        </h2>
        {profile.experience.map((exp, i) => (
          <motion.div
            key={i}
            className="mb-6 p-6 bg-white/10 backdrop-blur-lg rounded-lg"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <h3 className="text-xl font-bold">{exp.role}</h3>
            <p className="text-purple-300">{exp.company}</p>
            <p className="text-gray-300">{exp.period}</p>
            <ul className="list-disc list-inside mt-2 text-gray-200">
              {exp.details.map((d, idx) => (
                <li key={idx}>{d}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-20 text-center bg-gradient-to-br from-purple-900 via-black to-black"
      >
        <h2 className="text-3xl font-bold mb-4">Let’s Connect</h2>
        <p className="text-gray-300 mb-6">
          Feel free to reach out via{" "}
          <a
            href={`mailto:${profile.email}`}
            className="text-purple-400 underline"
          >
            email
          </a>{" "}
          or connect on{" "}
          <a
            href={profile.linkedin}
            className="text-purple-400 underline"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </section>
    </div>
  );
}
