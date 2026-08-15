"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
}

export function MagneticButton({ children, className, variant = "primary", ...props }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = buttonRef.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 font-display font-bold uppercase tracking-wider rounded-full transition-colors duration-300 overflow-hidden group magnetic";
  
  const variants = {
    primary: "bg-brand-pink text-white hover:bg-white hover:text-brand-pink shadow-[0_0_20px_rgba(255,20,147,0.4)]",
    secondary: "bg-brand-cyan text-background hover:bg-white hover:text-background shadow-[0_0_20px_rgba(0,255,255,0.4)]",
    outline: "border-2 border-white/20 hover:border-brand-pink text-white bg-transparent hover:bg-brand-pink/10",
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      {/* Glow effect on hover */}
      {variant === "primary" && (
        <span className="absolute inset-0 rounded-full bg-brand-pink opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
      )}
    </motion.button>
  );
}
