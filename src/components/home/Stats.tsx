"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, CheckCircle, Briefcase, Clock, Star, Globe } from "lucide-react";

const stats = [
  { value: 100, suffix: "+", label: "Projects Completed", icon: CheckCircle },
  { value: 99, suffix: "%", label: "Customer Satisfaction", icon: Star },
  { value: 50, suffix: "+", label: "Enterprise Clients", icon: Briefcase },
  { value: 10, suffix: "+", label: "Years Experience", icon: Clock },
  { value: 500, suffix: "+", label: "Users Supported", icon: Users },
  { value: 15, suffix: "+", label: "Countries Reached", icon: Globe },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const step = (value / duration) * 16;
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, value);
      setCount(Math.floor(current));
      if (current >= value) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag-pill mb-4">
            Our Impact
          </span>
          <h2 className="heading-secondary text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] text-balance">
            Numbers that speak{" "}
            <span className="gradient-text">for themselves</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="card-flat p-8 hover:-translate-y-1 transition-transform duration-300 text-center">
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#0F172A] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Number */}
                <div className="heading-secondary text-5xl text-[#0F172A] mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <p className="text-[#444444] text-sm font-medium">{stat.label}</p>

                {/* Bottom accent bar */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  className="absolute bottom-0 left-6 right-6 h-0.5 bg-[#0078D4] origin-left"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
