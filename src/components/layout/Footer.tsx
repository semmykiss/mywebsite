"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Shield,
  Send,
  ExternalLink,
  Rss,
  Play,
  X,
  type LucideIcon,
} from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Microsoft 365", href: "/services/microsoft-365" },
    { label: "Azure Cloud", href: "/services/azure" },
    { label: "Dynamics 365", href: "/services/dynamics-365" },
    { label: "Cybersecurity", href: "/services/cybersecurity" },
    { label: "Cloud Migration", href: "/services/cloud-migration" },
    { label: "Managed Services", href: "/services/managed-services" },
  ],
  industries: [
    { label: "Healthcare", href: "/industries/healthcare" },
    { label: "Education", href: "/industries/education" },
    { label: "Financial Services", href: "/industries/financial-services" },
    { label: "Government", href: "/industries/government" },
    { label: "Manufacturing", href: "/industries/manufacturing" },
    { label: "Retail", href: "/industries/retail" },
  ],
};

const socials = [
  { icon: ExternalLink, href: "#", label: "LinkedIn" },
  { icon: X, href: "#", label: "X (Twitter)" },
  { icon: Rss, href: "#", label: "RSS Feed" },
  { icon: Play, href: "#", label: "YouTube" },
];

const certifications: { label: string; logo?: string; icon?: LucideIcon }[] = [
  { label: "Microsoft Partner", logo: "/logos/microsoft.svg" },
  { label: "ISO 27001", icon: Shield },
  { label: "AWS Partner", logo: "/logos/aws.svg" },
];

export function Footer() {
  return (
    <footer className="bg-[#0F172A] text-[#979797] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-dots opacity-30 pointer-events-none" />

      {/* Newsletter Banner */}
      <div className="relative bg-[#1e293b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white text-xl font-bold">Stay ahead of the technology curve</h3>
              <p className="text-[#979797] mt-1 text-sm">
                Get insights on cloud, security, and digital transformation delivered to your inbox.
              </p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex w-full lg:w-auto gap-2"
            >
              <input
                type="email"
                placeholder="Enter your work email"
                className="flex-1 lg:w-72 px-4 py-3 rounded-lg bg-[#0F172A] text-white placeholder:text-[#979797] text-sm focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="px-5 py-3 bg-white text-[#0F172A] rounded-lg text-sm font-semibold hover:bg-[#0078D4] hover:text-white transition-colors flex items-center gap-2 flex-shrink-0"
              >
                Subscribe
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center p-1.5">
                <Image
                  src="/pentacore-icon.png"
                  alt="Pentacore Systems"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-white font-bold text-lg block leading-tight">Pentacore Systems</span>
                <span className="text-[#0078D4] text-[10px] font-semibold uppercase tracking-widest">IT Consulting</span>
              </div>
            </Link>
            <p className="text-[#979797] text-sm leading-relaxed mb-6">
              Empowering businesses through intelligent IT solutions. We help organisations modernise,
              secure, and scale through innovative technology partnerships.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-7">
              <a href="tel:+1234567890" className="flex items-center gap-3 text-[#979797] hover:text-[#0078D4] transition-colors text-sm group">
                <div className="w-8 h-8 rounded-lg bg-[#1e293b] flex items-center justify-center group-hover:bg-[#0078D4] transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                +234 8137996917
              </a>
              <a href="mailto:info@pentacoresystems.com" className="flex items-center gap-3 text-[#979797] hover:text-[#0078D4] transition-colors text-sm group">
                <div className="w-8 h-8 rounded-lg bg-[#1e293b] flex items-center justify-center group-hover:bg-[#0078D4] transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                info@pentacoresystems.com.ng
              </a>
              <div className="flex items-start gap-3 text-[#979797] text-sm">
                <div className="w-8 h-8 rounded-lg bg-[#1e293b] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span>123 Technology Drive, Innovation Quarter, London, UK EC2A 4NE</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-[#1e293b] hover:bg-[#0078D4] flex items-center justify-center transition-colors duration-200"
                >
                  <Icon className="w-4 h-4 text-[#979797] hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="label-mono text-white mb-5">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[#979797] hover:text-[#0078D4] transition-colors text-sm flex items-center gap-1.5 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="label-mono text-white mb-5">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[#979797] hover:text-[#0078D4] transition-colors text-sm flex items-center gap-1.5 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="label-mono text-white mb-5">Industries</h4>
              <ul className="space-y-3">
                {footerLinks.industries.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[#979797] hover:text-[#0078D4] transition-colors text-sm flex items-center gap-1.5 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Certifications */}
              <div className="mt-8">
                <h4 className="label-mono text-white mb-4">Certified By</h4>
                <div className="space-y-2">
                  {certifications.map((cert) => (
                    <div key={cert.label} className="flex items-center gap-2 text-xs text-[#979797]">
                      {cert.logo ? (
                        <Image src={cert.logo} alt="" width={14} height={14} className="w-3.5 h-3.5 object-contain" />
                      ) : cert.icon ? (
                        <cert.icon className="w-3.5 h-3.5 text-[#0078D4]" />
                      ) : null}
                      {cert.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#1e293b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#979797] text-xs">
            © {new Date().getFullYear()} Pentacore Systems Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {["Privacy Policy", "Terms of Service", "Cookie Policy", "Sitemap"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-[#979797] hover:text-[#0078D4] transition-colors text-xs"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
