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
