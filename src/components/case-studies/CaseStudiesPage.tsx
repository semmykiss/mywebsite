"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Clock, Users } from "lucide-react";

const caseStudies = [
  {
    id: "healthfirst-azure-migration",
    client: "HealthFirst Group",
    industry: "Healthcare",
    title: "Migrating 2,000 Healthcare Users to Azure — In 6 Weeks",
    challenge: "HealthFirst needed to retire aging on-premises infrastructure and enable secure remote working for clinical and administrative staff following rapid expansion.",
    solution: "We designed and deployed an Azure landing zone, migrated Active Directory to Azure AD, and rolled out Microsoft 365 E3 with Intune device management across all sites.",
    results: [
      { metric: "40%", label: "Improvement in IT performance" },
      { metric: "6 weeks", label: "Delivery timeline" },
      { metric: "£180k", label: "Annual cost savings" },
      { metric: "Zero", label: "Downtime during migration" },
    ],
    tech: ["Azure", "Microsoft 365 E3", "Azure AD", "Intune", "Defender for Business"],
    color: "bg-rose-600",
    logo: "HF",
  },
  {
    id: "meridian-financial-security",
    client: "Meridian Financial Services",
    industry: "Financial Services",
    title: "Building a Zero Trust Security Framework for a Regulated Firm",
    challenge: "A growing FinTech faced increasing cyber threats and upcoming FCA security audits. Their legacy perimeter-based security model was inadequate for a hybrid workforce.",
    solution: "We implemented Microsoft Sentinel SIEM, Defender for Endpoint, Conditional Access policies, and Azure AD Premium P2, creating a comprehensive Zero Trust environment.",
    results: [
      { metric: "98%", label: "Reduction in security incidents" },
      { metric: "100%", label: "FCA audit pass rate" },
      { metric: "12 weeks", label: "Full implementation" },
      { metric: "24/7", label: "Managed SOC coverage" },
    ],
    tech: ["Microsoft Sentinel", "Defender for Endpoint", "Azure AD P2", "Conditional Access", "Purview"],
    color: "bg-emerald-600",
    logo: "MF",
  },
  {
    id: "westgate-academy-m365",
    client: "Westgate Academy Trust",
    industry: "Education",
    title: "Digital Transformation of a Multi-Academy Trust with M365 Education",
    challenge: "A trust of 8 schools needed to modernise its disconnected, siloed IT infrastructure and create a unified digital learning environment for 3,000 students.",
    solution: "We deployed Microsoft 365 Education A3 across all 8 schools, implemented Teams for Education for hybrid learning, and provided staff training and change management.",
    results: [
      { metric: "3,000+", label: "Students onboarded" },
      { metric: "60%", label: "Increase in digital engagement" },
      { metric: "8 schools", label: "Unified under one platform" },
      { metric: "30%", label: "Reduction in IT spend" },
    ],
    tech: ["Microsoft 365 Education", "Teams for Education", "Intune for Education", "SharePoint", "Azure AD"],
    color: "bg-blue-600",
    logo: "WA",
  },
  {
    id: "lagos-trade-zoho",
    client: "Lagos Trade Solutions",
    industry: "Retail & Distribution",
    title: "Zoho CRM Plus Implementation Drives 60% Lead Conversion Uplift",
    challenge: "A growing trading company was managing sales across spreadsheets and disconnected systems, losing leads and unable to track customer interactions at scale.",
    solution: "We implemented Zoho CRM Plus with custom sales pipeline configuration, Zoho Campaigns integration, and SalesIQ for live chat, plus staff training and onboarding.",
    results: [
      { metric: "60%", label: "Lead conversion improvement" },
      { metric: "45%", label: "Reduction in sales cycle time" },
      { metric: "3x", label: "Increase in pipeline visibility" },
      { metric: "8 weeks", label: "From kickoff to go-live" },
    ],
    tech: ["Zoho CRM Plus", "Zoho Campaigns", "SalesIQ", "Zoho Analytics", "Zoho Desk"],
    color: "bg-orange-600",
    logo: "LT",
  },
  {
    id: "nexgen-manufacturing-ot",
    client: "NexGen Manufacturing",
    industry: "Manufacturing",
    title: "OT/IT Convergence and Industrial Cybersecurity for Smart Factory",
    challenge: "A manufacturing firm expanding into Industry 4.0 needed to safely connect operational technology (OT) with IT systems without exposing the factory floor to cyber threats.",
    solution: "We implemented Microsoft Defender for IoT for OT visibility, created segmented network architecture with Cisco industrial switches, and deployed 24/7 SOC monitoring.",
    results: [
      { metric: "Zero", label: "OT security incidents post-deployment" },
      { metric: "100%", label: "Factory floor asset visibility" },
      { metric: "25%", label: "Operational efficiency gains" },
      { metric: "Cyber Essentials+", label: "Certification achieved" },
    ],
    tech: ["Microsoft Defender for IoT", "Cisco Industrial Networking", "Azure Sentinel", "Fortinet", "SD-WAN"],
    color: "bg-violet-600",
    logo: "NG",
  },
  {
    id: "council-cloud-migration",
    client: "Metropolitan District Council",
    industry: "Government",
    title: "Sovereign Cloud Migration for a UK Local Authority",
    challenge: "A local council needed to migrate to G-Cloud compliant infrastructure, retire its aging data centre, and enable modern collaboration for 800+ staff.",
    solution: "We migrated the council to Microsoft 365 Government and Azure Government, replacing legacy on-premises Exchange and file servers with compliant cloud equivalents.",
    results: [
      { metric: "800+", label: "Staff migrated" },
      { metric: "£250k", label: "5-year infrastructure savings" },
      { metric: "G-Cloud", label: "Compliance achieved" },
      { metric: "99.9%", label: "Uptime SLA maintained" },
    ],
    tech: ["Microsoft 365 Government", "Azure Government", "SharePoint", "Teams", "Azure AD"],
    color: "bg-slate-600",
    logo: "MDC",
  },
];

