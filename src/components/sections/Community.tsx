"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/lib/config";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Community() {
  return (
    <section className="relative w-full py-40 bg-background overflow-hidden flex items-center justify-center">
      
      {/* Floating Flamingos Background */}
      <div className="absolute inset-0 pointer-events-none opacity-30 z-0">
        <motion.div
          animate={{ y: [-20, 20], rotate: [5, -5] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="absolute top-20 left-10 w-48 h-48 md:w-64 md:h-64"
        >
          <Image src="/flamingos/4.jpg" alt="Floating Flamingo" fill className="object-contain blur-[2px]" />
        </motion.div>
        
        <motion.div
          animate={{ y: [20, -20], rotate: [-5, 5] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-48 h-48 md:w-80 md:h-80"
        >
          <Image src="/flamingos/5.jpg" alt="Floating Flamingo" fill className="object-contain blur-[4px]" />
        </motion.div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-6xl md:text-9xl font-display font-black tracking-tighter uppercase text-white mb-12"
        >
          Join The <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-purple">Flock</span>
        </motion.h2>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <MagneticButton variant="secondary" onClick={() => window.open(siteConfig.links.twitter, '_blank')}>
            X (Twitter)
          </MagneticButton>
          <MagneticButton variant="outline" onClick={() => window.open(siteConfig.links.opensea, '_blank')}>
            OpenSea
          </MagneticButton>
        </div>
      </div>

    </section>
  );
}
