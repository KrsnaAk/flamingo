"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const GALLERY_IMAGES = [
  "/flamingos/Flamingos_Glitch_Teaser_06.png",
  "/flamingos/Flamingos_Glitch_Teaser_07.png",
  "/flamingos/Flamingos_Glitch_Teaser_08.png",
  "/flamingos/Flamingos_Glitch_Teaser_09.png",
  "/flamingos/Flamingos_Glitch_Teaser_10.png",
  "/flamingos/Flamingos_Glitch_Teaser_01.png",
  "/flamingos/Flamingos_Glitch_Teaser_02.png",
  "/flamingos/Flamingos_Glitch_Teaser_03.png",
];

export function HorizontalGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const scrollWrapper = scrollWrapperRef.current;

      if (!section || !scrollWrapper) return;

      const getScrollAmount = () => {
        let scrollWidth = scrollWrapper.scrollWidth;
        return -(scrollWidth - window.innerWidth);
      };

      const tween = gsap.to(scrollWrapper, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getScrollAmount() * -1}`,
          pin: true,

          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden bg-[#030305]">
      {/* Moving background text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 whitespace-nowrap opacity-[0.02] pointer-events-none">
        <h2 className="text-[20vw] font-display font-black uppercase tracking-tighter">
          FLAMINGOS FLAMINGOS FLAMINGOS
        </h2>
      </div>

      <div className="flex h-full items-center">
        <div ref={scrollWrapperRef} className="flex gap-12 px-[10vw]">
          {GALLERY_IMAGES.map((src, index) => (
            <div 
              key={index} 
              className="relative flex-shrink-0 w-[60vw] md:w-[35vw] lg:w-[25vw] aspect-[4/5] rounded-3xl overflow-hidden bg-white/5 border border-white/10 group cursor-none"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-brand-pink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              
              <Image
                src={src}
                alt={`Flamingo Gallery ${index}`}
                fill
                className="object-contain p-8 scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              
              {/* Optional glowing orb behind the image inside the card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-brand-cyan/20 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
