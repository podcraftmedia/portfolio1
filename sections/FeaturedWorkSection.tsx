"use client";

import { useState } from "react";
import FadeInSection from "@/components/ui/FadeInSection";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Award, TrendingUp, Users, DollarSign } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  results: {
    icon: "award" | "trending" | "users" | "dollar";
    label: string;
    value: string;
  }[];
  thumbnail: string;
  color: string;
  tags: string[];
}

export default function FeaturedWorkSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "1",
      title: "Community Growth Campaign",
      category: "Social Media",
      description: "Multi-platform campaign combining organic content, UGC strategy, and paid amplification to grow community from 0 to 10,000+ engaged members",
      results: [
        { icon: "users", label: "Members", value: "10,000+" },
        { icon: "trending", label: "Engagement", value: "+340%" },
        { icon: "dollar", label: "CAC", value: "$0.12" },
      ],
      thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
      color: "from-blue-500 to-cyan-500",
      tags: ["Instagram", "Facebook", "Content Strategy", "Community Building"],
    },
    {
      id: "2",
      title: "Product Launch Videos",
      category: "Video Production",
      description: "Complete video production suite for digital product launch: explainer video, social teasers, testimonial series, and launch day content",
      results: [
        { icon: "trending", label: "Views", value: "50k+" },
        { icon: "users", label: "Conversions", value: "8.3%" },
        { icon: "award", label: "Watch Time", value: "72%" },
      ],
      thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop",
      color: "from-purple-500 to-pink-500",
      tags: ["Video Editing", "Motion Graphics", "Storytelling", "DaVinci Resolve"],
    },
    {
      id: "3",
      title: "Landing Page Optimization",
      category: "Conversion Design",
      description: "Data-driven redesign of high-traffic landing pages using A/B testing, heatmap analysis, and conversion copywriting",
      results: [
        { icon: "trending", label: "CVR Increase", value: "+127%" },
        { icon: "dollar", label: "Revenue", value: "+$45k/mo" },
        { icon: "users", label: "Bounce Rate", value: "-38%" },
      ],
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      color: "from-green-500 to-emerald-500",
      tags: ["Copywriting", "UX Design", "A/B Testing", "Analytics"],
    },
    {
      id: "4",
      title: "Real Estate Podcast Production",
      category: "Content Production",
      description: "End-to-end podcast production: recording, editing, show notes, social clips, and distribution strategy",
      results: [
        { icon: "users", label: "Subscribers", value: "1,200+" },
        { icon: "trending", label: "Episodes", value: "24" },
        { icon: "award", label: "Rating", value: "4.8★" },
      ],
      thumbnail: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=800&h=600&fit=crop",
      color: "from-orange-500 to-red-500",
      tags: ["Podcast", "Audio Production", "Video Clips", "Social Media"],
    },
    {
      id: "5",
      title: "E-Commerce UGC Campaign",
      category: "User-Generated Content",
      description: "Designed and executed UGC campaign including creator outreach, brief creation, content QA, and performance tracking",
      results: [
        { icon: "users", label: "Creators", value: "30+" },
        { icon: "trending", label: "Content Pieces", value: "120+" },
        { icon: "dollar", label: "ROAS", value: "4.2x" },
      ],
      thumbnail: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=800&h=600&fit=crop",
      color: "from-yellow-500 to-orange-500",
      tags: ["UGC", "Creator Economy", "E-Commerce", "Performance Marketing"],
    },
    {
      id: "6",
      title: "AI-Assisted Content Workflow",
      category: "Innovation",
      description: "Built custom AI workflow using Claude, Gemini, and ChatGPT for content ideation, scriptwriting, and optimization at scale",
      results: [
        { icon: "trending", label: "Speed", value: "3x faster" },
        { icon: "award", label: "Quality", value: "Same/Better" },
        { icon: "users", label: "Output", value: "+200%" },
      ],
      thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      color: "from-accent to-green-400",
      tags: ["AI Tools", "Automation", "Content Strategy", "Innovation"],
    },
  ];

  const getResultIcon = (iconName: string) => {
    const iconProps = { size: 20 };
    switch (iconName) {
      case "award":
        return <Award {...iconProps} />;
      case "trending":
        return <TrendingUp {...iconProps} />;
      case "users":
        return <Users {...iconProps} />;
      case "dollar":
        return <DollarSign {...iconProps} />;
      default:
        return <Award {...iconProps} />;
    }
  };

  return (
    <section id="work" className="relative py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Number */}
        <FadeInSection>
          <div className="text-center mb-8">
            <span className="text-6xl md:text-7xl font-bold text-zinc-800">05</span>
          </div>
        </FadeInSection>

        {/* Headline */}
        <FadeInSection>
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                Featured Work
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A selection of campaigns and projects that drove real business results
            </p>
          </div>
        </FadeInSection>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <FadeInSection key={project.id} delay={index * 0.1}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden cursor-pointer hover:border-transparent transition-all duration-500"
                onClick={() => setSelectedProject(project)}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 bg-gradient-to-r ${project.color} text-white text-xs font-medium rounded-full`}>
                      {project.category}
                    </span>
                  </div>

                  {/* View overlay */}
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink size={32} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Quick Results */}
                  <div className="flex flex-wrap gap-3 mb-4">
                    {project.results.slice(0, 2).map((result, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className={`p-1 bg-gradient-to-br ${project.color} rounded`}>
                          {getResultIcon(result.icon)}
                        </div>
                        <span className="text-sm font-semibold text-white">
                          {result.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-zinc-800 text-xs text-gray-400 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Corner accent */}
                <div
                  className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${project.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`}
                />
              </motion.div>
            </FadeInSection>
          ))}
        </div>

        {/* CTA */}
        <FadeInSection delay={0.4}>
          <div className="mt-20 text-center">
            <p className="text-xl text-gray-400 mb-6">
              Ready to create something impactful?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-black font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Let's Talk
              <ExternalLink size={20} />
            </a>
          </div>
        </FadeInSection>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute -top-12 right-0 px-6 py-2 bg-zinc-900 hover:bg-zinc-800 text-white rounded-full border border-zinc-700 hover:border-accent transition-all"
              >
                Close
              </button>

              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
                {/* Hero image */}
                <div className="relative aspect-video">
                  <img
                    src={selectedProject.thumbnail}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${selectedProject.color} opacity-20`} />
                </div>

                {/* Content */}
                <div className="p-8 md:p-12">
                  {/* Category */}
                  <div className="mb-4">
                    <span className={`px-4 py-2 bg-gradient-to-r ${selectedProject.color} text-white text-sm font-medium rounded-full`}>
                      {selectedProject.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    {selectedProject.title}
                  </h2>

                  {/* Description */}
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  {/* Results */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Results</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {selectedProject.results.map((result, idx) => (
                        <div
                          key={idx}
                          className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6"
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`p-2 bg-gradient-to-br ${selectedProject.color} rounded-lg`}>
                              {getResultIcon(result.icon)}
                            </div>
                            <span className="text-sm text-gray-400">
                              {result.label}
                            </span>
                          </div>
                          <div className={`text-3xl font-bold bg-gradient-to-r ${selectedProject.color} bg-clip-text text-transparent`}>
                            {result.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-white mb-4">Tools & Skills</h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-zinc-800 border border-zinc-700 text-sm text-gray-300 rounded-full hover:border-accent transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
    </section>
  );
}
