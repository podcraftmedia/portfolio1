"use client";

import FadeInSection from "@/components/ui/FadeInSection";
import { motion } from "framer-motion";
import { Search, Lightbulb, TrendingUp, Target, BarChart, RefreshCw } from "lucide-react";

export default function ApproachSection() {
  return (
    <section id="approach" className="relative py-32 bg-gradient-to-b from-black via-zinc-900 to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Number */}
        <FadeInSection>
          <div className="text-center mb-8">
            <span className="text-6xl md:text-7xl font-bold text-zinc-800">07</span>
          </div>
        </FadeInSection>

        {/* Headline */}
        <FadeInSection>
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                How I Think and Build
              </span>
            </h2>
          </div>
        </FadeInSection>

        {/* Visual Study 1: The Performance Pyramid */}
        <FadeInSection delay={0.2}>
          <div className="mb-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Visual */}
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="relative aspect-square"
                >
                  {/* Pyramid structure */}
                  <div className="absolute inset-0 flex flex-col justify-end items-center gap-4">
                    {/* Top - Performance */}
                    <motion.div
                      whileHover={{ scale: 1.1, y: -10 }}
                      className="w-1/3 h-24 bg-gradient-to-br from-accent to-green-600 rounded-lg flex items-center justify-center backdrop-blur-sm border-2 border-accent/50"
                    >
                      <div className="text-center">
                        <TrendingUp size={32} className="mx-auto mb-2" />
                        <p className="font-bold text-black text-sm">Performance</p>
                      </div>
                    </motion.div>

                    {/* Middle - Creative */}
                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="w-2/3 h-28 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center backdrop-blur-sm border-2 border-purple-500/50"
                    >
                      <div className="text-center">
                        <Lightbulb size={36} className="mx-auto mb-2" />
                        <p className="font-bold text-white text-sm">Creative Layer</p>
                      </div>
                    </motion.div>

                    {/* Bottom - Strategy */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="w-full h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center backdrop-blur-sm border-2 border-blue-500/50"
                    >
                      <div className="text-center">
                        <Target size={40} className="mx-auto mb-2" />
                        <p className="font-bold text-white">Strategy & Research</p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Connecting lines */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-px h-full bg-gradient-to-b from-transparent via-accent/30 to-transparent" />
                  </div>
                </motion.div>
              </div>

              {/* Copy */}
              <div>
                <div className="inline-block px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full mb-6">
                  <span className="text-sm font-mono text-accent">Visual Study A.01</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  The Performance Pyramid
                </h3>
                <p className="text-xl text-gray-400 italic mb-6">
                  Strategy at the base, creative in the middle, performance at the peak
                </p>
                <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                  <p>
                    Every campaign starts with{" "}
                    <span className="text-blue-400 font-semibold">
                      research and insights
                    </span>
                    —understanding the audience, the competition, and the conversion
                    goal.
                  </p>
                  <p>
                    From there, I build the{" "}
                    <span className="text-purple-400 font-semibold">
                      creative layer
                    </span>
                    : messaging, visuals, and copy that connect emotionally.
                  </p>
                  <p>
                    Finally, I{" "}
                    <span className="text-accent font-semibold">
                      optimize for performance
                    </span>
                    : tracking, testing, and iterating until the system works.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Visual Study 2: The Creative Feedback Loop */}
        <FadeInSection delay={0.3}>
          <div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Copy (reversed order) */}
              <div className="order-2 lg:order-1">
                <div className="inline-block px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full mb-6">
                  <span className="text-sm font-mono text-accent">Visual Study A.02</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  The Creative Feedback Loop
                </h3>
                <p className="text-xl text-gray-400 italic mb-6">
                  Execution → Data → Insights → Refinement → Execution
                </p>
                <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                  <p>
                    I don't believe in "set it and forget it" campaigns. The best
                    creative gets better over time.
                  </p>
                  <p>
                    I build{" "}
                    <span className="text-accent font-semibold">
                      feedback loops
                    </span>{" "}
                    into every project—tracking what works, learning from what
                    doesn't, and constantly refining the approach.
                  </p>
                  <p className="text-gray-400">
                    This iterative process turns good campaigns into great ones, and
                    great ones into scalable systems.
                  </p>
                </div>
              </div>

              {/* Visual (reversed order) */}
              <div className="order-1 lg:order-2 relative">
                <motion.div
                  initial={{ opacity: 0, rotate: -10 }}
                  whileInView={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="relative aspect-square"
                >
                  {/* Circular feedback loop */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Center */}
                    <div className="absolute w-32 h-32 bg-gradient-to-br from-accent to-green-600 rounded-full flex items-center justify-center z-10 border-4 border-black">
                      <RefreshCw size={40} className="text-black animate-spin" style={{ animationDuration: '3s' }} />
                    </div>

                    {/* Loop nodes */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute w-full h-full"
                    >
                      {/* Execution */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center border-4 border-black">
                          <Target size={24} />
                        </div>
                        <p className="text-xs text-center mt-2 font-semibold">Execution</p>
                      </div>

                      {/* Data */}
                      <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                        <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center border-4 border-black">
                          <BarChart size={24} />
                        </div>
                        <p className="text-xs text-center mt-2 font-semibold">Data</p>
                      </div>

                      {/* Insights */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                        <div className="w-24 h-24 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center border-4 border-black">
                          <Lightbulb size={24} />
                        </div>
                        <p className="text-xs text-center mt-2 font-semibold">Insights</p>
                      </div>

                      {/* Refinement */}
                      <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center border-4 border-black">
                          <Search size={24} />
                        </div>
                        <p className="text-xs text-center mt-2 font-semibold">Refinement</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
