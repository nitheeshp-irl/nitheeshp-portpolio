import React from "react";
import {
  // IaC
  SiTerraform,
  // CI/CD
  SiGithubactions,
  SiHelm,
  SiGitlab,
  SiOctopusdeploy,
  // OS
  SiLinux,
  // Observability
  SiAmazoncloudwatch,
  SiPrometheus,
  SiGrafana,
  // AWS brand (generic AWS mark)
  SiAmazonwebservices,
  // Security / Tools
  SiSplunk,
} from "react-icons/si";
import { MdInsights } from "react-icons/md"; // Fallback for AppDynamics
import { FaWindows } from "react-icons/fa"; // ✅ replace SiWindows

// Brand colors
const COLORS = {
  terraform: "#844FBA",
  githubActions: "#2088FF",
  helm: "#277A9F",
  gitlab: "#FC6D26",
  octopus: "#2F93E0",
  linux: "#000000",
  windows: "#0078D6",
  cloudwatch: "#FF4F8B",
  prometheus: "#E6522C",
  grafana: "#F46800",
  aws: "#FF9900",
  awsSecondary: "#3B5AA3",
  appdynamics: "#0076D6",
  splunk: "#000000",
  securityGreen: "#25A162",
  securityOrange: "#F58536",
};

const skillsData = [
  {
    category: "IaC",
    items: [
      { name: "Terraform", icon: <SiTerraform style={{ color: COLORS.terraform }} /> },
      { name: "CloudFormation", icon: <SiAmazonwebservices style={{ color: COLORS.awsSecondary }} /> },
      { name: "AWS CDK", icon: <SiAmazonwebservices style={{ color: COLORS.aws }} /> },
    ],
  },
  {
    category: "CI / CD",
    items: [
      { name: "GitHub Actions", icon: <SiGithubactions style={{ color: COLORS.githubActions }} /> },
      { name: "Helm", icon: <SiHelm style={{ color: COLORS.helm }} /> },
      { name: "Kargo", icon: <SiHelm style={{ color: "#EF7B4D" }} /> },
      { name: "GitLab CI", icon: <SiGitlab style={{ color: COLORS.gitlab }} /> },
      { name: "Octopus Deploy", icon: <SiOctopusdeploy style={{ color: COLORS.octopus }} /> },
      { name: "AWS CodePipeline", icon: <SiAmazonwebservices style={{ color: COLORS.awsSecondary }} /> },
    ],
  },
  {
    category: "Operating Systems",
    items: [
      { name: "Linux", icon: <SiLinux style={{ color: COLORS.linux }} /> },
      { name: "Windows Server", icon: <FaWindows style={{ color: COLORS.windows }} /> }, // ✅ FA icon
    ],
  },
  {
    category: "Observability",
    items: [
      { name: "CloudWatch", icon: <SiAmazoncloudwatch style={{ color: COLORS.cloudwatch }} /> },
      { name: "AppDynamics", icon: <MdInsights style={{ color: COLORS.appdynamics }} /> },
      { name: "Prometheus", icon: <SiPrometheus style={{ color: COLORS.prometheus }} /> },
      { name: "Grafana", icon: <SiGrafana style={{ color: COLORS.grafana }} /> },
    ],
  },
  {
    category: "Cloud (AWS)",
    items: [
      { name: "AWS (Core)", icon: <SiAmazonwebservices style={{ color: COLORS.aws }} /> },
      { name: "VPC", icon: <SiAmazonwebservices style={{ color: COLORS.aws }} /> },
      { name: "Transit Gateway", icon: <SiAmazonwebservices style={{ color: COLORS.aws }} /> },
    ],
  },
  {
    category: "Security",
    items: [
      { name: "Security Hub", icon: <SiAmazonwebservices style={{ color: COLORS.securityGreen }} /> },
      { name: "CloudTrail", icon: <SiAmazonwebservices style={{ color: COLORS.securityOrange }} /> },
      { name: "Inspector", icon: <SiAmazonwebservices style={{ color: COLORS.securityGreen }} /> },
      { name: "Splunk", icon: <SiSplunk style={{ color: COLORS.splunk }} /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gradient-cool">Skills</h2>

        {/* Outer grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((group) => (
            <div
              key={group.category}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col"
            >
              <h3 className="text-xl font-semibold mb-4 text-gradient-cool">{group.category}</h3>

              {/* Inner grid */}
              <div className="grid grid-cols-2 gap-4">
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 bg-gray-50 p-2.5 rounded-lg border border-gray-100"
                  >
                    <span className="text-2xl shrink-0">{skill.icon}</span>
                    <span className="text-sm font-medium leading-tight">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
