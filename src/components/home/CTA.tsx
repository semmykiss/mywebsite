"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Phone, MessageCircle } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-dots pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="tag-pill !bg-[#1e293b] !text-[#e5e5e5] mb-6">
              Ready to Transform?
            </span>

            <h2 className="heading-display text-white text-5xl sm:text-6xl lg:text-7xl mb-6 text-balance">
              Let&apos;s Transform Your
              <br />
              <span className="text-[#0078D4]">Business Together</span>
            </h2>

            <p className="text-[#979797] text-lg leading-relaxed mb-10 text-balance">
              Whether you&apos;re modernising your workplace, migrating to the cloud,
              or strengthening your security posture—we&apos;re here to guide you every step of the way.
            </p>

            {/* Action cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {[
                {
                  icon: Calendar,
                  title: "Book a Meeting",
                  desc: "Schedule a 30-min discovery call",
                  href: "/contact",
                  primary: true,
                },
                {
                  icon: Phone,
                  title: "Call Us Now",
                  desc: "+1 (234) 567-890",
                  href: "tel:+1234567890",
                  primary: false,
                },
                {
                  icon: MessageCircle,
                  title: "WhatsApp Chat",
                  desc: "Chat with us directly",
                  href: "#",
                  primary: false,
                },
              ].map(({ icon: Icon, title, desc, href, primary }) => (
                <Link
                  key={title}
                  href={href}
                  className={`group flex flex-col items-center p-6 rounded-2xl transition-colors duration-300 ${
                    primary
                      ? "bg-[#0078D4] hover:bg-[#005a9e]"
                      : "bg-[#1e293b] hover:bg-[#243044]"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 ${
                    primary ? "bg-white/20" : "bg-white/8"
                  }`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-bold text-base mb-1">{title}</p>
                  <p className="text-[#979797] text-xs text-center">{desc}</p>
                </Link>
              ))}
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group flex items-center gap-2 px-8 py-4 bg-white text-[#0F172A] rounded-lg font-bold text-base hover:bg-[#0078D4] hover:text-white transition-colors duration-200"
              >
                Book Free Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="flex items-center gap-2 px-8 py-4 bg-transparent text-white rounded-lg font-semibold text-base border-[1.5px] border-white/30 hover:border-white transition-colors"
              >
                Explore Services
              </Link>
            </div>

            <p className="text-[#979797] text-sm mt-6">
              No commitment required · Free initial assessment · Response within 2 hours
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
