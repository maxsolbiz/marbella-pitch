"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const transformations = [
  { from: "Listings", to: "Intelligence" },
  { from: "Browsing", to: "Decisions" },
  { from: "Filters", to: "AI Conversation" },
];

export default function Differentiation() {
  return (
    <section className="py-28 relative bg-obsidian/30">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-5xl sm:text-7xl font-semibold text-text-primary mb-4 text-glow">
            We are NOT a portal.
          </h2>
          <p className="text-text-muted text-lg mb-16 max-w-xl mx-auto">
            We are an intelligence platform purpose-built for the future of Mediterranean real
            estate.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {transformations.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card p-6 gold-border-left hover:border-gold/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-text-muted text-lg line-through mb-3 opacity-60">{t.from}</div>
              <ArrowRight className="w-5 h-5 text-gold mx-auto mb-3" />
              <div className="text-text-primary font-display text-2xl gold-gradient-text font-semibold">
                {t.to}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
