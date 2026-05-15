"use client";

import { motion } from "framer-motion";
import GlowButton from "@/components/ui/GlowButton";
import StatCard from "@/components/ui/StatCard";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-12">
      <div className="absolute inset-0 bg-gradient-to-br from-midnight via-midnight to-obsidian animate-gradient-mesh" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <div className="text-[10px] sm:text-xs tracking-[0.25em] text-text-muted uppercase mb-6 font-medium">
              Marbella · Costa del Sol · Spain
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl leading-[0.95] font-semibold mb-6">
              AI Property
              <br />
              <span className="gold-gradient-text">Intelligence</span>
              <br />
              Platform
            </h1>

            <p className="text-lg text-text-muted max-w-lg mb-8 leading-relaxed">
              Next-generation real estate decision platform for Costa del Sol
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12">
              <GlowButton size="lg" onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}>
                Request Demo
              </GlowButton>
              <GlowButton
                variant="ghost"
                size="lg"
                onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Deck →
              </GlowButton>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <StatCard value="€2.8B+" label="Market Cap" />
              <StatCard value="300+" label="Brokers Target" />
              <StatCard value="6" label="Languages Support" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex w-full lg:w-1/2 justify-center"
          >
            <div className="glass-card p-6 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-xs text-text-muted ml-2">AI Dashboard · Live</span>
              </div>

              <div className="aspect-[4/3] bg-obsidian/50 rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-xs text-text-muted">Marbella · 296 properties</div>
                  <div className="text-xs text-gold font-mono">● Live</div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {[
                    { price: "€2,450,000", beds: 4, area: "320m²" },
                    { price: "€1,890,000", beds: 3, area: "245m²" },
                    { price: "€3,200,000", beds: 5, area: "450m²" },
                    { price: "€975,000", beds: 2, area: "120m²" },
                  ].map((item, i) => (
                    <div key={i} className="bg-midnight/60 rounded-lg p-3 border border-border/30">
                      <div className="text-gold font-mono text-sm font-semibold">{item.price}</div>
                      <div className="text-xs text-text-muted mt-1">
                        {item.beds} beds · {item.area}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-border/20">
                  <div className="flex items-center gap-2 text-xs text-teal">
                    <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                    AI is analyzing 847 properties...
                    <span className="animate-blinking-cursor">|</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border border-gold/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-gold animate-float" />
        </div>
      </motion.div>
    </section>
  );
}
