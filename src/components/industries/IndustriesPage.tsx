"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Heart, GraduationCap, Landmark, Factory, ShoppingBag, Briefcase, Building, Globe, CheckCircle, ArrowRight,
} from "lucide-react";

const industries = [
  {
    icon: Heart,
    name: "Healthcare",
    slug: "healthcare",
    tagline: "Technology that improves patient outcomes",
    desc: "We help healthcare providers adopt HIPAA-compliant cloud solutions, secure patient data, enable telehealth, and streamline clinical workflows—so clinicians can focus on care.",
    challenges: ["Patient data security & HIPAA/GDPR compliance", "Telehealth infrastructure", "EHR system integration", "Medical device management"],
    solutions: ["Microsoft 365 for Healthcare", "Azure Health Data Services", "Endpoint security for clinical devices", "Secure video consultation platforms"],
    color: "bg-rose-600",
  },
  {
    icon: GraduationCap,
    name: "Education",
    slug: "education",
    tagline: "Empowering the next generation of learners",
    desc: "From primary schools to universities, we design modern digital learning environments that engage students, support teachers, and meet the highest security standards.",
    challenges: ["Remote and hybrid learning", "Student data protection (FERPA/GDPR)", "Legacy infrastructure modernisation", "Budgetary constraints"],
    solutions: ["Microsoft Teams for Education", "Campus Wi-Fi & networking", "Student device management (Intune)", "Cloud-based LMS integration"],
    color: "bg-blue-600",
  },
  {
    icon: Landmark,
    name: "Financial Services",
    slug: "financial-services",
    tagline: "Secure, compliant IT for regulated industries",
    desc: "We help banks, insurers, and financial firms meet FCA/SEC regulations, protect customer data, and drive digital innovation without compromising compliance.",
    challenges: ["FCA/SEC regulatory compliance", "Data sovereignty and residency", "Fraud and cyber threat prevention", "Legacy system modernisation"],
    solutions: ["Microsoft Purview for compliance", "Azure landing zones for financial data", "Zero Trust security framework", "Dynamics 365 for financial services"],
    color: "bg-emerald-600",
  },
  {
    icon: Building,
    name: "Government",
    slug: "government",
    tagline: "Modernising public services through technology",
    desc: "We support public sector organisations with compliant, sovereign cloud infrastructure, secure communications, and digital service delivery platforms.",
    challenges: ["Government cloud compliance (G-Cloud, FedRAMP)", "Citizen data protection", "Legacy system replacement", "Cross-agency collaboration"],
    solutions: ["Microsoft Government Cloud", "Azure Government landing zones", "Secure collaboration with Teams", "Identity and access management"],
    color: "bg-slate-600",
  },
  {
    icon: Factory,
    name: "Manufacturing",
    slug: "manufacturing",
    tagline: "Industry 4.0 transformation for the factory floor",
    desc: "We connect operational and information technology, enabling smart factories, predictive maintenance, and connected supply chains through secure IoT and cloud platforms.",
    challenges: ["OT/IT convergence and security", "Supply chain visibility", "Predictive maintenance at scale", "Real-time production analytics"],
    solutions: ["Azure IoT Hub integration", "OT security with Microsoft Defender", "Dynamics 365 Supply Chain Management", "Teams for frontline workers"],
    color: "bg-orange-600",
  },
  {
    icon: ShoppingBag,
    name: "Retail",
    slug: "retail",
    tagline: "Omnichannel experiences powered by technology",
    desc: "We help retailers create seamless shopping experiences, optimise supply chains, and build loyal customer relationships through modern CRM, analytics, and secure IT.",
    challenges: ["PCI-DSS compliance for payments", "Omnichannel customer experience", "Inventory and supply chain management", "Customer data and loyalty"],
    solutions: ["Zoho CRM Plus for retail", "PCI-DSS compliant cloud infrastructure", "Dynamics 365 Commerce", "Microsoft Azure analytics"],
    color: "bg-fuchsia-600",
  },
  {
    icon: Briefcase,
    name: "Professional Services",
    slug: "professional-services",
    tagline: "Technology that scales with your practice",
    desc: "Law firms, consultancies, and accounting practices trust Pentacore to deliver secure document management, client collaboration platforms, and compliant IT infrastructure.",
    challenges: ["Client confidentiality and data security", "Remote working and collaboration", "Document management and eDiscovery", "Business continuity"],
    solutions: ["Microsoft 365 Business Premium", "SharePoint for document management", "Azure Information Protection", "Managed security and compliance"],
    color: "bg-violet-600",
  },
  {
    icon: Globe,
    name: "SMEs & NGOs",
    slug: "smes",
    tagline: "Enterprise-grade IT, built for smaller budgets",
    desc: "We make world-class technology accessible to SMEs and NGOs, offering cost-effective Microsoft 365, Zoho, and cloud solutions that grow with your organisation.",
    challenges: ["Limited IT budget and resources", "Keeping up with technology changes", "Cybersecurity for small teams", "Scalable solutions without high CapEx"],
    solutions: ["Microsoft 365 Business", "Zoho Workplace for SMEs", "Managed IT services for cost efficiency", "Cloud-first infrastructure"],
    color: "bg-cyan-600",
  },
];

export function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-[#0F172A] overflow-hidden">
        <div className="absolute inset-0 grid-dots pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="tag-pill !bg-[#1e293b] !text-[#e5e5e5] mb-6">
              Industries We Serve
            </span>
            <h1 className="heading-display text-white text-6xl sm:text-7xl lg:text-8xl mb-6 text-balance">
              Sector-Specific Expertise,{" "}
              <span className="text-[#0078D4]">Universal Excellence</span>
            </h1>
            <p className="text-[#979797] text-xl max-w-2xl mx-auto">
              Deep industry knowledge combined with enterprise technology expertise to deliver
              solutions that meet your sector&apos;s unique requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries list */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              {/* Content */}
              <div>
                <div className={`w-16 h-16 rounded-2xl ${ind.color} flex items-center justify-center mb-6`}>
                  <ind.icon className="w-8 h-8 text-white" />
                </div>
                <span className="label-mono text-[#0078D4]">{ind.tagline}</span>
                <h2 className="heading-secondary text-2xl sm:text-3xl text-[#0F172A] mt-2 mb-4">{ind.name}</h2>
                <p className="text-[#444444] text-base leading-relaxed mb-6">{ind.desc}</p>
                <Link href={`/industries/${ind.slug}`} className="btn-filled group">
                  Explore {ind.name} Solutions
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Challenges & Solutions */}
              <div className="space-y-5">
                <div className="p-6 rounded-2xl bg-[#f3f3f3]">
                  <h4 className="label-mono text-[#0F172A] mb-3">Key Challenges We Solve</h4>
                  <ul className="space-y-2">
                    {ind.challenges.map((c) => (
                      <li key={c} className="flex items-start gap-2.5 text-sm text-[#444444]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0078D4] mt-1.5 flex-shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 rounded-2xl bg-[#f3f3f3]">
                  <h4 className="label-mono text-[#0F172A] mb-3">Our Solutions</h4>
                  <ul className="space-y-2">
                    {ind.solutions.map((s) => (
                      <li key={s} className="flex items-start gap-2.5 text-sm text-[#444444]">
                        <CheckCircle className="w-4 h-4 text-[#0078D4] flex-shrink-0 mt-0.5" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
