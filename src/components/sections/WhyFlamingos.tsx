"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const FEATURES = [
  {
    id: "01",
    title: "7,777 UNIQUE",
    description: "A collection built around individuality. No two Flamingos are exactly alike.",
    color: "from-brand-pink to-transparent",
  },
  {
    id: "02",
    title: "ROBINHOOD CHAIN",
    description: "Built for fast, low-cost on-chain ownership.",
    color: "from-brand-cyan to-transparent",
  },
  {
    id: "03",
    title: "COMMUNITY FIRST",
    description: "The flock grows together. Holders receive exclusive benefits.",
    color: "from-brand-purple to-transparent",
  },
  {
    id: "04",
    title: "THE DROP",
    description: "Your Flamingo is waiting. Check your eligibility to join.",
    color: "from-[#00ff88] to-transparent",
  },
];

export function WhyFlamingos() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section ref={containerRef} className="relative w-full py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          style={{ scale }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-8xl font-display font-black tracking-tighter uppercase text-white">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-cyan">Flamingos</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 overflow-hidden cursor-none hover:border-white/30 transition-colors"
            >
              {/* Background Glow */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${feature.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-700`} />
              
              <div className="relative z-10">
                <span className="text-4xl md:text-6xl font-display font-black text-white/20 mb-6 block">
                  {feature.id}
                </span>
                <h3 className="text-2xl md:text-4xl font-display font-bold text-white uppercase mb-4 tracking-wide group-hover:text-brand-pink transition-colors">
                  {feature.title}
                </h3>
                <p className="text-lg text-white/60 font-sans font-light">
                  {feature.description}
                </p>
              </div>

              {/* Decorative line */}
              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-brand-pink to-brand-cyan"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
