import React from "react";
import { useInView } from "react-intersection-observer";
import { SiAmazonwebservices, SiTerraform, SiGithubactions, SiHelm, SiGrafana, SiPrometheus } from "react-icons/si";
import { FaLock, FaExternalLinkAlt, FaCodeBranch } from "react-icons/fa";

const projects = [
  {
    title: "Multi-Account AWS Platform (Landing Zone)",
    impact: [
      "Cut infra provisioning time by 70% with automated account vending",
      "Standardized guardrails: SCPs, IAM boundaries, CloudTrail org trails",
      "Shift-left security with CI policy checks"
    ],
    tech: [SiAmazonwebservices, SiTerraform, SiGithubactions],
    links: [
      { label: "Case Study", href: "#", icon: FaExternalLinkAlt },
    ],
    visual: (
      <div className="h-28 w-full rounded-md bg-gradient-to-r from-amber-200 via-orange-200 to-yellow-200
                      flex items-center justify-center text-amber-800 font-semibold">
        Org → Accounts → VPCs → Guardrails
      </div>
    ),
  },
  {
    title: "GitOps Delivery for Microservices",
    impact: [
      "Blue/green & canary with Helm + Kargo",
      "Rollbacks < 60s, MTTR down by 45%",
      "Policy-gated promotions between envs"
    ],
    tech: [SiHelm, SiGithubactions],
    links: [
      { label: "Demo", href: "#", icon: FaExternalLinkAlt },
      { label: "Pipelines", href: "#", icon: FaCodeBranch },
    ],
    visual: (
      <div className="h-28 w-full rounded-md bg-gradient-to-r from-indigo-200 via-sky-200 to-cyan-200
                      flex items-center justify-center text-slate-800 font-semibold">
        Commit → Build → Helm → Kargo → Prod
      </div>
    ),
  },
  {
    title: "Observability Mesh",
    impact: [
      "Unified metrics & alerts across 200+ services",
      "Golden signals SLOs; alert noise -60%",
      "Executive dashboards for cost & health"
    ],
    tech: [SiGrafana, SiPrometheus, SiAmazonwebservices],
    links: [
      { label: "Dashboards", href: "#", icon: FaExternalLinkAlt },
    ],
    visual: (
      <div className="h-28 w-full rounded-md bg-gradient-to-r from-green-200 via-emerald-200 to-teal-200
                      flex items-center justify-center text-emerald-900 font-semibold">
        Metrics • Logs • Traces • Alerts
      </div>
    ),
  },
];

const chipColor = (Icon) => {
  switch (Icon) {
    case SiTerraform: return "bg-[#844FBA1A] text-[#844FBA]";
    case SiGithubactions: return "bg-[#2088FF1A] text-[#2088FF]";
    case SiHelm: return "bg-[#277A9F1A] text-[#277A9F]";
    case SiGrafana: return "bg-[#F468001A] text-[#F46800]";
    case SiPrometheus: return "bg-[#E6522C1A] text-[#E6522C]";
    case SiAmazonwebservices: return "bg-[#FF99001A] text-[#FF9900]";
    default: return "bg-slate-100 text-slate-700";
  }
};

const Projects = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

        <div
          ref={ref}
          className={`grid gap-6 md:grid-cols-2 lg:grid-cols-3 transition-opacity duration-700 ease-out
                     ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          {projects.map((p) => (
            <article
              key={p.title}
              className="flex flex-col rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md
                         transition-shadow duration-200"
            >
              <div className="p-4">{p.visual}</div>

              <div className="px-5 py-4 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>

                <ul className="space-y-2 text-sm text-slate-700 mb-4">
                  {p.impact.map((i, idx) => (
                    <li key={idx} className="flex gap-2">
                      <FaLock className="mt-0.5 shrink-0 opacity-70" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((Icon, idx) => (
                    <span key={idx} className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium ${chipColor(Icon)}`}>
                      <Icon className="text-base" />
                      {Icon === SiTerraform && "Terraform"}
                      {Icon === SiGithubactions && "GitHub Actions"}
                      {Icon === SiHelm && "Helm"}
                      {Icon === SiGrafana && "Grafana"}
                      {Icon === SiPrometheus && "Prometheus"}
                      {Icon === SiAmazonwebservices && "AWS"}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-2 flex gap-3">
                  {p.links.map(({ label, href, icon: LinkIcon }) => (
                    <a
                      key={label}
                      href={href}
                      className="inline-flex items-center gap-2 text-sm font-medium text-sky-700 hover:text-sky-900"
                    >
                      <LinkIcon className="opacity-80" />
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
