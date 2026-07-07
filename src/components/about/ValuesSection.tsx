"use client";

import { motion } from "framer-motion";
import { Shield, Users, Lightbulb, Target, Heart, TrendingUp } from "lucide-react";

const values = [
  { icon: Shield, title: "Integrity", desc: "We operate with complete transparency, never overpromising and always delivering on our commitments.", color: "bg-blue-600" },
  { icon: Users, title: "Partnership", desc: "We see ourselves as an extension of your team—collaborative, invested, and aligned with your success.", color: "bg-violet-600" },
  { icon: Lightbulb, title: "Innovation", desc: "We continuously explore and adopt emerging technologies to keep our clients ahead of the curve.", color: "bg-amber-600" },
  { icon: Target, title: "Excellence", desc: "Every project, every interaction, every deliverable is held to the highest professional standard.", color: "bg-emerald-600" },
  { icon: Heart, title: "Care", desc: "We genuinely care about our clients' outcomes—your success is our success, every single time.", color: "bg-rose-600" },
  { icon: TrendingUp, title: "Growth", desc: "We invest in our people and our clients, fostering continuous learning and long-term partnerships.", color: "bg-cyan-600" },
];

export function ValuesSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag-pill mb-4">
            Our Core Values
          </span>
          <h2 className="heading-secondary text-3xl sm:text-4xl text-[#0F172A] mb-4">
            The principles that guide everything we do
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-flat p-7 hover:-translate-y-1 transition-transform duration-300 group"
            >
              <div className={`w-14 h-14 rounded-2xl ${value.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <value.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-[#0F172A] text-lg mb-2">{value.title}</h3>
              <p className="text-[#979797] text-sm leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
