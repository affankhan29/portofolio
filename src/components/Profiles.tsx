"use client";

import { motion } from "framer-motion";

const PROFILES = [
  {
    name: "LinkedIn",
    handle: "affan-khan-2a2a123ab",
    url: "https://linkedin.com/in/affan-khan-2a2a123ab",
    icon: "fa-brands fa-linkedin",
  },
  {
    name: "GitHub",
    handle: "affankhan29",
    url: "https://github.com/affankhan29",
    icon: "fa-brands fa-github",
  },
  {
    name: "LeetCode",
    handle: "affankhan_dev",
    url: "https://leetcode.com",
    icon: "fa-solid fa-code",
  },
  {
    name: "HackerRank",
    handle: "affankhan_cs",
    url: "https://hackerrank.com",
    icon: "fa-brands fa-hackerrank",
  },
];

export function Profiles() {
  return (
    <section className="editorial-section" id="profiles">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="editorial-eyebrow">05 — Web Presence</span>
        <h2 className="section-title mb-12">
          Digital Profiles &amp; <span className="font-serif italic font-normal text-[#C79A3C]">Network</span>
        </h2>

        <div className="profiles-grid">
          {PROFILES.map((profile) => (
            <a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noreferrer"
              className="profile-card"
            >
              <i className={`${profile.icon} profile-icon`} />
              <div>
                <h3 className="profile-title">{profile.name}</h3>
                <p className="profile-sub">@{profile.handle}</p>
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
