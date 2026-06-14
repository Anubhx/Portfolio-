"use client";

import { FadeUp, StaggerChildren, staggerItem } from "./AnimatedElements";
import { motion, Easing } from "framer-motion";

const processSteps = [
  {
    number: "01",
    verb: "OBSERVE",
    title: "Understand the human behind the screen",
    description:
      "I interview users, map journeys, and identify the friction they can't articulate. The problem worth solving is rarely the one first stated.",
    icon: "◎",
  },
  {
    number: "02",
    verb: "STRUCTURE",
    title: "Simplify complexity through systems",
    description:
      "I translate raw insights into information architectures, flows, and frameworks. Clarity of structure precedes clarity of interface.",
    icon: "⬡",
  },
  {
    number: "03",
    verb: "PROTOTYPE",
    title: "Validate ideas before investing in them",
    description:
      "I move quickly from sketch to high-fidelity Figma, then test assumptions with Maze before touching code. Speed with discipline.",
    icon: "◈",
  },
  {
    number: "04",
    verb: "SHIP",
    title: "Translate design into production",
    description:
      "I write the React. I implement the design system. I close the gap between what's designed and what's built.",
    icon: "⟐",
  },
];

export default function HowIWork() {
  return (
    <section
      aria-labelledby="how-i-work-heading"
      className="section"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "start",
          }}
          className="how-i-work-grid"
        >
          {/* Left: Label + Headline */}
          <div style={{ position: "sticky", top: "112px" }}>
            <FadeUp>
              <p className="section-number" style={{ marginBottom: "20px" }}>
                Process
              </p>
              <h2
                id="how-i-work-heading"
                className="text-h2"
                style={{ marginBottom: "20px" }}
              >
                How I work
              </h2>
              <p className="text-body-lg" style={{ maxWidth: "340px", color: "var(--muted-2)" }}>
                From ambiguous brief to shipped product. Four disciplines. One
                continuous loop.
              </p>
            </FadeUp>
          </div>

          {/* Right: Steps */}
          <StaggerChildren staggerDelay={0.08}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.number}
                  variants={staggerItem}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    gap: "20px",
                    paddingBottom: "40px",
                    position: "relative",
                  }}
                >
                  {/* Connector line */}
                  {i < processSteps.length - 1 && (
                    <div
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        left: "15px",
                        top: "40px",
                        bottom: "0",
                        width: "1px",
                        background:
                          "linear-gradient(to bottom, var(--border-2) 0%, transparent 100%)",
                      }}
                    />
                  )}

                  {/* Icon column */}
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--border-2)",
                      background: "var(--surface)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                      color: "var(--accent)",
                      flexShrink: 0,
                    }}
                  >
                    {step.icon}
                  </div>

                  {/* Content */}
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        marginBottom: "6px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: 600,
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "var(--accent)",
                        }}
                      >
                        {step.verb}
                      </span>
                      <span
                        style={{
                          fontSize: "11px",
                          color: "var(--muted)",
                          fontWeight: 500,
                        }}
                      >
                        {step.number}
                      </span>
                    </div>
                    <h3
                      style={{
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "var(--heading)",
                        letterSpacing: "-0.01em",
                        marginBottom: "8px",
                        lineHeight: 1.3,
                      }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-body" style={{ color: "var(--muted-2)", fontSize: "14px" }}>
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </StaggerChildren>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .how-i-work-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
