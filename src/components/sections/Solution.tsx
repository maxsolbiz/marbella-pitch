"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import {
  Map,
  Bot,
  TrendingUp,
  Sparkles,
  Building2,
  Globe,
} from "lucide-react";

const features = [
  { icon: Map, title: "Smart Map Search", desc: "Natural language meets geospatial intelligence" },
  { icon: Bot, title: "AI Property Assistant", desc: "Conversational property discovery at scale" },
  { icon: TrendingUp, title: "Investment Analytics", desc: "ROI scoring for every listing" },
  { icon: Sparkles, title: "Recommendations", desc: "Personalized matches for buyer profiles" },
  { icon: Building2, title: "Broker Tools", desc: "CRM, catalogs, and lead pipelines" },
  { icon: Globe, title: "Multi-Language", desc: "Spanish, English, Arabic, Russian, French, German" },
];

export default function Solution() {
  return (
    <section id="solution" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionLabel>The Solution</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight font-semibold mb-4">
            One Platform. <span className="gold-gradient-text">Total Intelligence.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card p-6 group hover:border-gold/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                <feature.icon className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-semibold text-text-primary mb-1">{feature.title}</h3>
              <p className="text-sm text-text-muted">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
