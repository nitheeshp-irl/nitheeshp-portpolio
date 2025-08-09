// src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  SiTerraform,
  SiAmazoncloudwatch,
  SiAmazonaws,
  SiAwsamplify,
  SiHelm,
  SiGithubactions,
  SiGitlab,
  SiOctopusdeploy,
  SiLinux,
  SiWindows,
  SiGrafana,
  SiPrometheus,
  SiKubernetes,
} from "react-icons/si";
import { FaCloud, FaNetworkWired } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { DiAws } from "react-icons/di";
import { AiOutlineCode } from "react-icons/ai";

const skillCategories = [
  {
    title: "Infrastructure as Code (IaC)",
    skills: [
      { name: "Terraform", icon: <SiTerraform /> },
      { name: "AWS CloudFormation", icon: <SiAmazonaws /> },
      { name: "AWS CDK", icon: <SiAwsamplify /> },
    ],
  },
  {
    title: "CI/CD",
    skills: [
      { name: "GitHub Actions", icon: <SiGithubactions /> },
      { name: "Helm", icon: <SiHelm /> },
      { name: "Kargo", icon: <AiOutlineCode /> },
      { name: "GitLab CI", icon: <SiGitlab /> },
      { name: "Octopus Deploy", icon: <SiOctopusdeploy /> },
      { name: "AWS CodePipeline", icon: <DiAws /> },
    ],
  },
  {
    title: "Operating Systems",
    skills: [
      { name: "Linux", icon: <SiLinux /> },
      { name: "Windows Server", icon: <SiWindows /> },
    ],
  },
  {
    title: "Observability",
    skills: [
      { name: "CloudWatch", icon: <SiAmazoncloudwatch /> },
      { name: "AppDynamics", icon: <FaCloud /> },
      { name: "Prometheus", icon: <SiPrometheus /> },
      { name: "Grafana", icon: <SiGrafana /> },
    ],
  },
  {
    title: "Cloud Networking",
    skills: [
      { name: "AWS VPC", icon: <FaNetworkWired /> },
      { name: "AWS Transit Gateway", icon: <FaNetworkWired /> },
    ],
  },
  {
    title: "Security",
    skills: [
      { name: "AWS Security Hub", icon: <MdOutlineSecurity /> },
      { name: "AWS CloudTrail", icon: <SiAmazonaws /> },
      { name: "AWS Inspector", icon: <MdOutlineSecurity /> },
      { name: "Splunk", icon: <FaCloud /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white text-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              className="p-6 rounded-xl shadow-lg bg-gray-50 hover:shadow-xl transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-4 border-b pb-2 border-gray-200">
                {category.title}
              </h3>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, i) => (
                  <motion.li
                    key={i}
                    className="flex flex-col items-center text-center text-sm font-medium text-slate-700"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                  >
                    <span className="text-3xl mb-2 text-blue-600">{skill.icon}</span>
                    {skill.name}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
