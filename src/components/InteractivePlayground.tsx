"use client";

import { motion } from "framer-motion";
import FallingText from "@/components/ui/FallingText";

export function InteractivePlayground() {
  return (
    <section className="editorial-section" id="interactive-playground">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="editorial-eyebrow">06 — Physics Playground</span>
            <h2 className="section-title">
              Interactive <span className="font-serif italic font-normal text-[#C79A3C]">Engineering Canvas</span>
            </h2>
          </div>
          <span className="hidden md:inline-block font-mono text-xs text-[#222220]/60 uppercase tracking-widest bg-[#222220]/5 px-3 py-1.5 rounded-full border border-[#222220]/10">
            Hover or Drag to Trigger Physics
          </span>
        </div>

        <p className="editorial-description mb-6 text-sm">
          Hover over or drag any word below to activate the Matter.js 2D rigid-body physics engine. Every word becomes an interactive physical object bound by gravity, collisions, and drag constraints.
        </p>

        <FallingText
          text="Software Engineer crafting interactive web applications, high performance engines, &amp; scalable software systems."
          highlightWords={["Software", "Engineer", "interactive", "performance", "scalable", "systems"]}
          highlightClass="highlighted"
          trigger="hover"
          backgroundColor="transparent"
          wireframes={false}
          gravity={0.56}
          fontSize="1.75rem"
          mouseConstraintStiffness={0.9}
        />
      </motion.div>
    </section>
  );
}
