import React from "react";
import { motion } from "framer-motion";
import { profile } from "../data/profile";
import {
  SiTerraform, SiHelm, SiArgo, SiGithubactions, SiGitlab,
  SiKubernetes, SiDocker, SiPython, SiPrometheus, SiGrafana,
  SiPostgresql, SiMysql, SiRabbitmq, SiGnubash   // <-- add SiGnubash here
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";

// REMOVE this line (it caused the build error):
// import { TbBrandBash } from "react-icons/tb";

// Icon resolver
function iconFor(skill) {
  const s = skill.toLowerCase();
  if (s.includes("aws")) return <FaAws className="text-orange-500" />;
  if (s.includes("terraform")) return <SiTerraform className="text-purple-600" />;
  if (s.includes("helm")) return <SiHelm className="text-blue-600" />;
  if (s.includes("argo")) return <SiArgo className="text-orange-500" />;
  if (s.includes("github actions")) return <SiGithubactions className="text-slate-700" />;
  if (s.includes("gitlab")) return <SiGitlab className="text-orange-600" />;
  if (s.includes("kubernetes") || s.includes("eks")) return <SiKubernetes className="text-blue-600" />;
  if (s.includes("docker")) return <SiDocker className="text-sky-500" />;
  if (s.includes("python")) return <SiPython className="text-yellow-500" />;
  if (s.includes("bash")) return <SiGnubash className="text-green-700" />;   // <-- use SiGnubash
  if (s.includes("prometheus")) return <SiPrometheus className="text-orange-600" />;
  if (s.includes("grafana")) return <SiGrafana className="text-orange-500" />;
  if (s.includes("postgres")) return <SiPostgresql className="text-sky-700" />;
  if (s.includes("mysql")) return <SiMysql className="text-blue-700" />;
  if (s.includes("rabbitmq")) return <SiRabbitmq className="text-orange-500" />;
  if (s.includes("iam") || s.includes("security")) return <MdSecurity className="text-red-500" />;
  return <span>💡</span>;
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut", delay: i * 0.08 }
  })
};

const listVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.05 } } };
const itemVariants = { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } } };

export default function Skills() {
  const groups = (profile.skills && typeof profile.skills === "object") ? profile.skills : {};

  return (
    <section id="skills" className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Skills</h2>
          <p className="text-slate-600 mt-2 max-w-3xl">
            Tools and technologies I use to build reliable, secure, and efficient platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(groups).map(([category, skills], idx) => (
            <motion.div
              key={category}
              className="bg-white shadow rounded-xl p-6 border border-slate-200"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              custom={idx}
            >
              <h3 className="text-lg font-semibold text-slate-800 mb-4">{category}</h3>
              <motion.ul
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="space-y-3"
              >
                {(skills || []).map((skill) => (
                  <motion.li key={skill} variants={itemVariants} className="flex items-center gap-3 text-slate-700">
                    <span className="text-xl shrink-0">{iconFor(skill)}</span>
                    <span>{skill}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
