"use client";

import { useState } from "react";
import GlowButton from "./GlowButton";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          role: formData.get("role"),
          message: formData.get("message"),
        }),
      });

      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card p-8 w-full max-w-md mx-auto space-y-5">
      <h4 className="text-lg font-display font-semibold text-gold">Send us a message</h4>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="w-full bg-white/5 border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 outline-none focus:border-gold/50 transition-colors"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="w-full bg-white/5 border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 outline-none focus:border-gold/50 transition-colors"
        required
      />

      <select
        name="role"
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
        name="message"
        placeholder="Your Message"
        rows={4}
        className="w-full bg-white/5 border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 outline-none focus:border-gold/50 transition-colors resize-none"
      />

      <GlowButton type="submit" className="w-full" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send Message →"}
      </GlowButton>

      {status === "success" && (
        <p className="text-center text-green-400 text-sm">✅ Message sent! We&apos;ll be in touch shortly.</p>
      )}
      {status === "error" && (
        <p className="text-center text-red-400 text-sm">❌ Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
