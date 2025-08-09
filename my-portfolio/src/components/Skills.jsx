import React from "react";
import { profile } from "../data/profile";

// AWS icon fallback from FontAwesome
import { FaAws } from "react-icons/fa";

import {
  SiTerraform,
  SiHelm,
  SiArgo,
  SiGithubactions,
  SiGitlab,
  SiKubernetes,
  SiDocker,
  SiPython,
  SiPrometheus,
  SiGrafana,
  SiPostgresql,
  SiMysql,
  SiRabbitmq
} from "react-icons/si";

const skillCategories = [
  {
    category: "Cloud",
    skills: [
      { name: "AWS", icon: <FaAws className="text-orange-500" /> }
    ]
  },
  {
    category: "Infrastructure as Code",
    skills: [
      { name: "Terraform", icon: <SiTerraform className="text-purple-500" /> },
      { name: "Helm", icon: <SiHelm className="text-blue-500" /> }
    ]
  },
  {
    category: "CI/CD",
    skills: [
      { name: "ArgoCD", icon: <SiArgo className="text-red-500" /> },
      { name: "GitHub Actions", icon: <SiGithubactions className="text-gray-700" /> },
      { name: "GitLab CI", icon: <SiGitlab className="text-orange-600" /> }
    ]
  },
  {
    category: "Containers & Orchestration",
    skills: [
      { name: "Kubernetes", icon: <SiKubernetes className="text-blue-400" /> },
      { name: "Docker", icon: <SiDocker className="text-blue-500" /> }
    ]
  },
  {
    category: "Programming & Scripting",
    skills: [
      { name: "Python", icon: <SiPython className="text-yellow-500" /> }
    ]
  },
  {
    category: "Monitoring & Observability",
    skills: [
      { name: "Prometheus", icon: <SiPrometheus className="text-pink-500" /> },
      { name: "Grafana", icon: <SiGrafana className="text-orange-500" /> }
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-400" /> }
    ]
  },
  {
    category: "Messaging",
    skills: [
      { name: "RabbitMQ", icon: <SiRabbitmq className="text-orange-600" /> }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-lg p-6 transition duration-300 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">{category.category}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-gray-700">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
