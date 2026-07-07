"use client";

import { motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";

const team = [
  { name: "David Thompson", title: "Chief Executive Officer", avatar: "DT", color: "bg-blue-700", bio: "20+ years in enterprise IT. Former Microsoft Solutions Architect with a passion for digital transformation." },
  { name: "Priya Sharma", title: "Chief Technology Officer", avatar: "PS", color: "bg-violet-700", bio: "Azure Expert and cloud architect. Led 40+ enterprise cloud migrations across EMEA and Asia Pacific." },
  { name: "Michael Okafor", title: "Head of Cybersecurity", avatar: "MO", color: "bg-rose-700", bio: "CISSP certified with 15 years in enterprise security. Specialises in Zero Trust and compliance frameworks." },
  { name: "Emily Watson", title: "Head of Customer Success", avatar: "EW", color: "bg-emerald-700", bio: "Passionate about ensuring every client achieves measurable ROI from their technology investments." },
  { name: "James Adeyemi", title: "Solutions Architect", avatar: "JA", color: "bg-orange-700", bio: "Microsoft-certified architect specialising in Dynamics 365, Power Platform and business applications." },
  { name: "Sophie Laurent", title: "Head of Operations", avatar: "SL", color: "bg-fuchsia-700", bio: "Drives operational excellence and agile project delivery across all Pentacore client engagements." },
];

export function TeamSection() {
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
            Leadership Team
          </span>
          <h2 className="heading-secondary text-3xl sm:text-4xl text-[#0F172A] mb-4">
            Meet the experts behind{" "}
            <span className="gradient-text">Pentacore&apos;s success</span>
          </h2>
          <p className="text-[#444444] max-w-xl mx-auto">
            A team of certified professionals united by a shared passion for technology
            and an unwavering commitment to client success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group card-flat p-7 hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Avatar */}
              <div className={`w-20 h-20 rounded-2xl ${member.color} flex items-center justify-center text-white text-2xl font-bold mb-5 group-hover:scale-105 transition-transform`}>
                {member.avatar}
              </div>

              <h3 className="font-bold text-[#0F172A] text-lg leading-tight">{member.name}</h3>
              <p className="text-[#0078D4] text-sm font-medium mt-0.5 mb-3">{member.title}</p>
              <p className="text-[#979797] text-sm leading-relaxed mb-5">{member.bio}</p>

              {/* Social links */}
              <div className="flex items-center gap-2">
                <a href="#" className="w-8 h-8 rounded-lg bg-[#f3f3f3] flex items-center justify-center hover:bg-[#0F172A] transition-colors group/icon">
                  <ExternalLink className="w-3.5 h-3.5 text-[#979797] group-hover/icon:text-white transition-colors" />
                </a>
                <a href="#" className="w-8 h-8 rounded-lg bg-[#f3f3f3] flex items-center justify-center hover:bg-[#0F172A] transition-colors group/icon">
                  <X className="w-3.5 h-3.5 text-[#979797] group-hover/icon:text-white transition-colors" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
