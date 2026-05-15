"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import GlowButton from "@/components/ui/GlowButton";
import ContactForm from "@/components/ui/ContactForm";
import { HandshakeIcon, Coins, Building2 } from "lucide-react";

const cards = [
  {
    icon: HandshakeIcon,
    title: "Strategic Partners",
    desc: "Technology, data, and distribution partners",
  },
  {
    icon: Coins,
    title: "Early Investors",
    desc: "Seed round open. High-growth proptech opportunity.",
  },
  {
    icon: Building2,
    title: "Pilot Agencies",
    desc: "Be first. Shape the product. Get founder pricing.",
  },
];

export default function CTA() {
  return (
    <section id="cta" className="py-28 relative" style={{
        background: "linear-gradient(180deg, var(--midnight), #05080f, var(--midnight))"
    }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-64 h-64 bg-gold/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionLabel>Get in Touch</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight font-semibold mb-6 max-w-4xl mx-auto">
            Build the Future of Mediterranean Real Estate.{" "}
            <span className="gold-gradient-text">With Us.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto mb-16">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card p-6 text-center hover:border-gold/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <card.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-semibold text-text-primary mb-1">{card.title}</h3>
              <p className="text-sm text-text-muted">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        <ContactForm />

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-2xl font-display font-bold text-gold">M·AI</span>
            <span className="text-sm text-text-muted">Marbella AI Property Intelligence</span>
          </div>
          <p className="text-xs text-text-muted">© {new Date().getFullYear()}. Transforming Costa del Sol real estate through artificial intelligence.</p>
        </motion.footer>
      </div>
    </section>
  );
}
