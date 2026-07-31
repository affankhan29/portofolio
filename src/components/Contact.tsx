"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "d97d831b-cfd8-4843-8f51-a5ed157a2e7c",
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio Inquiry from ${form.name}`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus("idle"), 6000);
    }
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
        <p className="font-serif italic text-[#6B6559] text-lg mb-10 max-w-xl">
          Interested in technical collaboration, low-level programming inquiries, or software engineering roles? Send a message below or reach out directly.
        </p>

        {/* Direct Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 max-w-2xl">
          <a
            href="mailto:i250851@isb.nu.edu.pk"
            className="flex items-center gap-4 p-4 bg-[#FAF7F0]/90 backdrop-blur-md border border-[#E4DAC4] rounded-sm hover:border-[#C79A3C] transition-colors"
          >
            <div className="w-10 h-10 rounded-sm bg-[#C79A3C]/15 border border-[#C79A3C]/30 flex items-center justify-center text-[#2B2B28] font-mono text-sm">
              ✉
            </div>
            <div>
              <p className="font-mono text-xs text-[#6B6559] uppercase tracking-wider">Direct Email</p>
              <p className="font-mono text-sm font-semibold text-[#2B2B28] hover:text-[#C79A3C] transition-colors">
                i250851@isb.nu.edu.pk
              </p>
            </div>
          </a>

          <a
            href="tel:+923462648056"
            className="flex items-center gap-4 p-4 bg-[#FAF7F0]/90 backdrop-blur-md border border-[#E4DAC4] rounded-sm hover:border-[#C79A3C] transition-colors"
          >
            <div className="w-10 h-10 rounded-sm bg-[#C79A3C]/15 border border-[#C79A3C]/30 flex items-center justify-center text-[#2B2B28] font-mono text-sm">
              ☎
            </div>
            <div>
              <p className="font-mono text-xs text-[#6B6559] uppercase tracking-wider">Phone / WhatsApp</p>
              <p className="font-mono text-sm font-semibold text-[#2B2B28] hover:text-[#C79A3C] transition-colors">
                +92 346 2648056
              </p>
            </div>
          </a>
        </div>

        {/* Form Container */}
        <div className="contact-container max-w-2xl">
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

            <div className="mt-4 flex items-center gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-resume disabled:opacity-50"
              >
                {isSubmitting ? "Dispatching..." : "Send Correspondence ↗"}
              </button>
            </div>

            {status === "success" && (
              <p className="font-mono text-sm font-semibold text-[#8C3B2E] mt-2">
                [ Message dispatched successfully to i250851@isb.nu.edu.pk. Thank you for getting in touch. ]
              </p>
            )}

            {status === "error" && (
              <p className="font-mono text-sm font-semibold text-red-600 mt-2">
                [ Error dispatching message. Please check connection and try again. ]
              </p>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  );
}
