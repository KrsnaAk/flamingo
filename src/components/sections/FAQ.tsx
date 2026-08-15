"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { siteConfig } from "@/lib/config";

const FAQS = [
  {
    question: "What is Flamingos?",
    answer: `Flamingos is a premium NFT collection of ${siteConfig.supply} unique characters built on ${siteConfig.chain}.`,
  },
  {
    question: "How many Flamingos are there?",
    answer: `There is a strict maximum supply of ${siteConfig.supply} unique Flamingos.`,
  },
  {
    question: "Which chain is Flamingos launching on?",
    answer: `The collection is launching exclusively on ${siteConfig.chain}.`,
  },
  {
    question: "When is the mint?",
    answer: `The mint is scheduled for ${siteConfig.mintDate}.`,
  },
  {
    question: "How do I check my eligibility?",
    answer: "You can use the Eligibility Checker on this website to see if your wallet qualifies for the mint.",
  },
  {
    question: "Where can I mint?",
    answer: "Minting will happen directly on this website once the drop is live.",
  },
  {
    question: "How can I join the community?",
    answer: "Follow us on X (Twitter) and join our Discord to become part of the flock.",
  },
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter uppercase text-white">
            Questions?
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {FAQS.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`border border-white/10 rounded-2xl overflow-hidden transition-colors duration-300 ${isActive ? "bg-white/5 border-brand-pink/30" : "bg-transparent hover:bg-white/[0.02]"}`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-xl md:text-2xl font-display font-bold uppercase text-white">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 ml-4 p-2 rounded-full border transition-colors duration-300 ${isActive ? "border-brand-pink text-brand-pink" : "border-white/20 text-white/50"}`}>
                    {isActive ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, filter: "blur(10px)" }}
                      animate={{ height: "auto", opacity: 1, filter: "blur(0px)" }}
                      exit={{ height: 0, opacity: 0, filter: "blur(10px)" }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="p-6 pt-0 text-white/70 font-sans text-lg">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
