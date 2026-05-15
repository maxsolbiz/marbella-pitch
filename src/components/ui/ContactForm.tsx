"use client";

import { useState } from "react";
import GlowButton from "./GlowButton";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", role: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card p-8 w-full max-w-md mx-auto space-y-5">
      <h4 className="text-lg font-display font-semibold text-gold">Send us a message</h4>

      <input
        type="text"
        placeholder="Your Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full bg-white/5 border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 outline-none focus:border-gold/50 transition-colors"
        required
      />

      <input
        type="email"
        placeholder="Your Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full bg-white/5 border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 outline-none focus:border-gold/50 transition-colors"
        required
      />

      <select
        value={form.role}
        onChange={(e) => setForm({ ...form, role: e.target.value })}
        className="w-full bg-white/5 border border-border rounded-lg px-4 py-3 text-sm text-text-primary outline-none focus:border-gold/50 transition-colors"
      >
        <option value="" disabled className="bg-obsidian">
          Select Role
        </option>
        <option value="broker" className="bg-obsidian">
          Broker
        </option>
        <option value="investor" className="bg-obsidian">
          Investor
        </option>
        <option value="partner" className="bg-obsidian">
          Partner
        </option>
        <option value="other" className="bg-obsidian">
          Other
        </option>
      </select>

      <textarea
        placeholder="Your Message"
        rows={4}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="w-full bg-white/5 border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 outline-none focus:border-gold/50 transition-colors resize-none"
      />

      {sent ? (
        <p className="text-center text-gold text-sm">Message sent! We&apos;ll be in touch.</p>
      ) : (
        <GlowButton type="submit" className="w-full">
          Send Message →
        </GlowButton>
      )}
    </form>
  );
}
