"use client";

import { motion, useMotionValue, useTransform, animate, MotionValue } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}

export function AnimatedCounter({
  from,
  to,
  duration = 2,
  className = "",
  prefix = "",
  suffix = ""
}: AnimatedCounterProps) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, latest => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    const controls = animate(count, to, { duration });
    
    const unsubscribe = rounded.onChange(v => {
      setDisplayValue(v);
    });
    
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [count, rounded, to, duration]);

  return (
    <motion.span 
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {prefix}{displayValue}{suffix}
    </motion.span>
  );
} 