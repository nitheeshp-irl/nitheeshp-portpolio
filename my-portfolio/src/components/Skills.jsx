// src/components/Skills.jsx
import React from "react";
import { useInView } from "react-intersection-observer";
import {
  SiTerraform,
  SiAmazoncloudwatch,
  SiAws,
  SiAwsamplify,
  SiHelm,
  SiKubernetes,
  SiDocker,
  SiGithubactions,
  SiGitlab,
  SiOctopusdeploy,
  SiLinux,
  SiWindows,
  SiGrafana,
  SiPrometheus,
  SiApplemusic, // Placeholder for AppDynamics (no official icon)
  SiVuedotjs,
  SiAmazonroute53,
  SiAmazonec2,
  SiAmazons3,
  SiAmazondynamodb,
  SiAmazonsqs,
  SiAmazoncloudformation,
  SiAmazoncdk,
  SiSplunk
} from "react-icons/si";
import { MdSecurity } from "react-icons/md";

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillCategories = [
    {
      title: "Infrastructure as Code (IaC)",
      skills: [
        { name: "Terraform", icon: <SiTerraform /> },
        { name: "AWS CloudFormation", icon: <SiAmazoncloudformation /> },
        { name: "AWS CDK", icon: <SiAmazoncdk /> }
      ]
    },
    {
      title: "CI/CD",
      skills: [
        { name: "GitHub Actions", icon: <SiGithubactions /> },
        { name: "Helm", icon: <SiHelm /> },
        { name: "Kargo", icon: "🚀" },
        { name: "GitLab CI", icon: <SiGitlab /> },
        { name: "Octopus Deploy", icon: <SiOctopusdeploy /> },
        { name: "AWS CodePipeline", icon: <SiAws /> }
      ]
    },
    {
      title: "Operating Systems",
      skills: [
        { name: "Linux", icon: <SiLinux /> },
        { name: "Windows Server", icon: <SiWindows /> }
      ]
    },
    {
      title: "Observability",
      skills: [
        { name: "CloudWatch", icon: <SiAmazoncloudwatch /> },
        { name: "AppDynamics", icon: <SiApplemusic /> }, // placeholder
        { name: "Prometheus", icon: <SiPrometheus /> },
        { name: "Grafana", icon: <SiGrafana /> }
      ]
    },
    {
      title: "Cloud Networking",
      skills: [
        { name: "AWS", icon: <SiAws /> },
        { name: "VPC", icon: <SiAmazonroute53 /> },
        { name: "Transit Gateway", icon: <SiAmazonec2 /> }
      ]
    },
    {
      title: "Security",
      skills: [
        { name: "AWS Security Hub", icon: <MdSecurity /> },
        { name: "AWS CloudTrail", icon: <SiAws /> },
        { name: "AWS Inspector", icon: <SiAws /> },
        { name: "Splunk", icon: <SiSplunk /> }
      ]
    }
  ];

  return (
    <section
      ref={ref}
      className={`transition-opacity duration-1000 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Skills</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-lg p-6 border border-gray-100"
          >
            <h3 className="text-xl font-semibold mb-4 text-indigo-600">
              {category.title}
            </h3>
            <ul className="grid grid-cols-2 gap-4">
              {category.skills.map((skill, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <span className="text-indigo-500 text-lg">{skill.icon}</span>
                  <span className="text-gray-700">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
