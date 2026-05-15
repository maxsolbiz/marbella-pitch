"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import GlowButton from "./GlowButton";

const links = [
  { label: "Vision", href: "#vision" },
  { label: "Solution", href: "#solution" },
  { label: "Market", href: "#market" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Contact", href: "#cta" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl font-display font-bold text-gold">M·AI</span>
          <span className="text-sm font-medium text-text-primary hidden sm:inline">
            Marbella AI
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-muted hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
          <GlowButton size="sm" onClick={() => { document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" }); setOpen(false); }}>
            Request Demo
          </GlowButton>
        </div>

        <button
          className="md:hidden text-text-primary"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass-nav border-t border-border/50 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-muted hover:text-gold transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <GlowButton size="sm" onClick={() => { document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" }); setOpen(false); }}>
            Request Demo
          </GlowButton>
        </div>
      )}
    </nav>
  );
}
