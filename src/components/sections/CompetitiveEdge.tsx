"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { Check, X } from "lucide-react";

const comparisons = [
  { feature: "AI Property Discovery", us: true, them: false },
  { feature: "Micro-Location Intel", us: true, them: false },
  { feature: "Investment Scoring", us: true, them: false },
  { feature: "Foreign Buyer UX", us: true, them: false },
  { feature: "Broker Ecosystem", us: true, them: "Partial" },
  { feature: "Real-Time Data", us: true, them: false },
];

export default function CompetitiveEdge() {
  return (
    <section className="py-28 relative bg-obsidian/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionLabel>Why We Win</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight font-semibold mb-4">
            Intelligence That <span className="gold-gradient-text">Others Don&apos;t Have</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto overflow-x-auto"
        >
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border/50">
                <th className="py-4 pr-4 text-sm font-medium text-text-muted">Feature</th>
                <th className="py-4 px-4 text-sm font-semibold text-gold text-center">Marbella AI</th>
                <th className="py-4 pl-4 text-sm font-medium text-text-muted text-center">
                  Traditional Portals
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, i) => (
                <tr key={i} className="border-b border-border/20">
                  <td className="py-4 pr-4 text-sm text-text-primary">{row.feature}</td>
                  <td className="py-4 px-4 text-center">
                    {row.us === true ? (
                      <Check className="w-5 h-5 text-gold inline" />
                    ) : (
                      <span className="text-xs text-gold/60">{row.us}</span>
                    )}
                  </td>
                  <td className="py-4 pl-4 text-center">
                    {row.them === false ? (
                      <X className="w-5 h-5 text-red-400/60 inline" />
                    ) : (
                      <span className="text-xs text-text-muted">{row.them}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
