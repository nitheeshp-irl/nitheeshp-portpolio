import React from "react";
import { useInView } from "react-intersection-observer";
import {
  // IaC
  SiTerraform,
  SiHelm,
  // CI/CD
  SiGithubactions,
  SiGitlab,
  SiOctopusdeploy,
  // OS
  SiLinux,
  // Observability
  SiGrafana,
  SiPrometheus,
  SiAmazoncloudwatch,
  // Security
  SiSplunk
} from "react-icons/si";
import { FaAws, FaWindows, FaNetworkWired, FaLock } from "react-icons/fa";

// Skill card component
const SkillCard = ({ icon: Icon, label }) => (
  <div className="flex flex-col items-center text-center p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
    <Icon size={40} className="text-blue-600 mb-2" />
    <span className="text-gray-700 font-medium">{label}</span>
  </div>
);

// Skill group section
const Group = ({ title, children }) => (
  <div className="mb-8">
    <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {children}
    </div>
  </div>
);

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="skills"
      ref={ref}
      className={`max-w-6xl mx-auto px-6 py-12 transition-all duration-1000 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
        Skills
      </h2>

      {/* IaC */}
      <Group title="Infrastructure as Code (IaC)">
        <SkillCard icon={SiTerraform} label="Terraform" />
        <SkillCard icon={FaAws} label="AWS CDK" />
        <SkillCard icon={FaAws} label="CloudFormation" />
      </Group>

      {/* CI/CD */}
      <Group title="CI/CD">
        <SkillCard icon={SiGithubactions} label="GitHub Actions" />
        <SkillCard icon={SiHelm} label="Helm" />
        <SkillCard icon={FaNetworkWired} label="Kargo" />
        <SkillCard icon={SiGitlab} label="GitLab CI" />
        <SkillCard icon={SiOctopusdeploy} label="Octopus Deploy" />
        <SkillCard icon={FaAws} label="AWS CodePipeline" />
      </Group>

      {/* Operating Systems */}
      <Group title="Operating Systems">
        <SkillCard icon={SiLinux} label="Linux" />
        <SkillCard icon={FaWindows} label="Windows Server" />
      </Group>

      {/* Observability */}
      <Group title="Observability">
        <SkillCard icon={SiAmazoncloudwatch} label="CloudWatch" />
        <SkillCard icon={SiGrafana} label="Grafana" />
        <SkillCard icon={SiPrometheus} label="Prometheus" />
        <SkillCard icon={FaAws} label="AppDynamics" />
      </Group>

      {/* Cloud */}
      <Group title="Cloud">
        <SkillCard icon={FaAws} label="AWS" />
        <SkillCard icon={FaNetworkWired} label="VPC" />
        <SkillCard icon={FaNetworkWired} label="Transit Gateway" />
      </Group>

      {/* Security */}
      <Group title="Security">
        <SkillCard icon={FaLock} label="AWS Security Hub" />
        <SkillCard icon={FaLock} label="CloudTrail" />
        <SkillCard icon={FaLock} label="AWS Inspector" />
        <SkillCard icon={SiSplunk} label="Splunk" />
      </Group>
    </section>
  );
}
