"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export default function StatCard({ value, label, className }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const numValue = parseInt(value.replace(/[^0-9]/g, ""));
  const suffix = value.replace(/[0-9.]/g, "");
  const prefix = value.startsWith("€") ? "€" : "";

  useEffect(() => {
    if (!isInView || !numValue) return;
    let start = 0;
    const duration = 2000;
    const steps = 60;
    const increment = numValue / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= numValue) {
        setCount(numValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, numValue]);

  return (
    <div ref={ref} className={cn("text-center", className)}>
      <div className="text-2xl font-bold font-display text-gold">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-sm text-text-muted mt-1">{label}</div>
    </div>
  );
}
