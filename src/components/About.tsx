"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section className="about-section" id="about">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <span className="editorial-eyebrow">01 — Profile &amp; Philosophy</span>
        <h2 className="section-title mb-12">
          The Artisan Behind <span className="font-serif italic font-normal text-[var(--color-mustard)]">The Code</span>
        </h2>

        <div className="about-grid">
          <div className="pull-quote">
            “True technical mastery combines mathematical rigor with human empathy — building software beneath high-level abstractions that stands the test of time.”
          </div>

          <div className="about-body">
            <p className="mb-6">
              Greetings. I am an aspiring computer scientist and craftsman of code, currently pursuing my degree at{" "}
              <strong className="font-semibold text-[var(--color-ink)]">FAST-NUCES Islamabad</strong> with a cumulative GPA of <strong className="font-semibold text-[var(--color-rust)]">3.51 / 4.0</strong>.
            </p>

            <p className="mb-6">
              My core passion lies beneath high-level frameworks — in the quiet, disciplined realm of{" "}
              <strong className="font-semibold text-[var(--color-ink)]">Low-Level Systems Programming</strong>. I delight in understanding how bytes navigate memory, architecting bare-metal 2D C++ engines with SFML, and managing hardware resources without bloated crutches.
            </p>

            <p className="mb-6">
              Presently, I am deeply engrossed in mastering{" "}
              <strong className="font-semibold text-[var(--color-mustard)]">Data Structures &amp; Algorithms (DSA)</strong> — sharpening my problem-solving tools to forge solutions that are mathematically optimal, memory-efficient, and structurally elegant.
            </p>

            <p>
              In the summer of 2026, I completed a two-month tenure as a{" "}
              <strong className="font-semibold text-[var(--color-ink)]">Software Development Engineer Intern</strong> at{" "}
              <strong className="font-semibold text-[var(--color-ink)]">Deister Software Pakistan</strong>, designing HR relational database schemas and XDBL XML definitions in Informix. Earlier that spring (Mar – May 2026), I spent eight weeks teaching digital literacy to underprivileged children at{" "}
              <strong className="font-semibold text-[var(--color-rust)]">Pehli Kiran School System</strong>.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
