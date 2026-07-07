"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Heart,
  GraduationCap,
  Landmark,
  Factory,
  ShoppingBag,
  Briefcase,
  Building,
  Globe,
  ArrowRight,
} from "lucide-react";

const industries = [
  { icon: Heart, name: "Healthcare", desc: "HIPAA-compliant cloud infrastructure, patient data security, and telehealth enablement.", href: "/industries/healthcare", color: "bg-rose-600", clients: "12+ clients" },
  { icon: GraduationCap, name: "Education", desc: "Modern digital learning environments, Microsoft Teams for Education, and campus networking.", href: "/industries/education", color: "bg-blue-600", clients: "8+ clients" },
  { icon: Landmark, name: "Financial Services", desc: "FCA-compliant security frameworks, data governance, and secure communication platforms.", href: "/industries/financial-services", color: "bg-emerald-600", clients: "15+ clients" },
  { icon: Building, name: "Government", desc: "Secure, compliant IT infrastructure meeting government standards and data sovereignty requirements.", href: "/industries/government", color: "bg-slate-600", clients: "5+ clients" },
  { icon: Factory, name: "Manufacturing", desc: "IoT integration, operational technology security, and Industry 4.0 digital transformation.", href: "/industries/manufacturing", color: "bg-orange-600", clients: "10+ clients" },
  { icon: ShoppingBag, name: "Retail", desc: "Omnichannel solutions, PCI-DSS compliance, and integrated CRM for enhanced customer experience.", href: "/industries/retail", color: "bg-fuchsia-600", clients: "7+ clients" },
  { icon: Briefcase, name: "Professional Services", desc: "Cloud-first workplace tools, CRM systems, and secure document management for professional firms.", href: "/industries/professional-services", color: "bg-violet-600", clients: "20+ clients" },
  { icon: Globe, name: "SMEs & NGOs", desc: "Affordable, scalable IT solutions helping small businesses and NGOs punch above their weight.", href: "/industries/smes", color: "bg-cyan-600", clients: "30+ clients" },
];

export function Industries() {
  return (
    <section className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-dots pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag-pill !bg-[#1e293b] !text-[#e5e5e5] mb-4">
            Industries We Serve
          </span>
          <h2 className="heading-secondary text-3xl sm:text-4xl lg:text-5xl text-white text-balance mb-5">
            Deep expertise across{" "}
            <span className="text-[#0078D4]">every sector</span>
          </h2>
          <p className="text-[#979797] text-lg max-w-2xl mx-auto text-balance">
            We bring sector-specific knowledge to every engagement, ensuring our
            solutions meet the unique compliance, regulatory, and operational requirements
            of your industry.
          </p>
        </motion.div>

        {/* Industries grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
            >
              <Link href={industry.href} className="group block h-full">
                <div className="h-full p-6 rounded-2xl bg-[#1e293b] hover:bg-[#243044] transition-colors duration-300 relative overflow-hidden">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-lg ${industry.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Client count badge */}
                  <span className="inline-block px-2 py-0.5 rounded-full bg-white/8 text-[#979797] text-[10px] font-medium mb-3">
                    {industry.clients}
                  </span>

                  <h3 className="text-white font-bold text-base mb-2 group-hover:text-[#0078D4] transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-[#979797] text-sm leading-relaxed">{industry.desc}</p>

                  <div className="flex items-center gap-1 mt-4 text-[#979797] text-sm font-medium group-hover:text-[#0078D4] transition-colors">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
