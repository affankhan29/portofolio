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
      <ThreeBackground />
      <CustomCursor />
      <Navbar />

      <main className="relative z-10">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <About />
        <Experience />
        <Projects />

        {/* ScrollVelocity Marquee Banner */}
        <section className="my-12 overflow-hidden border-y border-[var(--color-hairline)] bg-[var(--color-card-bg)] backdrop-blur-md py-4 transition-colors duration-300">
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
