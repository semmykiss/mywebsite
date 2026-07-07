"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Pentacore Systems transformed our entire IT infrastructure. The Microsoft 365 migration was flawless, and their team was on hand every step of the way. Our staff productivity has increased by over 40% since implementation.",
    name: "Sarah Mitchell",
    title: "Chief Technology Officer",
    company: "HealthFirst Group",
    industry: "Healthcare",
    avatar: "SM",
    color: "bg-blue-600",
    rating: 5,
  },
  {
    quote:
      "The Azure cloud migration Pentacore delivered was exceptional. They came in under budget and ahead of schedule, with zero downtime. Their security-first approach meant we passed our ISO 27001 audit with flying colours.",
    name: "James Okonkwo",
    title: "Head of IT",
    company: "Meridian Financial",
    industry: "Financial Services",
    avatar: "JO",
    color: "bg-emerald-600",
    rating: 5,
  },
  {
    quote:
      "As a school district with limited internal IT capacity, Pentacore's managed services have been a game-changer. Their 24/7 support ensures our 3,000 students have reliable access to digital learning tools at all times.",
    name: "Dr. Amelia Chen",
    title: "Director of Technology",
    company: "Westgate Academy Trust",
    industry: "Education",
    avatar: "AC",
    color: "bg-violet-600",
    rating: 5,
  },
  {
    quote:
      "Pentacore's Zoho CRM Plus implementation revolutionised how we manage customer relationships. Lead conversion improved by 60% in the first quarter alone. The onboarding and training support was outstanding.",
    name: "Robert Adeyemi",
    title: "Sales Director",
    company: "Lagos Trade Solutions",
    industry: "Retail",
    avatar: "RA",
    color: "bg-orange-600",
    rating: 5,
  },
  {
    quote:
      "Their cybersecurity team identified critical vulnerabilities in our network that we hadn't noticed. The remediation was swift and comprehensive. I wouldn't trust any other partner with our security posture.",
    name: "Emma Osei",
    title: "CISO",
    company: "NexGen Manufacturing",
    industry: "Manufacturing",
    avatar: "EO",
    color: "bg-rose-600",
    rating: 5,
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => {
      setCurrent((v) => (v + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [autoplay]);

  const prev = () => {
    setAutoplay(false);
    setCurrent((v) => (v - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setAutoplay(false);
    setCurrent((v) => (v + 1) % testimonials.length);
  };

  const t = testimonials[current];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag-pill mb-4">
            Client Success Stories
          </span>
          <h2 className="heading-secondary text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] text-balance">
            Trusted by leaders across{" "}
            <span className="gradient-text">every industry</span>
          </h2>
        </motion.div>

        {/* Testimonial carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="card-flat p-8 md:p-12 relative"
              >
                {/* Quote icon */}
                <div className="absolute -top-5 left-8">
                  <div className="w-12 h-12 rounded-lg bg-[#0F172A] flex items-center justify-center">
                    <Quote className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-6 mt-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#F5A623] fill-[#F5A623]" />
                  ))}
                  <span className="ml-2 text-xs text-[#979797] font-medium">Verified Review</span>
                </div>

                {/* Quote */}
                <blockquote className="text-lg md:text-xl text-[#444444] leading-relaxed mb-8 font-medium">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-lg ${t.color} flex items-center justify-center text-white font-bold text-lg`}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-[#0F172A] text-base">{t.name}</p>
                    <p className="text-[#979797] text-sm">{t.title}</p>
                    <p className="text-[#0078D4] text-sm font-medium">
                      {t.company} · {t.industry}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setAutoplay(false); setCurrent(i); }}
                    className={`rounded-full transition-all duration-300 ${
                      i === current
                        ? "w-8 h-2.5 bg-[#0078D4]"
                        : "w-2.5 h-2.5 bg-[#c6c6c6] hover:bg-[#979797]"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#444444] hover:bg-[#0F172A] hover:text-white transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#444444] hover:bg-[#0F172A] hover:text-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Small testimonial cards */}
        <div className="hidden lg:grid grid-cols-5 gap-3 mt-12">
          {testimonials.map((item, i) => (
            <button
              key={i}
              onClick={() => { setAutoplay(false); setCurrent(i); }}
              className={`p-4 rounded-2xl text-left transition-colors duration-300 ${
                i === current
                  ? "bg-[#0F172A]"
                  : "bg-white hover:bg-[#f3f3f3]"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-lg ${item.color} flex items-center justify-center text-white text-xs font-bold mb-2`}
              >
                {item.avatar}
              </div>
              <p className={`text-xs font-semibold leading-tight ${i === current ? "text-white" : "text-[#0F172A]"}`}>{item.name}</p>
              <p className={`text-[10px] mt-0.5 ${i === current ? "text-[#979797]" : "text-[#979797]"}`}>{item.company}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
