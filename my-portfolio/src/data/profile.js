export const profile = {
  // Top matter
  name: "Nitheesh Poojary",
  tagline: "AWS DevOps Engineer · Cloud Architect · Automation Specialist",
  about:
    "I design reliable, secure, and cost-efficient platforms on AWS. Kubernetes, GitOps, CI/CD, and automation are my happy place.",
  location: "Dublin, Ireland",

  // Links
  email: "mailto:nitheeshpoojary@gmail.com",
  github: "https://github.com/nitheeshp-irl",
  linkedin: "https://www.linkedin.com/in/nitheeshp/",
  blog: "https://www.freecodecamp.org/news/author/nitheeshp/",
  avatar: "/profile.jpg", // use /profile.jpg in public/, or replace with a hosted URL

  // Experience timeline
  experience: [
    {
      company: "Verizon Connect",
      role: "Senior Software Engineer (AWS/DevOps)",
      period: "2021 — Present · Dublin, Ireland",
      bullets: [
        "Led GitOps rollout with Argo CD & Kargo; automated promotions across environments.",
        "Built CI checks for CloudFormation security and best practices.",
        "Hardened EKS with least-privilege IRSA and network policies.",
        "Optimized Bedrock model usage with spend guards and observability hooks."
      ]
    },
    {
      company: "Previous Roles",
      role: "Cloud/DevOps Engineer",
      period: "2012 — 2021 · Various",
      bullets: [
        "Sysadmin → DevOps journey across on-prem & AWS; automated everything in sight."
      ]
    }
  ],

  // Grouped skills (used by Skills.jsx)
  skills: {
    Cloud: [
      "AWS (EKS, ECS, Lambda, RDS, S3, CloudFront, IAM)"
    ],
    "DevOps / IaC": [
      "Terraform",
      "CloudFormation",
      "GitOps (Argo CD, Kargo)",
      "Helm"
    ],
    "CI/CD": [
      "GitHub Actions",
      "GitLab CI"
    ],
    Containers: [
      "Kubernetes",
      "Docker"
    ],
    "Languages / Scripting": [
      "Python",
      "Bash"
    ],
    Observability: [
      "Prometheus",
      "Grafana",
      "OpenSearch / ELK"
    ],
    "Databases / MQ": [
      "PostgreSQL",
      "MySQL",
      "RabbitMQ"
    ],
    "Security / Ops": [
      "IAM Least-Privilege",
      "SSM Patching",
      "Cost Optimization"
    ]
  },

  // Projects (FCC articles etc.)
  projects: [
    {
      name: "Hands-On GitOps Promotion",
      description: "From commit to production with GitHub Actions, Argo CD, Helm, and Kargo.",
      link: "https://www.freecodecamp.org/news/from-commit-to-production-hands-on-gitops-promotion-with-github-actions-argo-cd-helm-and-kargo/",
      tags: ["GitOps", "Actions", "Argo CD", "Helm", "Kargo"]
    },
    {
      name: "AWS Multi-Account with Terraform & GitOps",
      description: "AWS Organizations, SCPs, Terraform Cloud + GitOps for multi-account setups.",
      link: "https://www.freecodecamp.org/news/simplify-aws-multi-account-management-with-terraform-and-gitops/",
      tags: ["AWS Orgs", "Terraform", "GitOps"]
    },
    {
      name: "AWS Security Specialty – Study Tips",
      description: "Preparation strategies, domains, and resources to pass the exam.",
      link: "https://www.freecodecamp.org/news/aws-security-specialty-certification-study-tips/",
      tags: ["AWS", "Security"]
    },
    {
      name: "OSI Troubleshooting on Linux",
      description: "Debug network issues on Linux layer by layer using the OSI model.",
      link: "https://www.freecodecamp.org/news/how-troubleshoot-network-on-linux/",
      tags: ["Linux", "Networking"]
    }
  ],

  // Articles list (extra)
  articles: [
    {
      title: "Deploy AWS Infra with Terraform & GitHub Actions – Multi-Env CI/CD",
      link: "https://www.freecodecamp.org/news/how-to-deploy-aws-infrastructure-with-terraform-and-github-actions-a-practical-multi-environment-ci-cd-guide/"
    },
    {
      title: "Certified Kubernetes Administrator (CKA) Study Guide",
      link: "https://www.freecodecamp.org/news/certified-kubernetes-administrator-study-guide-cka/"
    }
  ]
};
