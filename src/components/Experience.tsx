"use client";

import { motion } from "framer-motion";

export function Experience() {
  return (
    <section className="editorial-section" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="editorial-eyebrow">02 — Professional Experience</span>
        <h2 className="section-title mb-12">
          Industry &amp; <span className="font-serif italic font-normal text-[var(--color-mustard)]">Community Work</span>
        </h2>

        <div className="editorial-list">
          {/* Entry 01 */}
          <div className="editorial-item">
            <div className="editorial-margin-col">
              <span className="editorial-numeral">01</span>
              <span className="editorial-date">JUN 2026 — JUL 2026</span>
              <span className="editorial-tag-rust">SDE Internship</span>
            </div>

            <div className="editorial-main-col">
              <div className="flex items-center gap-3 mb-1">
                <img
                  src="/img/logo-deister.svg"
                  alt="Deister Software logo"
                  className="h-7 w-auto object-contain grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
                <h3 className="editorial-heading mb-0">Deister Software Pakistan</h3>
              </div>
              <p className="editorial-subtitle">Software Development Engineer Intern</p>
              
              <p className="editorial-description">
                Engineered full-stack enterprise modules within Axional/Deister Studio. Built robust backend business logic, integrated REST API calls, constructed interactive frontend UIs, and designed comprehensive HR relational database schemas in Informix (covering departments, employees, payroll, job postings, and applicants) using proprietary XDBL XML definitions with strict foreign key and CLOB/BLOB handling.
              </p>

              <div className="editorial-tech-stack">
                <span className="editorial-tech-tag"># Full-Stack Engineering</span>
                <span className="editorial-tech-tag"># Backend &amp; APIs</span>
                <span className="editorial-tech-tag"># Frontend UI</span>
                <span className="editorial-tech-tag"># Informix DB</span>
                <span className="editorial-tech-tag"># XDBL XML</span>
                <span className="editorial-tech-tag"># Axional Studio</span>
              </div>
            </div>
          </div>

          {/* Entry 02 */}
          <div className="editorial-item">
            <div className="editorial-margin-col">
              <span className="editorial-numeral">02</span>
              <span className="editorial-date">MAR 2026 — MAY 2026</span>
              <span className="editorial-tag-rust">8 Weeks Outreach</span>
            </div>

            <div className="editorial-main-col">
              <div className="flex items-center gap-3 mb-1">
                <img
                  src="/img/logo-pehlikiran.jpg"
                  alt="Pehli Kiran School System logo"
                  className="h-7 w-auto object-contain grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300 rounded"
                />
                <h3 className="editorial-heading mb-0">Pehli Kiran School System</h3>
              </div>
              <p className="editorial-subtitle">Community Service Volunteer &amp; Tech Instructor</p>

              <p className="editorial-description">
                Conducted hands-on digital literacy and computer technology workshops for underprivileged school children using personal laptops to bridge the technology gap. Educated students in computer fundamentals, typing proficiency, and interactive learning software.
              </p>

              <div className="editorial-tech-stack">
                <span className="editorial-tech-tag"># Digital Literacy</span>
                <span className="editorial-tech-tag"># Youth Mentorship</span>
                <span className="editorial-tech-tag"># Tech Teaching</span>
                <span className="editorial-tech-tag"># Community Service</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
