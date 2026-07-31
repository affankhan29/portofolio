"use client";

import { motion } from "framer-motion";

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
              {/* Full-width Cover Art Frame */}
              <div className="group overflow-hidden rounded-xl border border-[#222220]/15 bg-[#F9F7F1]/80 shadow-md hover:border-[#C79A3C]/40 hover:shadow-xl transition-all duration-300 mb-4">
                <div className="overflow-hidden bg-[#F5F2EB]">
                  <img
                    src="/img/project-dhoomdhaam.jpg"
                    alt="Dhoom Dhaam E-Commerce Website poster showcasing store layout, feature highlights, and tech stack"
                    className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500"
                  />
                </div>
                <div className="px-4 py-2 bg-[#FAF8F3] border-t border-[#222220]/10 flex items-center justify-between text-[11px] font-mono text-[#222220]/70">
                  <span>FIG. 01 — FULL-STACK STOREFRONT &amp; WHATSAPP API PIPELINE</span>
                  <span className="hidden sm:inline-block tracking-wider uppercase">Catalog &amp; Cart State</span>
                </div>
              </div>

              <h3 className="editorial-heading">
                Dhoom Dhaam — E-Commerce Website for a Birthday Party Supplies Store
              </h3>

              <p className="editorial-description">
                Designed and built a fast, single-page storefront for a small Pakistani birthday party accessories business, replacing a traditional checkout flow with a zero-backend WhatsApp ordering system tailored to how small local retailers actually operate. Built a fully componentized product catalog and shopping cart using React state, compiling orders via WhatsApp&apos;s Click-to-Chat API into a formatted message pipeline.
              </p>

              <div className="editorial-tech-stack">
                <span className="editorial-tech-tag"># React</span>
                <span className="editorial-tech-tag"># Next.js</span>
                <span className="editorial-tech-tag"># Tailwind CSS</span>
                <span className="editorial-tech-tag"># WhatsApp Business API</span>
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

          {/* Project 02: Affinity — AI Chat Clone */}
          <div className="editorial-item flex flex-col md:flex-row gap-6">
            <div className="editorial-margin-col shrink-0">
              <span className="editorial-numeral">02</span>
              <span className="editorial-date">JS / LLM API</span>
              <span className="editorial-tag-rust">AI Application</span>
            </div>

            <div className="editorial-main-col w-full">
              {/* Browser Window Chrome Container */}
              <div className="group overflow-hidden rounded-xl border border-[#222220]/20 bg-[#121316] shadow-lg hover:border-[#C79A3C]/50 transition-all duration-300 mb-4">
                {/* Window Chrome Header */}
                <div className="px-4 py-2.5 bg-[#1C1D22] border-b border-white/10 flex items-center justify-between">
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
                </div>
                {/* Screenshot */}
                <div className="overflow-hidden bg-[#0A0B0E]">
                  <img
                    src="/img/project-affinity.jpg"
                    alt="Affinity AI Chat Clone Interface showing conversational prompt cards and prompt bar"
                    className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500"
                  />
                </div>
                {/* Caption Bar */}
                <div className="px-4 py-2 bg-[#17181D] border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/70">
                  <span>FIG. 02 — REAL-TIME CONVERSATIONAL LLM CHAT INTERFACE</span>
                  <span className="hidden sm:inline-block text-[#C79A3C]">Async Request Handling</span>
                </div>
              </div>

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

          {/* Matched Pair Section Header */}
          <div className="pt-4 pb-2 border-t border-[#222220]/15">
            <span className="editorial-eyebrow text-xs">C++ / SFML ARCADE ENGINE SUITE</span>
          </div>

          {/* Projects 03 & 04: Matched Pair Grid (Metal Slug & TumblePop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 03: Metal Slug */}
            <div className="editorial-item flex flex-col h-full border border-[#222220]/15 rounded-xl p-5 bg-[#FAF8F3]/60 hover:bg-[#FAF8F3] hover:border-[#C79A3C]/40 transition-all duration-300">
              <div className="editorial-margin-col mb-3">
                <span className="editorial-numeral">03</span>
                <span className="editorial-date">C++ / SFML</span>
                <span className="editorial-tag-rust">Action Game</span>
              </div>

              <div className="editorial-main-col flex-1 flex flex-col justify-between">
                <div>
                  {/* Poster Frame */}
                  <div className="group overflow-hidden rounded-lg border border-[#222220]/20 bg-[#1D1B17] shadow-md mb-4">
                    <img
                      src="/img/arcade-metalslug.jpg"
                      alt="Metal Slug 2D Arcade Game cover poster showing OOP architecture details and gameplay art"
                      className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="px-3 py-1.5 bg-[#14120E] border-t border-white/10 text-[10px] font-mono text-[#C79A3C] flex items-center justify-between">
                      <span>FIG. 03 — METAL SLUG CLONE</span>
                      <span>OOP ARCHITECTURE</span>
                    </div>
                  </div>

                  <h3 className="editorial-heading text-lg">
                    Metal Slug — 2D Side-Scrolling Action Game
                  </h3>

                  <p className="editorial-description text-xs leading-relaxed mt-2">
                    Developed a 2D side-scrolling action game in C++ with SFML. Applied key OOP patterns to structure player physics, enemy AI states, projectile hitboxes, and multi-phase boss fight sequences.
                  </p>
                </div>

                <div>
                  <div className="editorial-tech-stack mt-4">
                    <span className="editorial-tech-tag"># C++</span>
                    <span className="editorial-tech-tag"># SFML</span>
                    <span className="editorial-tech-tag"># Game Physics</span>
                    <span className="editorial-tech-tag"># Hitbox Systems</span>
                  </div>

                  <div className="mt-4">
                    <a
                      href="https://github.com/affankhan29"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="editorial-link text-xs"
                    >
                      View GitHub repository ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 04: TumblePop */}
            <div className="editorial-item flex flex-col h-full border border-[#222220]/15 rounded-xl p-5 bg-[#FAF8F3]/60 hover:bg-[#FAF8F3] hover:border-[#C79A3C]/40 transition-all duration-300">
              <div className="editorial-margin-col mb-3">
                <span className="editorial-numeral">04</span>
                <span className="editorial-date">C++ / SFML</span>
                <span className="editorial-tag-rust">Arcade Game</span>
              </div>

              <div className="editorial-main-col flex-1 flex flex-col justify-between">
                <div>
                  {/* Poster Frame */}
                  <div className="group overflow-hidden rounded-lg border border-[#222220]/20 bg-[#0B172A] shadow-md mb-4">
                    <img
                      src="/img/arcade-tumblepop.jpg"
                      alt="TumblePop 2D Arcade Game cover poster showing gameplay screenshot and feature matrix"
                      className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="px-3 py-1.5 bg-[#070E1A] border-t border-white/10 text-[10px] font-mono text-[#C79A3C] flex items-center justify-between">
                      <span>FIG. 04 — TUMBLEPOP RECREATION</span>
                      <span>RETRO ARCADE ENGINE</span>
                    </div>
                  </div>

                  <h3 className="editorial-heading text-lg">
                    TumblePop — 2D Arcade Game Recreation
                  </h3>

                  <p className="editorial-description text-xs leading-relaxed mt-2">
                    Recreated the classic TumblePop arcade shooter-puzzle game in C++ and SFML. Built custom vacuum-mechanics, enemy bubble capture logic, sprite animation loops, and stage progression systems.
                  </p>
                </div>

                <div>
                  <div className="editorial-tech-stack mt-4">
                    <span className="editorial-tech-tag"># C++</span>
                    <span className="editorial-tech-tag"># SFML</span>
                    <span className="editorial-tech-tag"># OOP Architecture</span>
                    <span className="editorial-tech-tag"># Collision Logic</span>
                  </div>

                  <div className="mt-4">
                    <a
                      href="https://github.com/affankhan29"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="editorial-link text-xs"
                    >
                      View GitHub repository ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
