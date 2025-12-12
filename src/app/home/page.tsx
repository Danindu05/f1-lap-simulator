"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomeLanding() {
  return (
    <div className="min-h-screen bg-[#0f0f10] text-zinc-200 flex flex-col">
      {/* ---------- FULLSCREEN HERO CENTERED ---------- */}
      <section className="h-screen flex flex-col justify-center items-center px-6 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white">
            F1 Lap Simulator
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
          A simply lovely dashboard for exploring Formula 1 lap data and performance.
          </p>

          {/* CTA */}
          <div className="mt-10">
            <Link
              href="/analyse"
              className="inline-flex items-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-zinc-200 transition"
            >
              Launch Analyzer
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Features heading */}
          <h2 className="mt-14 text-xl font-semibold text-white">Features</h2>

          {/* Features grid */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <FeatureCard
              title="Track Model"
              desc="Clean line rendering with zoom, pan, and real-time car position."
            />
            <FeatureCard
              title="Live Telemetry"
              desc="Speed, gear, RPM, throttle and brake — displayed with precision."
            />
            <FeatureCard
              title="Fastest Lap Detection"
              desc="Auto-detected best laps with accurate delta comparisons."
            />
          </div>
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="border-t border-zinc-800 py-6 text-center text-sm text-zinc-500">
        F1 Lap Simulator • © {new Date().getFullYear()}
      </footer>
    </div>
  );
}

function FeatureCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="border border-zinc-800 rounded-xl p-6 bg-[#111113] hover:bg-[#141416] transition text-left">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{desc}</p>
    </div>
  );
}
