"use client";

import { useState } from "react";
import { Loader } from "@/components/Loader";
import { ThreeBackground } from "@/components/ThreeBackground";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Profiles } from "@/components/Profiles";
import { InteractivePlayground } from "@/components/InteractivePlayground";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ResumeModal } from "@/components/ResumeModal";

export default function Home() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen text-[#2B2B28]">
      <Loader />
      <ThreeBackground />
      <CustomCursor />
      <Navbar />

      <main className="relative z-10">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Profiles />
        <InteractivePlayground />
        <Contact />
      </main>

      <Footer />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
