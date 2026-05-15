"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

const phases = [
  {
    name: "Phase 1 — MVP Launch",
    period: "Weeks 1-10",
    status: "Active",
    badge: "bg-gold/20 text-gold border-gold/30",
    pulse: true,
    milestones: [
      "Data ingestion pipeline",
      "Map UI with property markers",
      "Basic search & filters",
      "Broker onboarding portal",
    ],
  },
  {
    name: "Phase 2 — AI Layer",
    period: "Weeks 10-18",
    status: "Next",
    badge: "bg-teal/10 text-teal border-teal/20",
    pulse: false,
    milestones: [
      "AI Assistant & chatbot",
      "Investment scoring engine",
      "Personalized recommendations",
    ],
  },
  {
    name: "Phase 3 — Scale",
    period: "Week 18+",
    status: "Planned",
    badge: "bg-white/5 text-text-muted border-white/10",
    pulse: false,
    milestones: [
      "Mobile apps (iOS + Android)",
      "Portugal / UAE expansion",
      "Enterprise deals & white-label",
    ],
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionLabel>Roadmap</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight font-semibold mb-4">
            From Zero to Market Leader in{" "}
            <span className="gold-gradient-text">6 Months</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute left-[1.375rem] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent" />

            {phases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`relative flex items-start gap-6 mb-12 last:mb-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:flex flex-1" />

                <div className="relative z-10 shrink-0">
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center border-2 ${
                      phase.pulse
                        ? "bg-gold/20 border-gold animate-pulse-glow"
                        : "bg-white/5 border-border"
                    }`}
                  >
                    <div className="w-3 h-3 rounded-full bg-gold" />
                  </div>
                </div>

                <div className="glass-card p-6 flex-1 max-w-md hover:border-gold/30 transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-text-primary">{phase.name}</h3>
                    <span
                      className={`text-xs px-3 py-1 rounded-full border ${phase.badge} ${
                        phase.pulse ? "animate-pulse-glow" : ""
                      }`}
                    >
                      {phase.status}
                    </span>
                  </div>
                  <div className="text-xs text-text-muted mb-3">{phase.period}</div>
                  <ul className="space-y-1.5">
                    {phase.milestones.map((m, j) => (
                      <li key={j} className="text-sm text-text-muted flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-gold/50" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
