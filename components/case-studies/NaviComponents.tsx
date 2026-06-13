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
    <div className="navi-hero">
      <h1 className="navi-hero-title">{title}</h1>
      <p className="navi-hero-subtitle">{subtitle}</p>
      <div className="navi-hero-divider" />
      {children}
    </div>
  );
}

export function MetricsBar({
  metrics,
}: {
  metrics: { label: string; value: string }[];
}) {
  return (
    <div className="navi-metadata-row">
      {metrics.map((m, i) => (
        <div key={i} className="navi-meta-col">
          <span className="navi-meta-label">{m.label}</span>
          <span className="navi-meta-value">{m.value}</span>
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
    <section className="navi-grid">
      <div className="navi-left-rail">
        <span className="navi-section-num">{number}</span>
        <span className="navi-section-title">{title}</span>
      </div>
      <div className="navi-right-content">{children}</div>
    </section>
  );
}

// --- CONTENT COMPONENTS ---

export function InsightQuote({ children }: { children: React.ReactNode }) {
  return <h2 className="navi-statement">{children}</h2>;
}

export function Prose({ children }: { children: React.ReactNode }) {
  return <p className="navi-prose">{children}</p>;
}

export function TwoByTwoCards({ cards }: { cards: string[] }) {
  return (
    <div className="navi-cards-2x2">
      {cards.map((c, i) => (
        <div key={i} className="navi-card">
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
    <div className="navi-insight-box">
      <h4>{title}</h4>
      <ul className="navi-insight-list">
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
    <div className={`navi-image-wrapper ${breakout ? "breakout" : ""}`}>
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
    <div className="navi-metrics-row">
      {metrics.map((m, i) => (
        <div key={i} className="navi-metric">
          <span className="navi-metric-value">
            {m.value}
            {m.unit && <span>{m.unit}</span>}
          </span>
          <span className="navi-metric-label">{m.label}</span>
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
    <div className="navi-cards-2x2">
      {lessons.map((l, i) => (
        <div key={i} className="navi-card" style={{ flexDirection: "column", gap: "12px" }}>
          <span className="navi-meta-label" style={{ color: "var(--accent)" }}>{l.title}</span>
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
    <div className="navi-next-project">
      <Link href={href} className="navi-next-card">
        <span className="navi-next-label">Next Project</span>
        <span className="navi-next-title">{title}</span>
      </Link>
    </div>
  );
}
