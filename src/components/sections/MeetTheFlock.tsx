"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const FLAMINGOS = [
  { id: 1, src: "/flamingos/Flamingos_Glitch_Teaser_01.png", alt: "Flamingo #1", yOffset: 0, scale: 1 },
  { id: 2, src: "/flamingos/Flamingos_Glitch_Teaser_02.png", alt: "Flamingo #2", yOffset: 50, scale: 0.9 },
  { id: 3, src: "/flamingos/Flamingos_Glitch_Teaser_03.png", alt: "Flamingo #3", yOffset: -30, scale: 1.1 },
  { id: 4, src: "/flamingos/Flamingos_Glitch_Teaser_04.png", alt: "Flamingo #4", yOffset: 80, scale: 0.8 },
  { id: 5, src: "/flamingos/Flamingos_Glitch_Teaser_05.png", alt: "Flamingo #5", yOffset: -10, scale: 1.05 },
];

export function MeetTheFlock() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section ref={containerRef} className="relative w-full py-32 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-brand-pink/5 opacity-50 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 z-10 relative"
        >
          <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter text-white uppercase mb-4">
            Meet The <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-cyan">Flock</span>
          </h2>
          <p className="text-xl text-white/70 font-sans tracking-wide">
            7,777 Flamingos. No two alike.
          </p>
        </motion.div>

        <div className="relative w-full min-h-[600px] flex items-center justify-center gap-4 md:gap-8 flex-wrap md:flex-nowrap">
          {FLAMINGOS.map((flamingo, index) => {
            const yTransform = index % 3 === 0 ? y1 : index % 3 === 1 ? y2 : y3;
            
            return (
              <motion.div
                key={flamingo.id}
                style={{ y: yTransform }}
                className="relative group w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 cursor-none"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-brand-pink rounded-2xl opacity-0 group-hover:opacity-40 blur-2xl transition-opacity duration-500" />
                
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    rotate: (index % 2 === 0 ? 5 : -5),
                    zIndex: 50 
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="w-full h-full relative z-10"
                >
                  {/* NFT Card */}
                  <div className="w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm p-4 transition-colors duration-300 group-hover:border-brand-pink/50">
                    <div className="relative w-full h-full">
                      <Image 
                        src={flamingo.src}
                        alt={flamingo.alt}
                        fill
                        className="object-contain drop-shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  
                  {/* Floating Metadata on Hover */}
                  <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-black/80 text-white text-sm font-mono px-4 py-2 rounded-full border border-white/20">
                    FLAMINGO #{String(flamingo.id).padStart(4, '0')}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
