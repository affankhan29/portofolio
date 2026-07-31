"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Category = "all" | "languages" | "frontend" | "backend" | "databases" | "tools";

type Skill = {
  name: string;
  category: Category;
  icon: string;
};

const SKILLS: Skill[] = [
  { name: "C++", category: "languages", icon: "devicon-cplusplus-plain colored" },
  { name: "Python", category: "languages", icon: "fa-brands fa-python text-[#3776AB]" },
  { name: "C#", category: "languages", icon: "devicon-csharp-plain colored" },
  { name: "SQL", category: "languages", icon: "devicon-azuresqldatabase-plain colored" },
  { name: "JavaScript", category: "languages", icon: "devicon-javascript-plain colored" },
  { name: "HTML5", category: "frontend", icon: "devicon-html5-plain colored" },
  { name: "CSS3", category: "frontend", icon: "devicon-css3-plain colored" },
  { name: "React.js", category: "frontend", icon: "devicon-react-original colored" },
  { name: "SFML Engine", category: "frontend", icon: "fa-solid fa-gamepad text-[#C79A3C]" },
  { name: "Next.js", category: "frontend", icon: "devicon-nextjs-plain text-[#2B2B28]" },
  { name: "Informix DB", category: "databases", icon: "fa-solid fa-database text-[#C79A3C]" },
  { name: "XDBL Schemas", category: "databases", icon: "fa-solid fa-code-branch text-[#8C3B2E]" },
  { name: "Axional Studio", category: "tools", icon: "fa-solid fa-cubes text-[#C79A3C]" },
  { name: "MySQL", category: "databases", icon: "devicon-mysql-plain colored" },
  { name: "PostgreSQL", category: "databases", icon: "devicon-postgresql-plain colored" },
  { name: "Git", category: "tools", icon: "devicon-git-plain colored" },
  { name: "GitHub", category: "tools", icon: "devicon-github-original text-[#2B2B28]" },
  { name: "VS Code", category: "tools", icon: "devicon-vscode-plain colored" },
  { name: "Vercel", category: "tools", icon: "devicon-vercel-original text-[#2B2B28]" },
];

const FILTERS: { label: string; value: Category }[] = [
  { label: "All Skills", value: "all" },
  { label: "Languages", value: "languages" },
  { label: "Frontend & Systems", value: "frontend" },
  { label: "Databases", value: "databases" },
  { label: "Tools & Workflows", value: "tools" },
];

export function Skills() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const filteredSkills =
    activeFilter === "all"
      ? SKILLS
      : SKILLS.filter((s) => s.category === activeFilter);

  return (
    <section className="editorial-section" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="editorial-eyebrow">04 — Competencies</span>
        <h2 className="section-title text-center mb-8">
          Technical <span className="font-serif italic font-normal text-[#C79A3C]">Capabilities &amp; Stack</span>
        </h2>

        {/* Category Filters */}
        <div className="skill-filters" id="skillFilters">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setActiveFilter(f.value)}
              className={`filter-btn ${activeFilter === f.value ? "active" : ""}`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Interactive Skills Grid */}
        <div className="skill-grid" id="skillGrid">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.25 }}
                className="skill-card"
              >
                <i className={skill.icon} />
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
