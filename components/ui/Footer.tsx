"use client";

import { motion } from "framer-motion";
import { Heart, Link as LinkIcon, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Work", href: "#impact" },
    { label: "Videos", href: "#videos" },
    { label: "About", href: "#philosophy" },
    { label: "Toolkit", href: "#toolkit" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-black border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-4 bg-gradient-to-r from-accent to-green-600 bg-clip-text text-transparent"
            >
              Hrishikesh Gaikwad
            </motion.h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Performance Creative & Growth Marketing Specialist
            </p>
            <p className="text-gray-500 text-xs leading-relaxed italic">
              Building performance creative systems that scale—one campaign at a
              time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-3">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="block text-gray-400 hover:text-accent transition-colors duration-200 text-sm"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="https://linkedin.com/in/hrishikesh-gaikwad"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                viewport={{ once: true }}
                className="block text-gray-400 hover:text-accent transition-colors duration-200 text-sm"
              >
                LinkedIn
              </motion.a>
              <motion.a
                href="/cv.pdf"
                download
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: (navLinks.length + 1) * 0.1 }}
                viewport={{ once: true }}
                className="block text-gray-400 hover:text-accent transition-colors duration-200 text-sm"
              >
                CV Download
              </motion.a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:hgaikwad2003@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors duration-200 text-sm"
              >
                <Mail size={16} />
                hgaikwad2003@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/hrishikesh-gaikwad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors duration-200 text-sm"
              >
                <LinkIcon size={16} />
                LinkedIn Profile
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://linkedin.com/in/hrishikesh-gaikwad"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zinc-900 hover:bg-accent border border-zinc-800 hover:border-accent rounded-lg flex items-center justify-center transition-all duration-300 group"
              >
                <LinkIcon size={18} className="text-gray-400 group-hover:text-black" />
              </a>
              <a
                href="mailto:hgaikwad2003@gmail.com"
                className="w-10 h-10 bg-zinc-900 hover:bg-accent border border-zinc-800 hover:border-accent rounded-lg flex items-center justify-center transition-all duration-300 group"
              >
                <Mail size={18} className="text-gray-400 group-hover:text-black" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-sm">
                © 2026 Hrishikesh Gaikwad. All rights reserved.
              </p>
              <p className="text-gray-600 text-xs mt-1">
                Performance Creative & Growth Marketing Specialist
              </p>
            </div>

            {/* Credits */}
            <div className="text-center md:text-right">
              <p className="text-gray-600 text-xs mb-1">
                Design inspired by{" "}
                <a
                  href="https://lusion.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  Lusion.co
                </a>{" "}
                &{" "}
                <a
                  href="https://breedlove.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  Breedlove.xyz
                </a>
              </p>
              <p className="text-gray-600 text-xs">
                Built with{" "}
                <Heart size={12} className="inline text-red-500" fill="currentColor" />{" "}
                using Next.js · Three.js · Framer Motion
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-accent hover:bg-accent-hover text-black rounded-full flex items-center justify-center shadow-lg shadow-accent/20 transition-all duration-300 z-40"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp size={24} />
      </motion.button>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
    </footer>
  );
}
