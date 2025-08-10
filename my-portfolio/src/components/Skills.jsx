import React from "react";
import { motion } from "framer-motion";

// Safe, widely available icons
import {
  SiTerraform,
  SiHelm,
  SiGithubactions,
  SiGitlab,
  SiOctopusdeploy,
  SiLinux,
  SiWindows,
  SiGrafana,
  SiPrometheus,
  SiSplunk
} from "react-icons/si";
import {
  FaAws,
  FaSitemap,       // CloudFormation
  FaCubes,         // AWS CDK
  FaCodeBranch,    // CodePipeline (generic)
  FaNetworkWired,  // VPC
  FaExchangeAlt,   // Transit Gateway / promotions
  FaEye,           // CloudWatch (generic eye)
  FaChartLine      // AppDynamics (placeholder)
} from "react-icons/fa";
import { MdSecurity } from "react-icons/md";

// ---------- Animation variants ----------
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.45, ease: "easeOut", delay: i * 0.08 }
  })
};
const listVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.05 } } };
const itemVariants = { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } } };

// ---------- Your exact categories ----------
const skillGroups = [
  {
    category: "IaC",
    items: [
      { name: "Terraform",        icon: <SiTerraform className="text-purple-600" /> },
      { name: "CloudFormation",   icon: <FaSitemap className="text-slate-700" /> },
      { name: "AWS CDK",          icon: <FaCubes className="text-amber-600" /> }
    ]
  },
  {
    category: "CI/CD",
    items: [
      { name: "GitHub Actions",   icon: <SiGithubactions className="text-slate-700" /> },
      { name: "Helm",             icon: <SiHelm className="text-blue-600" /> },
      { name: "Kargo",            icon: <FaExchangeAlt className="text-emerald-600" /> }, // promotion flow icon
      { name: "GitLab CI",        icon: <SiGitlab className="text-orange-600" /> },
      { name: "Octopus Deploy",   icon: <SiOctopusdeploy className="text-fuchsia-600" /> },
      { name: "AWS CodePipeline", icon: <FaCodeBranch className="text-sky-700" /> }
    ]
  },
  {
    category: "Operating Systems",
    items: [
      { name: "Linux",            icon: <SiLinux className="text-amber-600" /> },
      { name: "Windows Server",   icon: <SiWindows className="text-blue-700" /> }
    ]
  },
  {
    category: "Observability",
    items: [
      { name: "AWS CloudWatch",   icon: <FaEye className="text-rose-600" /> },  // generic, stable
      { name: "AppDynamics",      icon: <FaChartLine className="text-green-600" /> }, // placeholder
      { name: "Prometheus",       icon: <SiPrometheus className="text-orange-600" /> },
      { name: "Grafana",          icon: <SiGrafana className="text-orange-500" /> }
    ]
  },
  {
    category: "Cloud",
    items: [
      { name: "AWS",              icon: <FaAws className="text-orange-500" /> },
      { name: "VPC",              icon: <FaNetworkWired className="text-slate-700" /> },
      { name: "Transit Gateway",  icon: <FaExchangeAlt className="text-indigo-600" /> }
    ]
  },
  {
    category: "Security",
    items: [
      { name: "AWS Security Hub", icon: <MdSecurity className="text-red-500" /> },
      { name: "AWS CloudTrail",   icon: <MdSecurity className="text-red-500" /> },
      { name: "AWS Inspector",    icon: <MdSecurity className="text-red-500" /> },
      { name: "Splunk",           icon: <SiSplunk className="text-black" /> }
    ]
  }
];

export default function Skills() {
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
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.category}
              className="bg-white shadow rounded-xl p-6 border border-slate-200"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              custom={idx}
            >
              <h3 className="text-lg font-semibold text-slate-800 mb-4">{group.category}</h3>

              <motion.ul
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="space-y-3"
              >
                {group.items.map((s) => (
                  <motion.li key={s.name} variants={itemVariants} className="flex items-center gap-3 text-slate-700">
                    <span className="text-xl shrink-0">{s.icon}</span>
                    <span>{s.name}</span>
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
