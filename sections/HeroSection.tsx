"use client";

import { motion } from "framer-motion";
import TypewriterText from "@/components/ui/TypewriterText";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { ArrowDown, Download } from "lucide-react";

export default function HeroSection() {
  const stats = [
    { value: 10000, suffix: "+", label: "Members Grown", icon: "🎯" },
    { value: 100, suffix: "+", label: "Video Productions", icon: "🎬" },
    { value: 4, suffix: "+", label: "Years Experience", icon: "📊" },
    { value: 5, suffix: "", label: "Products Launched", icon: "🚀" },
    { value: 10, suffix: "+", label: "AI Tools Mastered", icon: "🤖" },
    { value: 19, suffix: "%", label: "Organic Traffic Growth", icon: "💰" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,136,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Main Headline with stagger animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Performance Creative
              </span>
              <br />
              <span className="bg-gradient-to-r from-accent via-green-400 to-accent bg-clip-text text-transparent animate-pulse">
                That Converts
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <p className="text-xl md:text-2xl text-gray-400 font-light">
              Growth Marketing Specialist · Creative Strategist · Content
              Architect
            </p>
          </motion.div>

          {/* Typewriter tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-12"
          >
            <p className="text-lg md:text-xl text-accent font-mono">
              <TypewriterText
                text="Where data-driven strategy meets AI-assisted creative workflows"
                delay={50}
              />
            </p>
          </motion.div>

          {/* Live Status Widget - Magazine style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mb-16 inline-block"
          >
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 text-left max-w-md mx-auto">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-sm font-mono text-gray-400">
                  NOW · JUN '26
                </span>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-gray-500 min-w-[80px]">Creating</span>
                  <span className="text-gray-300">
                    → AI-Assisted Creative Workflows
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-500 min-w-[80px]">Reading</span>
                  <span className="text-gray-300">
                    → "Building a StoryBrand" by Donald Miller
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-500 min-w-[80px]">Listening</span>
                  <span className="text-gray-300">
                    → Marketing Against the Grain Podcast
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-500 min-w-[80px]">Tools</span>
                  <span className="text-gray-300">
                    → Claude AI · Gemini · ChatGPT · Meta Business Suite
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 hover:border-accent transition-colors duration-300"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2000}
                  />
                </div>
                <div className="text-xs text-gray-400 leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#work"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-black font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              View My Work
              <ArrowDown
                size={20}
                className="group-hover:translate-y-1 transition-transform"
              />
            </a>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold rounded-full border border-zinc-700 hover:border-accent transition-all duration-300 transform hover:scale-105"
            >
              <Download size={20} />
              Download CV
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2 text-gray-500">
              <span className="text-xs font-mono">Scroll to explore</span>
              <ArrowDown size={20} className="animate-bounce" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
