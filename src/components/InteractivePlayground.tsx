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
