"use client";

import { useState } from "react";
import FadeInSection from "@/components/ui/FadeInSection";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, ExternalLink } from "lucide-react";

interface Video {
  id: string;
  title: string;
  category: string;
  platform: string;
  embedUrl: string;
  thumbnail?: string;
}

export default function VideoSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxVideo, setLightboxVideo] = useState<Video | null>(null);

  const categories = [
    "All",
    "Social Campaigns",
    "Product Videos",
    "Community Content",
    "Short-Form",
    "Educational",
    "Brand Content",
  ];

  // Sample videos - you'll replace these with actual video URLs
  const videos: Video[] = [
    {
      id: "1",
      title: "Community Growth Campaign - Instagram Reels Series",
      category: "Social Campaigns",
      platform: "Instagram",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    },
    {
      id: "2",
      title: "Product Launch - Landing Page Video",
      category: "Product Videos",
      platform: "YouTube",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    },
    {
      id: "3",
      title: "Educational Series - Content Strategy Tips",
      category: "Educational",
      platform: "YouTube Shorts",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    },
    {
      id: "4",
      title: "E-commerce UX Walkthrough",
      category: "Product Videos",
      platform: "YouTube",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    },
    {
      id: "5",
      title: "Real Estate Podcast - Episode Highlights",
      category: "Social Campaigns",
      platform: "Instagram",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    },
    {
      id: "6",
      title: "Brand Awareness - Facebook Campaign",
      category: "Social Campaigns",
      platform: "Facebook",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    },
    {
      id: "7",
      title: "AI-Assisted Creative Workflow Demo",
      category: "Educational",
      platform: "YouTube",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    },
    {
      id: "8",
      title: "Community Engagement - UGC Campaign",
      category: "Community Content",
      platform: "Multi-platform",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    },
    {
      id: "9",
      title: "Landing Page Copy - Before/After",
      category: "Educational",
      platform: "YouTube",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    },
  ];

  const filteredVideos =
    selectedCategory === "All"
      ? videos
      : videos.filter((video) => video.category === selectedCategory);

  return (
    <section id="videos" className="relative py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Number */}
        <FadeInSection>
          <div className="text-center mb-8">
            <span className="text-6xl md:text-7xl font-bold text-zinc-800">06</span>
          </div>
        </FadeInSection>

        {/* Headline */}
        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                Creative In Motion
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A selection of campaigns, content, and creative work
            </p>
            <p className="text-lg text-gray-500 mt-4">
              Watch my work in action—from short-form social content to full
              campaign executions
            </p>
          </div>
        </FadeInSection>

        {/* Category Filters */}
        <FadeInSection delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-accent text-black"
                    : "bg-zinc-900 text-gray-400 hover:bg-zinc-800 hover:text-white border border-zinc-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeInSection>

        {/* Video Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden cursor-pointer hover:border-accent transition-all duration-300"
                onClick={() => setLightboxVideo(video)}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video bg-zinc-800">
                  {video.thumbnail ? (
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Play size={48} className="text-gray-600" />
                    </div>
                  )}

                  {/* Play button overlay */}
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                      <Play size={24} className="text-black ml-1" fill="black" />
                    </div>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/80 backdrop-blur-sm text-xs font-medium text-accent rounded-full border border-accent/30">
                      {video.category}
                    </span>
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-500">Platform: {video.platform}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <FadeInSection delay={0.4}>
          <div className="mt-20 text-center">
            <p className="text-xl text-gray-400 mb-6">
              Want to see more? Let's create something together.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-black font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
              <ExternalLink size={20} />
            </a>
          </div>
        </FadeInSection>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
            onClick={() => setLightboxVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setLightboxVideo(null)}
                className="absolute -top-12 right-0 p-2 text-white hover:text-accent transition-colors"
              >
                <X size={32} />
              </button>

              {/* Video player */}
              <div className="relative aspect-video bg-black rounded-2xl overflow-hidden border border-zinc-800">
                <iframe
                  src={lightboxVideo.embedUrl}
                  title={lightboxVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

              {/* Video info */}
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {lightboxVideo.title}
                </h3>
                <p className="text-gray-400">
                  {lightboxVideo.category} · {lightboxVideo.platform}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
