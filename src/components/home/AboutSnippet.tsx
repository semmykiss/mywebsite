"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Target, Eye, Heart } from "lucide-react";

const pillars = [
  { icon: Target, title: "Our Mission", desc: "To empower businesses of all sizes with enterprise-grade technology solutions that drive measurable results and sustainable growth." },
  { icon: Eye, title: "Our Vision", desc: "To be the most trusted technology transformation partner for businesses across the UK and beyond, known for innovation, integrity, and impact." },
  { icon: Heart, title: "Our Values", desc: "Client-first thinking, security-by-design, continuous learning, and transparent partnerships built on accountability and trust." },
];

export function AboutSnippet() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="tag-pill mb-4">
              About Pentacore Systems
            </span>
            <h2 className="heading-secondary text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] mb-6 text-balance">
              A decade of delivering{" "}
              <span className="gradient-text">technology excellence</span>
            </h2>
            <p className="text-[#444444] text-lg leading-relaxed mb-6">
              Founded with a clear vision—to make enterprise-grade technology accessible to every
              business—Pentacore Systems has grown into a trusted advisor for organisations across
              healthcare, education, financial services, government, and beyond.
            </p>
            <p className="text-[#444444] text-lg leading-relaxed mb-8">
              Our team of certified engineers, architects, and consultants bring deep expertise
              in Microsoft, Azure, Cisco, and a broad ecosystem of technology platforms,
              delivering solutions that are secure, scalable, and always aligned with your goals.
            </p>

            <Link href="/about" className="btn-filled group">
              Learn Our Story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right: Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-12 lg:mt-0 space-y-5"
          >
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-flat flex gap-5 p-6 group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#0F172A] flex items-center justify-center flex-shrink-0">
                  <pillar.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F172A] text-base mb-1.5">{pillar.title}</h3>
                  <p className="text-[#444444] text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
