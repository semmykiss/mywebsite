"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play, Shield, type LucideIcon } from "lucide-react";

const badges: { text: string; logo?: string; icon?: LucideIcon }[] = [
  { logo: "/logos/microsoft.svg", text: "Microsoft Gold Partner" },
  { icon: Shield, text: "ISO 27001 Certified" },
  { logo: "/logos/azure.svg", text: "Azure Expert MSP" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0F172A]">
      {/* Grid dots background */}
      <div className="absolute inset-0 grid-dots pointer-events-none" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24 lg:pt-48 lg:pb-28">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-display text-white text-[3.25rem] sm:text-7xl lg:text-8xl xl:text-[8.125rem] mb-8"
          >
            Empowering Business
            <br />
            Through <span className="text-[#0078D4]">Intelligent</span> IT
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-[#979797] leading-relaxed mb-10 max-w-2xl mx-auto text-balance"
          >
            Helping organisations modernise their workplace, migrate to the cloud, secure
            digital assets, and accelerate business growth through innovative technology.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            <Link
              href="/contact"
              className="group flex items-center gap-2 px-7 py-4 bg-white text-[#0F172A] rounded-lg font-semibold text-base hover:bg-[#0078D4] hover:text-white transition-colors duration-200"
            >
              Book Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="group flex items-center gap-2 px-7 py-4 bg-transparent text-white rounded-lg font-semibold text-base border-[1.5px] border-white/30 hover:border-white transition-colors duration-200"
            >
              <Play className="w-4 h-4 text-[#0078D4]" />
              Explore Services
            </Link>
          </motion.div>

          {/* Partner badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {badges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div
                  key={badge.text}
                  className="tag-pill !bg-[#1e293b] !text-[#e5e5e5] normal-case"
                >
                  {badge.logo ? (
                    <Image src={badge.logo} alt="" width={14} height={14} className="w-3.5 h-3.5 object-contain" />
                  ) : Icon ? (
                    <Icon className="w-3.5 h-3.5 text-[#0078D4]" />
                  ) : null}
                  {badge.text}
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {[
            { value: "100+", label: "Projects Delivered" },
            { value: "99%", label: "Client Satisfaction" },
            { value: "50+", label: "Enterprise Clients" },
            { value: "10+", label: "Years Experience" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="text-center p-5 rounded-2xl bg-[#1e293b]"
            >
              <p className="heading-secondary text-3xl text-white">{value}</p>
              <p className="text-[#979797] text-sm mt-1">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
