"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "Microsoft", abbr: "MSFT" },
  { name: "Microsoft Azure", abbr: "Azure" },
  { name: "Microsoft 365", abbr: "M365" },
  { name: "Dynamics 365", abbr: "D365" },
  { name: "Zoho", abbr: "Zoho" },
  { name: "Amazon Web Services", abbr: "AWS" },
  { name: "Cisco", abbr: "Cisco" },
  { name: "VMware", abbr: "VMware" },
  { name: "Fortinet", abbr: "Fortinet" },
  { name: "Sophos", abbr: "Sophos" },
  { name: "Dell Technologies", abbr: "Dell" },
  { name: "HP Enterprise", abbr: "HPE" },
];

const colorMap: Record<string, string> = {
  MSFT: "#0078D4",
  Azure: "#0078D4",
  M365: "#D83B01",
  D365: "#0078D4",
  Zoho: "#E42527",
  AWS: "#FF9900",
  Cisco: "#1BA0D7",
  VMware: "#607078",
  Fortinet: "#EE3124",
  Sophos: "#004F99",
  Dell: "#007DB8",
  HPE: "#00B388",
};

function PartnerLogo({ name, abbr }: { name: string; abbr: string }) {
  const color = colorMap[abbr] || "#0078D4";
  return (
    <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-[#f3f3f3] hover:bg-white transition-colors duration-300 group flex-shrink-0 min-w-[160px]">
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
        style={{ backgroundColor: color }}
      >
        {abbr.slice(0, 2)}
      </div>
      <div>
        <p className="text-[#0F172A] font-semibold text-sm leading-tight group-hover:text-[#0078D4] transition-colors">
          {name}
        </p>
        <p className="text-[#979797] text-xs">Partner</p>
      </div>
    </div>
  );
}

export function TrustedPartners() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="label-mono text-[#979797] mb-2">
            Technology Partners
          </p>
          <h2 className="heading-secondary text-2xl sm:text-3xl text-[#0F172A]">
            Trusted by the world&apos;s leading technology providers
          </h2>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden">
        <div className="marquee-track">
          {[...partners, ...partners].map((partner, i) => (
            <PartnerLogo key={`${partner.abbr}-${i}`} {...partner} />
          ))}
        </div>
      </div>
    </section>
  );
}
