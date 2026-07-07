"use client";

import { motion } from "framer-motion";

export function ContactHero() {
  return (
    <section className="relative pt-40 pb-20 bg-[#0F172A] overflow-hidden">
      <div className="absolute inset-0 grid-dots pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="tag-pill !bg-[#1e293b] !text-[#e5e5e5] mb-6">
            Get In Touch
          </span>
          <h1 className="heading-display text-white text-6xl sm:text-7xl lg:text-8xl mb-6">
            Let&apos;s Start a{" "}
            <span className="text-[#0078D4]">Conversation</span>
          </h1>
          <p className="text-[#979797] text-xl max-w-xl mx-auto">
            Book a free 30-minute consultation with our team. No pressure, no obligation—just
            honest advice about your technology challenges.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
