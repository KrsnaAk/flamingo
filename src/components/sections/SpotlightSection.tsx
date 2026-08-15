"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function SpotlightSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLHeadingElement>(null);
  const text2Ref = useRef<HTMLHeadingElement>(null);
  const text3Ref = useRef<HTMLHeadingElement>(null);
  const flamingoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%", // 3 screens of scrolling
          scrub: 1,
          pin: true,
        },
      });

      // Flamingo zoom in and rotate
      tl.to(flamingoRef.current, {
        scale: 2.5,
        rotation: 10,
        yPercent: -10,
        ease: "power2.inOut",
        duration: 1,
      }, 0);

      // Text 1 reveal and hide
      tl.fromTo(text1Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.3 }, 0.1)
        .to(text1Ref.current, { opacity: 0, y: -50, duration: 0.3 }, 0.5);

      // Text 2 reveal and hide
      tl.fromTo(text2Ref.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.3 }, 0.6)
        .to(text2Ref.current, { opacity: 0, scale: 1.2, duration: 0.3 }, 1.0);

      // Text 3 reveal (stays until end)
      tl.fromTo(text3Ref.current, { opacity: 0, filter: "blur(20px)" }, { opacity: 1, filter: "blur(0px)", duration: 0.4 }, 1.1);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full bg-background overflow-hidden flex items-center justify-center">
      
      {/* Background glow */}
      <div className="absolute inset-0 bg-brand-pink/5 opacity-50 blur-[150px]" />

      {/* Typography layers (behind flamingo) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <h2 ref={text1Ref} className="absolute text-7xl md:text-[10rem] font-display font-black uppercase text-white/20 whitespace-nowrap">
          ONE FLOCK.
        </h2>
        <h2 ref={text2Ref} className="absolute text-7xl md:text-[10rem] font-display font-black uppercase text-brand-cyan/20 whitespace-nowrap">
          7,777 IDENTITIES.
        </h2>
        <h2 ref={text3Ref} className="absolute text-7xl md:text-[10rem] font-display font-black uppercase text-brand-pink/20 whitespace-nowrap">
          ONE COMMUNITY.
        </h2>
      </div>

      {/* The Flamingo Spotlight */}
      <div ref={flamingoRef} className="relative w-64 h-64 md:w-96 md:h-96 z-10 pointer-events-none">
        <Image 
          src="/flamingos/Flamingos_Glitch_Teaser_09.png"
          alt="Spotlight Flamingo"
          fill
          className="object-contain drop-shadow-[0_0_50px_rgba(255,20,147,0.4)]"
          priority
        />
      </div>
    </section>
  );
}
