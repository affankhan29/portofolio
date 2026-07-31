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
          Industry &amp; <span className="font-serif italic font-normal text-[#C79A3C]">Community Work</span>
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
              <h3 className="editorial-heading">Deister Software Pakistan</h3>
              <p className="editorial-subtitle">Software Development Engineer Intern</p>
              
              <p className="editorial-description">
                Designed and developed comprehensive HR database schemas in Informix using Axional/Deister Studio covering departments, employees, payroll, job postings, and applicants. Engineered schema definitions using the proprietary XDBL XML-based format, establishing relational integrity, foreign keys, and CLOB/BLOB handling.
              </p>

              <div className="editorial-tech-stack">
                <span className="editorial-tech-tag"># Informix DB</span>
                <span className="editorial-tech-tag"># XDBL XML Format</span>
                <span className="editorial-tech-tag"># Axional Studio</span>
                <span className="editorial-tech-tag"># Relational Architecture</span>
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
              <h3 className="editorial-heading">Pehli Kiran School System</h3>
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
