import React, { useEffect, useRef, useState } from "react";
import Skills from "./components/Skills";

// Minimal in-view hook
function useInView(options = { threshold: 0.15, rootMargin: "0px" }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        io.disconnect();
      }
    }, options);
    io.observe(el);
    return () => io.disconnect();
  }, [options]);
  return { ref, inView };
}

function Section({ id, title, subtitle, children }) {
  const { ref, inView } = useInView();
  return (
    <section id={id} ref={ref} className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <header
        className={`mb-10 transition-all duration-700
          ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
          {title}
        </h2>
        {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
      </header>
      <div
        className={`transition-all duration-700
          ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        {children}
      </div>
    </section>
  );
}

function Hero() {
  const { ref, inView } = useInView({ threshold: 0.1 });
  return (
    <header
      ref={ref}
      className="mx-auto max-w-6xl px-5 pt-16 md:pt-24 pb-8 md:pb-12"
    >
      <div
        className={`transition-all duration-700
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
          Nitheesh P — Platform & DevOps Engineer
        </h1>
        <p className="mt-4 max-w-2xl text-slate-600">
          I design, automate, and observe scalable cloud platforms on AWS.
          Focused on IaC, CI/CD, security, and high-reliability operations.
        </p>
        <div className="mt-6 flex gap-3">
          <a
            href="#skills"
            className="rounded-md bg-sky-600 px-4 py-2 text-white hover:bg-sky-700 transition-colors"
          >
            View Skills
          </a>
          <a
            href="#experience"
            className="rounded-md border border-slate-300 px-4 py-2 text-slate-800 hover:bg-slate-50 transition-colors"
          >
            Experience
          </a>
        </div>
      </div>
    </header>
  );
}

function ExperienceItem({ company, role, period, bullets }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
        <h4 className="text-lg font-semibold text-slate-900">{company}</h4>
        <span className="text-sm text-slate-500">{period}</span>
      </div>
      <p className="mt-1 text-slate-700">{role}</p>
      <ul className="mt-3 list-disc pl-5 space-y-1 text-slate-700">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

function Experience() {
  const { ref, inView } = useInView();
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Selected roles & impact"
    >
      <div
        ref={ref}
        className={`grid gap-5 transition-all duration-700
          ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <ExperienceItem
          company="Verizon Connect"
          role="Senior DevOps / Platform Engineer"
          period="(per resume)"
          bullets={[
            "Built and maintained AWS infrastructure with Terraform & CloudFormation.",
            "Implemented CI/CD with GitHub Actions, GitLab CI, and CodePipeline.",
            "Improved observability with CloudWatch, Prometheus, Grafana, and AppDynamics.",
          ]}
        />
        <ExperienceItem
          company="SixNines"
          role="Cloud / DevOps Engineer"
          period="(per resume)"
          bullets={[
            "Designed VPC architectures and Transit Gateway routing for multi-account setups.",
            "Automated deployments with Helm, Octopus Deploy, and Argo/Kargo-style pipelines.",
            "Hardened security posture using Security Hub, Inspector, and centralized logging (Splunk).",
          ]}
        />
        <ExperienceItem
          company="Ascendum / IGATE"
          role="DevOps Engineer"
          period="(per resume)"
          bullets={[
            "Delivered repeatable environments via IaC and application packaging pipelines.",
            "Managed Linux/Windows Server fleets and standardized deployment workflows.",
            "Established CloudTrail auditing and guardrails for regulated workloads.",
          ]}
        />
      </div>
    </Section>
  );
}

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* Simple top nav (light theme) */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-5 h-14 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight">
            Nitheesh P
          </a>
          <div className="flex items-center gap-6 text-sm">
            <a className="text-slate-700 hover:text-sky-700" href="#skills">
              Skills
            </a>
            <a className="text-slate-700 hover:text-sky-700" href="#experience">
              Experience
            </a>
          </div>
        </div>
      </nav>

      <Hero />

      {/* ⬇️ Skills BEFORE Experience */}
      <Skills />
      <Experience />

      <footer className="mx-auto max-w-6xl px-5 py-12 text-slate-500">
        © {new Date().getFullYear()} Nitheesh P. All rights reserved.
      </footer>
    </main>
  );
}
