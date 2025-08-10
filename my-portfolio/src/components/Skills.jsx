// src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";

// Simple Icons (available in react-icons/si)
import {
  SiTerraform,
  SiGithubactions,
  SiHelm,
  SiGitlab,
  SiOctopusdeploy,
  SiLinux,
  SiAmazoncloudwatch,
  SiPrometheus,
  SiGrafana,
  SiSplunk,
} from "react-icons/si";

// Other packs
import { FaAws, FaWindows, FaCodeBranch } from "react-icons/fa";
import { BsDiagram3, BsArrowLeftRight, BsShieldCheck } from "react-icons/bs";
import { MdSecurity, MdTimeline, MdConstruction, MdInsights } from "react-icons/md";

// --- Custom CloudFormation icon (react-icons doesn't include one) ---
const CfIcon = ({ size = 18, color = "#2E7D32" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="7" width="18" height="10" rx="2" stroke={color} strokeWidth="2" />
    <rect x="7" y="5" width="10" height="4" rx="1" stroke={color} strokeWidth="2" />
    <rect x="7" y="15" width="10" height="4" rx="1" stroke={color} strokeWidth="2" />
  </svg>
);

const COLORS = {
  aws: "#FF9900",
  terraform: "#623CE4",
  helm: "#2774CA",
  gha: "#2088FF",
  gitlab: "#FC6D26",
  octopus: "#2F93E0",
  codepipeline: "#1D8102",
  linux: "#000000",
  windows: "#0078D6",
  cloudwatch: "#6B46C1",
  appd: "#0B5CAB",
  prometheus: "#E6522C",
  grafana: "#F46800",
  splunk: "#000000",
  vpc: "#FF9900",
  tgw: "#6B7280",
  security: "#1D8102",
  cloudtrail: "#4B5563",
  inspector: "#1D8102",
  cfn: "#2E7D32",
};

const fadeIn = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const outerCard =
  "bg-white/90 border border-slate-200 shadow-sm rounded-xl flex flex-col p-5 hover:shadow-md transition-shadow h-full overflow-hidden";

const innerGrid =
  "mt-4 grid gap-3 w-full [grid-template-columns:repeat(1,minmax(0,1fr))] sm:[grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]";

function SkillChip({ Icon, label, color }) {
  return (
    <div
      className="group flex items-center gap-3 px-3 py-2.5 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors h-12 w-full overflow-hidden"
      role="listitem"
      title={label}
    >
      <span className="flex-none inline-flex items-center justify-center w-9 h-9 rounded-md bg-slate-50 border border-slate-200">
        {Icon === CfIcon ? (
          <CfIcon size={18} color={color} />
        ) : (
          <Icon size={18} style={{ color }} aria-hidden="true" />
        )}
      </span>
      <span className="min-w-0 text-sm font-medium text-slate-800 truncate leading-tight">
        {label}
      </span>
    </div>
  );
}

const SKILL_BUCKETS = [
  {
    title: "IaC",
    items: [
      { label: "Terraform", Icon: SiTerraform, color: COLORS.terraform },
      { label: "CloudFormation", Icon: CfIcon, color: COLORS.cfn },
      { label: "AWS CDK", Icon: MdConstruction, color: COLORS.aws },
    ],
  },
  {
    title: "CI / CD",
    items: [
      { label: "GitHub Actions", Icon: SiGithubactions, color: COLORS.gha },
      { label: "Helm", Icon: SiHelm, color: COLORS.helm },
      { label: "Kargo (Argo style)", Icon: FaCodeBranch, color: COLORS.codepipeline },
      { label: "GitLab CI", Icon: SiGitlab, color: COLORS.gitlab },
      { label: "Octopus Deploy", Icon: SiOctopusdeploy, color: COLORS.octopus },
      { label: "AWS CodePipeline", Icon: FaCodeBranch, color: COLORS.codepipeline },
    ],
  },
  {
    title: "Operating Systems",
    items: [
      { label: "Linux", Icon: SiLinux, color: COLORS.linux },
      { label: "Windows Server", Icon: FaWindows, color: COLORS.windows },
    ],
  },
  {
    title: "Observability",
    items: [
      { label: "CloudWatch", Icon: SiAmazoncloudwatch, color: COLORS.cloudwatch },
      { label: "AppDynamics", Icon: MdInsights, color: COLORS.appd },
      { label: "Prometheus", Icon: SiPrometheus, color: COLORS.prometheus },
      { label: "Grafana", Icon: SiGrafana, color: COLORS.grafana },
    ],
  },
  {
    title: "Cloud (AWS)",
    items: [
      { label: "AWS (Core)", Icon: FaAws, color: COLORS.aws },
      { label: "VPC", Icon: BsDiagram3, color: COLORS.vpc },
      { label: "Transit Gateway", Icon: BsArrowLeftRight, color: COLORS.tgw },
    ],
  },
  {
    title: "Security",
    items: [
      { label: "Security Hub", Icon: MdSecurity, color: COLORS.security },
      { label: "CloudTrail", Icon: MdTimeline, color: COLORS.cloudtrail },
      { label: "Inspector", Icon: BsShieldCheck, color: COLORS.inspector },
      { label: "Splunk", Icon: SiSplunk, color: COLORS.splunk },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.header
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Skills
          </h2>
          <p className="mt-3 text-slate-600">
            Tooling I use to design reliable, observable, and secure delivery on AWS.
          </p>
        </motion.header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {SKILL_BUCKETS.map((bucket, i) => (
            <motion.div
              key={bucket.title}
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.05 * i }}
              className={outerCard}
            >
              <h3 className="text-lg font-semibold text-slate-900">{bucket.title}</h3>
              <div className={innerGrid} role="list">
                {bucket.items.map(({ label, Icon, color }) => (
                  <SkillChip
                    key={`${bucket.title}-${label}`}
                    Icon={Icon}
                    label={label}
                    color={color}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
