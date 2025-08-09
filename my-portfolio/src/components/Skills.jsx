import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { profile } from "../data/profile";
import {
  SiAmazonaws, SiTerraform, SiHelm, SiArgo, SiGithubactions, SiGitlab,
  SiKubernetes, SiDocker, SiPython, SiPrometheus, SiGrafana,
  SiPostgresql, SiMysql, SiRabbitmq
} from "react-icons/si";
import { MdSecurity } from "react-icons/md";
import { TbBrandBash } from "react-icons/tb";

function iconFor(skill) {
  const s = skill.toLowerCase();
  if (s.includes("aws")) return <SiAmazonaws className="text-orange-500" />;
  if (s.includes("terraform")) return <SiTerraform className="text-purple-600" />;
  if (s.includes("helm")) return <SiHelm className="text-blue-600" />;
  if (s.includes("argo")) return <SiArgo className="text-orange-400" />;
  if (s.includes("github actions")) return <SiGithubactions className="text-slate-700" />;
  if (s.includes("gitlab")) return <SiGitlab className="text-orange-600" />;
  if (s.includes("kubernetes") || s.includes("eks")) return <SiKubernetes className="text-blue-600" />;
  if (s.includes("docker")) return <SiDocker className="text-sky-500" />;
  if (s.includes("python")) return <SiPython className="text-yellow-500" />;
  if (s.includes("bash")) return <TbBrandBash className="text-green-700" />;
  if (s.includes("prometheus")) return <SiPrometheus className="text-orange-600" />;
  if (s.includes("grafana")) return <SiGrafana className="text-orange-500" />;
  if (s.includes("postgres")) return <SiPostgresql className="text-sky-700" />;
  if (s.includes("mysql")) return <SiMysql className="text-blue-700" />;
  if (s.includes("rabbitmq")) return <SiRabbitmq className="text-orange-500" />;
  if (s.includes("iam") || s.includes("security")) return <MdSecurity className="text-red-500" />;
  return <span>💡</span>;
}

export default function Skills() {
  const skillGroups = profile.skills || {};

  return (
    <section id="skills" className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionWrapper>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">Skills</h2>
          <p className="text-slate-600 mb-10 max-w-3xl">
            Tools and technologies I use to build reliable, secure, and efficient platforms.
          </p>
        </SectionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skillGroups).map(([category, skills], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              viewport={{ once: true }}
              className="bg-white shadow rounded-xl p-6 border border-slate-200 hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-slate-800 mb-4">{category}</h3>
              <ul className="space-y-3">
                {skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-slate-700">
                    <span className="text-xl">{iconFor(skill)}</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
