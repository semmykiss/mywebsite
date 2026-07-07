"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowRight, Search, Tag } from "lucide-react";

const categories = ["All", "Cloud", "Microsoft", "Cybersecurity", "Networking", "AI", "Productivity", "Digital Transformation", "Business Tips"];

const posts = [
  {
    id: 1,
    title: "Microsoft Copilot for M365: What IT Leaders Need to Know in 2025",
    excerpt: "Microsoft's AI-powered Copilot is transforming how businesses use Microsoft 365. We break down the practical implications, licensing, and implementation steps.",
    category: "Microsoft",
    readTime: "6 min read",
    date: "Jun 20, 2025",
    featured: true,
    color: "bg-blue-700",
  },
  {
    id: 2,
    title: "Zero Trust Security: The Framework Every Business Needs Right Now",
    excerpt: "Cyber threats are more sophisticated than ever. Zero Trust architecture is no longer optional—here's how to implement it without disrupting your operations.",
    category: "Cybersecurity",
    readTime: "8 min read",
    date: "Jun 15, 2025",
    featured: true,
    color: "bg-rose-600",
  },
  {
    id: 3,
    title: "Azure vs AWS vs Google Cloud: Choosing the Right Platform for Your Business",
    excerpt: "A comprehensive, vendor-neutral comparison of the three major cloud platforms—with a focus on what actually matters for UK and African businesses.",
    category: "Cloud",
    readTime: "10 min read",
    date: "Jun 10, 2025",
    featured: true,
    color: "bg-emerald-600",
  },
  {
    id: 4,
    title: "How to Cut Microsoft 365 Licensing Costs Without Losing Functionality",
    excerpt: "Most organisations are overpaying for Microsoft 365 licences. Our audit methodology has saved clients an average of 22% on their annual M365 spend.",
    category: "Microsoft",
    readTime: "5 min read",
    date: "Jun 5, 2025",
    color: "bg-violet-600",
  },
  {
    id: 5,
    title: "SD-WAN: Is It the Right Networking Solution for Your Business?",
    excerpt: "Software-defined wide area networks promise lower costs and better performance. We explore when SD-WAN makes sense and what implementation looks like.",
    category: "Networking",
    readTime: "7 min read",
    date: "May 28, 2025",
    color: "bg-orange-600",
  },
  {
    id: 6,
    title: "The Business Case for Managed IT Services: ROI Analysis",
    excerpt: "How does the cost of managed IT services compare to in-house IT? We break down a real-world ROI analysis for a 200-person company.",
    category: "Business Tips",
    readTime: "6 min read",
    date: "May 20, 2025",
    color: "bg-fuchsia-600",
  },
  {
    id: 7,
    title: "Dynamics 365 vs Salesforce: Which CRM is Right for Your Business?",
    excerpt: "An honest, side-by-side comparison of two market-leading CRM platforms, with guidance on which fits different business profiles and budgets.",
    category: "Microsoft",
    readTime: "9 min read",
    date: "May 12, 2025",
    color: "bg-sky-600",
  },
  {
    id: 8,
    title: "AI and Automation in IT: Practical Use Cases for 2025",
    excerpt: "Artificial intelligence is reshaping IT operations. From AIOps to automated security responses, here are the use cases delivering real business value now.",
    category: "AI",
    readTime: "7 min read",
    date: "May 5, 2025",
    color: "bg-indigo-600",
  },
  {
    id: 9,
    title: "GDPR + Cloud: What UK Businesses Need to Know in 2025",
    excerpt: "Post-Brexit data protection requirements continue to evolve. We cover the key compliance considerations for UK businesses using cloud services.",
    category: "Cybersecurity",
    readTime: "8 min read",
    date: "Apr 28, 2025",
    color: "bg-slate-600",
  },
];

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = posts.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featured = filtered.filter((p) => p.featured);
  const regular = filtered.filter((p) => !p.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-[#0F172A] overflow-hidden">
        <div className="absolute inset-0 grid-dots pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="tag-pill !bg-[#1e293b] !text-[#e5e5e5] mb-6">
              Blog & Insights
            </span>
            <h1 className="heading-display text-white text-6xl sm:text-7xl mb-6">
              Technology Insights for{" "}
              <span className="text-[#0078D4]">Business Leaders</span>
            </h1>
            <p className="text-[#979797] text-xl max-w-xl mx-auto">
              Expert analysis, practical guides, and strategic thinking from our team of certified technology professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search & Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#979797]" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-white text-sm text-[#0F172A] placeholder:text-[#979797] focus:outline-none focus:ring-2 focus:ring-[#0078D4]"
              />
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                    activeCategory === cat
                      ? "bg-[#0F172A] text-white"
                      : "bg-white text-[#444444] hover:bg-[#0078D4] hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Featured posts */}
          {featured.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
              {featured.map((post, i) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <Link href={`/blog/${post.id}`} className="group block h-full">
                    <div className="h-full card-flat overflow-hidden hover:-translate-y-1 transition-transform duration-300">
                      <div className={`h-36 ${post.color} flex items-end p-5`}>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-medium">
                          <Tag className="w-3 h-3" />
                          {post.category}
                        </span>
                      </div>
                      <div className="p-6">
                        <h2 className="font-bold text-[#0F172A] text-base leading-snug mb-3 group-hover:text-[#0078D4] transition-colors line-clamp-2">
                          {post.title}
                        </h2>
                        <p className="text-[#979797] text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-[#979797] text-xs">
                            <Clock className="w-3.5 h-3.5" />
                            {post.readTime}
                          </div>
                          <span className="text-[#979797] text-xs">{post.date}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}

          {/* Regular posts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regular.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <Link href={`/blog/${post.id}`} className="group block h-full">
                  <div className="card-flat h-full p-6 hover:-translate-y-0.5 transition-transform duration-300">
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${post.color} text-white text-xs font-medium mb-4`}>
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </div>
                    <h2 className="font-bold text-[#0F172A] text-sm leading-snug mb-3 group-hover:text-[#0078D4] transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-[#979797] text-xs leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-[#979797] text-xs">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                      <div className="flex items-center gap-1 text-[#0078D4] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>Read</span>
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-[#979797]">
              <p className="text-lg font-medium">No articles found.</p>
              <p className="text-sm mt-1">Try a different search term or category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
