"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="editorial-section" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="editorial-eyebrow">06 — Inquiry</span>
        <h2 className="section-title mb-4">
          Get In Touch &amp; <span className="font-serif italic font-normal text-[#C79A3C]">Correspondence</span>
        </h2>
        <p className="font-serif italic text-[#6B6559] text-lg mb-12 max-w-xl">
          Interested in technical collaboration, low-level programming inquiries, or software engineering roles? Send a message below.
        </p>

        <div className="contact-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">01 // Your Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Jane Doe"
                className="form-input"
                autoComplete="off"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">02 // Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="jane@example.com"
                className="form-input"
                autoComplete="off"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">03 // Message / Inquiry</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Write your note here..."
                className="form-textarea"
              />
            </div>

            <div className="mt-4">
              <button type="submit" className="btn-resume">
                Send Correspondence ↗
              </button>
            </div>

            {submitted && (
              <p className="font-mono text-sm font-semibold text-[#8C3B2E] mt-2">
                [ Message received. Thank you for getting in touch. ]
              </p>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  );
}
