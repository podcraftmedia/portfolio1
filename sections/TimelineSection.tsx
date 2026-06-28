"use client";

import FadeInSection from "@/components/ui/FadeInSection";
import { motion } from "framer-motion";
import { Briefcase, Trophy, Rocket, GraduationCap } from "lucide-react";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: "briefcase" | "trophy" | "rocket" | "graduation";
  color: string;
}

export default function TimelineSection() {
  const timeline: TimelineEvent[] = [
    {
      year: "'22",
      title: "Digital Marketing Journey Begins",
      description: "Started exploring content creation and community building on social platforms",
      icon: "graduation",
      color: "from-blue-500 to-cyan-500",
    },
    {
      year: "'23",
      title: "First Product Launch Success",
      description: "Successfully launched and marketed 3 digital products, generating 10k+ community members",
      icon: "rocket",
      color: "from-purple-500 to-pink-500",
    },
    {
      year: "'24",
      title: "AI-Assisted Workflows",
      description: "Integrated AI tools into creative process, 3x productivity while maintaining quality",
      icon: "trophy",
      color: "from-green-500 to-emerald-500",
    },
    {
      year: "'25",
      title: "Performance Creative Specialist",
      description: "100+ video productions, landing pages, and campaigns driving measurable growth",
      icon: "briefcase",
      color: "from-orange-500 to-red-500",
    },
    {
      year: "'26",
      title: "Full-Stack Creative",
      description: "Combining strategy, design, video, copy, and analytics into one cohesive workflow",
      icon: "rocket",
      color: "from-accent to-green-400",
    },
  ];

  const getIcon = (iconName: string) => {
    const iconProps = { size: 24 };
    switch (iconName) {
      case "briefcase":
        return <Briefcase {...iconProps} />;
      case "trophy":
        return <Trophy {...iconProps} />;
      case "rocket":
        return <Rocket {...iconProps} />;
      case "graduation":
        return <GraduationCap {...iconProps} />;
      default:
        return <Briefcase {...iconProps} />;
    }
  };

  return (
    <section id="timeline" className="relative py-32 bg-gradient-to-b from-black via-zinc-900 to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Number */}
        <FadeInSection>
          <div className="text-center mb-8">
            <span className="text-6xl md:text-7xl font-bold text-zinc-800">04</span>
          </div>
        </FadeInSection>

        {/* Headline */}
        <FadeInSection>
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                Through The Years
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A journey from content creator to performance creative specialist
            </p>
          </div>
        </FadeInSection>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-transparent via-accent/30 to-transparent" />

          <div className="space-y-12 lg:space-y-24">
            {timeline.map((event, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div className="w-full lg:w-[calc(50%-2rem)]">
                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="group bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 hover:bg-zinc-900 hover:border-transparent transition-all duration-500 overflow-hidden"
                    >
                      {/* Gradient overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      />

                      <div className="relative z-10">
                        {/* Year badge */}
                        <div className="flex items-center gap-3 mb-4">
                          <span className={`text-4xl font-bold bg-gradient-to-br ${event.color} bg-clip-text text-transparent`}>
                            {event.year}
                          </span>
                          <div className={`p-2 bg-gradient-to-br ${event.color} rounded-lg`}>
                            {getIcon(event.icon)}
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-white mb-3">
                          {event.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-400 leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Center dot - desktop only */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                      className={`w-6 h-6 rounded-full bg-gradient-to-br ${event.color} border-4 border-black shadow-lg`}
                    />
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden lg:block w-[calc(50%-2rem)]" />
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>

        {/* Bottom tagline */}
        <FadeInSection delay={0.5}>
          <div className="mt-20 text-center">
            <p className="text-lg text-gray-500 font-mono">
              Every milestone is a{" "}
              <span className="text-accent">stepping stone</span> to the next
            </p>
          </div>
        </FadeInSection>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
    </section>
  );
}
