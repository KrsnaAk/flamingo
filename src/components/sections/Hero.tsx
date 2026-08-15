"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Particles } from "@/components/ui/Particles";
import { siteConfig } from "@/lib/config";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const flamingoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero scroll transformation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
        },
      });

      tl.to(flamingoRef.current, {
        scale: 0.4,
        yPercent: -20,
        rotation: 15,
        ease: "none",
      }, 0)
      .to(textRef.current, {
        y: -100,
        opacity: 0,
        filter: "blur(10px)",
        ease: "none",
      }, 0);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-pink/20 via-background/90 to-background z-0" />
      <Particles count={300} className="z-0 opacity-50" />
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4 h-full">
        
        {/* Animated Flamingo */}
        <div ref={flamingoRef} className="relative w-64 h-64 md:w-96 md:h-96 mb-12">
          {/* Subtle halo glow */}
          <div className="absolute inset-0 rounded-full bg-brand-pink/30 blur-[100px] animate-pulse" />
          
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 2, -2, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-full h-full relative"
          >
            {/* Placeholder image tag for the supplied NFT artwork */}
            <Image 
              src="/flamingos/hero-flamingo.png" 
              alt="Hero Flamingo" 
              fill 
              className="object-contain drop-shadow-[0_0_30px_rgba(255,20,147,0.3)]" 
              priority
            />
          </motion.div>
        </div>

        {/* Text content */}
        <div ref={textRef} className="flex flex-col items-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-pink to-brand-cyan drop-shadow-lg uppercase"
          >
            {siteConfig.name}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-4 text-xl md:text-2xl text-white/80 font-medium uppercase tracking-widest"
          >
            {siteConfig.supply} Unique NFTs
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-2 text-sm md:text-base text-brand-cyan/80 font-mono uppercase tracking-[0.2em]"
          >
            Coming to {siteConfig.chain}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center gap-6 mt-12"
          >
            <MagneticButton variant="primary" onClick={() => window.open(siteConfig.eligibilityUrl, "_blank")}>
              Check Eligibility
            </MagneticButton>
            <MagneticButton variant="outline" onClick={() => window.open(siteConfig.mintUrl, "_blank")}>
              View Collection
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
