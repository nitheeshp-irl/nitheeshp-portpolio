// src/components/Portfolio.jsx
import React from "react";
import { motion } from "framer-motion";

// Reuse your existing components if you have them:
import Skills from "./Skills";              // your updated Skills.jsx
// If you already have Experience and Projects components, import them here.
// Otherwise the simple inline sections below will render fine.

// Icons for Contact and Experience
import { FaEnvelope, FaLinkedin, FaGithub, FaCogs, FaRocket, FaNetworkWired, FaKey, FaChartBar, FaCloud, FaImage, FaShieldAlt, FaServer, FaUsers, FaGlobe, FaLock } from "react-icons/fa";

// Simple animation helpers
const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
  viewport: { once: true, amount: 0.2 },
};

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-indigo-50 text-slate-800">
      {/* Page Header / Hero */}
      <header className="max-w-6xl mx-auto px-6 pt-4 pb-2">
        <motion.div
          {...fadeInUp}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-animate-gradient">
              Nitheesh Poojary
            </h1>
            <p className="mt-2 text-lg text-gradient-cool">
              Principal Devops Engineer — AWS | IaC | CI/CD | Observability
            </p>
            <p className="mt-3 text-base text-slate-600">
              Building secure, scalable AWS cloud solutions with DevOps and AI innovation
            </p>
          </div>

          {/* Quick Links top-right (like binyam.io style) */}
          <nav className="flex items-center gap-4 text-sm">
            <a href="#about" className="hover:underline text-gradient-cool">About</a>
            <a href="#experience" className="hover:underline text-gradient-cool">Experience</a>
            <a href="#skills" className="hover:underline text-gradient-cool">Skills</a>
            <a href="#projects" className="hover:underline text-gradient-cool">Projects</a>
            <a href="#articles" className="hover:underline text-gradient-cool">Articles</a>
            <a href="#contact" className="hover:underline text-gradient-cool">Contact</a>
          </nav>
        </motion.div>
      </header>

      {/* About Me */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-4">
        <motion.h2
          {...fadeInUp}
          className="text-3xl font-bold mb-6 text-gradient-cool"
        >
          About Me
        </motion.h2>
        
        <motion.div
          {...fadeInUp}
          className="rounded-xl bg-white/70 backdrop-blur shadow-sm p-6 border border-slate-200"
        >
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              I'm a Principal DevOps Engineer specializing in AWS, Infrastructure as Code, CI/CD, and observability. I design secure, scalable, and automated cloud solutions while ensuring efficiency and compliance.
            </p>
            <p>
              I'm also interested in and building AI-driven solutions, exploring how intelligent automation can transform DevOps and cloud operations.
            </p>
            <p>
              I share my work and insights through technical articles on freeCodeCamp.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-4">
        <motion.h2
          {...fadeInUp}
          className="text-3xl font-bold mb-6 text-gradient-cool"
        >
          Experience
        </motion.h2>

        {/* Timeline-style list (summarized per your earlier note: Verizon Connect, Ascendum, IGATE, Six Nines) */}
        <div className="space-y-6">
          <motion.article
            {...fadeInUp}
            className="rounded-xl bg-white/70 backdrop-blur shadow-sm p-6 border border-slate-200"
          >
            <header className="flex items-center justify-between flex-wrap gap-2">
              <h3 className="text-xl font-semibold">Senior DevOps Engineer — Verizon Connect</h3>
              <span className="text-sm text-slate-500">2019 — Present</span>
            </header>
            <ul className="mt-3 space-y-2 text-slate-700 leading-relaxed">
              <li className="flex items-start gap-3">
                <FaCogs className="text-indigo-500 mt-1 flex-shrink-0" />
                <span>CI/CD Optimization – Built and maintained pipelines with GitHub Actions, Kargo, and Helm, reducing deployment times by ~40%.</span>
              </li>
              <li className="flex items-start gap-3">
                <FaRocket className="text-green-500 mt-1 flex-shrink-0" />
                <span>Automation at Scale – Automated RabbitMQ and Redis deployments using Ansible, Jenkins, and Octopus, minimizing errors and speeding up releases.</span>
              </li>
              <li className="flex items-start gap-3">
                <FaNetworkWired className="text-blue-500 mt-1 flex-shrink-0" />
                <span>Cloud Networking – Led migration from Transit VPC to Transit Gateway, centralizing network control and optimizing costs.</span>
              </li>
              <li className="flex items-start gap-3">
                <FaKey className="text-orange-500 mt-1 flex-shrink-0" />
                <span>Access Management – Implemented Redis RBAC automation with AWS CDK, significantly reducing access management effort.</span>
              </li>
              <li className="flex items-start gap-3">
                <FaChartBar className="text-purple-500 mt-1 flex-shrink-0" />
                <span>Cloud Visibility – Developed a multi-account AWS inventory and patch compliance dashboard using Quicksight, Glue, and Athena.</span>
              </li>
            </ul>
          </motion.article>

          <motion.article
            {...fadeInUp}
            className="rounded-xl bg-white/70 backdrop-blur shadow-sm p-6 border border-slate-200"
          >
            <header className="flex items-center justify-between flex-wrap gap-2">
              <h3 className="text-xl font-semibold">Solution Architect — SixNines IT (acquired, now Accenture)</h3>
              <span className="text-sm text-slate-500">2016 — 2019</span>
            </header>
            <ul className="mt-3 space-y-2 text-slate-700 leading-relaxed">
              <li className="flex items-start gap-3">
                <FaCloud className="text-blue-500 mt-1 flex-shrink-0" />
                <span>Cloud Migration & Compliance – Migrated a legacy PCI compliance application to Oracle Cloud, achieving cost reductions, enhancing scalability, optimizing operations, and ensuring continuous regulatory compliance through Oracle's secure infrastructure.</span>
              </li>
              <li className="flex items-start gap-3">
                <FaImage className="text-green-500 mt-1 flex-shrink-0" />
                <span>Automated Image Pipelines – Designed and implemented image pipelines using Packer and Jenkins, reducing deployment time from hours to minutes and significantly increasing deployment frequency.</span>
              </li>
            </ul>
          </motion.article>



          <motion.article
            {...fadeInUp}
            className="rounded-xl bg-white/70 backdrop-blur shadow-sm p-6 border border-slate-200"
          >
            <header className="flex items-center justify-between flex-wrap gap-2">
              <h3 className="text-xl font-semibold">Technical Specialist — IGATE Cloud Solutions Ltd</h3>
              <span className="text-sm text-slate-500">2014 — 2016</span>
            </header>
            <ul className="mt-3 space-y-2 text-slate-700 leading-relaxed">
              <li className="flex items-start gap-3">
                <FaShieldAlt className="text-red-500 mt-1 flex-shrink-0" />
                <span>Implemented comprehensive user management best practices on Linux Servers, reducing security incidents through strategic access control.</span>
              </li>
              <li className="flex items-start gap-3">
                <FaServer className="text-blue-500 mt-1 flex-shrink-0" />
                <span>Configured High Availability NAT on AWS VPC, improving network reliability.</span>
              </li>
              <li className="flex items-start gap-3">
                <FaUsers className="text-green-500 mt-1 flex-shrink-0" />
                <span>Part of team that modernized Bose audio company DevOps journey, using Chef, Bamboo and AEM.</span>
              </li>
            </ul>
          </motion.article>

          <motion.article
            {...fadeInUp}
            className="rounded-xl bg-white/70 backdrop-blur shadow-sm p-6 border border-slate-200"
          >
            <header className="flex items-center justify-between flex-wrap gap-2">
              <h3 className="text-xl font-semibold">Cloud Engineer — 8KMiles</h3>
              <span className="text-sm text-slate-500">2013 — 2014</span>
            </header>
            <ul className="mt-3 space-y-2 text-slate-700 leading-relaxed">
              <li className="flex items-start gap-3">
                <FaGlobe className="text-blue-500 mt-1 flex-shrink-0" />
                <span>AWS Web Solutions – Designed and implemented public-facing websites on AWS for major clients, improving online presence and streamlining user management.</span>
              </li>
              <li className="flex items-start gap-3">
                <FaLock className="text-red-500 mt-1 flex-shrink-0" />
                <span>Cloud Migration & Security – Migrated customer workloads to AWS and delivered a HIPAA-compliant website using Sophos Firewall and Trend Micro for disk encryption.</span>
              </li>
            </ul>
          </motion.article>
        </div>
      </section>

      {/* Skills SECOND (keeps your existing animated component) */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-4">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-4">
        <motion.h2
          {...fadeInUp}
          className="text-3xl font-bold mb-6 text-gradient-cool"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.article
            {...fadeInUp}
            className="rounded-xl bg-white/70 backdrop-blur shadow-sm p-6 border border-slate-200"
          >
            <h3 className="text-xl font-semibold">From Commit to Production: Hands-On GitOps Promotion</h3>
            <p className="mt-2 text-slate-700">
              Complete GitOps workflow implementation with GitHub Actions, Argo CD, Helm, and Kargo for automated promotion pipelines.
            </p>
            <div className="mt-4">
              <h4 className="font-semibold text-slate-800 mb-2">Tech Stack:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-600">
                <div><strong>CI/Build:</strong> GitHub Actions</div>
                <div><strong>Container:</strong> Docker, Docker Compose</div>
                <div><strong>K8s Runtime:</strong> Minikube</div>
                <div><strong>GitOps:</strong> Argo CD</div>
                <div><strong>Promotion:</strong> Kargo</div>
                <div><strong>Package Mgmt:</strong> Helm</div>
              </div>
            </div>
            <a
              href="https://www.freecodecamp.org/news/from-commit-to-production-hands-on-gitops-promotion-with-github-actions-argo-cd-helm-and-kargo/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-3 text-indigo-600 hover:text-indigo-800 font-medium"
            >
              Read the full article →
            </a>
          </motion.article>

          <motion.article
            {...fadeInUp}
            className="rounded-xl bg-white/70 backdrop-blur shadow-sm p-6 border border-slate-200"
          >
            <h3 className="text-xl font-semibold">AWS Multi-Account Management with Terraform and GitOps</h3>
            <p className="mt-2 text-slate-700">
              Comprehensive guide on simplifying AWS multi-account management using Terraform and GitOps practices for scalable cloud infrastructure.
            </p>
            <div className="mt-4">
              <h4 className="font-semibold text-slate-800 mb-2">Tech Stack:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-600">
                <div><strong>IaC:</strong> Terraform, Terraform Cloud</div>
                <div><strong>CI/CD:</strong> GitHub Actions</div>
                <div><strong>Multi-Account:</strong> AWS Organizations, Control Tower, OUs, SSO, SCPs</div>
                <div><strong>Landing Zone:</strong> AWS Control Tower, Custom Landing Zone</div>
                <div><strong>Governance:</strong> Control Tower Guardrails</div>
                <div><strong>Permissions:</strong> AWS SSO, Service Control Policies</div>
              </div>
            </div>
            <a
              href="https://www.freecodecamp.org/news/simplify-aws-multi-account-management-with-terraform-and-gitops/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-3 text-indigo-600 hover:text-indigo-800 font-medium"
            >
              Read the full article →
            </a>
          </motion.article>
        </div>
      </section>

      {/* Articles (real link to your author page) */}
      <section id="articles" className="max-w-6xl mx-auto px-6 py-4">
        <motion.h2
          {...fadeInUp}
          className="text-3xl font-bold mb-6 text-gradient-cool"
        >
          Articles
        </motion.h2>

        <motion.div
          {...fadeInUp}
          className="rounded-xl bg-white/70 backdrop-blur shadow-sm p-6 border border-slate-200"
        >
          <p className="text-slate-700">
            I publish articles on DevOps, AWS, Infrastructure as Code, CI/CD, and production operations.
          </p>
          <a
            href="https://www.freecodecamp.org/news/author/nitheeshp/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-4 px-4 py-2 rounded-lg border border-indigo-300 text-indigo-700 hover:bg-indigo-50 transition"
          >
            View my articles on freeCodeCamp →
          </a>

          {/* Optional: curated static links (update anytime) */}
          <ul className="mt-6 space-y-2 list-disc pl-5 text-slate-700">
            <li>
              <a
                className="hover:underline"
                href="https://www.freecodecamp.org/news/simplify-aws-multi-account-management-with-terraform-and-gitops/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Simplify AWS Multi-Account Management with Terraform and GitOps
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                href="https://www.freecodecamp.org/news/from-commit-to-production-hands-on-gitops-promotion-with-github-actions-argo-cd-helm-and-kargo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                From Commit to Production: Hands-On GitOps Promotion with GitHub Actions, Argo CD, Helm, and Kargo
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                href="https://www.freecodecamp.org/news/author/nitheeshp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Observability 101: CloudWatch + Prometheus + Grafana for real-world SLOs
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                href="https://www.freecodecamp.org/news/author/nitheeshp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                From CloudFormation to CDK: creating reusable AWS platform patterns
              </a>
            </li>
          </ul>
        </motion.div>
      </section>

      {/* Contact (BOTTOM OF PAGE) */}
      <section id="contact" className="py-6 bg-gradient-to-br from-white via-slate-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            {...fadeInUp}
            className="text-3xl font-bold mb-6 text-center text-gradient-cool"
          >
            Get in Touch
          </motion.h2>
          <motion.p
            {...fadeInUp}
            className="text-lg mb-8 text-center text-slate-600"
          >
            Whether you have a question, want to collaborate, or just want to say hi — I'd love to hear from you.
          </motion.p>

          <motion.div
            {...fadeInUp}
            className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8"
          >
            {/* Email */}
            <a
              href="mailto:nitheeshp@outlook.com"
              className="flex flex-col items-center p-6 bg-white shadow-sm rounded-lg hover:shadow-md transition group border border-slate-200"
            >
              <FaEnvelope className="text-indigo-500 text-4xl mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Email</span>
              <span className="text-sm text-slate-500 break-all">nitheeshp@outlook.com</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/nitheeshp/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-white shadow-sm rounded-lg hover:shadow-md transition group border border-slate-200"
            >
              <FaLinkedin className="text-blue-600 text-4xl mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-medium">LinkedIn</span>
              <span className="text-sm text-slate-500">View Profile</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/nitheeshp-irl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-white shadow-sm rounded-lg hover:shadow-md transition group border border-slate-200"
            >
              <FaGithub className="text-gray-800 text-4xl mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-medium">GitHub</span>
              <span className="text-sm text-slate-500">View Projects</span>
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}