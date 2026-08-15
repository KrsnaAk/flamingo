"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { siteConfig } from "@/lib/config";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    if (latest > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-colors duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="flex items-center gap-2">
        <span className="text-2xl font-display font-black uppercase text-white tracking-tighter">
          {siteConfig.name}
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <a href="#about" className="text-sm font-mono uppercase text-white/70 hover:text-brand-pink transition-colors">About</a>
        <a href="#collection" className="text-sm font-mono uppercase text-white/70 hover:text-brand-pink transition-colors">Collection</a>
        <a href="#roadmap" className="text-sm font-mono uppercase text-white/70 hover:text-brand-pink transition-colors">Roadmap</a>
        <a href="#faq" className="text-sm font-mono uppercase text-white/70 hover:text-brand-pink transition-colors">FAQ</a>
      </nav>

    </motion.header>
  );
}
