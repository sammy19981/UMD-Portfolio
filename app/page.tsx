"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  Code2,
  Cloud,
  BarChart3,
  Brain,
  Terminal,
  Briefcase,
  ArrowUpRight,
  Mail,
  Linkedin,
  Phone,
  Download,
  ChevronRight,
  Sparkles,
  MapPin,
  Calendar,
  ExternalLink,
  GraduationCap,
  Award,
  FileText,
  Globe,
} from "lucide-react";
import {
  projects,
  categoryLabels,
  categoryColors,
  type Project,
} from "@/lib/projects";
import {
  experience,
  certifications,
  certColors,
  skillGroups,
} from "@/lib/data";

/* ─── ANIMATION HELPERS ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={stagger}
      className={`relative py-24 md:py-32 ${className}`}
    >
      {children}
    </motion.section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.p
      variants={fadeUp}
      className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-indigo-400 mb-4 flex items-center gap-3"
    >
      <span className="block w-8 h-px bg-indigo-500/50" />
      {children}
    </motion.p>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      variants={fadeUp}
      className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold tracking-tight text-zinc-100 leading-[1.15] mb-3"
    >
      {children}
    </motion.h2>
  );
}

const iconMap: Record<string, React.ReactNode> = {
  code: <Code2 className="w-4 h-4" />,
  cloud: <Cloud className="w-4 h-4" />,
  "bar-chart": <BarChart3 className="w-4 h-4" />,
  brain: <Brain className="w-4 h-4" />,
  terminal: <Terminal className="w-4 h-4" />,
  briefcase: <Briefcase className="w-4 h-4" />,
};

/* ─── NAV ─── */
function Nav() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/[0.04]"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="text-zinc-100 font-semibold text-[15px] tracking-tight hover:text-white transition-colors"
        >
          sameer<span className="text-indigo-400">.</span>saxena
        </a>

        <div className="hidden md:flex items-center gap-8">
          {["about", "experience", "skills", "projects", "contact"].map(
            (s) => (
              <a
                key={s}
                href={`#${s}`}
                className="text-[13px] font-medium text-zinc-500 hover:text-zinc-200 transition-colors tracking-wide"
              >
                {s}
              </a>
            )
          )}
        </div>

        <a
          href="/Resume_SameerSaxena.pdf"
          target="_blank"
          className="flex items-center gap-2 text-[13px] font-semibold text-zinc-300 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] hover:border-white/[0.15] rounded-full px-4 py-2 transition-all"
        >
          <Download className="w-3.5 h-3.5" />
          Resume
        </a>
      </div>
    </motion.nav>
  );
}

