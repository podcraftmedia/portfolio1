"use client";

import FadeInSection from "@/components/ui/FadeInSection";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { motion } from "framer-motion";

export default function ImpactSection() {
  const metrics = [
    {
      value: 10000,
      suffix: "+",
      label: "Community Members",
      sublabel: "Grown organically",
      color: "from-blue-500 to-cyan-500",
    },
    {
      value: 100,
      suffix: "+",
      label: "Video Productions",
      sublabel: "Directed & edited",
      color: "from-purple-500 to-pink-500",
    },
    {
      value: 19,
      suffix: "%",
      label: "Organic Traffic Growth",
      sublabel: "Through SEO/content strategy",
      color: "from-green-500 to-emerald-500",
    },
    {
      value: 4,
      suffix: "+",
      label: "Years Experience",
      sublabel: "Performance creative",
      color: "from-orange-500 to-red-500",
    },
    {
      value: 5,
      suffix: "",
      label: "Successful Products",
      sublabel: "Shipped & marketed",
      color: "from-yellow-500 to-orange-500",
    },
    {
      value: 1000,
      suffix: "+",
      label: "YouTube Subscribers",
      sublabel: "Grown from zero",
      color: "from-red-500 to-pink-500",
    },
    {
      value: 100,
      suffix: "k+",
      label: "Social Impressions/mo",
      sublabel: "Across campaigns",
      color: "from-cyan-500 to-blue-500",
    },
    {
      value: 50,
      suffix: "+",
      label: "Landing Pages",
      sublabel: "Built & optimized",
      color: "from-indigo-500 to-purple-500",
    },
    {
      value: 10,
      suffix: "+",
      label: "AI Tools Mastered",
      sublabel: "Creative workflows automated",
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section id="impact" className="relative py-32 bg-gradient-to-b from-black via-zinc-900 to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Number - Magazine style */}
        <FadeInSection>
          <div className="text-center mb-8">
            <span className="text-6xl md:text-7xl font-bold text-zinc-800">03</span>
          </div>
        </FadeInSection>

        {/* Headline */}
        <FadeInSection>
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                By The Numbers
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Real impact, measured in real metrics
            </p>
          </div>
        </FadeInSection>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <FadeInSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 hover:bg-zinc-900 hover:border-transparent transition-all duration-500 overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Number */}
                  <div className="mb-4">
                    <h3
                      className={`text-6xl md:text-7xl font-bold bg-gradient-to-br ${metric.color} bg-clip-text text-transparent`}
                    >
                      <AnimatedCounter
                        end={metric.value}
                        suffix={metric.suffix}
                        duration={2500}
                      />
                    </h3>
                  </div>

                  {/* Label */}
                  <div>
                    <p className="text-xl font-semibold text-white mb-2">
                      {metric.label}
                    </p>
                    <p className="text-sm text-gray-400">{metric.sublabel}</p>
                  </div>
                </div>

                {/* Corner accent */}
                <div
                  className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`}
                />
              </motion.div>
            </FadeInSection>
          ))}
        </div>

        {/* Bottom tagline with diamond separators */}
        <FadeInSection delay={0.5}>
          <div className="mt-20 text-center">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <p className="text-lg text-gray-500 font-mono">
                Every number tells a story
              </p>
              <span className="text-accent text-2xl">◆</span>
              <p className="text-lg text-accent font-mono">
                growth, iteration, and impact
              </p>
              <span className="text-accent text-2xl">◆</span>
            </div>
          </div>
        </FadeInSection>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
    </section>
  );
}
