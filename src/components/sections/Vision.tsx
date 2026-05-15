"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { Search, BarChart3, Target } from "lucide-react";

const steps = [
  { icon: Search, title: "Browsing", desc: "Explore listings across Costa del Sol" },
  { icon: BarChart3, title: "Analysis", desc: "AI-driven insights on every property" },
  { icon: Target, title: "Decision", desc: "Confident, data-backed investment choices" },
];

export default function Vision() {
  return (
    <section id="vision" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>Our Vision</SectionLabel>
            <h2 className="font-display text-4xl sm:text-5xl leading-tight font-semibold mb-6">
              From Browsing Listings to{" "}
              <span className="gold-gradient-text">Intelligent Investment</span> Decisions
            </h2>
            <p className="text-text-muted text-lg leading-relaxed">
              Marbella AI transforms how real estate is discovered, analyzed, and acquired on the
              Costa del Sol. We replace fragmented portals with a single intelligence layer that
              serves brokers, buyers, and investors alike.
            </p>
          </motion.div>

          <div className="relative">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative flex items-start gap-4 mb-8 last:mb-0"
              >
                <div className="glass-card p-4 shrink-0">
                  <step.icon className="w-6 h-6 text-gold" />
                </div>
                <div className="glass-card p-4 flex-1">
                  <div className="font-semibold text-text-primary mb-1">{step.title}</div>
                  <div className="text-sm text-text-muted">{step.desc}</div>
                </div>
                {i < steps.length - 1 && (
                  <div className="absolute left-[2.1rem] top-16 w-px h-8 bg-gradient-to-b from-gold/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
