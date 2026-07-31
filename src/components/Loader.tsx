"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Loader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 12) + 8;
        return Math.min(100, next);
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-[#FAF7F0] text-[#2B2B28] p-6 font-sans select-none"
        >
          <div className="w-full max-w-sm p-8 bg-[#FAF7F0] border border-[#E4DAC4] rounded-sm text-center relative">
            <div className="text-xl font-bold font-serif tracking-tight text-[#2B2B28] mb-4">
              Affan Khan <span className="font-serif italic font-normal text-[#C79A3C]">folio</span>
            </div>

            <div className="text-3xl font-mono font-semibold text-[#2B2B28] mb-4">
              {progress}%
            </div>

            <div className="w-full h-1 bg-[#E4DAC4] rounded-none mb-3 overflow-hidden">
              <div
                className="h-full bg-[#C79A3C] transition-all duration-150 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="text-xs font-mono text-[#6B6559] uppercase tracking-wider">
              {progress < 100 ? "Loading Editorial Spread..." : "Ready"}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
