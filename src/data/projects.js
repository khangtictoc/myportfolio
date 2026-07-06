const projects = {
    "name": "Project",
    "data": [
        {
            "name": "Halliburton (FPT Software) - Oil & Gas Platform",
            "shortDescription": "A web-based platform for managing Oil Mining & Drilling operations",
            "description": "A web-based platform for managing Oil Mining & Drilling operations. A modern responsive website built with React and Tailwind CSS for UI. Node.js and Express for backend services. MongoDB for database management. Multiple operation team, our team takes charge of services relating to structure, components, equipments and operations of oil rig",
            "image": "https://personal-portfolio-khangtictoc.s3.us-east-1.amazonaws.com/asset/img/company/fpt-software.png",
            "technologies": ["AWS services", "Jenkins", "Java", "Helm", "Terraform", "AWX", "Atlantis", "Relics"],
            "responsibilities": [
                "Engage in planning migration solutions, choosing cloud vendors, designing target infrastructure.",
                "Develop and execute strategies for cutover phase, migrate user data in the allowed maintenance window, and ensure integrity of the restored data.",
                "Perform weekly releases, support development team to resolve bugs, keep the system stable, and integrate SonarQube in CI/CD pipelines.",
                "Utilize Cloudflare to prevent & handle DDOS attack, limit access and whitelist valid incoming requests, scale up system temporally to handle the burst traffic."
            ],
            "role": "DevOps Engineer",
            "duration": "06/2023 – 07/2024",
            "year": "2023-2024",
            "githubLink": "https://github.com/yourusername/portfolio",
            "demoLink": "https://portfolio-demo.com"
        },
        {
            "name": "Mercatus -Multi-tenant E-Commerce Platform",
            "shortDescription": "Oil & Gas, Energy Exploitation. Deploying Infrastructure as needed, monitoring and maintain the whole system.",
            "description": "Oil & Gas, Energy Exploitation. Deploying Infrastructure as needed, monitoring and maintain the whole system.",
            "image": "https://personal-portfolio-khangtictoc.s3.us-east-1.amazonaws.com/asset/img/company/mercatus.jpg",
            "technologies": ["AWS services", "Jenkins", "Java", "NodeJS", "Python", "Helm", "Terraform", "AWX", "Atlantis", "Grafana Stacks", "other OSS for K8s components"],
            "responsibilities": [
                "Build automation workflows for CI/CD, quality/security testing, and deployment of applications",
                "Research solutions for monitoring, logging, alerting and insight for the whole system",
                "Develop strategy for data migration from on premises to AWS/Azure cloud",
                "Plan schedule for data migrations with phases for minimal impact on business operations",
                "Design cloud infrastructure & right-sizing for cost optimization"
            ],
            "role": "DevOps Engineer",
            "duration": "05/2024 – 04/2025",
            "year": "2024-2025",
            "githubLink": "https://github.com/yourusername/ecommerce",
            "demoLink": "https://ecommerce-demo.com"
        },
        {
            "name": "NAB – National Australian Bank",
            "shortDescription": "Banking application with multi-tenant architecture",
            "description": "Banking application with multi-tenant architecture. A multi-tenant platform with multiple cloud vendors. Each tenant represents a separate bank branch with isolated data and configurations, responsible for specific limited scope of functions. The CHANGE REQUEST process is strictly followed to ensure compliance with banking regulations, avoiding major impact on services by any personal causes. The security is hardened with multi-layer protection. Accessing privileged VMs is rigorously granted with predefined permissions; services are granted as minimized as possible with fine-grained roles.",
            "image": "https://personal-portfolio-khangtictoc.s3.us-east-1.amazonaws.com/asset/img/company/nab.png",
            "technologies": ["Jenkins", "Harness", "Helm", "Terraform", "Kubernetes (Azure)", "Grafana stacks", "OPA Gatekeeper", "Istio Gateway", "Nginx Ingress", "Calico Network Policies"],
            "responsibilities": [
                "Mainly responsible for maintaining and improving AKS clusters (Azure).",
                "Cut off inducing cost of Terraform Enterprise and migrate to Harness as a centralized solution for CI/CD and GitOps.",
                "Rollout Azure Workload Identity feature for securing pods accessing to Azure resources in alignment with OIDC standard, decommission deprecated Pod Identity",
                "BAU Tasks: Weekly patching and quarterly upgrade for Kubernetes clusters with zero downtime for security compliance, avoid addition cost charges",
                "BAU Task: Resolving Tickets, requests, ... managing and resolve incidents for development team in committed SLA window time",
                "Collaborate with Cloud team to continuously harden the security posture of clusters and VMs with CIS Benchmarks and other security standards."
            ],
            "role": "DevOps Engineer",
            "duration": "09/2025 - 08/2026",
            "year": "2025-2026",
            "githubLink": "https://github.com/yourusername/ecommerce",
            "demoLink": "https://ecommerce-demo.com"
        }
    ]
}

export default projects;