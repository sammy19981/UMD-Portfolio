export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  category: "ml" | "data-eng" | "bi" | "ai" | "database" | "web" | "cloud";
  tech: string[];
  metrics?: string;
  featured?: boolean;
  link?: string;
  date: string;
}

export const projects: Project[] = [
    {
    title: "SupplyGuard — AI Supplier Risk Tracker",
    description:
      "Full-stack enterprise web app for procurement and compliance teams. Manages 150+ suppliers across 40+ countries with real-time risk scoring, automated compliance document tracking (1,350+ docs), sanctions screening, and AI-generated risk assessments using GPT-4o-mini. Features real-time notifications via Supabase Realtime, Google OAuth, and graceful degradation with demo data fallback.",
    category: "ai",
    tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "OpenAI GPT-4o-mini", "Recharts", "Google OAuth"],
    metrics: "150+ suppliers · 40+ countries · 1,350+ docs tracked",
    date: "Apr 2026",
  },
  {
    title: "NexLearn AI",
    description:
      "Production-ready academic assistant for UMD grad students. Connects to Canvas & Google Calendar with LangChain agents and GPT-4 for personalized study plans, flashcards, smart scheduling, and advisor alerts.",
    category: "ai",
    tech: ["Python", "Streamlit", "LangChain", "GPT-4", "Canvas API", "Google Calendar"],
    metrics: "5–8% modeled retention improvement",
    date: "Oct – Nov 2025",
  },
  {
    title: "Predicting Airbnb Perfect Ratings",
    description:
      "End-to-end ML pipeline with 150+ engineered features from listing data, text, and amenities. Applied TF-IDF with SVD, out-of-fold target encoding, and hyperparameter tuning across XGBoost & LightGBM.",
    category: "ml",
    tech: ["Python", "XGBoost", "LightGBM", "TF-IDF", "scikit-learn"],
    metrics: "78.11% accuracy · 0.8268 AUC",
    date: "Jan – Mar 2026",
  },
  {
    title: "Automated Analytics Dashboard",
    description:
      "ADF/SQL pipelines processing 20K+ daily records with custom DAX measures and drill-through reports. Cut Power BI refresh from 30 min to 5 min for 15+ stakeholders.",
    category: "cloud",
    tech: ["Azure Data Factory", "Power BI", "SQL", "DAX"],
    metrics: "60% fewer ad hoc requests",
    date: "Deloitte",
  },
  {
    title: "Hybrid Cloud Migration",
    description:
      "Migrated 15M+ monthly transactions from on-prem SQL to Azure through ADF ETL pipelines. Authored BRDs and RFPs for hybrid cloud roadmap after vendor evaluation and gap analysis.",
    category: "cloud",
    tech: ["Azure Data Factory", "SQL Server", "ETL", "Cloud Architecture"],
    metrics: "30% latency reduction",
    date: "Deloitte",
  },
  {
    title: "Pop Goes the Nation",
    description:
      "Analyzed whether popular music 'mood' shifts during economic crises. Combined Billboard Hot 100 (1958–2021), US GDP, and Spotify audio features with Random Forest regression.",
    category: "data-eng",
    tech: ["Python", "Random Forest", "Spotify API", "pandas"],
    metrics: "0.93 test accuracy on longevity",
    date: "Oct – Dec 2025",
  },
  {
    title: "CrimeLens Analytics",
    description:
      "End-to-end relational database for UMD Police Department. Modeled ERDs, enforced referential integrity, wrote all DDL/DML, and built business-transaction queries for public safety.",
    category: "database",
    tech: ["SQL Server", "SSMS", "ERD", "Lucidchart"],
    date: "Sep – Oct 2025",
  },
  {
    title: "Health, Wealth & Carbon",
    description:
      "World Bank–style indicator analysis connecting GDP, life expectancy, CO₂, and population. Publication-quality scatter/bubble charts revealed GDP–life expectancy correlation (r ≈ 0.90).",
    category: "bi",
    tech: ["Python", "Plotly", "pandas"],
    metrics: "r ≈ 0.95 CO₂ vs GDP correlation",
    date: "Sep – Oct 2025",
  },
  {
    title: "Formula One Power BI",
    description:
      "Interactive dashboards analyzing 70 years of F1 data (1950–2020). Dynamic visuals for race wins, driver nationalities, and Grand Prix geographic trends.",
    category: "bi",
    tech: ["Power BI", "Data Visualization", "Data Analysis"],
    date: "Sep – Oct 2023",
  },
  {
    title: "Stock Market Portfolio Webapp",
    description:
      "Node.js/Express web app consuming live stock data via API. Real-time portfolio valuations with interactive charts in vanilla JavaScript.",
    category: "web",
    tech: ["Node.js", "Express.js", "JavaScript", "REST API"],
    date: "May 2023",
  },
];

export const categoryLabels: Record<Project["category"], string> = {
  ml: "Machine Learning",
  "data-eng": "Data Engineering",
  bi: "BI & Visualization",
  ai: "AI / GenAI",
  database: "Database Design",
  web: "Web Application",
  cloud: "Cloud / ETL",
};

export const categoryColors: Record<Project["category"], string> = {
  ml: "text-violet-400 bg-violet-400/10 border-violet-400/20",
  "data-eng": "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
  bi: "text-amber-400 bg-amber-400/10 border-amber-400/20",
  ai: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  database: "text-rose-400 bg-rose-400/10 border-rose-400/20",
  web: "text-teal-400 bg-teal-400/10 border-teal-400/20",
  cloud: "text-blue-400 bg-blue-400/10 border-blue-400/20",
};
