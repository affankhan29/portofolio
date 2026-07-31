"use client";

import { useState } from "react";
import { Loader } from "@/components/Loader";
import { ThreeBackground } from "@/components/ThreeBackground";
import LetterGlitch from "@/components/ui/LetterGlitch";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import ScrollVelocity from "@/components/ui/ScrollVelocity";
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
      <CustomCursor />
      <Navbar />

      {/* TOP HALF: Floating WebGL Particles Background */}
      <div className="relative z-10">
        <ThreeBackground />
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <About />
        <Experience />
        <Projects />
      </div>

      {/* MIDDLE TRANSITION: ScrollVelocity Marquee Banner */}
      <section className="relative z-20 my-12 overflow-hidden border-y border-[#222220]/15 bg-[#FAF8F3]/90 backdrop-blur-md py-4">
        <ScrollVelocity
          texts={[
            <span key="1" className="custom-scroll-text">
              Software Engineer <span className="custom-scroll-text-highlight">Informix DB Architect</span> Systems Developer
            </span>,
            <span key="2" className="custom-scroll-text">
              C++ SFML Engine <span className="custom-scroll-text-highlight">Next.js &amp; React</span> Axional Studio XDBL
            </span>,
          ]}
          velocity={80}
          numCopies={5}
        />
      </section>

      {/* BOTTOM HALF: Editorial ASCII LetterGlitch Canvas Background */}
      <div className="relative z-10">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
          <LetterGlitch
            glitchColors={["#C79A3C", "#8C3B2E", "#222220", "#A89F8D"]}
            glitchSpeed={60}
            centerVignette={false}
            outerVignette={true}
            smooth={true}
            backgroundColor="transparent"
          />
        </div>

        <div className="relative z-10">
          <Skills />
          <Profiles />
          <InteractivePlayground />
          <Contact />
        </div>
      </div>

      <Footer />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
