"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  Monitor,
  Cloud,
  BarChart3,
  Globe,
  Server,
  Shield,
  Database,
  Lock,
  Cpu,
  Users,
  Headphones,
  Briefcase,
  ArrowRight,
  Building2,
  Code2,
  AppWindow,
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    name: "Microsoft 365",
    desc: "Full deployment, migration, and management of the complete Microsoft 365 suite for your organisation.",
    href: "/services/microsoft-365",
    color: "bg-[#0078D4]",
    tag: "Most Popular",
  },
  {
    icon: Cloud,
    name: "Azure Cloud",
    desc: "Design, deploy, and optimise Microsoft Azure infrastructure tailored to your business needs.",
    href: "/services/azure",
    color: "bg-sky-600",
  },
  {
    icon: BarChart3,
    name: "Dynamics 365",
    desc: "Unify ERP and CRM capabilities to streamline operations and accelerate sales cycles.",
    href: "/services/dynamics-365",
    color: "bg-violet-600",
  },
  {
    icon: Shield,
    name: "Cybersecurity",
    desc: "End-to-end security strategy, threat detection, and response to protect your digital assets.",
    href: "/services/cybersecurity",
    color: "bg-rose-600",
    tag: "Critical",
  },
  {
    icon: Server,
    name: "Cloud Migration",
    desc: "Seamless, risk-managed migration of applications and infrastructure to the cloud.",
    href: "/services/cloud-migration",
    color: "bg-emerald-600",
  },
  {
    icon: Headphones,
    name: "Managed Services",
    desc: "24/7 proactive monitoring, support, and management of your entire IT environment.",
    href: "/services/managed-services",
    color: "bg-orange-600",
  },
  {
    icon: Briefcase,
    name: "Zoho Workplace",
    desc: "All-in-one business productivity suite with email, collaboration, and communication tools.",
    href: "/services/zoho-workplace",
    color: "bg-rose-500",
  },
  {
    icon: Users,
    name: "Zoho CRM Plus",
    desc: "Unified customer experience platform with sales, marketing, and support capabilities.",
    href: "/services/zoho-crm",
    color: "bg-fuchsia-600",
  },
  {
    icon: Lock,
    name: "Identity Management",
    desc: "Zero Trust security framework with robust IAM, SSO, and privileged access management.",
    href: "/services/identity-management",
    color: "bg-slate-700",
  },
  {
    icon: Database,
    name: "Backup & Recovery",
    desc: "Business continuity solutions with automated backups, disaster recovery planning and testing.",
    href: "/services/backup-recovery",
    color: "bg-teal-600",
  },
  {
    icon: Cpu,
    name: "Networking",
    desc: "Design and deployment of enterprise-grade LAN/WAN, SD-WAN, and wireless networks.",
    href: "/services/networking",
    color: "bg-indigo-600",
  },
  {
    icon: Globe,
    name: "IT Outsourcing",
    desc: "Dedicated IT teams and helpdesk services, freeing you to focus on core business activities.",
    href: "/services/it-outsourcing",
    color: "bg-cyan-600",
  },
  {
    icon: Building2,
    name: "Custom ERP Solutions",
    desc: "Bespoke ERP systems tailored to your operations, finance, and reporting needs.",
    href: "/services/custom-erp-solutions",
    color: "bg-amber-600",
    tag: "New",
  },
  {
    icon: Code2,
    name: "Web Development",
    desc: "Fast, modern, SEO-friendly websites built for growth and conversions.",
    href: "/services/web-development",
    color: "bg-amber-600",
    tag: "New",
  },
  {
    icon: AppWindow,
    name: "Web Application",
    desc: "Scalable custom web applications built around your business workflows.",
    href: "/services/web-application",
    color: "bg-amber-600",
    tag: "New",
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

export function ServicesOverview() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag-pill mb-4">
            What We Do
          </span>
          <h2 className="heading-secondary text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] text-balance mb-5">
            Comprehensive IT Solutions
            <br className="hidden sm:block" />
            <span className="gradient-text"> for Every Business Need</span>
          </h2>
          <p className="text-[#444444] text-lg max-w-2xl mx-auto text-balance">
            From cloud migration to cybersecurity, we deliver end-to-end technology services
            that drive measurable business outcomes.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {services.map((service) => (
            <motion.div key={service.name} variants={item}>
              <Link href={service.href} className="group block h-full">
                <div className="card-flat h-full p-6 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
                  {/* Tag */}
                  {service.tag && (
                    <span className="absolute top-4 right-4 label-mono !text-[10px] px-2 py-1 rounded-full bg-[#f3f3f3] text-[#0078D4]">
                      {service.tag}
                    </span>
                  )}

                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="font-bold text-[#0F172A] text-base mb-2 group-hover:text-[#0078D4] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-[#979797] text-sm leading-relaxed">{service.desc}</p>

                  {/* Learn more arrow */}
                  <div className="flex items-center gap-1 mt-4 text-[#0078D4] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>

                  {/* Hover accent border */}
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${service.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View all services CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/services" className="btn-ghost group">
            View All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
