"use client";

import { useState } from "react";
import FadeInSection from "@/components/ui/FadeInSection";
import { motion } from "framer-motion";
import { Mail, Phone, Link as LinkIcon, MapPin, Download, Check, Copy } from "lucide-react";

export default function ContactSection() {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("hgaikwad2003@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const roles = [
    "Performance Creative Executive",
    "Creative Strategist",
    "Content Strategist",
    "Campaign Executive",
    "Growth Marketing Executive",
    "Digital Marketing Executive",
    "SEO/SEO Content Associate",
    "Marketing Operations Associate",
  ];

  return (
    <section id="contact" className="relative py-32 bg-gradient-to-b from-black via-zinc-900 to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Number */}
        <FadeInSection>
          <div className="text-center mb-8">
            <span className="text-6xl md:text-7xl font-bold text-zinc-800">09</span>
          </div>
        </FadeInSection>

        {/* Headline */}
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                Let's Build Something
              </span>
              <br />
              <span className="bg-gradient-to-r from-accent via-green-400 to-accent bg-clip-text text-transparent">
                That Performs
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Open to opportunities where I can make an impact
            </p>
          </div>
        </FadeInSection>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Contact Info */}
          <FadeInSection delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Get In Touch
                </h3>
                <div className="space-y-4">
                  {/* Email */}
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:bg-zinc-900 hover:border-accent transition-all duration-300 group cursor-pointer"
                    onClick={copyEmail}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail size={24} className="text-black" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-500 mb-1">Email</p>
                      <p className="text-white font-medium group-hover:text-accent transition-colors">
                        hgaikwad2003@gmail.com
                      </p>
                    </div>
                    <button className="p-2 hover:bg-zinc-800 rounded-lg transition-colors">
                      {emailCopied ? (
                        <Check size={20} className="text-accent" />
                      ) : (
                        <Copy size={20} className="text-gray-400" />
                      )}
                    </button>
                  </motion.div>

                  {/* Phone */}
                  <motion.a
                    href="tel:+919867285205"
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:bg-zinc-900 hover:border-accent transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-500 mb-1">Phone</p>
                      <p className="text-white font-medium group-hover:text-accent transition-colors">
                        +91 9867285205
                      </p>
                    </div>
                  </motion.a>

                  {/* LinkedIn */}
                  <motion.a
                    href="https://linkedin.com/in/hrishikesh-gaikwad"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:bg-zinc-900 hover:border-accent transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <LinkIcon size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-500 mb-1">LinkedIn</p>
                      <p className="text-white font-medium group-hover:text-accent transition-colors">
                        linkedin.com/in/hrishikesh-gaikwad
                      </p>
                    </div>
                  </motion.a>

                  {/* Location */}
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-500 mb-1">Location</p>
                      <p className="text-white font-medium">
                        Mumbai, India
                      </p>
                      <p className="text-xs text-gray-400">
                        Remote-First · Global Opportunities
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* CTA Button */}
              <motion.a
                href="/cv.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-3 w-full p-5 bg-gradient-to-r from-accent to-green-600 hover:from-green-600 hover:to-accent text-black font-bold rounded-xl transition-all duration-300 shadow-lg shadow-accent/20"
              >
                <Download size={24} />
                Download Full CV
              </motion.a>
            </div>
          </FadeInSection>

          {/* Right: Target Roles */}
          <FadeInSection delay={0.3}>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Currently Open To
              </h3>
              <div className="space-y-3">
                {roles.map((role, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10, borderColor: "rgba(0, 255, 136, 0.5)" }}
                    className="flex items-center gap-4 p-4 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:bg-zinc-900/50 transition-all duration-300"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                    <p className="text-white font-medium">{role}</p>
                  </motion.div>
                ))}
              </div>

              {/* Availability Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mt-8 p-6 bg-gradient-to-br from-accent/10 to-green-600/10 border border-accent/30 rounded-2xl"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                  <p className="text-accent font-semibold text-lg">
                    Available Now
                  </p>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Ready to bring performance-first creative to your team. Let's
                  discuss how I can help drive growth and build systems that
                  scale.
                </p>
              </motion.div>
            </div>
          </FadeInSection>
        </div>

        {/* Bottom Tagline */}
        <FadeInSection delay={0.5}>
          <div className="text-center pt-12 border-t border-zinc-800">
            <p className="text-lg text-gray-400 font-mono">
              "Building performance creative systems that scale—
              <br />
              <span className="text-accent">one campaign at a time.</span>"
            </p>
          </div>
        </FadeInSection>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
