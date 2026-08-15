"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function MintSection() {
  return (
    <section className="relative w-full py-32 bg-[#020202] border-y border-white/5">
      <div className="max-w-5xl mx-auto px-4">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-white/5 p-12 md:p-16 rounded-3xl border border-white/10 relative overflow-hidden">
          
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/20 via-transparent to-brand-cyan/20 opacity-30 animate-pulse" />
          
          <div className="relative z-10 flex-1 text-center md:text-left">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-display font-black uppercase text-white mb-4"
            >
              {siteConfig.supply} Flamingos
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/70 font-sans mb-2"
            >
              Coming to {siteConfig.chain}.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-brand-cyan font-mono tracking-widest uppercase"
            >
              Mint Date: {siteConfig.mintDate}
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto"
          >
            <MagneticButton variant="primary" className="w-full md:w-auto" onClick={() => window.open(siteConfig.mintUrl, "_blank")}>
              Mint Flamingo
            </MagneticButton>
            <MagneticButton variant="outline" className="w-full md:w-auto" onClick={() => window.open(siteConfig.eligibilityUrl, "_blank")}>
              Check Eligibility
            </MagneticButton>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
