// Placeholder content for the SRE portfolio. Edit freely.

export const profile = {
    name: "Your Name",
    handle: "yourname",
    role: "Site Reliability Engineer",
    location: "Remote / Earth",
    email: "hello@yourname.dev",
    shortBio:
        "I build resilient, observable systems that stay up so engineers can sleep. Focused on Kubernetes, observability, incident response, and the quiet art of paving the paved road.",
    longBio:
        "Site Reliability Engineer with a bias toward automation, blameless postmortems, and meaningful SLOs. I enjoy taming distributed systems, shrinking error budgets responsibly, and turning 3am pages into Tuesday morning runbooks.",
    socials: {
        github: "https://github.com/yourname",
        linkedin: "https://linkedin.com/in/yourname",
        twitter: "https://twitter.com/yourname",
        resume: "#",
    },
    metrics: [
        { label: "uptime", value: "99.99%" },
        { label: "mttr", value: "< 12m" },
        { label: "on-call", value: "available" },
    ],
};

export const stack = [
    { group: "Orchestration", items: ["Kubernetes", "Helm", "Argo CD", "Istio", "Knative"] },
    { group: "Observability", items: ["Prometheus", "Grafana", "Loki", "Tempo", "OpenTelemetry"] },
    { group: "Cloud & IaC", items: ["AWS", "GCP", "Terraform", "Pulumi", "Crossplane"] },
    { group: "CI/CD & Lang", items: ["GitHub Actions", "GitLab CI", "Go", "Python", "Bash"] },
    { group: "Data & Streaming", items: ["PostgreSQL", "Redis", "Kafka", "ClickHouse", "NATS"] },
];

export const experience = [
    {
        company: "Company One",
        role: "Senior Site Reliability Engineer",
        period: "2023 — Present",
        location: "Remote",
        bullets: [
            "Owned platform reliability across 60+ services; defined SLOs that cut customer-impacting incidents by 42%.",
            "Designed multi-region failover for the core API, reaching 99.99% monthly availability.",
            "Led the migration from VMs to Kubernetes with progressive delivery via Argo Rollouts.",
        ],
        tags: ["Kubernetes", "SLOs", "Argo", "Terraform"],
    },
    {
        company: "Company Two",
        role: "Site Reliability Engineer",
        period: "2021 — 2023",
        location: "Hybrid",
        bullets: [
            "Built golden-path CI/CD for 80+ microservices; deploys went from weekly to on-demand.",
            "Implemented OpenTelemetry pipeline (Tempo + Loki + Mimir) cutting MTTR by ~55%.",
            "Instituted blameless postmortems and an internal incident command framework.",
        ],
        tags: ["OpenTelemetry", "GitOps", "Observability"],
    },
    {
        company: "Company Three",
        role: "DevOps Engineer",
        period: "2019 — 2021",
        location: "On-site",
        bullets: [
            "Automated infra provisioning across AWS using Terraform modules and policy-as-code (OPA).",
            "Hardened CI pipelines and introduced ephemeral preview environments for every PR.",
            "Reduced cloud spend by 28% via right-sizing, autoscaling and Spot fleet adoption.",
        ],
        tags: ["AWS", "Terraform", "OPA", "CI/CD"],
    },
];

export const education = [
    {
        school: "University Placeholder",
        degree: "B.Sc. in Computer Science",
        period: "2015 — 2019",
        details: "Distributed systems, networks, operating systems. Capstone on consensus algorithms and Raft.",
    },
    {
        school: "Continuous Learning",
        degree: "Certifications",
        period: "Ongoing",
        details: "CKA · CKAD · AWS SAA · HashiCorp Terraform Associate · Google Cloud Professional Cloud Architect.",
    },
];

export const projects = [
    { title: "runbook-as-code", summary: "Declarative incident runbooks compiled from YAML to executable workflows with Slack-driven triggers.", stack: ["Go", "Temporal", "Slack API"], status: "production", link: "#" },
    { title: "slo-forge", summary: "Generates Prometheus recording & alerting rules from SLO definitions; multi-burn-rate out of the box.", stack: ["Python", "Prometheus", "Jsonnet"], status: "open-source", link: "#" },
    { title: "chaos-lite", summary: "Tiny chaos engineering controller for Kubernetes — pod kill, network latency, and CPU squeeze.", stack: ["Go", "K8s Operator", "eBPF"], status: "experimental", link: "#" },
    { title: "otel-bootstrap", summary: "Opinionated OpenTelemetry collector starter for traces, metrics and logs with batteries included.", stack: ["OTel", "Tempo", "Loki", "Mimir"], status: "production", link: "#" },
    { title: "toil-tracker", summary: "Lightweight tracker for engineering toil; Grafana dashboards highlight where automation pays off.", stack: ["Go", "PostgreSQL", "Grafana"], status: "internal", link: "#" },
    { title: "k8s-paved-road", summary: "Helm + Argo CD reference architecture for new services with built-in dashboards and SLOs.", stack: ["Helm", "Argo CD", "Kustomize"], status: "open-source", link: "#" },
];

export const navItems = [
    { id: "about", label: "About", key: "1" },
    { id: "education", label: "Education", key: "2" },
    { id: "experience", label: "Experience", key: "3" },
    { id: "projects", label: "Projects", key: "4" },
    { id: "contact", label: "Contact", key: "5" },
];