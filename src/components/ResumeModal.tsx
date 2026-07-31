"use client";

import { motion, AnimatePresence } from "framer-motion";

export function ResumeModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="resume-modal"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="resume-modal-content"
          >
            <span
              className="close-modal"
              onClick={onClose}
              role="button"
              tabIndex={0}
            >
              &times;
            </span>
            <h2 className="text-xl font-serif font-bold mb-4 text-[#2B2B28]">
              Curriculum Vitae — <span className="font-serif italic font-normal text-[#C79A3C]">Affan Khan</span>
            </h2>
            <div className="w-full flex-1 border border-[#E4DAC4] bg-[#FAF7F0]">
              <iframe
                src="/Affan_Khan_CV.pdf"
                className="w-full h-full border-none"
                title="Affan Khan Resume"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
