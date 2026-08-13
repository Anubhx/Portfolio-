"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const pillars = [
  {
    num: "01",
    icon: "⬡",
    label: "Research First",
    title: "Every pixel earns its place through evidence",
    description:
      "I don't design from aesthetics. I design from insight. Every decision traces back to something a user said, showed, or struggled with.",
    accent: "#7c5cfc",
    accentSubtle: "rgba(124,92,252,0.08)",
    accentBorder: "rgba(124,92,252,0.18)",
  },
  {
    num: "02",
    icon: "⟐",
    label: "Engineered for Humans",
    title: "I close the gap between design and implementation",
    description:
      "I write the React. I implement the design system. When I hand off to engineering, there's nothing lost in translation — because I am both sides of the conversation.",
    accent: "#22d3ee",
    accentSubtle: "rgba(34,211,238,0.07)",
    accentBorder: "rgba(34,211,238,0.15)",
  },
  {
    num: "03",
    icon: "◈",
    label: "AI as Multiplier",
    title: "From insight to prototype in hours, not weeks",
    description:
      "I use Claude, Cursor, Gemini, and n8n to accelerate research synthesis, generate design variants, and automate repetitive work — without compromising the quality of judgment.",
    accent: "#10b981",
    accentSubtle: "rgba(16,185,129,0.07)",
    accentBorder: "rgba(16,185,129,0.15)",
  },
];

export default function DesignPhilosophy() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Header reveal
      gsap.fromTo(
        ".dp-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ".dp-header", start: "top 85%" },
        }
      );

      // Card reveals with stagger
      gsap.fromTo(
        ".dp-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".dp-grid",
            start: "top 82%",
          },
        }
      );

      // Quote reveal
      gsap.fromTo(
        ".dp-quote",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ".dp-quote", start: "top 88%" },
        }
      );

      // Card hover effect — GSAP driven
      document.querySelectorAll<HTMLElement>(".dp-card").forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, { y: -4, duration: 0.3, ease: "power2.out" });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, { y: 0, duration: 0.4, ease: "power3.out" });
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      aria-labelledby="philosophy-heading"
      className="section"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="container">
        {/* Header */}
        <div className="dp-header" style={{ marginBottom: "48px", maxWidth: "600px", opacity: 0 }}>
          <p className="section-number" style={{ marginBottom: "16px" }}>
            Philosophy
          </p>
          <h2 id="philosophy-heading" className="text-h2">
            How I think about{" "}
            <em
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontWeight: 300,
                background: "var(--gradient-text)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              great products
            </em>
          </h2>
        </div>

        {/* Cards grid */}
        <div
          className="dp-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
          }}
        >
          {pillars.map((pillar) => (
            <div
              key={pillar.label}
              className="dp-card"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                position: "relative",
                overflow: "hidden",
                opacity: 0,
                cursor: "default",
                transition: "border-color 0.25s, box-shadow 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = pillar.accentBorder;
                e.currentTarget.style.boxShadow = `0 8px 40px ${pillar.accentSubtle}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Subtle corner orb */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "-40px",
                  right: "-40px",
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  background: `radial-gradient(ellipse, ${pillar.accentSubtle} 0%, transparent 70%)`,
                  pointerEvents: "none",
                }}
              />

              {/* Number */}
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "11px",
                  fontWeight: 400,
                  color: pillar.accent,
                  letterSpacing: "0.1em",
                  opacity: 0.7,
                }}
              >
                {pillar.num}
              </span>

              {/* Icon badge */}
              <div
                aria-hidden="true"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "var(--radius-sm)",
                  background: pillar.accentSubtle,
                  border: `1px solid ${pillar.accentBorder}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  color: pillar.accent,
                }}
              >
                {pillar.icon}
              </div>

              {/* Label */}
              <p className="text-label" style={{ color: pillar.accent, opacity: 0.8 }}>
                {pillar.label}
              </p>

              {/* Title */}
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "var(--heading)",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.35,
                }}
              >
                {pillar.title}
              </h3>

              {/* Description */}
              <p style={{ fontSize: "14px", color: "var(--body)", lineHeight: 1.7 }}>
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote block */}
        <div
          className="dp-quote"
          style={{
            marginTop: "32px",
            padding: "40px 48px",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius)",
            position: "relative",
            overflow: "hidden",
            opacity: 0,
          }}
        >
          {/* Large decorative quote mark */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "-20px",
              right: "40px",
              fontFamily: "var(--font-display)",
              fontSize: "180px",
              fontWeight: 700,
              background: "var(--gradient-text)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              opacity: 0.06,
              lineHeight: 1,
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            &ldquo;
          </div>

          {/* Subtle left accent border */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: 0,
              top: "20%",
              bottom: "20%",
              width: "2px",
              background: "linear-gradient(to bottom, transparent, var(--accent), transparent)",
            }}
          />

          <blockquote style={{ maxWidth: "700px" }}>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(20px, 2.2vw, 28px)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "var(--heading)",
                lineHeight: 1.45,
                marginBottom: "20px",
              }}
            >
              Great products are researched with empathy, designed with intent,
              and shipped with precision.
            </p>
            <cite
              style={{
                fontStyle: "normal",
                fontSize: "12px",
                color: "var(--muted)",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  display: "inline-block",
                  width: "20px",
                  height: "1px",
                  background: "var(--accent)",
                }}
              />
              Anubhav Raj · Design Engineer
            </cite>
          </blockquote>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .dp-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 601px) and (max-width: 900px) {
          .dp-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
