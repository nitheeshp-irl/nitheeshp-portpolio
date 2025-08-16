import React from "react";
import { useInView } from "react-intersection-observer";
import { FaExternalLinkAlt } from "react-icons/fa";s

// Replace with your real article list
const articles = [
  {
    title: "From Commit to Production: Hands-On GitOps Promotion with GitHub Actions, Argo CD, Helm, and Kargo",
    date: "2 months ago",
    url: "https://www.freecodecamp.org/news/from-commit-to-production-hands-on-gitops-promotion-with-github-actions-argo-cd-helm-and-kargo/",
  },
  {
    title: "How to Simplify AWS Multi-Account Management with Terraform and GitOps",
    date: "8 months ago",
    url: "https://www.freecodecamp.org/news/how-to-simplify-aws-multi-account-management-with-terraform-and-gitops/",
  },
  {
    title: "AWS Security Specialty Certification: How to Prepare for the Exam",
    date: "10 months ago",
    url: "https://www.freecodecamp.org/news/aws-security-specialty-certification-how-to-prepare-for-the-exam/",
  },
  {
    title: "How to Troubleshoot Your Network on Linux – OSI Model Troubleshooting Guide",
    date: "1 year ago",
    url: "https://www.freecodecamp.org/news/how-to-troubleshoot-your-network-on-linux-osi-model-troubleshooting-guide/",
  },
  {
    title: "How to Deploy AWS Infrastructure with Terraform and GitHub Actions – A Multi-Environment CI/CD Guide",
    date: "3 years ago",
    url: "https://www.freecodecamp.org/news/how-to-deploy-aws-infrastructure-with-terraform-and-github-actions-a-multi-environment-cicd-guide/",
  },
];

export default function Articles() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="articles"
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-slate-900">Articles</h2>
          <a
            href="https://www.freecodecamp.org/news/author/nitheeshp/"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
            target="_blank"
            rel="noopener"
          >
            View all →
          </a>
        </div>
        <ul className="space-y-4">
          {articles.map((a) => (
            <li key={a.url} className="group">
              <a
                href={a.url}
                target="_blank"
                rel="noopener"
                className="text-base font-semibold text-slate-900 hover:text-indigo-700 flex items-center gap-1"
              >
                <FaExternalLinkAlt className="opacity-70" />
                {a.title}
              </a>
              <p className="text-sm text-slate-600">{a.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
