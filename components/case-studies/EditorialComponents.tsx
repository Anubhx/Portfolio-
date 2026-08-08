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
      {/* iPhone 12 Pro Max Realistic Frame Outer Container */}
      <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[433/888] select-none">
        
        {/* Side Antenna Bands */}
        <div className="absolute inset-x-0 top-[10%] h-[2px] bg-gradient-to-r from-neutral-600 via-transparent to-neutral-600 z-10 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-[10%] h-[2px] bg-gradient-to-r from-neutral-600 via-transparent to-neutral-600 z-10 pointer-events-none" />

        {/* Side Hardware Buttons */}
        {/* Mute Switch */}
        <div className="absolute -left-[3px] top-[14%] w-[3px] h-[34px] rounded-l-sm bg-gradient-to-b from-[#232323] via-[#a4a6a8] to-[#232323] z-0" />
        {/* Volume Up */}
        <div className="absolute -left-[3px] top-[23%] w-[3px] h-[68px] rounded-l-sm bg-gradient-to-b from-[#232323] via-[#a4a6a8] to-[#232323] z-0" />
        {/* Volume Down */}
        <div className="absolute -left-[3px] top-[34%] w-[3px] h-[68px] rounded-l-sm bg-gradient-to-b from-[#232323] via-[#a4a6a8] to-[#232323] z-0" />
        {/* Power Button */}
        <div className="absolute -right-[3px] top-[25%] w-[3px] h-[107px] rounded-r-sm bg-gradient-to-b from-[#232323] via-[#a4a6a8] to-[#232323] z-0" />

        {/* Metallic Edge Outer Chassis */}
        <div
          className="relative w-full h-full rounded-[3.8rem] p-[5px] bg-gradient-to-b from-[#626366] via-[#949699] to-[#626366] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.1)] z-10"
        >
          {/* Inner Black Bezel Frame */}
          <div className="relative w-full h-full rounded-[3.5rem] p-[10px] sm:p-[12px] bg-[#1f1f1f] shadow-inner">
            
            {/* Screen Viewport Container */}
            <div className="relative w-full h-full rounded-[2.6rem] overflow-hidden bg-black ring-1 ring-white/10">

              {/* iPhone 12 Notch Assembly */}
              <div className="absolute left-1/2 top-0 z-30 h-[26px] sm:h-[30px] w-[50%] -translate-x-1/2 rounded-b-[18px] bg-[#1f1f1f] flex items-center justify-center pointer-events-none">
                {/* Speaker Grill */}
                <div className="absolute top-[6px] h-[4px] w-[42px] rounded-full bg-[#030303] border border-neutral-800" />
                {/* Camera Lens */}
                <div className="absolute top-[14px] right-[24%] h-[8px] w-[8px] rounded-full bg-[#08081a] border border-[#12122b] shadow-inner flex items-center justify-center">
                  <div className="w-[3px] h-[3px] rounded-full bg-[#1b2b48]" />
                </div>
              </div>

              {/* Screen Image Container */}
              <div className="relative w-full h-full overflow-y-auto overflow-x-hidden no-scrollbar bg-[#080808] scroll-smooth">
                <LightboxImage src={src} alt={alt} priority={priority} />
              </div>

              {/* Home Bar Indicator at Bottom */}
              <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 z-30 h-[4px] w-[35%] rounded-full bg-white/40 pointer-events-none" />

            </div>
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
