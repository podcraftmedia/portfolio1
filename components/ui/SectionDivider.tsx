"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SectionDivider() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="relative py-16 overflow-hidden">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent origin-center"
      />
      
      {/* Animated dots */}
      <div className="absolute inset-0 flex items-center justify-center gap-2">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
            className="w-2 h-2 bg-accent rounded-full"
          />
        ))}
      </div>
    </div>
  );
}
