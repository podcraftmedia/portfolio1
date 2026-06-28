"use client";

import FadeInSection from "@/components/ui/FadeInSection";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface ToolCategory {
  id: string;
  name: string;
  stars: number;
  tools: string[];
  description: string;
  gradient: string;
}

export default function ToolkitSection() {
  const categories: ToolCategory[] = [
    {
      id: "T.01",
      name: "AI-Assisted Creative",
      stars: 9,
      tools: [
        "ChatGPT",
        "Claude",
        "Gemini",
        "Codex",
        "Meta AI",
        "HuggingFace AI",
        "Emergent AI",
        "Google Flow",
        "Google Omni",
        "Prompt engineering",
        "Creative workflows",
        "Content generation",
      ],
      description: "Leveraging cutting-edge AI tools for creative automation and workflow optimization",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      id: "T.02",
      name: "Content & Creative Strategy",
      stars: 8,
      tools: [
        "Content pillars",
        "Short-form video strategy",
        "Scripts",
        "Captions",
        "UGC concepts",
        "Creative briefs",
        "Editorial calendars",
        "Landing page messaging",
        "Community growth",
      ],
      description: "Strategic content planning and creative direction for maximum engagement",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: "T.03",
      name: "Analytics & Tools",
      stars: 8,
      tools: [
        "Google Search Console",
        "Meta Business Suite",
        "Google Sheets",
        "Campaign reporting",
        "CAC fundamentals",
        "Conversion tracking",
        "A/B testing",
        "Performance review",
      ],
      description: "Data-driven insights and performance tracking across platforms",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      id: "T.04",
      name: "Creative Production",
      stars: 7,
      tools: [
        "Visual prompts",
        "Landing page copy",
        "Ad set review",
        "Mood/composition/camera angles",
        "Hook/format/CTA",
        "Audience pain points",
        "Rapid prototyping",
        "Quality review checklists",
      ],
      description: "End-to-end creative production from concept to execution",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: "T.05",
      name: "Video & Visual",
      stars: 6,
      tools: [
        "Creative QA",
        "Competitive research",
        "Reporting support",
        "Briefing plans",
        "Iteration systems",
        "Version testing",
        "Conversion-focused copy",
        "Campaign messaging",
      ],
      description: "Video production and visual storytelling expertise",
      gradient: "from-red-500 to-pink-500",
    },
    {
      id: "T.06",
      name: "Project Management",
      stars: 6,
      tools: [
        "Online reputation management",
        "Basic funnel thinking",
        "Community promotion",
        "Organized promo directions",
        "Vendor communication",
        "Brand consistency",
        "Professional polish",
      ],
      description: "Project coordination and stakeholder management",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  const StarRating = ({ count, gradient }: { count: number; gradient: string }) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(10)].map((_, index) => (
          <Star
            key={index}
            size={16}
            className={
              index < count
                ? `fill-current text-transparent bg-gradient-to-br ${gradient} bg-clip-text`
                : "text-zinc-700"
            }
            fill={index < count ? "currentColor" : "none"}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="toolkit" className="relative py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Number */}
        <FadeInSection>
          <div className="text-center mb-8">
            <span className="text-6xl md:text-7xl font-bold text-zinc-800">08</span>
          </div>
        </FadeInSection>

        {/* Headline */}
        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                Technical Toolkit
              </span>
            </h2>
            <p className="text-xl text-gray-400 italic">
              The stack under the strategy
            </p>
          </div>
        </FadeInSection>

        {/* Toolkit Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          {categories.map((category, index) => (
            <FadeInSection key={category.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-500 h-full"
              >
                {/* Gradient glow on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                />

                {/* Header */}
                <div className="relative z-10 mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-mono text-gray-500">
                          {category.id}
                        </span>
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-br ${category.gradient}`}
                        />
                        <span className="text-xs font-mono text-gray-600">
                          {category.stars} stars
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {category.name}
                      </h3>
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div className="mb-4">
                    <StarRating count={category.stars} gradient={category.gradient} />
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Tools List */}
                <div className="relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {category.tools.map((tool, toolIndex) => (
                      <motion.span
                        key={toolIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: toolIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1.5 bg-black/50 border border-zinc-800 rounded-lg text-xs text-gray-300 hover:border-zinc-600 hover:text-white transition-all duration-200 cursor-default"
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Corner decoration */}
                <div
                  className={`absolute top-4 right-4 w-16 h-16 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 rounded-full`}
                />
              </motion.div>
            </FadeInSection>
          ))}
        </div>

        {/* Bottom Message */}
        <FadeInSection delay={0.6}>
          <div className="mt-20 text-center">
            <div className="inline-block px-6 py-3 bg-zinc-900/50 border border-zinc-800 rounded-full">
              <p className="text-gray-400">
                <span className="text-accent font-semibold">6 disciplines</span> ·{" "}
                <span className="text-accent font-semibold">80+ tools</span> ·{" "}
                <span className="text-white">Constantly evolving</span>
              </p>
            </div>
          </div>
        </FadeInSection>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
