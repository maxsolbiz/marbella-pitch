"use client";

import { cn } from "@/lib/utils";
import { useCountUp } from "@/lib/useCountUp";

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export default function StatCard({ value, label, className }: StatCardProps) {
  const parseTarget = (val: string): number => {
    const cleaned = val.replace(/[^0-9.]/g, "");
    return parseFloat(cleaned) || 0;
  };

  const target = parseTarget(value);
  const suffix = value.replace(/[0-9.,B]/g, "").trim();
  const prefix = value.startsWith("€") ? "€" : "";

  const isDecimal = value.includes(".");
  const duration = target >= 100 ? 1800 : target >= 10 ? 1500 : 1200;

  const { count, ref } = useCountUp(target, duration);

  return (
    <div ref={ref} className={cn("text-center", className)}>
      <div className="text-2xl font-bold font-display text-gold">
        {prefix}
        {isDecimal ? (count / 10).toFixed(1) : count}
        {suffix}
      </div>
      <div className="text-sm text-text-muted mt-1">{label}</div>
    </div>
  );
}
