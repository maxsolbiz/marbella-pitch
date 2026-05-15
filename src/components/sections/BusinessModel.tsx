"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import {
  CreditCard,
  Star,
  Users,
  LineChart,
  Building2,
} from "lucide-react";

const streams = [
  {
    icon: CreditCard,
    title: "Agency Subscriptions",
    desc: "Recurring SaaS per broker/agency",
    model: "€199/mo per agency",
  },
  {
    icon: Star,
    title: "Premium Listings",
    desc: "Featured placement fees",
    model: "€49 per listing",
  },
  {
    icon: Users,
    title: "Lead Generation",
    desc: "Pay-per-lead for verified buyer intent",
    model: "€15 per lead",
  },
  {
    icon: LineChart,
    title: "Analytics Tools",
    desc: "Data intelligence add-on modules",
    model: "€99/mo per seat",
  },
  {
    icon: Building2,
    title: "Enterprise Dashboards",
    desc: "Custom white-label for large agencies",
    model: "Custom pricing",
  },
];

export default function BusinessModel() {
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
          <SectionLabel>Revenue Streams</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight font-semibold mb-4">
            Built to <span className="gold-gradient-text">Scale</span> from Day One
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {streams.map((stream, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card p-6 hover:border-gold/30 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                <stream.icon className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-semibold text-text-primary mb-1 text-sm">{stream.title}</h3>
              <p className="text-xs text-text-muted mb-4 flex-1">{stream.desc}</p>
              <div className="text-xs font-mono text-gold bg-gold/10 rounded-full px-3 py-1 inline-block self-start">
                {stream.model}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
