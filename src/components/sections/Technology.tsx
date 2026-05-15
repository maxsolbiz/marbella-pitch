"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { Map, Brain, Zap, Smartphone } from "lucide-react";

const pillars = [
  { icon: Map, title: "Mapbox UI", desc: "Precision geo-search for micro-location intelligence" },
  { icon: Brain, title: "AI Engine", desc: "Recommendation & scoring at property level" },
  { icon: Zap, title: "Scalable Backend", desc: "Built for thousands of concurrent broker sessions" },
  { icon: Smartphone, title: "Web + Mobile", desc: "Native apps with real-time sync" },
];

const techStack = [
  "Next.js",
  "Mapbox",
  "OpenAI",
  "PostgreSQL",
  "Redis",
  "React Native",
];

export default function Technology() {
  return (
    <section className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionLabel>Technology</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight font-semibold mb-4">
            Enterprise-Grade. <span className="gold-gradient-text">AI-Native.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto mb-12">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card p-6 hover:border-gold/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                <pillar.icon className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-semibold text-text-primary mb-1">{pillar.title}</h3>
              <p className="text-sm text-text-muted">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full border border-border text-xs font-mono text-text-muted bg-white/5"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