/* ─── HERO ─── */
function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 dot-grid opacity-40" />
      <motion.div
        style={{ y }}
        className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full bg-indigo-600/[0.06] blur-[120px]"
      />
      <motion.div
        style={{ y }}
        className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-violet-600/[0.04] blur-[100px]"
      />

      <motion.div style={{ opacity }} className="max-w-6xl mx-auto px-6 w-full relative z-10 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass border border-white/[0.06] mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-[12px] font-medium text-zinc-400 tracking-wide">
            Available for select opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.12] tracking-[-0.035em] max-w-3xl mb-8 mx-auto"
        >
          <span className="text-zinc-100">I turn complexity</span>
          <br />
          <span className="text-gradient-accent">into clarity.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-lg text-zinc-400 max-w-2xl leading-relaxed mb-12 mx-auto"
        >
          Analytics and strategy professional with 3.5+ years at Deloitte. I
          blend data engineering, BI, and consulting to solve business problems
          end-to-end. Currently finishing my MS at UMD.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-wrap gap-4 mb-24 justify-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-[14px] font-semibold transition-all shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 hover:-translate-y-0.5"
          >
            <Mail className="w-4 h-4" />
            Get in touch
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass glass-hover text-zinc-300 text-[14px] font-semibold transition-all"
          >
            Explore work
            <ChevronRight className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/ss19981/"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass glass-hover text-zinc-300 text-[14px] font-semibold transition-all"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </motion.div>

        {/* Metrics strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap gap-x-16 gap-y-8 pt-12 border-t border-white/[0.06] justify-center"
        >
          {[
            { val: "3.5+", label: "Years at Deloitte" },
            { val: "15M+", label: "Records migrated" },
            { val: "6", label: "Cloud certifications" },
            { val: "98%", label: "Data quality achieved" },
          ].map((m) => (
            <div key={m.label}>
              <div className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-100">
                {m.val}
              </div>
              <div className="text-[13px] text-zinc-500 mt-1">{m.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ─── ABOUT ─── */
function About() {
  return (
    <Section id="about" className="bg-surface-1/50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel>About</SectionLabel>
        <SectionTitle>From business question to working solution.</SectionTitle>
        <motion.p variants={fadeUp} className="text-zinc-400 max-w-xl mb-14 leading-relaxed">
          Multi-cloud certified professional who moves cleanly from metric
          definition to pipeline, to validated dashboard.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div variants={fadeUp} className="space-y-5 text-[15px] text-zinc-400 leading-[1.85]">
            <p>
              I&apos;m a data analytics and cloud technology professional with{" "}
              <strong className="text-zinc-200 font-semibold">3+ years</strong>{" "}
              building scalable data solutions on Azure, AWS, and GCP. I hold
              Microsoft&apos;s DP-203 and PL-300 certifications, plus AWS Cloud
              Practitioner and Google Cloud Digital Leader credentials.
            </p>
            <p>
              At{" "}
              <strong className="text-zinc-200 font-semibold">
                Deloitte India
              </strong>
              , I engineered automated KPI pipelines, optimized ML data labeling
              at scale, and led process mining across telecom, healthcare, and
              tech clients.
            </p>
            <p>
              Currently at{" "}
              <strong className="text-zinc-200 font-semibold">
                UMD&apos;s Robert H. Smith School of Business
              </strong>{" "}
              as a Terrapin Scholar, VP of SMISA, Impact Consulting Fellow, and
              Adobe Student Ambassador.
            </p>

            {/* Highlight card */}
            <div className="glass rounded-xl p-5 mt-6 border-l-2 border-l-indigo-500">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <span className="text-[13px] font-semibold text-zinc-200">
                  Impact Consulting Fellow — Spring 2026
                </span>
              </div>
              <p className="text-[13px] text-zinc-500 leading-relaxed">
                Applying analytics consulting skills to real-world community
                impact projects at the University of Maryland.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={stagger}
            className="grid grid-cols-2 gap-3"
          >
            {[
              { icon: <GraduationCap className="w-5 h-5" />, val: "MS", label: "Information Systems, UMD", color: "text-indigo-400" },
              { icon: <Award className="w-5 h-5" />, val: "6", label: "Cloud Certifications", color: "text-amber-400" },
              { icon: <BarChart3 className="w-5 h-5" />, val: "98%", label: "Data Quality Achieved", color: "text-emerald-400" },
              { icon: <FileText className="w-5 h-5" />, val: "1", label: "Published Research Paper", color: "text-rose-400" },
            ].map((c) => (
              <motion.div
                key={c.label}
                variants={fadeUp}
                className="glass rounded-xl p-6 glass-hover transition-all group cursor-default"
              >
                <div className={`${c.color} mb-4 opacity-70 group-hover:opacity-100 transition-opacity`}>
                  {c.icon}
                </div>
                <div className="text-2xl font-semibold text-zinc-100 tracking-tight">
                  {c.val}
                </div>
                <div className="text-[12px] text-zinc-500 mt-1">
                  {c.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

/* ─── EXPERIENCE ─── */
function Experience() {
  return (
    <Section id="experience">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel>Experience</SectionLabel>
        <SectionTitle>Where I&apos;ve shipped impact.</SectionTitle>
        <motion.p variants={fadeUp} className="text-zinc-400 max-w-xl mb-14 leading-relaxed">
          From consulting at Deloitte to fellowships at UMD.
        </motion.p>

        <div className="relative pl-8 border-l border-white/[0.06]">
          {experience.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              variants={fadeUp}
              custom={i}
              className="relative pb-12 last:pb-0 group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[calc(2rem+5px)] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-zinc-700 bg-surface-0 group-hover:border-indigo-500 group-hover:bg-indigo-500 transition-all duration-300" />

              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
                <h3 className="text-[17px] font-semibold text-zinc-100">
                  {exp.company}
                </h3>
                <span className="text-[14px] font-medium text-indigo-400">
                  {exp.role}
                </span>
                {exp.current && (
                  <span className="text-[10px] font-semibold uppercase tracking-wider bg-emerald-400/10 text-emerald-400 px-2 py-0.5 rounded-full">
                    Current
                  </span>
                )}
              </div>

              <div className="flex flex-wrap gap-4 text-[12px] font-mono text-zinc-600 mb-4">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3 h-3" />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3" />
                  {exp.location}
                </span>
                <span>{exp.type}</span>
              </div>

              <ul className="space-y-2.5">
                {exp.bullets.map((b, bi) => (
                  <li
                    key={bi}
                    className="text-[14px] text-zinc-400 leading-[1.75] pl-5 relative before:content-['→'] before:absolute before:left-0 before:text-indigo-500/60 before:font-medium"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ─── SKILLS ─── */
function Skills() {
  return (
    <Section id="skills" className="bg-surface-1/50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel>Skills</SectionLabel>
        <SectionTitle>Tools of the trade.</SectionTitle>
        <motion.p variants={fadeUp} className="text-zinc-400 max-w-xl mb-14 leading-relaxed">
          Hands-on across the full data stack — from Python scripts to
          cloud-scale ETL.
        </motion.p>

        <motion.div
          variants={stagger}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {skillGroups.map((g) => (
            <motion.div
              key={g.label}
              variants={fadeUp}
              className="glass rounded-xl p-6 glass-hover transition-all"
            >
              <div className="flex items-center gap-2.5 mb-5">
                <span className="text-zinc-500">
                  {iconMap[g.iconKey]}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-500">
                  {g.label}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[12px] text-zinc-400 bg-white/[0.04] hover:bg-indigo-500/10 hover:text-indigo-300 border border-white/[0.04] hover:border-indigo-500/20 px-3 py-1.5 rounded-md transition-all cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

/* ─── PROJECTS ─── */
function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      variants={fadeUp}
      className={`glass rounded-2xl overflow-hidden glass-hover transition-all group ${
        project.featured ? "md:col-span-2" : ""
      }`}
    >
      <div className="p-7">
        <div className="flex items-start justify-between mb-4">
          <span
            className={`text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md border ${
              categoryColors[project.category]
            }`}
          >
            {categoryLabels[project.category]}
          </span>
          <span className="text-[11px] font-mono text-zinc-600">
            {project.date}
          </span>
        </div>

        <h3 className="text-[18px] font-semibold text-zinc-100 mb-3 group-hover:text-indigo-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-[14px] text-zinc-400 leading-[1.8] mb-5">
          {project.description}
        </p>

        {project.metrics && (
          <div className="inline-flex items-center gap-2 bg-emerald-400/[0.08] border border-emerald-400/[0.15] rounded-full px-3 py-1 mb-5">
            <Sparkles className="w-3 h-3 text-emerald-400" />
            <span className="text-[12px] font-medium text-emerald-300">
              {project.metrics}
            </span>
          </div>
        )}
      </div>

      <div className="px-7 py-4 border-t border-white/[0.04] flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="font-mono text-[11px] text-zinc-500 bg-white/[0.03] px-2.5 py-1 rounded"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function Projects() {
  return (
    <Section id="projects">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel>Projects</SectionLabel>
        <SectionTitle>Things I&apos;ve built.</SectionTitle>
        <motion.p variants={fadeUp} className="text-zinc-400 max-w-xl mb-14 leading-relaxed">
          End-to-end from pipeline to dashboard — academic research, ML models,
          and production tools.
        </motion.p>

        <motion.div
          variants={stagger}
          className="grid md:grid-cols-2 gap-4"
        >
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

/* ─── CERTIFICATIONS ─── */
function Certifications() {
  return (
    <Section id="certifications" className="bg-surface-1/50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel>Certifications</SectionLabel>
        <SectionTitle>Multi-cloud credentialed.</SectionTitle>
        <motion.p variants={fadeUp} className="text-zinc-400 max-w-xl mb-14 leading-relaxed">
          Certified across Microsoft Azure, AWS, Google Cloud, and IBM.
        </motion.p>

        <motion.div
          variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3"
        >
          {certifications.map((c) => (
            <motion.div
              key={c.name}
              variants={fadeUp}
              className="glass rounded-xl p-5 glass-hover transition-all group cursor-default"
            >
              <div
                className={`w-9 h-9 rounded-lg bg-gradient-to-br ${
                  certColors[c.color]
                } flex items-center justify-content-center mb-4 opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center`}
              >
                <span className="text-[10px] font-bold text-white">
                  {c.color === "azure"
                    ? "AZ"
                    : c.color === "aws"
                    ? "AWS"
                    : c.color === "gcp"
                    ? "GC"
                    : c.color === "ibm"
                    ? "IBM"
                    : "G"}
                </span>
              </div>
              <div className="text-[14px] font-semibold text-zinc-200 mb-1">
                {c.name}
              </div>
              <div className="text-[12px] text-zinc-500 font-mono">
                {c.issuer}
                {c.code && ` · ${c.code}`}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

/* ─── EDUCATION ─── */
function Education() {
  return (
    <Section id="education">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel>Education</SectionLabel>
        <SectionTitle>Academic foundation.</SectionTitle>

        <motion.div variants={stagger} className="grid md:grid-cols-2 gap-4 mt-14">
          {[
            {
              school: "University of Maryland",
              degree: "M.S. Information Systems",
              period: "Aug 2025 – Dec 2026",
              detail:
                "Robert H. Smith School of Business. AI Augmented DBMS, Data Processing in Python, Data Models in R, Digital Business Markets.",
              tag: "Terrapin Scholar",
              accent: "border-b-red-500",
            },
            {
              school: "Amity University",
              degree: "B.Tech, Computer Science",
              period: "Aug 2017 – Jun 2021",
              detail:
                "Noida, India. Data Structures, OOP, Operating Systems, Probability & Statistics, Software Engineering.",
              tag: "Co-President, Data Science Club",
              accent: "border-b-amber-500",
            },
          ].map((e) => (
            <motion.div
              key={e.school}
              variants={fadeUp}
              className={`glass rounded-2xl p-7 glass-hover transition-all border-b-2 ${e.accent}`}
            >
              <div className="flex items-center gap-2 mb-1">
                <GraduationCap className="w-4 h-4 text-zinc-500" />
                <span className="text-[17px] font-semibold text-zinc-100">
                  {e.school}
                </span>
              </div>
              <div className="text-[14px] font-medium text-indigo-400 mb-1">
                {e.degree}
              </div>
              <div className="text-[12px] font-mono text-zinc-600 mb-4">
                {e.period}
              </div>
              <p className="text-[14px] text-zinc-400 leading-[1.75] mb-4">
                {e.detail}
              </p>
              <span className="inline-block text-[11px] font-semibold text-amber-300 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
                {e.tag}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

/* ─── CONTACT ─── */
function Contact() {
  return (
    <Section id="contact" className="pb-12">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-surface-3 to-surface-0 border border-white/[0.06] p-12 md:p-16 text-center"
        >
          {/* Glow effects */}
          <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-indigo-600/[0.08] blur-[120px]" />
          <div className="absolute bottom-[-80px] left-[-80px] w-[300px] h-[300px] rounded-full bg-violet-600/[0.06] blur-[100px]" />

          <div className="relative z-10">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-indigo-400 mb-5">
              Contact
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100 mb-4">
              Let&apos;s build something great.
            </h2>
            <p className="text-[16px] text-zinc-500 max-w-md mx-auto mb-10 leading-relaxed">
              Looking for roles in business analytics, data analytics, product
              analytics, and consulting. Happy to walk through a case study or
              dashboard example.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="mailto:ssaxena6@umd.edu"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-[14px] font-semibold transition-all shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                ssaxena6@umd.edu
              </a>
              <a
                href="https://www.linkedin.com/in/ss19981/"
                target="_blank"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full glass glass-hover text-zinc-300 text-[14px] font-semibold transition-all"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="mailto:saxenasameer98@gmail.com"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full glass glass-hover text-zinc-300 text-[14px] font-semibold transition-all"
              >
                <Globe className="w-4 h-4" />
                Personal Email
              </a>
              <a
                href="tel:+18352368945"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full glass glass-hover text-zinc-300 text-[14px] font-semibold transition-all"
              >
                <Phone className="w-4 h-4" />
                Call
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[13px] text-zinc-600">
        <span>© 2026 Sameer Saxena</span>
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/ss19981/"
            target="_blank"
            className="hover:text-zinc-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:ssaxena6@umd.edu"
            className="hover:text-zinc-400 transition-colors"
          >
            Email
          </a>
          <a
            href="/Resume_SameerSaxena.pdf"
            target="_blank"
            className="hover:text-zinc-400 transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ─── PAGE ─── */
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className="glow-line" />
        <About />
        <div className="glow-line" />
        <Experience />
        <div className="glow-line" />
        <Skills />
        <div className="glow-line" />
        <Projects />
        <div className="glow-line" />
        <Certifications />
        <div className="glow-line" />
        <Education />
        <div className="glow-line" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}