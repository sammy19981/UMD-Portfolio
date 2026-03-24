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
    role: "Impact Consulting Fellow",
    period: "Mar 2026 – Present",
    location: "Maryland, US",
    type: "Part-time",
    bullets: [
      "Selected for Spring 2026 Impact Consulting Fellowship, applying analytics consulting to community-focused projects.",
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
      "Leading event strategy and operations for the Smith Masters Information Systems Association.",
    ],
    current: true,
  },
  {
    company: "Center for GWorked",
    role: "Global Consulting Associate",
    period: "Oct – Dec 2025",
    location: "Remote",
    type: "Contract",
    bullets: [
      "Mapped Ireland's training and workforce landscape in a 4-person team to inform potential market entry strategy.",
    ],
  },
  {
    company: "Deloitte India",
    role: "Consultant → Analyst",
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
      "Administered MSP and CSP client environments within Azure for optimal performance, security, and cost-effectiveness.",
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
