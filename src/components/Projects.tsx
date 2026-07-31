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

        <div className="editorial-list">
          {/* Project 01: Dhoom Dhaam */}
          <div className="editorial-item">
            <div className="editorial-margin-col">
              <span className="editorial-numeral">01</span>
              <span className="editorial-date">REACT / NEXT.JS</span>
              <span className="editorial-tag-rust">E-Commerce &amp; Web</span>
            </div>

            <div className="editorial-main-col">
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
          <div className="editorial-item">
            <div className="editorial-margin-col">
              <span className="editorial-numeral">02</span>
              <span className="editorial-date">JS / LLM API</span>
              <span className="editorial-tag-rust">AI Application</span>
            </div>

            <div className="editorial-main-col">
              <h3 className="editorial-heading">
                Affinity — AI Chat Clone
              </h3>

              <ul className="editorial-description list-disc pl-5 space-y-1.5 text-sm">
                <li>
                  Built a web-based AI chat application that integrates a large language model (LLM) API to deliver conversational responses.
                </li>
                <li>
                  Developed the front-end interface using HTML, CSS, and JavaScript, focusing on a clean, responsive chat experience.
                </li>
                <li>
                  Implemented API request handling and dynamic response rendering to simulate real-time conversational AI interaction.
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

          {/* Project 03: Tumblepop */}
          <div className="editorial-item">
            <div className="editorial-margin-col">
              <span className="editorial-numeral">03</span>
              <span className="editorial-date">C++ / SFML</span>
              <span className="editorial-tag-rust">Arcade Game</span>
            </div>

            <div className="editorial-main-col">
              <h3 className="editorial-heading">
                Tumblepop — 2D Arcade Game Recreation
              </h3>

              <ul className="editorial-description list-disc pl-5 space-y-1.5 text-sm">
                <li>
                  Recreated the classic Tumblepop arcade game using C++ and the SFML graphics library, applying object-oriented programming principles.
                </li>
                <li>
                  Designed class hierarchies for game entities (player, enemies, bubbles) using polymorphism and encapsulation for modular, maintainable code.
                </li>
                <li>
                  Implemented collision detection, sprite animation, and level progression logic from scratch.
                </li>
              </ul>

              <div className="editorial-tech-stack">
                <span className="editorial-tech-tag"># C++</span>
                <span className="editorial-tech-tag"># SFML</span>
                <span className="editorial-tech-tag"># OOP Architecture</span>
                <span className="editorial-tech-tag"># Collision Detection</span>
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

          {/* Project 04: Metal Slug */}
          <div className="editorial-item">
            <div className="editorial-margin-col">
              <span className="editorial-numeral">04</span>
              <span className="editorial-date">C++ / SFML</span>
              <span className="editorial-tag-rust">Action Game</span>
            </div>

            <div className="editorial-main-col">
              <h3 className="editorial-heading">
                Metal Slug — 2D Side-Scrolling Action Game
              </h3>

              <ul className="editorial-description list-disc pl-5 space-y-1.5 text-sm">
                <li>
                  Developed a 2D side-scrolling action game inspired by Metal Slug, built entirely in C++ with SFML.
                </li>
                <li>
                  Applied OOP design patterns to structure player mechanics, enemy AI, weapons, and boss fight sequences.
                </li>
                <li>
                  Debugged and optimized sprite hitboxes and collision systems for accurate, responsive gameplay.
                </li>
              </ul>

              <div className="editorial-tech-stack">
                <span className="editorial-tech-tag"># C++</span>
                <span className="editorial-tech-tag"># SFML</span>
                <span className="editorial-tech-tag"># Game AI &amp; Physics</span>
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
        </div>
      </motion.div>
    </section>
  );
}
