"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/lib/config";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Eligibility() {
  return (
    <section className="relative w-full py-40 overflow-hidden bg-background flex flex-col items-center justify-center">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-brand-pink/5 opacity-50 blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(255,20,147,0.15)_0%,_transparent_70%)] pointer-events-none" />

      {/* Dramatic Flamingo Composition behind the text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] pointer-events-none opacity-20">
        <motion.div
          animate={{ rotate: 5, y: -20 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="absolute right-0 top-0 w-96 h-96 blur-sm"
        >
          <Image src="/flamingos/2.jpg" alt="Flamingo bg" fill className="object-contain" />
        </motion.div>
        
        <motion.div
          animate={{ rotate: -5, y: 20 }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }}
          className="absolute left-0 bottom-0 w-96 h-96 blur-sm"
        >
          <Image src="/flamingos/3.jpg" alt="Flamingo bg" fill className="object-contain" />
        </motion.div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-8xl font-display font-black tracking-tighter uppercase text-white mb-6"
        >
          Are you in the flock?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-white/70 font-sans font-light mb-12"
        >
          Check your eligibility for the Flamingos mint.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="relative group"
        >
          {/* Particles moving toward button on hover (simulated with CSS glow expansion) */}
          <div className="absolute inset-0 bg-brand-pink/0 group-hover:bg-brand-pink/20 rounded-full blur-2xl transition-all duration-700 scale-100 group-hover:scale-150" />
          
          <MagneticButton variant="primary" className="px-12 py-6 text-xl" onClick={() => window.open(siteConfig.eligibilityUrl, "_blank")}>
            Check Eligibility
          </MagneticButton>
        </motion.div>
      </div>

    </section>
  );
}
