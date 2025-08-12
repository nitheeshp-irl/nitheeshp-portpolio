import React from "react";
import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { MdWork } from "react-icons/md";

const card = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut", delay: i * 0.08 }
  })
};

export default function Experience() {
  const items = Array.isArray(profile.experience) ? profile.experience : [];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">Experience</h2>
          <p className="text-slate-600 mt-2 text-gradient-rainbow">
            Selected roles focused on AWS platforms, DevOps automation, and reliability.
          </p>
        </div>

        <div className="grid gap-6">
          {items.map((job, i) => (
            <motion.article
              key={`${job.company}-${i}`}
              variants={card}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              custom={i}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow transition"
            >
              <header className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-3">
                  <span className="text-sky-600 text-xl"><MdWork /></span>
                  <div>
                    <h3 className="text-lg font-semibold text-animate-gradient">
                      {job.role}
                    </h3>
                    <p className="text-slate-600">{job.company}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-500 whitespace-nowrap">{job.period}</p>
              </header>

              {Array.isArray(job.achievements) && job.achievements.length > 0 && (
                <ul className="mt-4 list-disc list-inside text-slate-700">
                  {job.achievements.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
