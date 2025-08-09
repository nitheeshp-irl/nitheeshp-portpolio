import React from "react";

/**
 * Portfolio — Amplify-ready React component
 * - Removed shadcn/ui imports so it works in a plain React + Tailwind setup
 * - No path aliases (like @/...) required
 * - Uses only standard React + Tailwind classes
 * - External links open in a new tab
 */

const profile = {
  name: "Nitheesh Poojary",
  role: "Senior AWS DevOps Engineer",
  location: "Dublin, Ireland",
  tagline:
    "I design reliable, secure, and cost‑efficient platforms on AWS. Kubernetes, GitOps, CI/CD, and automation are my happy place.",
  avatar:
    "https://raw.githubusercontent.com/yourusername/yourrepo/main/public/images/nitheesh-headshot.jpg", // replace with an actual hosted URL
  links: {
    linkedin: "https://www.linkedin.com/in/nitheeshp/",
    github: "https://github.com/nitheeshp",
    website: "https://cloud-devops.io/",
    email: "mailto:nitheeshpoojary@gmail.com",
  },
  highlights: [
    "14+ years across SysAdmin → DevOps → SRE",
    "AWS specialist: EKS, ECS, Lambda, Bedrock, Cognito, RDS, S3, CloudFront",
    "Kubernetes on EKS, Helm/ArgoCD/Kargo, GitHub Actions & GitLab CI",
    "Security-first: IAM least privilege, org-wide guardrails, SSM patching",
    "Cost optimization and observability baked in from day one",
  ],
  skills: [
    "AWS",
    "Kubernetes/EKS",
    "Terraform/CloudFormation",
    "GitHub Actions / GitLab CI",
    "ArgoCD & GitOps",
    "Docker",
    "Python",
    "Bash",
    "Prometheus/Grafana",
    "OpenSearch/ELK",
    "RabbitMQ",
    "PostgreSQL/MySQL",
  ],
  experience: [
    {
      company: "Verizon Connect",
      title: "Senior Software Engineer (AWS/DevOps)",
      period: "2021 — Present",
      location: "Dublin, Ireland",
      bullets: [
        "Led GitOps rollout with ArgoCD & Kargo; automated promotions across envs.",
        "Built AI-powered CI checks for CloudFormation security and best practices in GitLab.",
        "Hardened EKS with least-privilege IAM Roles for Service Accounts and network policies.",
        "Optimized Bedrock model usage with spend guards and observability hooks.",
      ],
    },
    {
      company: "Previous Roles",
      title: "Cloud/DevOps Engineer",
      period: "2012 — 2021",
      location: "Various",
      bullets: [
        "Sysadmin → DevOps journey across on‑prem and AWS; automated everything in sight.",
      ],
    },
  ],
  // Replaced with your freeCodeCamp articles per your request
  projects: [
    {
      name: "Hands-On GitOps Promotion with GitHub Actions, Argo CD, Helm, and Kargo",
      desc: "From commit to production using GitHub Actions, Argo CD, Helm, and Kargo to promote releases across environments.",
      links: [
        {
          label: "Article",
          href: "https://www.freecodecamp.org/news/from-commit-to-production-hands-on-gitops-promotion-with-github-actions-argo-cd-helm-and-kargo/"
        }
      ],
      tags: ["GitOps", "GitHub Actions", "Argo CD", "Helm", "Kargo"]
    },
    {
      name: "Simplify AWS Multi-Account Management with Terraform and GitOps",
      desc: "Use AWS Organizations, SCPs, and Terraform Cloud with GitOps to manage multi-account setups.",
      links: [
        {
          label: "Article",
          href: "https://www.freecodecamp.org/news/simplify-aws-multi-account-management-with-terraform-and-gitops/"
        }
      ],
      tags: ["AWS Organizations", "Terraform", "GitOps", "SCP"]
    },
    {
      name: "AWS Security Specialty Certification – Study Tips",
      desc: "Preparation strategies, domains, and resources to pass the AWS Security Specialty exam.",
      links: [
        {
          label: "Article",
          href: "https://www.freecodecamp.org/news/aws-security-specialty-certification-study-tips/"
        }
      ],
      tags: ["AWS", "Security", "Certification"]
    },
    {
      name: "Troubleshoot Your Network on Linux using the OSI Model",
      desc: "A practical guide to debugging network issues on Linux layer by layer.",
      links: [
        {
          label: "Article",
          href: "https://www.freecodecamp.org/news/how-troubleshoot-network-on-linux/"
        }
      ],
      tags: ["Linux", "Networking", "Troubleshooting", "OSI"]
    },
    {
      name: "Certified Kubernetes Administrator (CKA) Study Guide",
      desc: "End-to-end CKA prep covering core concepts, labs, and verification tips.",
      links: [
        {
          label: "Article",
          href: "https://www.freecodecamp.org/news/certified-kubernetes-administrator-study-guide-cka/"
        }
      ],
      tags: ["Kubernetes", "CKA", "Certification"]
    },
    {
      name: "Deploy AWS Infrastructure with Terraform and GitHub Actions – Multi-Environment CI/CD",
      desc: "A practical guide to building a multi-environment Terraform pipeline with GitHub Actions and GitOps.",
      links: [
        {
          label: "Article",
          href: "https://www.freecodecamp.org/news/how-to-deploy-aws-infrastructure-with-terraform-and-github-actions-a-practical-multi-environment-ci-cd-guide/"
        }
      ],
      tags: ["Terraform", "GitHub Actions", "AWS", "CI/CD"]
    }
  ]
};

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-2xl md:text-3xl font-bold mb-5 bg-gradient-to-r from-[#232F3E] via-[#FF9900] to-[#FFB84D] bg-clip-text text-transparent">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen text-slate-800">
      {/* Top gradient bar */}
      <div className="h-1 w-full bg-gradient-to-r from-[#232F3E] via-[#FF9900] to-[#FFB84D]" />

      {/* Header */}
      <header className="border-b bg-white/70 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-[#232F3E] via-[#FF9900] to-[#FFB84D] bg-clip-text text-transparent">{profile.name}</span>
          </a>
          <nav className="hidden md:flex gap-6 text-sm">
            {[
              ["About", "home"],
              ["Projects", "projects"],
              ["Experience", "experience"],
              ["Contact", "contact"],
            ].map(([label, id]) => (
              <a key={id} href={`#${id}`} className="hover:opacity-80 transition-opacity">{label}</a>
            ))}
          </nav>
          <div className="flex gap-2 items-center text-sm">
            <a className="underline" href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="underline" href={profile.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="underline" href={profile.links.website} target="_blank" rel="noopener noreferrer">Website</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main id="home" className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-3 gap-10 items-center">
          <div className="md:col-span-2">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              <span className="bg-gradient-to-br from-slate-900 via-orange-700 to-amber-700 bg-clip-text text-transparent">
                {profile.role}
              </span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-3xl">{profile.tagline}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {profile.highlights.map((h) => (
                <span key={h} className="text-sm border rounded-full px-3 py-1 bg-white/60 border-slate-200">
                  {h}
                </span>
              ))}
            </div>
            <div className="mt-7 flex gap-3">
              <a href="#contact" className="px-4 py-2 rounded-md text-white bg-gradient-to-r from-[#232F3E] via-[#FF9900] to-[#FFB84D] hover:opacity-90 shadow">
                Let’s work together
              </a>
            </div>
          </div>

          <div className="md:justify-self-end">
            <div className="h-44 w-44 md:h-56 md:w-56 rounded-3xl overflow-hidden shadow-2xl border bg-white/70">
              <img src={profile.avatar} alt={`${profile.name} headshot`} className="h-full w-full object-cover" />
            </div>
            <p className="mt-3 text-sm text-slate-500">{profile.location}</p>
          </div>
        </div>

        {/* Projects */}
        <Section id="projects" title="Projects">
          <div className="grid md:grid-cols-3 gap-5">
            {profile.projects.map((p) => (
              <div key={p.name} className="border rounded-2xl p-5 bg-white/70 shadow">
                <h3 className="font-semibold">{p.name}</h3>
                <p className="text-sm text-slate-600 mt-2">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs border rounded-full px-2 py-1 bg-white/60 border-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-3">
                  {p.links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="text-sm underline decoration-[#FF9900] decoration-2 underline-offset-4 hover:opacity-80">
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" title="Experience">
          <div className="grid gap-5">
            {profile.experience.map((job) => (
              <div key={job.company} className="border rounded-2xl p-6 bg-white/70 shadow">
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <div>
                    <h3 className="text-lg font-semibold">
                      {job.title} <span className="text-slate-600">· {job.company}</span>
                    </h3>
                    <p className="text-sm text-slate-500">{job.period} • {job.location}</p>
                  </div>
                </div>
                <ul className="mt-4 grid gap-2 text-sm text-slate-700 list-disc pl-5">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" title="Skills & Tools">
          <div className="border rounded-2xl p-6 bg-white/60 shadow">
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((s) => (
                <span key={s} className="inline-flex items-center rounded-full border px-3 py-1 text-sm bg-gradient-to-r from-[#232F3E]/10 via-[#FF9900]/10 to-[#FFB84D]/10">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Contact">
          <div className="border rounded-2xl p-6 bg-white/70 shadow">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-slate-700">Want to build something together, need help with AWS, or just want to say hi? Drop a note.</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a href={profile.links.email} className="px-4 py-2 rounded-md text-white bg-gradient-to-r from-[#232F3E] via-[#FF9900] to-[#FFB84D] hover:opacity-90">Email</a>
                  <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-md border">LinkedIn</a>
                </div>
              </div>
              <div className="text-sm text-slate-600">
                <p><strong>Currently based in:</strong> {profile.location}</p>
                <p className="mt-2"><strong>Open to:</strong> Remote-friendly roles, short-term consulting, platform reviews.</p>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <footer className="py-10 text-center text-xs text-slate-600">© {new Date().getFullYear()} {profile.name}. All rights reserved.</footer>

      {/* SEO basics */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: profile.name,
            jobTitle: profile.role,
            url: profile.links.website,
            sameAs: [profile.links.linkedin, profile.links.github],
            address: { "@type": "PostalAddress", addressLocality: profile.location },
          }),
        }}
      />
    </div>
  );
}
