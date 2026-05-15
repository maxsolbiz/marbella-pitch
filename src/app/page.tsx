"use client";

import dynamic from "next/dynamic";
import NavBar from "@/components/ui/NavBar";
import Hero from "@/components/sections/Hero";
import Vision from "@/components/sections/Vision";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Differentiation from "@/components/sections/Differentiation";
import Market from "@/components/sections/Market";
import BusinessModel from "@/components/sections/BusinessModel";
import Technology from "@/components/sections/Technology";
import CompetitiveEdge from "@/components/sections/CompetitiveEdge";
import Roadmap from "@/components/sections/Roadmap";
import CTA from "@/components/sections/CTA";

const ParticleBackground = dynamic(
  () => import("@/components/three/ParticleBackground"),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <NavBar />
      <main className="relative z-10">
        <Hero />
        <div className="section-divider mx-6" />
        <Vision />
        <Problem />
        <Solution />
        <Differentiation />
        <Market />
        <BusinessModel />
        <Technology />
        <CompetitiveEdge />
        <Roadmap />
        <CTA />
      </main>
    </>
  );
}
