"use client";

import { motion } from "framer-motion";
import { Search, FileText, Cog, Rocket, HeartHandshake } from "lucide-react";

const steps = [
  { icon: Search, step: "01", title: "Discovery & Assessment", desc: "We begin with a deep-dive assessment of your current IT environment, business goals, and technology gaps." },
  { icon: FileText, step: "02", title: "Strategy & Roadmap", desc: "We develop a tailored technology roadmap with clear milestones, timelines, and business outcomes." },
  { icon: Cog, step: "03", title: "Design & Architecture", desc: "Our architects design a solution that is secure, scalable, and perfectly aligned with your requirements." },
  { icon: Rocket, step: "04", title: "Implementation", desc: "Agile delivery with full project management, testing, and user adoption support throughout." },
  { icon: HeartHandshake, step: "05", title: "Support & Optimisation", desc: "Ongoing monitoring, optimisation, and support to ensure you continue to get maximum value." },
];

export function ServiceProcess() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag-pill mb-4">
            How We Work
          </span>
          <h2 className="heading-secondary text-3xl sm:text-4xl text-[#0F172A] mb-4 text-balance">
            Our proven delivery process
          </h2>
          <p className="text-[#444444] max-w-xl mx-auto">
            A structured, client-centric methodology that consistently delivers results on time and within budget.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-10 left-8 right-8 h-px bg-[#c6c6c6] hidden lg:block" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative text-center"
              >
                {/* Step icon */}
                <div className="relative inline-flex flex-col items-center mb-5">
                  <div className="w-20 h-20 rounded-2xl bg-[#0F172A] flex items-center justify-center relative z-10">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white text-[#0078D4] text-[10px] font-bold flex items-center justify-center z-20 label-mono !text-[10px]">
                    {step.step}
                  </span>
                </div>

                <h3 className="font-bold text-[#0F172A] text-sm mb-2">{step.title}</h3>
                <p className="text-[#979797] text-xs leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
