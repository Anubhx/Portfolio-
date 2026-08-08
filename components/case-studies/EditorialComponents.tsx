"use client";

import React from "react";
import Link from "next/link";
import LightboxImage from "@/components/LightboxImage";

// --- HERO & METRICS ---

export function CaseStudyHero({
  title,
  subtitle,
  children,
}: {
  title: React.ReactNode;
  subtitle: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="editorial-hero">
      <h1 className="editorial-hero-title">{title}</h1>
      <p className="editorial-hero-subtitle">{subtitle}</p>
      <div className="editorial-hero-divider" />
      {children}
    </div>
  );
}

export function MetricsBar({
  metrics,
}: {
  metrics: { label: string; value: React.ReactNode }[];
}) {
  return (
    <div className="editorial-metadata-row">
      {metrics.map((m, i) => (
        <div key={i} className="editorial-meta-col">
          <span className="editorial-meta-label">{m.label}</span>
          <span className="editorial-meta-value">{m.value}</span>
        </div>
      ))}
    </div>
  );
}

// --- EDITORIAL STRUCTURE ---

export function EditorialSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="editorial-grid">
      <div className="editorial-left-rail">
        <span className="editorial-section-num">{number}</span>
        <span className="editorial-section-title">{title}</span>
      </div>
      <div className="editorial-right-content">{children}</div>
    </section>
  );
}

// --- CONTENT COMPONENTS ---

export function InsightQuote({ children }: { children: React.ReactNode }) {
  return <h2 className="editorial-statement">{children}</h2>;
}

export function Prose({ children }: { children: React.ReactNode }) {
  return <p className="editorial-prose">{children}</p>;
}

export function TwoByTwoCards({ cards }: { cards: string[] }) {
  return (
    <div className="editorial-cards-2x2">
      {cards.map((c, i) => (
        <div key={i} className="editorial-card">
          <p>{c}</p>
        </div>
      ))}
    </div>
  );
}

export function InsightCallout({
  title = "Key Insight",
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="editorial-insight-box">
      <h4>{title}</h4>
      <ul className="editorial-insight-list">
        <li>{children}</li>
      </ul>
    </div>
  );
}

export function ImageShowcase({
  src,
  alt,
  breakout = false,
  priority = false,
}: {
  src: string;
  alt: string;
  breakout?: boolean;
  priority?: boolean;
}) {
  return (
    <div className={`editorial-image-wrapper ${breakout ? "breakout" : ""}`}>
      <LightboxImage src={src} alt={alt} priority={priority} />
    </div>
  );
}

export function PhoneMockup({
  src,
  alt,
  caption,
  priority = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
}) {
  return (
    <div className="flex flex-col items-center my-10 mx-auto w-full">
      {/* Outer Device Chassis Border */}
      <div
        className="relative p-2.5 sm:p-3 rounded-[3rem] border border-neutral-700/60 bg-[#141416]"
        style={{
          boxShadow: "0 25px 60px -15px rgba(0,0,0,0.9), inset 0 0 0 1px rgba(255,255,255,0.12)",
        }}
      >
        {/* Inner 390x844 Phone Frame */}
        <div className="relative w-[270px] sm:w-[310px] md:w-[340px] max-w-[390px] aspect-[390/844] overflow-hidden rounded-[2.3rem] border-[4px] border-black bg-black ring-1 ring-white/10">
          {/* Notch */}
          <div className="absolute left-1/2 top-2.5 z-20 h-4 w-24 -translate-x-1/2 rounded-full bg-black flex items-center justify-center pointer-events-none">
            <div className="w-2.5 h-2.5 rounded-full bg-[#161616] mr-2" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#0d0d0d]" />
          </div>
          <div className="relative w-full h-full overflow-hidden bg-[#080808]">
            <LightboxImage src={src} alt={alt} priority={priority} />
          </div>
        </div>
      </div>
      {caption && <p className="mt-3 text-xs text-neutral-400 font-mono text-center">{caption}</p>}
    </div>
  );
}

export function MetricGrid({
  metrics,
}: {
  metrics: { value: string; unit?: string; label: string }[];
}) {
  return (
    <div className="editorial-metrics-row">
      {metrics.map((m, i) => (
        <div key={i} className="editorial-metric">
          <span className="editorial-metric-value">
            {m.value}
            {m.unit && <span>{m.unit}</span>}
          </span>
          <span className="editorial-metric-label">{m.label}</span>
        </div>
      ))}
    </div>
  );
}

export function LessonsGrid({
  lessons,
}: {
  lessons: { title: string; desc: string }[];
}) {
  return (
    <div className="editorial-cards-2x2">
      {lessons.map((l, i) => (
        <div key={i} className="editorial-card" style={{ flexDirection: "column", gap: "12px" }}>
          <span className="editorial-meta-label" style={{ color: "var(--accent)" }}>{l.title}</span>
          <p>{l.desc}</p>
        </div>
      ))}
    </div>
  );
}

export function NextProject({
  href,
  title,
}: {
  href: string;
  title: string;
}) {
  return (
    <div className="editorial-next-project">
      <Link href={href} className="editorial-next-card">
        <span className="editorial-next-label">Next Project</span>
        <span className="editorial-next-title">{title}</span>
      </Link>
    </div>
  );
}
