"use client";

import { motion } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

export function Projects() {
  return (
    <section className="editorial-section" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="editorial-eyebrow">03 — Selected Works</span>
        <h2 className="section-title mb-12">
          Featured <span className="font-serif italic font-normal text-[#C79A3C]">Engineering Projects</span>
        </h2>

        <div className="editorial-list space-y-16">
          {/* Project 01: Dhoom Dhaam */}
          <div className="editorial-item flex flex-col md:flex-row gap-6">
            <div className="editorial-margin-col shrink-0">
              <span className="editorial-numeral">01</span>
              <span className="editorial-date">REACT / NEXT.JS</span>
              <span className="editorial-tag-rust">E-Commerce &amp; Web</span>
            </div>

            <div className="editorial-main-col w-full">
              {/* Aceternity 3D Card Effect Container */}
              <CardContainer className="w-full">
                <CardBody className="w-full group overflow-hidden rounded-xl border border-[#222220]/15 bg-[#F9F7F1]/80 shadow-md hover:border-[#C79A3C]/40 hover:shadow-2xl transition-all duration-300 mb-5">
                  <CardItem translateZ="60" className="w-full overflow-hidden bg-[#F5F2EB] max-h-[360px] md:max-h-[420px] flex items-start justify-center">
                    <img
                      src="/img/project-dhoomdhaam.jpg"
                      alt="Dhoom Dhaam E-Commerce Website poster showcasing store layout, feature highlights, and tech stack"
                      className="w-full h-auto object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </CardItem>
                  <CardItem translateZ="40" className="w-full px-4 py-2 bg-[#FAF8F3] border-t border-[#222220]/10 flex items-center justify-between text-[11px] font-mono text-[#222220]/70">
                    <span>FIG. 01 — FULL-STACK STOREFRONT &amp; WHATSAPP API PIPELINE</span>
                    <span className="hidden sm:inline-block tracking-wider uppercase">Catalog &amp; Cart State</span>
                  </CardItem>
                </CardBody>
              </CardContainer>

              <h3 className="editorial-heading">
                Dhoom Dhaam — E-Commerce Website for a Birthday Party Supplies Store
              </h3>

              <p className="editorial-description">
                Designed and built a fast, single-page storefront for a small Pakistani birthday party accessories business, replacing a traditional checkout flow with a zero-backend WhatsApp ordering system tailored to how small local retailers operate. Built a fully componentized product catalog and shopping cart using React state, compiling orders via WhatsApp&apos;s Click-to-Chat API into a formatted message pipeline.
              </p>

              <div className="editorial-tech-stack">
                <span className="editorial-tech-tag"># React</span>
                <span className="editorial-tech-tag"># Next.js</span>
                <span className="editorial-tech-tag"># Tailwind CSS</span>
                <span className="editorial-tech-tag"># WhatsApp Business API</span>
              </div>

              <div className="mt-4 flex items-center gap-4">
                <a
                  href="https://affankhan29.github.io/dhoom-dhaam-party-co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link"
                >
                  View live website ↗
                </a>
                <a
                  href="https://github.com/affankhan29/dhoom-dhaam-party-co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link text-xs text-[#222220]/60 hover:text-[#C79A3C]"
                >
                  GitHub repo ↗
                </a>
              </div>
            </div>
          </div>

          {/* Project 02: Affinity — AI Chat Clone */}
          <div className="editorial-item flex flex-col md:flex-row gap-6">
            <div className="editorial-margin-col shrink-0">
              <span className="editorial-numeral">02</span>
              <span className="editorial-date">JS / LLM API</span>
              <span className="editorial-tag-rust">AI Application</span>
            </div>

            <div className="editorial-main-col w-full">
              {/* Aceternity 3D Card Effect with Browser Window Chrome */}
              <CardContainer className="w-full">
                <CardBody className="w-full group overflow-hidden rounded-xl border border-[#222220]/20 bg-[#121316] shadow-lg hover:border-[#C79A3C]/50 transition-all duration-300 mb-5">
                  {/* Window Chrome Header */}
                  <CardItem translateZ="30" className="w-full px-4 py-2.5 bg-[#1C1D22] border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block"></span>
                      <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block"></span>
                      <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block"></span>
                    </div>
                    <span className="text-[11px] font-mono text-white/50 tracking-wide">
                      https://affinity-ai.local/chat
                    </span>
                    <span className="text-[10px] font-mono text-[#C79A3C] uppercase px-1.5 py-0.5 rounded bg-[#C79A3C]/10 border border-[#C79A3C]/20">
                      Live UI
                    </span>
                  </CardItem>
                  {/* Screenshot with 3D Depth */}
                  <CardItem translateZ="60" className="w-full overflow-hidden bg-[#0A0B0E] max-h-[360px] md:max-h-[440px] flex items-start justify-center">
                    <img
                      src="/img/project-affinity.jpg"
                      alt="Affinity AI Chat Clone Interface showing conversational prompt cards and prompt bar"
                      className="w-full h-auto object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </CardItem>
                  {/* Caption Bar */}
                  <CardItem translateZ="40" className="w-full px-4 py-2 bg-[#17181D] border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/70">
                    <span>FIG. 02 — REAL-TIME CONVERSATIONAL LLM CHAT INTERFACE</span>
                    <span className="hidden sm:inline-block text-[#C79A3C]">Async Request Handling</span>
                  </CardItem>
                </CardBody>
              </CardContainer>

              <h3 className="editorial-heading">
                Affinity — AI Chat Clone
              </h3>

              <ul className="editorial-description list-disc pl-5 space-y-1.5 text-sm">
                <li>
                  Built a web-based AI chat application integrating a large language model (LLM) API for real-time conversational responses.
                </li>
                <li>
                  Developed a dark-mode front-end interface using HTML5, CSS3, and JavaScript focusing on clean prompt handling and responsive state updates.
                </li>
                <li>
                  Engineered asynchronous API request pipelines and dynamic response rendering to simulate fluid AI dialogue.
                </li>
              </ul>

              <div className="editorial-tech-stack">
                <span className="editorial-tech-tag"># HTML5 / CSS3</span>
                <span className="editorial-tech-tag"># JavaScript</span>
                <span className="editorial-tech-tag"># LLM API Integration</span>
                <span className="editorial-tech-tag"># Async Request Handling</span>
              </div>

              <div className="mt-4">
                <a
                  href="https://github.com/affankhan29"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link"
                >
                  View GitHub repository ↗
                </a>
              </div>
            </div>
          </div>

          {/* Project 03: Metal Slug */}
          <div className="editorial-item flex flex-col md:flex-row gap-6">
            <div className="editorial-margin-col shrink-0">
              <span className="editorial-numeral">03</span>
              <span className="editorial-date">C++ / SFML</span>
              <span className="editorial-tag-rust">Action Game</span>
            </div>

            <div className="editorial-main-col w-full">
              {/* Aceternity 3D Card Effect Poster Frame */}
              <CardContainer className="w-full">
                <CardBody className="w-full group overflow-hidden rounded-xl border border-[#222220]/20 bg-[#1D1B17] shadow-md hover:border-[#C79A3C]/50 transition-all duration-300 mb-5">
                  <CardItem translateZ="60" className="w-full overflow-hidden bg-[#1D1B17] max-h-[360px] md:max-h-[440px] flex items-start justify-center">
                    <img
                      src="/img/arcade-metalslug.jpg"
                      alt="Metal Slug 2D Arcade Game cover poster showing OOP architecture details and gameplay art"
                      className="w-full h-auto object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </CardItem>
                  <CardItem translateZ="40" className="w-full px-4 py-2 bg-[#14120E] border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#C79A3C]">
                    <span>FIG. 03 — METAL SLUG CLONE &amp; OOP ARCHITECTURE</span>
                    <span className="hidden sm:inline-block text-white/60">C++ / SFML Game Physics</span>
                  </CardItem>
                </CardBody>
              </CardContainer>

              <h3 className="editorial-heading">
                Metal Slug — 2D Side-Scrolling Action Game
              </h3>

              <ul className="editorial-description list-disc pl-5 space-y-1.5 text-sm">
                <li>
                  Developed a 2D side-scrolling action game inspired by Metal Slug, built entirely in C++ with SFML graphics library.
                </li>
                <li>
                  Applied object-oriented programming design patterns to structure player mechanics, enemy AI behavior states, projectile hitboxes, and multi-phase boss fight sequences.
                </li>
                <li>
                  Engineered custom collision detection, sprite animation loops, and stage progression logic from scratch.
                </li>
              </ul>

              <div className="editorial-tech-stack">
                <span className="editorial-tech-tag"># C++</span>
                <span className="editorial-tech-tag"># SFML</span>
                <span className="editorial-tech-tag"># OOP Architecture</span>
                <span className="editorial-tech-tag"># Hitbox Systems</span>
                <span className="editorial-tech-tag"># Boss AI Sequences</span>
              </div>

              <div className="mt-4">
                <a
                  href="https://github.com/affankhan29"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link"
                >
                  View GitHub repository ↗
                </a>
              </div>
            </div>
          </div>

          {/* Project 04: TumblePop */}
          <div className="editorial-item flex flex-col md:flex-row gap-6">
            <div className="editorial-margin-col shrink-0">
              <span className="editorial-numeral">04</span>
              <span className="editorial-date">C++ / SFML</span>
              <span className="editorial-tag-rust">Arcade Game</span>
            </div>

            <div className="editorial-main-col w-full">
              {/* Aceternity 3D Card Effect Poster Frame */}
              <CardContainer className="w-full">
                <CardBody className="w-full group overflow-hidden rounded-xl border border-[#222220]/20 bg-[#0B172A] shadow-md hover:border-[#C79A3C]/50 transition-all duration-300 mb-5">
                  <CardItem translateZ="60" className="w-full overflow-hidden bg-[#0B172A] max-h-[360px] md:max-h-[440px] flex items-start justify-center">
                    <img
                      src="/img/arcade-tumblepop.jpg"
                      alt="TumblePop 2D Arcade Game cover poster showing gameplay screenshot and feature matrix"
                      className="w-full h-auto object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </CardItem>
                  <CardItem translateZ="40" className="w-full px-4 py-2 bg-[#070E1A] border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#C79A3C]">
                    <span>FIG. 04 — TUMBLEPOP RECREATION &amp; RETRO ARCADE ENGINE</span>
                    <span className="hidden sm:inline-block text-white/60">C++ / SFML Shooter-Puzzle</span>
                  </CardItem>
                </CardBody>
              </CardContainer>

              <h3 className="editorial-heading">
                TumblePop — 2D Arcade Game Recreation
              </h3>

              <ul className="editorial-description list-disc pl-5 space-y-1.5 text-sm">
                <li>
                  Recreated the classic TumblePop arcade shooter-puzzle game using C++ and SFML applying object-oriented programming principles.
                </li>
                <li>
                  Designed class hierarchies for game entities (player, enemies, bubbles) using polymorphism and encapsulation for modular, maintainable code.
                </li>
                <li>
                  Built custom vacuum-mechanics, enemy bubble capture logic, sprite animation loops, and stage progression systems.
                </li>
              </ul>

              <div className="editorial-tech-stack">
                <span className="editorial-tech-tag"># C++</span>
                <span className="editorial-tech-tag"># SFML</span>
                <span className="editorial-tech-tag"># OOP Architecture</span>
                <span className="editorial-tech-tag"># Collision Logic</span>
                <span className="editorial-tech-tag"># Sprite Animation</span>
              </div>

              <div className="mt-4">
                <a
                  href="https://github.com/affankhan29"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link"
                >
                  View GitHub repository ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
