import React from "react";
import { profile } from "../data/profile";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">About</h2>
      <p className="text-slate-700 max-w-3xl">
        I help teams ship faster and safer on AWS. I’ve led GitOps rollouts, hardened EKS with
        least-privilege IAM, and built CI/CD guardrails. I care about reliability, security, and cost from day one.
      </p>
    </section>
  );
}
