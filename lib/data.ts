export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  bullets: string[];
  current?: boolean;
}

export const experience: Experience[] = [
   {
    company: "University of Maryland",
    role: "Impact Consulting Fellow — Center for Social Value Creation",
    period: "Mar 2026 – Present",
    location: "Maryland, US",
    type: "Part-time",
    bullets: [
      "Leading the strategy and market analytics workstream for AgriTrails, a nonprofit agritourism client, designing a hybrid revenue measurement framework when direct sales data is unavailable.",
      "Developed proxy-based KPI models using digital pass analytics (sign-ups, check-ins, trail completions, repeat visit rates) and visitor spending surveys to estimate economic impact without perfect transaction data.",
      "Authoring the final strategic recommendation covering practical metric selection, indirect revenue tracking methods, and a scalable measurement system tailored to resource-constrained nonprofit operations.",
    ],
    current: true,
  },
 {
    company: "University of Maryland",
    role: "VP Events & Operations, SMISA",
    period: "Nov 2025 – Present",
    location: "On-site",
    type: "Full-time",
    bullets: [
      "Own end-to-end planning, logistics, and communications for a 60+ member graduate association - managing venue sourcing and stakeholder outreach across all SMISA events.",
      "Successfully organized social mixers, professional networking sessions, and technical workshops, driving consistent attendance growth through targeted email campaigns and data-informed scheduling.",
      "Streamlined event operations by building repeatable planning templates and communication workflows, reducing planning lead time and improving cross-committee coordination.",
    ],
    current: true,
  },
   {
    company: "University of Maryland",
    role: "Global Consulting Associate — Center for Global Business",
    period: "Oct – Dec 2025",
    location: "Remote",
    type: "Contract",
    bullets: [
      "Led market research and competitive analysis for a 5-week consulting engagement, mapping Ireland's workforce development landscape across 50+ training providers.",
      "Synthesized qualitative interview data and secondary research into a go-to-market strategy deck, identifying 3 high-potential market entry segments for the client.",
      "Delivered final recommendations to faculty advisors and client stakeholders, earning recognition for analytical rigor and clarity of insights.",
    ],
  },
  {
    company: "Deloitte India",
    role: "Analyst → Consultant",
    period: "Nov 2021 – Jun 2025",
    location: "Gurugram, India",
    type: "3 yrs 8 mos",
    bullets: [
      "Engineered automated KPI-tracking pipelines in Azure Data Factory and Power BI, cutting reporting turnaround by 2 days and reducing errors by 25%.",
      "Optimized billing-exception analysis for telecom using PySpark on Databricks, improving efficiency by 15%.",
      "Automated ML data labeling for 2,000+ datasets using AWS SageMaker RLHF, boosting quality from 71% → 98% for CodeWhisperer.",
      "Led healthcare process mining with Power BI + UiPath RPA, improving efficiency by 27%.",
      "Produced 21 IT and cybersecurity policies aligned with NIST CSF for a conglomerate.",
    ],
  },
   {
    company: "Hanu Software",
    role: "IAAS Azure Trainee",
    period: "Jan – Jun 2021",
    location: "Remote",
    type: "6 mos",
    bullets: [
      "Monitored and optimized cloud infrastructure across 10+ client environments on Microsoft Azure, reducing resource waste by identifying underutilized VMs and rightsizing compute allocations.",
      "Created weekly performance and cost-analysis reports for account managers, translating Azure Monitor metrics into business-friendly dashboards that informed client renewal decisions.",
      "Documented SOPs for incident escalation and backup recovery, reducing mean resolution time and improving SLA compliance across managed accounts.",
    ],
  },
    {
    company: "BSNL — Advanced Level Telecom Training Centre (ALTTC)",
    role: "Network & Cybersecurity Intern",
    period: "Jun – Jul 2020",
    location: "Ghaziabad, India",
    type: "2 mos",
    bullets: [
      "Designed and simulated enterprise network topologies using Cisco Packet Tracer, configuring routing protocols (OSPF, RIP) and VLANs across a 50+ node environment.",
      "Conducted a vulnerability assessment of simulated network infrastructure, documenting findings and remediation steps in a technical report presented to training supervisors.",
    ],
  },
];

export interface Certification {
  name: string;
  code: string;
  issuer: string;
  color: "azure" | "aws" | "gcp" | "ibm" | "google";
}

export const certifications: Certification[] = [
  { name: "Azure Data Engineer Associate", code: "DP-203", issuer: "Microsoft", color: "azure" },
  { name: "Power BI Data Analyst", code: "PL-300", issuer: "Microsoft", color: "azure" },
  { name: "Azure Data Fundamentals", code: "DP-900", issuer: "Microsoft", color: "azure" },
  { name: "Azure Fundamentals", code: "AZ-900", issuer: "Microsoft", color: "azure" },
  { name: "Cloud Practitioner", code: "CLF-C02", issuer: "Amazon Web Services", color: "aws" },
  { name: "Cloud Digital Leader", code: "CDL", issuer: "Google Cloud", color: "gcp" },
  { name: "watsonx.data Technical Sales", code: "", issuer: "IBM", color: "ibm" },
  { name: "Advanced Google Analytics", code: "", issuer: "Google", color: "google" },
];

export const certColors: Record<Certification["color"], string> = {
  azure: "from-blue-500 to-cyan-400",
  aws: "from-amber-500 to-orange-400",
  gcp: "from-blue-500 to-green-400",
  ibm: "from-blue-600 to-indigo-400",
  google: "from-red-500 to-yellow-400",
};

export interface SkillGroup {
  label: string;
  skills: string[];
  iconKey: string;
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    iconKey: "code",
    skills: ["Python", "SQL", "JavaScript", "R", "DAX", "PySpark", "Node.js"],
  },
  {
    label: "Data & Cloud",
    iconKey: "cloud",
    skills: ["Azure Data Factory", "Databricks", "Azure Synapse", "AWS SageMaker", "BigQuery", "PostgreSQL", "SQL Server"],
  },
  {
    label: "BI & Visualization",
    iconKey: "bar-chart",
    skills: ["Power BI", "Tableau", "Plotly", "Excel", "IBM Watsonx"],
  },
  {
    label: "AI & Automation",
    iconKey: "brain",
    skills: ["LangChain", "LangGraph", "n8n", "Pinecone", "Azure OpenAI", "UiPath", "GPT-4"],
  },
  {
    label: "Dev & DevOps",
    iconKey: "terminal",
    skills: ["Docker", "Git", "Streamlit", "Jupyter", "VS Code", "Google Colab"],
  },
  {
    label: "Domain",
    iconKey: "briefcase",
    skills: ["ETL", "Data Warehousing", "NIST CSF", "Process Mining", "Stakeholder Management"],
  },
];
