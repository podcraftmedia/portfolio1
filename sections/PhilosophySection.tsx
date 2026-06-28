"use client";

import FadeInSection from "@/components/ui/FadeInSection";
import { motion } from "framer-motion";
import {
  FileText,
  Video,
  BarChart3,
  Sparkles,
  Palette,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

export default function PhilosophySection() {
  const specialties = [
    { icon: FileText, label: "Content Strategy", color: "text-blue-400" },
    { icon: Video, label: "Video Direction & Editing", color: "text-purple-400" },
    { icon: BarChart3, label: "Campaign Execution", color: "text-green-400" },
    { icon: Sparkles, label: "AI-Assisted Creative Workflows", color: "text-yellow-400" },
    { icon: Palette, label: "Creative Briefs", color: "text-pink-400" },
    { icon: TrendingUp, label: "Performance Analytics", color: "text-orange-400" },
    { icon: Users, label: "Community Growth", color: "text-cyan-400" },
    { icon: Zap, label: "Short-Form Content Production", color: "text-red-400" },
  ];

  return (
    <section id="philosophy" className="relative py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Number */}
        <FadeInSection>
          <div className="text-center mb-8">
            <span className="text-6xl md:text-7xl font-bold text-zinc-800">02</span>
          </div>
        </FadeInSection>

        {/* Headline */}
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              A Marketer Who Builds Brands Through
              <br />
              <span className="text-accent">Performance-First Creative</span>
            </h2>
          </div>
        </FadeInSection>

        {/* Body Copy */}
        <FadeInSection delay={0.2}>
          <div className="max-w-4xl mx-auto mb-20">
            <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
              <p>
                I don't just create campaigns—I{" "}
                <span className="text-white font-semibold">
                  build creative systems that scale
                </span>
                . With 4+ years navigating the intersection of content strategy,
                campaign execution, and AI-powered workflows, I've learned that
                the best marketing doesn't just look good—
                <span className="text-accent">it performs</span>.
              </p>
              <p>
                From growing niche communities to 10,000+ engaged members, to
                producing 100+ short-form videos that drive real conversions, my
                work lives at the crossroads of{" "}
                <span className="text-white font-semibold">
                  data, creativity, and execution
                </span>
                .
              </p>
            </div>
          </div>
        </FadeInSection>

        {/* What I Do Best */}
        <FadeInSection delay={0.3}>
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-gray-400">
              I thrive when given messy problems that need someone to:
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  title: "Architect the strategy",
                  desc: "Research, insights, and positioning",
                },
                {
                  title: "Execute the creative",
                  desc: "Landing pages, ad copy, video scripts",
                },
                {
                  title: "Optimize for performance",
                  desc: "A/B testing, conversion tracking, iteration",
                },
                {
                  title: "Build the system",
                  desc: "Templates, workflows, and scalable processes",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10, borderColor: "rgba(0, 255, 136, 0.5)" }}
                  className="flex items-start gap-4 p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:bg-zinc-900/70 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-2 h-2 mt-2 bg-accent rounded-full" />
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* Specialty Areas Grid */}
        <FadeInSection delay={0.4}>
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-12 text-center">
              Specialty Areas
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {specialties.map((specialty, index) => {
                const Icon = specialty.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1, y: -10 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 hover:bg-zinc-900 hover:border-accent transition-all duration-300 cursor-pointer"
                  >
                    {/* Icon */}
                    <div className="mb-4 flex justify-center">
                      <div className="p-4 bg-black/50 rounded-xl group-hover:bg-black transition-colors">
                        <Icon
                          size={32}
                          className={`${specialty.color} group-hover:scale-110 transition-transform`}
                        />
                      </div>
                    </div>
                    {/* Label */}
                    <p className="text-center text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                      {specialty.label}
                    </p>
                    
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/10 group-hover:to-transparent transition-all duration-300 -z-10" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
