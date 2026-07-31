"use client";

import { useEffect, useState, useRef } from "react";
import { ResumeModal } from "./ResumeModal";
import VariableProximity from "@/components/ui/VariableProximity";

const ROLES = [
  "AFFAN KHAN",
  "DEVELOPER",
  "AFFAN KHAN",
  "DESIGNER",
  "AFFAN KHAN",
  "PROGRAMMER",
  "AFFAN KHAN",
  "CODER",
  "AFFAN KHAN",
  "PROBLEM SOLVER",
];

interface HeroProps {
  onOpenResume?: () => void;
}

export function Hero({ onOpenResume }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("AFFAN KHAN");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isInitialPause, setIsInitialPause] = useState(true);
  const [internalModalOpen, setInternalModalOpen] = useState(false);

  useEffect(() => {
    if (isInitialPause) {
      const initialTimer = setTimeout(() => {
        setIsInitialPause(false);
        setIsDeleting(true);
      }, 3500);
      return () => clearTimeout(initialTimer);
    }

    const fullText = ROLES[roleIndex];
    const typingSpeed = isDeleting ? 45 : 90;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const nextChar = fullText.slice(0, currentText.length + 1);
        setCurrentText(nextChar);

        if (nextChar === fullText) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        const prevChar = fullText.slice(0, currentText.length - 1);
        setCurrentText(prevChar);

        if (prevChar === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isInitialPause, roleIndex]);

  const handleResumeClick = () => {
    if (onOpenResume) {
      onOpenResume();
    } else {
      setInternalModalOpen(true);
    }
  };

  return (
    <>
      <section className="hero relative" id="home" ref={heroRef}>
        <p className="sub-title">Computer Science Undergraduate &amp; Systems Developer</p>

        <h1 className="main-title font-serif flex items-center flex-wrap">
          <VariableProximity
            label={currentText}
            fromFontVariationSettings="'wght' 400, 'opsz' 14"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={heroRef}
            radius={160}
            falloff="linear"
          />
          <span className="animate-pulse text-[#C79A3C] font-mono ml-1">_</span>
        </h1>

        <p className="year font-serif italic">
          Crafting bare-metal C++ engines, relational Informix database architecture, and mathematical algorithms at FAST-NUCES Islamabad.
        </p>

        <div className="hero-buttons">
          <button
            type="button"
            className="btn-resume"
            onClick={handleResumeClick}
          >
            <i className="fa-solid fa-file-arrow-down" /> View Resume [PDF]
          </button>
          <a href="#about" className="btn-secondary">
            Read Profile ↘
          </a>
        </div>
      </section>

      <ResumeModal
        isOpen={internalModalOpen}
        onClose={() => setInternalModalOpen(false)}
      />
    </>
  );
}
