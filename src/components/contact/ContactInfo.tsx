"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar } from "lucide-react";

const contactDetails = [
  { icon: Phone, label: "Phone", value: "+1 (234) 567-890", href: "tel:+1234567890" },
  { icon: Mail, label: "Email", value: "info@pentacoresystems.com", href: "mailto:info@pentacoresystems.com" },
  { icon: MapPin, label: "Office", value: "123 Technology Drive, London EC2A 4NE", href: "#" },
  { icon: Clock, label: "Working Hours", value: "Mon–Fri, 8:00 AM – 6:00 PM GMT", href: null },
];

const officeHours = [
  { day: "Monday – Friday", hours: "8:00 AM – 6:00 PM" },
  { day: "Saturday", hours: "9:00 AM – 1:00 PM" },
  { day: "Sunday", hours: "Emergency Only" },
];

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="space-y-8"
    >
      {/* Quick contact cards */}
      <div>
        <h2 className="heading-secondary text-2xl text-[#0F172A] mb-6">Contact Information</h2>
        <div className="space-y-4">
          {contactDetails.map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="flex items-start gap-4 p-4 rounded-2xl bg-[#f3f3f3]">
              <div className="w-10 h-10 rounded-lg bg-[#0F172A] flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="label-mono text-[#979797] mb-0.5">{label}</p>
                {href && href !== "#" ? (
                  <a href={href} className="text-[#0F172A] font-medium hover:text-[#0078D4] transition-colors text-sm">
                    {value}
                  </a>
                ) : (
                  <p className="text-[#0F172A] font-medium text-sm">{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Office hours */}
      <div className="p-6 rounded-2xl bg-[#0F172A] text-white">
        <h3 className="font-bold text-base mb-4 flex items-center gap-2">
          <Clock className="w-4 h-4 text-[#0078D4]" />
          Office Hours
        </h3>
        <div className="space-y-2.5">
          {officeHours.map(({ day, hours }) => (
            <div key={day} className="flex justify-between text-sm">
              <span className="text-[#979797]">{day}</span>
              <span className="text-white font-medium">{hours}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-white/10">
          <p className="text-xs text-[#979797]">
            24/7 support available for Managed Service clients.{" "}
            <a href="tel:+1234567890" className="text-[#0078D4] hover:underline">Emergency: +1 (234) 567-891</a>
          </p>
        </div>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-2 gap-3">
        <a
          href="#"
          className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-[#f3f3f3] hover:bg-white transition-colors group text-center"
        >
          <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          <span className="text-sm font-semibold text-[#0F172A]">WhatsApp Chat</span>
          <span className="text-xs text-[#979797]">Instant response</span>
        </a>
        <a
          href="/contact"
          className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-[#f3f3f3] hover:bg-white transition-colors group text-center"
        >
          <div className="w-10 h-10 rounded-lg bg-[#0078D4] flex items-center justify-center group-hover:scale-110 transition-transform">
            <Calendar className="w-5 h-5 text-white" />
          </div>
          <span className="text-sm font-semibold text-[#0F172A]">Book a Meeting</span>
          <span className="text-xs text-[#979797]">Schedule online</span>
        </a>
      </div>

      {/* Map placeholder */}
      <div className="w-full h-48 rounded-2xl bg-[#0F172A] flex items-center justify-center overflow-hidden relative">
        <div className="absolute inset-0 grid-dots opacity-40" />
        <div className="relative text-center">
          <MapPin className="w-8 h-8 text-[#0078D4] mx-auto mb-2" />
          <p className="text-white font-semibold text-sm">London, United Kingdom</p>
          <p className="text-[#979797] text-xs mt-1">123 Technology Drive, EC2A 4NE</p>
        </div>
      </div>
    </motion.div>
  );
}
