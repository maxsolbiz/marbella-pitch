"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

const phases = [
  {
    name: "Phase 1",
    location: "Marbella & Costa del Sol",
    status: "Active",
    badge: "bg-gold/20 text-gold border-gold/30",
    pulse: true,
  },
  {
    name: "Phase 2",
    location: "Spain → Portugal → UAE",
    status: "Planned",
    badge: "bg-teal/10 text-teal border-teal/20",
    pulse: false,
  },
  {
    name: "Phase 3",
    location: "EU Luxury Markets",
    status: "Future",
    badge: "bg-white/5 text-text-muted border-white/10",
    pulse: false,
  },
];

const markers = [
  { city: "Marbella", color: "bg-gold", phase: 1 },
  { city: "Lisbon", color: "bg-teal", phase: 2 },
  { city: "Dubai", color: "bg-teal", phase: 2 },
  { city: "Paris", color: "bg-white/20", phase: 3 },
  { city: "London", color: "bg-white/20", phase: 3 },
  { city: "Berlin", color: "bg-white/20", phase: 3 },
];

export default function Market() {
  return (
    <section id="market" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>Market Expansion</SectionLabel>
            <h2 className="font-display text-4xl sm:text-5xl leading-tight font-semibold mb-8">
              Starting in Marbella.{" "}
              <span className="gold-gradient-text">Scaling to the World.</span>
            </h2>

            <div className="space-y-4">
              {phases.map((phase, i) => (
                <div
                  key={i}
                  className="glass-card p-5 flex items-center justify-between hover:border-gold/30 transition-all"
                >
                  <div>
                    <div className="text-xs text-text-muted mb-1">{phase.name}</div>
                    <div className="font-semibold text-text-primary">{phase.location}</div>
                  </div>
                  <span
                    className={`text-xs px-3 py-1 rounded-full border ${phase.badge} ${
                      phase.pulse ? "animate-pulse-glow" : ""
                    }`}
                  >
                    {phase.status}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 aspect-square max-w-md mx-auto w-full relative overflow-hidden"
          >
            <div className="text-xs text-text-muted mb-4 text-center">Global Expansion Map</div>
            <div className="relative w-full h-[80%] bg-obsidian/50 rounded-xl overflow-hidden">
              <svg viewBox="0 0 400 300" className="w-full h-full">
                <ellipse cx="200" cy="150" rx="160" ry="100" fill="none" stroke="rgba(201,168,76,0.15)" strokeWidth="1" />
                <ellipse cx="200" cy="150" rx="100" ry="65" fill="none" stroke="rgba(201,168,76,0.1)" strokeWidth="1" />
                {markers.map((marker, i) => {
                  const positions = [
                    { cx: 200, cy: 140 },
                    { cx: 140, cy: 120 },
                    { cx: 300, cy: 180 },
                    { cx: 120, cy: 80 },
                    { cx: 150, cy: 70 },
                    { cx: 180, cy: 60 },
                  ];
                  return (
                    <g key={i}>
                      <circle cx={positions[i].cx} cy={positions[i].cy} r="4" className={marker.color} />
                      <circle
                        cx={positions[i].cx}
                        cy={positions[i].cy}
                        r="8"
                        className={`${marker.color} opacity-30`}
                      />
                      <text
                        x={positions[i].cx}
                        y={positions[i].cy - 12}
                        textAnchor="middle"
                        fill="#94A3B8"
                        fontSize="8"
                      >
                        {marker.city}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