export function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-[#0F172A] overflow-hidden">
        <div className="absolute inset-0 grid-dots pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="tag-pill !bg-[#1e293b] !text-[#e5e5e5] mb-6">
              Case Studies
            </span>
            <h1 className="heading-display text-white text-6xl sm:text-7xl lg:text-8xl mb-6">
              Real Results for{" "}
              <span className="text-[#0078D4]">Real Businesses</span>
            </h1>
            <p className="text-[#979797] text-xl max-w-2xl mx-auto">
              Explore how we&apos;ve helped organisations across every sector achieve measurable
              outcomes through technology transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case studies grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <div className="card-flat overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Left panel */}
                  <div className={`p-8 ${cs.color} text-white flex flex-col justify-between`}>
                    <div>
                      <div className="w-14 h-14 rounded-lg bg-white/20 flex items-center justify-center text-white font-bold text-lg mb-5">
                        {cs.logo}
                      </div>
                      <p className="label-mono text-white/70 mb-1">{cs.industry}</p>
                      <h3 className="font-bold text-xl leading-snug mb-3">{cs.client}</h3>
                      <p className="text-white/80 text-sm leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div className="mt-6">
                      <p className="label-mono text-white/60 mb-2">Technologies Used</p>
                      <div className="flex flex-wrap gap-1.5">
                        {cs.tech.map((t) => (
                          <span key={t} className="px-2.5 py-1 rounded-lg bg-white/15 text-white text-xs font-medium">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right panel */}
                  <div className="lg:col-span-2 p-8">
                    <h2 className="heading-secondary text-xl text-[#0F172A] mb-4">{cs.title}</h2>
                    <p className="text-[#444444] text-sm leading-relaxed mb-6">{cs.solution}</p>

                    {/* Results */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                      {cs.results.map(({ metric, label }) => (
                        <div key={label} className="text-center p-4 rounded-2xl bg-[#f3f3f3]">
                          <p className="text-2xl font-bold text-[#0078D4]">{metric}</p>
                          <p className="text-[#979797] text-xs mt-1 leading-tight">{label}</p>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={`/case-studies/${cs.id}`}
                      className="btn-filled text-sm !py-2.5 !px-5 group"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
