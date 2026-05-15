"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import {
  Database,
  Copy,
  EyeOff,
  SearchSlash,
  Users,
  BrainCircuit,
} from "lucide-react";

const problems = [
  { icon: Database, title: "Outdated Listings", desc: "Days-old data kills deals" },
  { icon: Copy, title: "Duplicate Listings", desc: "Same property, 12 different prices" },
  { icon: EyeOff, title: "No Price Transparency", desc: "Opaque markets hide true value" },
  { icon: SearchSlash, title: "Weak Search", desc: "Filters that miss what buyers actually want" },
  { icon: Users, title: "Fragmented Brokers", desc: "No unified broker ecosystem" },
  { icon: BrainCircuit, title: "Zero AI Insights", desc: "Gut feel over data intelligence" },
];

export default function Problem() {
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
          <SectionLabel>The Problem</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight font-semibold mb-4">
            Broken by Design
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Current platforms in Spain fail investors and brokers at every step.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card p-6 group hover:border-gold/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
                <problem.icon className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="font-semibold text-text-primary mb-1">{problem.title}</h3>
              <p className="text-sm text-text-muted">{problem.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
