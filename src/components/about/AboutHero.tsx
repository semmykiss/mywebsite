"use client";

import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="relative pt-40 pb-20 bg-[#0F172A] overflow-hidden">
      <div className="absolute inset-0 grid-dots pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="tag-pill !bg-[#1e293b] !text-[#e5e5e5] mb-6">
            About Pentacore Systems
          </span>
          <h1 className="heading-display text-white text-6xl sm:text-7xl lg:text-8xl mb-6 text-balance">
            The Story Behind{" "}
            <span className="text-[#0078D4]">Pentacore Systems</span>
          </h1>
          <p className="text-[#979797] text-xl max-w-2xl mx-auto leading-relaxed text-balance">
            A decade of innovation, expertise, and unwavering commitment to helping
            businesses thrive in the digital age.
          </p>
        </motion.div>

        {/* Breadcrumb bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-3 mt-10 text-sm"
        >
          {[
            { label: "Founded 2014", color: "text-[#0078D4]" },
            { label: "·", color: "text-[#444444]" },
            { label: "London, UK", color: "text-[#979797]" },
            { label: "·", color: "text-[#444444]" },
            { label: "50+ Clients", color: "text-emerald-400" },
            { label: "·", color: "text-[#444444]" },
            { label: "Microsoft Partner", color: "text-[#0078D4]" },
          ].map((item, i) => (
            <span key={i} className={item.color}>
              {item.label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
