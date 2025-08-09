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
      role: "Senior Software Engineer — DevOps",
      period: "2019 – Present · Dublin, Ireland",
      achievements: [
        "Designed and operated multi-account AWS environments using Terraform, CloudFormation, and CDK.",
        "Built CI/CD pipelines (GitHub Actions, GitLab CI, CodePipeline) for containerized workloads.",
        "Improved reliability and cost posture with CloudWatch metrics/alarms, Prometheus & Grafana.",
        "Implemented guardrails and audits with Security Hub, Inspector, and CloudTrail."
      ]
    },
    {
      company: "Ascendum",
      role: "DevOps Engineer",
      period: "2016 – 2019",
      achievements: [
        "Automated environment provisioning with Terraform and repeatable Helm/Kubernetes workflows.",
        "Introduced release promotion using Kargo and Octopus Deploy for multi-env delivery.",
        "Hardened network topologies (VPC baseline, Transit Gateway patterns)."
      ]
    },
    {
      company: "SixNines",
      role: "Cloud Engineer",
      period: "2015 – 2016",
      achievements: [
        "Delivered AWS landing zones and CI/CD foundations for customer projects.",
        "Integrated observability with CloudWatch and dashboards; implemented cost and security baselines.",
        "Scripted operational runbooks on Linux/Windows Server."
      ]
    },
    {
      company: "IGATE",
      role: "Software Engineer",
      period: "2012 – 2015",
      achievements: [
        "Supported application deployments and IaC adoption using CloudFormation and early Terraform.",
        "Automated routine operations with Python/Bash; reduced manual toil.",
        "Collaborated with teams to standardize CI steps and artifact promotion."
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
