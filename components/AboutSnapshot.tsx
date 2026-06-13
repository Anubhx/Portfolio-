"use client";

import Image from "next/image";
import { FadeUp } from "./AnimatedElements";

const interests = [
  "Consumer UX",
  "AI Products",
  "Accessibility",
  "Behavioral Design",
  "Design Systems",
  "Agentic Workflows",
];

export default function AboutSnapshot() {
  return (
    <section
      aria-labelledby="about-snapshot-heading"
      className="section"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "center",
          }}
          className="about-snapshot-grid"
        >
          {/* Left: Identity Panel */}
          <FadeUp>
            <div
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                padding: "32px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Corner accent */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "120px",
                  height: "120px",
                  background:
                    "radial-gradient(circle at top right, var(--accent-subtle) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />

              {/* Profile photo */}
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  border: "1px solid var(--border-2)",
                  overflow: "hidden",
                  marginBottom: "20px",
                  position: "relative",
                  flexShrink: 0,
                }}
              >
                <Image
                  src="/profilepic.jpg"
                  alt="Anubhav Raj"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  sizes="64px"
                  priority
                />
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "var(--heading)",
                  letterSpacing: "-0.01em",
                  marginBottom: "4px",
                }}
              >
                Anubhav Raj
              </h3>
              <p
                style={{
                  fontSize: "12px",
                  color: "var(--muted)",
                  marginBottom: "24px",
                }}
              >
                UX Designer & Design Engineer · LTI Mindtree
              </p>

              {/* Status */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  marginBottom: "28px",
                  padding: "6px 12px",
                  background: "var(--surface-2)",
                  border: "1px solid var(--border)",
                  borderRadius: "100px",
                  width: "fit-content",
                }}
              >
                <span
                  style={{
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    background: "#22c55e",
                    boxShadow: "0 0 6px rgba(34, 197, 94, 0.5)",
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                />
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 500,
                    color: "var(--muted-2)",
                  }}
                >
                  Currently Building at LTI Mindtree
                </span>
              </div>

              {/* Interests */}
              <div>
                <p className="text-label" style={{ marginBottom: "10px" }}>
                  Interests
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {interests.map((interest) => (
                    <span key={interest} className="tag">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              {/* Superpower */}
              <div
                style={{
                  marginTop: "24px",
                  paddingTop: "20px",
                  borderTop: "1px solid var(--border)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <p className="text-label" style={{ marginBottom: "2px" }}>
                    Superpower
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "var(--heading)",
                    }}
                  >
                    Design → Code
                  </p>
                </div>
                <div
                  style={{
                    padding: "4px 10px",
                    background: "var(--accent-subtle)",
                    border: "1px solid var(--accent-border)",
                    borderRadius: "100px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "10px",
                      fontWeight: 600,
                      color: "var(--accent)",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    Full Stack UX
                  </span>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Right: Bio + Link */}
          <FadeUp delay={0.1}>
            <div>
              <p className="section-number" style={{ marginBottom: "20px" }}>
                About
              </p>
              <h2
                id="about-snapshot-heading"
                className="text-h2"
                style={{ marginBottom: "20px" }}
              >
                The gap between design and{" "}
                <em
                  style={{
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontWeight: 300,
                    color: "var(--accent)",
                  }}
                >
                  engineering?
                </em>
              </h2>
              <p className="text-body-lg" style={{ marginBottom: "16px" }}>
                Anubhav bridges it.
              </p>
              <p className="text-body" style={{ marginBottom: "16px", color: "var(--muted-2)", fontSize: "14px" }}>
                He translates research insights into production-ready experiences — writing the
                Figma files and the React components. He believes accessibility, clarity, and
                empathy aren&apos;t soft skills. They&apos;re competitive advantages.
              </p>
              <p className="text-body" style={{ marginBottom: "32px", color: "var(--muted-2)", fontSize: "14px" }}>
                At LTI Mindtree, he works across insurance, e-commerce, HR, and AI products —
                always moving from user problem to shipped solution.
              </p>

              <a href="/about" className="btn btn-ghost" style={{ paddingLeft: 0 }}>
                Read full story →
              </a>
            </div>
          </FadeUp>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .about-snapshot-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
