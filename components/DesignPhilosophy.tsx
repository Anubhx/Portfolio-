"use client";

import { FadeUp, StaggerChildren, staggerItem } from "./AnimatedElements";
import { motion } from "framer-motion";

const pillars = [
  {
    icon: "⬡",
    label: "Research First",
    title: "Every pixel earns its place through evidence",
    description:
      "I don't design from aesthetics. I design from insight. Every decision traces back to something a user said, showed, or struggled with.",
  },
  {
    icon: "⟐",
    label: "Engineered for Humans",
    title: "I close the gap between design and implementation",
    description:
      "I write the React. I implement the design system. When I hand off to engineering, there's nothing lost in translation — because I am both sides of the conversation.",
  },
  {
    icon: "◈",
    label: "AI as Multiplier",
    title: "Move from insight to prototype in hours, not weeks",
    description:
      "I use Claude, Cursor, Gemini, and n8n to accelerate research synthesis, generate design variants, and automate repetitive work — without compromising the quality of judgment.",
  },
];

export default function DesignPhilosophy() {
  return (
    <section
      aria-labelledby="philosophy-heading"
      className="section"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="container">
        <FadeUp style={{ marginBottom: "48px", maxWidth: "600px" }}>
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
                color: "var(--accent)",
              }}
            >
              great products
            </em>
          </h2>
        </FadeUp>

        <StaggerChildren staggerDelay={0.1}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}
            className="philosophy-grid"
          >
            {pillars.map((pillar) => (
              <motion.div
                key={pillar.label}
                variants={staggerItem}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-sm)",
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  transition: "border-color 0.2s, transform 0.2s cubic-bezier(0.16,1,0.3,1), box-shadow 0.2s",
                }}
                whileHover={{
                  y: -2,
                  borderColor: "var(--border-2)" as unknown as number,
                  boxShadow: "0 8px 30px rgba(0,0,0,0.3)" as unknown as number,
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "var(--radius-sm)",
                    background: "var(--accent-subtle)",
                    border: "1px solid var(--accent-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "16px",
                    color: "var(--accent)",
                  }}
                  aria-hidden="true"
                >
                  {pillar.icon}
                </div>

                {/* Label */}
                <p className="text-label" style={{ marginTop: "4px" }}>{pillar.label}</p>

                {/* Title */}
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "var(--heading)",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.3,
                  }}
                >
                  {pillar.title}
                </h3>

                {/* Description */}
                <p style={{ fontSize: "14px", color: "var(--muted-2)", lineHeight: 1.65 }}>
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </StaggerChildren>

        {/* Quote */}
        <FadeUp delay={0.2}>
          <div
            style={{
              marginTop: "48px",
              padding: "40px",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: "-40px",
                right: "40px",
                fontFamily: "var(--font-display)",
                fontSize: "200px",
                fontWeight: 700,
                color: "var(--accent)",
                opacity: 0.03,
                lineHeight: 1,
                pointerEvents: "none",
              }}
            >
              &ldquo;
            </div>
            <blockquote style={{ maxWidth: "680px" }}>
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
                    background: "var(--muted)",
                  }}
                />
                Anubhav Raj, Design Engineer
              </cite>
            </blockquote>
          </div>
        </FadeUp>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .philosophy-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 601px) and (max-width: 900px) {
          .philosophy-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
