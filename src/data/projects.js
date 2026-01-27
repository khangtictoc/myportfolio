const projects = {
    "name": "Project",
    "data": [
        {
            "name": "Halliburton (FPT Software) - Oil & Gas Platform",
            "shortDescription": "A web-based platform for managing Oil Mining & Drilling operations",
            "description": "A modern responsive website built with React and Tailwind CSS for UI. Node.js and Express for backend services. MongoDB for database management. Multiple operation team, our team takes charge of services relating to structure, components, equipments and operations of oil rig",
            "image": "https://personal-portfolio-khangtictoc.s3.us-east-1.amazonaws.com/asset/img/company/fpt-software.png",
            "technologies": ["AWS", "Azure", "Jenkins", "Helm", "Terraform/Atlantis", "Ansible Tower(AWX)/Molecule"],
            "responsibilities": [
                "Streamlined the deployment process for Java microservices and React web apps",
                "Adoption of GitOps principles to automate provisioning infrastructure and third-party services",
                "Applying blue-green deployment for rolling out the web.",
                "Implemented a comprehensive monitoring system to provide clients with real-time performance metrics",
                "Managed backups, restorations on AWS, maintaining and minimizing downtime to guarantee reliability for clients.",
                "Effectively diagnosed and resolved infrastructure and application issues, ensuring system stability and optimal performance"
            ],
            "role": "Cloud Engineer",
            "duration": "6 months",
            "year": "2023",
            "githubLink": "https://github.com/yourusername/portfolio",
            "demoLink": "https://portfolio-demo.com"
        },
        {
            "name": "Mercatus -Multi-tenant E-Commerce Platform",
            "shortDescription": "Full-stack e-commerce solution with payment processing",
            "description": "A comprehensive e-commerce platform with user & product management, warehouse control. Variety of shopping cart features, scheduled advertisements/order. Secure payment processing integration with the compliance of PCI-DSS standards.",
            "image": "https://personal-portfolio-khangtictoc.s3.us-east-1.amazonaws.com/asset/img/company/mercatus.jpg",
            "technologies": ["Jenkins", "ArgoCD", "Terraform", "Ansible", "Prometheus", "Grafana stacks"],
            "responsibilities": [
                "Build automation workflows for CI/CD, quality/security testing, and deployment of applications",
                "Research solutions for monitoring, logging, alerting and insight for the whole system",
                "Develop strategy for data migration from on-premises to AWS/Azure cloud",
                "Plan schedule for data migrations with phases for minimal impact on business operations",
                "Design cloud infrastructure & righ-sizing for cost optimization",
                "Monitoring system, support 24/7 with SL2 teams to handle unexpected incidents, receive incoming call from C-levels."
            ],
            "role": "DevOps Engineer",
            "duration": "1 year",
            "year": "2024",
            "githubLink": "https://github.com/yourusername/ecommerce",
            "demoLink": "https://ecommerce-demo.com"
        },
        {
            "name": "NAB - 1st Australian Bank [CURRENT]",
            "shortDescription": "Banking application with multi-tenant architecture",
            "description": "A multi-tenant platform with mutiple cloud vendors. Each tenant represents a separate bank branch with isolated data and configurations, responsible for specific limited scope. Our tenants could decide which cloud provider to onboard services. The CHANGE process is strictly followed to ensure compliance with banking regulations, avoid major impact on services by any personal causes. The security is hardened with multi-layer protection, permission of VMs, services are granted as minimized as possible along with fine-grained roles.",
            "image": "https://personal-portfolio-khangtictoc.s3.us-east-1.amazonaws.com/asset/img/company/nab.png",
            "technologies": ["Jenkins", "Harness", "Helm", "Terraform", "Kubernetes (Azure)", "Grafana stacks", "OPA Gatekeeper", "Istio Gateway", "Nginx Ingress", "Calico Network Policies"],
            "responsibilities": [
                "Main responsible for maintaining and improving AKS clusters (Azure)",
                "Cut off inducing cost of Terraform Enterprise and migrate to Harness as centralized solution for CI/CD and GitOps",
                "Rollout feature Azure Workload Identity for secure pod access to Azure resources, decommision Pod Identity in alignment with OIDC standard",
                "Weekly patching and quarterly upgrade for Kubernetes clusters with zero downtime for security compliance",
                "Continuously harden the security posture of clusters and VMs with CIS Benchmarks",
            ],
            "role": "DevOps Engineer (Mid Level)",
            "duration": "6 months",
            "year": "2025",
            "githubLink": "https://github.com/yourusername/ecommerce",
            "demoLink": "https://ecommerce-demo.com"
        }
    ]
}

export default projects;