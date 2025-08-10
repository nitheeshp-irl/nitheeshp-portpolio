// src/components/Portfolio.jsx
import React from "react";
import { motion } from "framer-motion";

// Reuse your existing components if you have them:
import Skills from "./Skills";              // your updated Skills.jsx
// If you already have Experience and Projects components, import them here.
// Otherwise the simple inline sections below will render fine.

// Icons for Contact
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

// Simple animation helpers
const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
  viewport: { once: true, amount: 0.2 },
};

const SectionDivider = () => (
  <div
    className="h-1 w-full my-16 rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
    aria-hidden="true"
  />
);

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-indigo-50 text-slate-800">
      {/* Page Header / Hero */}
      <header className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <motion.div
          {...fadeInUp}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight">
              Nitheesh Poojary
            </h1>
            <p className="mt-2 text-lg text-slate-600">
              Senior DevOps & Cloud Engineer — AWS | IaC | CI/CD | Observability
            </p>
          </div>

          {/* Quick Links top-right (like binyam.io style) */}
          <nav className="flex items-center gap-4 text-sm">
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#articles" className="hover:underline">Articles</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </motion.div>
      </header>

      {/* Experience FIRST */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-12">
        <motion.h2
          {...fadeInUp}
          className="text-3xl font-bold mb-6 text-slate-900"
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
              <span className="text-sm text-slate-500">2021 — Present</span>
            </header>
            <ul className="mt-3 list-disc pl-5 text-slate-700 leading-relaxed">
              <li>Built and maintained CI/CD with GitHub Actions/Kargo/Helm, reducing deploy time by ~40%.</li>
              <li>Automated infra with Terraform & CloudFormation; introduced CDK for reusable stacks.</li>
              <li>Set up CloudWatch + Prometheus + Grafana dashboards; integrated AppDynamics for APM.</li>
              <li>Hardened security using AWS Security Hub, CloudTrail, Inspector; integrated Splunk.</li>
            </ul>
          </motion.article>

          <motion.article
            {...fadeInUp}
            className="rounded-xl bg-white/70 backdrop-blur shadow-sm p-6 border border-slate-200"
          >
            <header className="flex items-center justify-between flex-wrap gap-2">
              <h3 className="text-xl font-semibold">DevOps Engineer — Ascendum / IGATE</h3>
              <span className="text-sm text-slate-500">2017 — 2021</span>
            </header>
            <ul className="mt-3 list-disc pl-5 text-slate-700 leading-relaxed">
              <li>Migrated on-prem workloads to AWS VPC with Transit Gateway; standardized pipelines in GitLab CI.</li>
              <li>Containerized workloads; Helm releases with environment-specific values and automated rollbacks.</li>
              <li>Introduced IaC guardrails and cost tagging policies.</li>
            </ul>
          </motion.article>

          <motion.article
            {...fadeInUp}
            className="rounded-xl bg-white/70 backdrop-blur shadow-sm p-6 border border-slate-200"
          >
            <header className="flex items-center justify-between flex-wrap gap-2">
              <h3 className="text-xl font-semibold">Cloud/DevOps Engineer — Six Nines IT</h3>
              <span className="text-sm text-slate-500">2015 — 2017</span>
            </header>
            <ul className="mt-3 list-disc pl-5 text-slate-700 leading-relaxed">
              <li>Provisioned multi-account AWS landing zones; automated AMI baking and golden images.</li>
              <li>Hooked CloudTrail + Splunk for centralized audit trails and alerting.</li>
            </ul>
          </motion.article>
        </div>
      </section>

      <SectionDivider />

      {/* Skills SECOND (keeps your existing animated component) */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-12">
        <motion.h2
          {...fadeInUp}
          className="text-3xl font-bold mb-6 text-slate-900"
        >
          Skills
        </motion.h2>
        <Skills />
      </section>

      <SectionDivider />

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-12">
        <motion.h2
          {...fadeInUp}
          className="text-3xl font-bold mb-6 text-slate-900"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.article
            {...fadeInUp}
            className="rounded-xl bg-white/70 backdrop-blur shadow-sm p-6 border border-slate-200"
          >
            <h3 className="text-xl font-semibold">Multi-Account AWS Platform (IaC-First)</h3>
            <p className="mt-2 text-slate-700">
              Terraform modules for VPC, TGW, EKS node groups, and standardized observability. GitHub Actions + CodePipeline for infra and app deploys.
            </p>
            <ul className="mt-3 list-disc pl-5 text-slate-700">
              <li>Blue/Green with Helm + Kargo</li>
              <li>Guardrails via Security Hub + Inspector</li>
              <li>Dashboards in CloudWatch/Grafana</li>
            </ul>
          </motion.article>

          <motion.article
            {...fadeInUp}
            className="rounded-xl bg-white/70 backdrop-blur shadow-sm p-6 border border-slate-200"
          >
            <h3 className="text-xl font-semibold">Cost-Aware Observability Pack</h3>
            <p className="mt-2 text-slate-700">
              Thin layer of Prometheus/Grafana + CloudWatch metrics and APM (AppDynamics) for per-service SLOs and cost signals.
            </p>
            <ul className="mt-3 list-disc pl-5 text-slate-700">
              <li>Golden signals for APIs and queues</li>
              <li>Usage → spend correlation panels</li>
              <li>Splunk alerts wired to on-call</li>
            </ul>
          </motion.article>
        </div>
      </section>

      <SectionDivider />

      {/* Articles (real link to your author page) */}
      <section id="articles" className="max-w-6xl mx-auto px-6 py-12">
        <motion.h2
          {...fadeInUp}
          className="text-3xl font-bold mb-6 text-slate-900"
        >
          Articles
        </motion.h2>

        <motion.div
          {...fadeInUp}
          className="rounded-xl bg-white/70 backdrop-blur shadow-sm p-6 border border-slate-200"
        >
          <p className="text-slate-700">
            I write about DevOps, AWS, IaC, CI/CD, and production operations. Read my latest posts on freeCodeCamp:
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
                href="https://www.freecodecamp.org/news/author/nitheeshp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Building secure AWS CI/CD pipelines with Terraform & GitHub Actions
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

      <SectionDivider />

      {/* Contact (BOTTOM OF PAGE) */}
      <section id="contact" className="py-20 bg-gradient-to-br from-white via-slate-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            {...fadeInUp}
            className="text-3xl font-bold mb-6 text-center text-slate-900"
          >
            Get in Touch
          </motion.h2>
          <motion.p
            {...fadeInUp}
            className="text-lg mb-12 text-center text-slate-600"
          >
            Whether you have a question, want to collaborate, or just want to say hi — I’d love to hear from you.
          </motion.p>

          <motion.div
            {...fadeInUp}
            className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8"
          >
            {/* Email */}
            <a
              href="mailto:nitheesh@example.com"
              className="flex flex-col items-center p-6 bg-white shadow-sm rounded-lg hover:shadow-md transition group border border-slate-200"
            >
              <FaEnvelope className="text-indigo-500 text-4xl mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Email</span>
              <span className="text-sm text-slate-500 break-all">nitheesh@example.com</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/nitheeshpoojary/"
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
