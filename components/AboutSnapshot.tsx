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
            gap: "80px",
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
                padding: "40px",
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
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  border: "2px solid var(--border-2)",
                  overflow: "hidden",
                  marginBottom: "24px",
                  position: "relative",
                  flexShrink: 0,
                }}
              >
                <Image
                  src="/profilepic.jpg"
                  alt="Anubhav Raj"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  sizes="72px"
                  priority
                />
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "var(--heading)",
                  letterSpacing: "-0.01em",
                  marginBottom: "4px",
                }}
              >
                Anubhav Raj
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  color: "var(--muted)",
                  marginBottom: "32px",
                }}
              >
                UX Designer & Design Engineer · LTI Mindtree
              </p>

              {/* Status */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "32px",
                  padding: "8px 14px",
                  background: "var(--surface-2)",
                  border: "1px solid var(--border)",
                  borderRadius: "100px",
                  width: "fit-content",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#22c55e",
                    boxShadow: "0 0 6px rgba(34, 197, 94, 0.5)",
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                />
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 500,
                    color: "var(--muted-2)",
                  }}
                >
                  Currently Building at LTI Mindtree
                </span>
              </div>

              {/* Interests */}
              <div>
                <p className="text-label" style={{ marginBottom: "12px" }}>
                  Interests
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
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
                  marginTop: "28px",
                  paddingTop: "24px",
                  borderTop: "1px solid var(--border)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <p className="text-label" style={{ marginBottom: "4px" }}>
                    Superpower
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "var(--heading)",
                    }}
                  >
                    Design → Code
                  </p>
                </div>
                <div
                  style={{
                    padding: "6px 12px",
                    background: "var(--accent-subtle)",
                    border: "1px solid var(--accent-border)",
                    borderRadius: "100px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "11px",
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
          <FadeUp delay={0.15}>
            <div>
              <p className="section-number" style={{ marginBottom: "24px" }}>
                About
              </p>
              <h2
                id="about-snapshot-heading"
                className="text-h2"
                style={{ marginBottom: "24px" }}
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
              <p className="text-body-lg" style={{ marginBottom: "20px" }}>
                Anubhav bridges it.
              </p>
              <p className="text-body" style={{ marginBottom: "20px", color: "var(--muted-2)" }}>
                He translates research insights into production-ready experiences — writing the
                Figma files and the React components. He believes accessibility, clarity, and
                empathy aren&apos;t soft skills. They&apos;re competitive advantages.
              </p>
              <p className="text-body" style={{ marginBottom: "40px", color: "var(--muted-2)" }}>
                At LTI Mindtree, he works across insurance, e-commerce, HR, and AI products —
                always moving from user problem to shipped solution.
              </p>

              <a
                href="/about"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "var(--heading)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--border-2)",
                  paddingBottom: "4px",
                  transition: "border-color 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                  (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border-2)";
                  (e.currentTarget as HTMLElement).style.color = "var(--heading)";
                }}
              >
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
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
