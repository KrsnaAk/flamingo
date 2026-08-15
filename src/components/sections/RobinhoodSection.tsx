"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function RobinhoodSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);

  return (
    <section ref={containerRef} className="relative w-full h-[150vh] bg-[#020202] overflow-hidden flex items-center justify-center">
      {/* Abstract Robinhood Environment - glowing network lines */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,255,0.1)_0%,_transparent_50%)]" />
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/50 to-transparent" />
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-brand-cyan/50 to-transparent" />
        
        {/* Animated grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]" />
      </div>

      <motion.div 
        style={{ y, opacity, scale }}
        className="relative z-10 flex flex-col items-center text-center px-4"
      >
        <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-display font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 uppercase leading-none">
          Built For
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-[#00ff88]">Robinhood</span>
        </h2>
        
        <p className="mt-8 text-xl md:text-3xl text-white/80 font-sans max-w-2xl font-light">
          7,777 Flamingos landing on the fastest, lowest-cost chain. 
        </p>

        {/* Abstract floating nodes representing the chain */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 rounded-full bg-brand-cyan shadow-[0_0_20px_#00ffff]"
              animate={{
                x: [Math.random() * 400 - 200, Math.random() * 400 - 200, Math.random() * 400 - 200],
                y: [Math.random() * 400 - 200, Math.random() * 400 - 200, Math.random() * 400 - 200],
                opacity: [0.2, 1, 0.2]
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
