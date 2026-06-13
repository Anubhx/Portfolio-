"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const EASE_EXPO = [0.16, 1, 0.3, 1];

const heroWords = ["I turn messy", "problems into products", "people actually use."];

const proofPoints = [
  "1+ Years Industry Experience",
  "22+ Screens Designed",
  "Research → Production",
  "WCAG 2.1 AA Mindset",
];

export default function Hero() {
  return (
    <section
      aria-label="Introduction"
      style={{
        paddingTop: "160px",
        paddingBottom: "120px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle grid overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          opacity: 0.18,
          pointerEvents: "none",
        }}
      />
      {/* Gradient mask over grid */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 60% at 50% 40%, transparent 40%, var(--bg) 100%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative" }}>
        {/* Role label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_EXPO }}
          style={{ marginBottom: "32px" }}
        >
          <span className="text-label">
            UX Designer · Design Engineer · Agentic Builder
          </span>
        </motion.div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(48px, 7.5vw, 120px)",
            fontWeight: 300,
            lineHeight: 1.0,
            letterSpacing: "-0.025em",
            color: "var(--heading)",
            marginBottom: "40px",
            maxWidth: "900px",
          }}
        >
          {heroWords.map((line, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1 + i * 0.12,
                ease: EASE_EXPO,
              }}
              style={{ display: "block" }}
            >
              {i === 1 ? (
                <>
                  <span style={{ color: "var(--heading)" }}>problems into </span>
                  <em
                    style={{
                      fontStyle: "italic",
                      color: "var(--accent)",
                    }}
                  >
                    products
                  </em>
                </>
              ) : (
                line
              )}
            </motion.span>
          ))}
        </h1>

        {/* Supporting copy */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: EASE_EXPO }}
          style={{ marginBottom: "48px", maxWidth: "520px" }}
        >
          <p className="text-body-lg">
            Designing with evidence. Shipping with code.
            <br />
            <span style={{ color: "var(--muted)" }}>
              Currently at{" "}
              <strong style={{ color: "var(--muted-2)", fontWeight: 500 }}>
                LTI Mindtree
              </strong>
              . Accessibility-minded. Systems thinker. AI-enabled.
            </span>
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: EASE_EXPO }}
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            marginBottom: "80px",
          }}
        >
          <Link href="/case-studies" className="btn btn-primary">
            Explore Case Studies →
          </Link>
          <a
            href="/resume.pdf"
            download
            className="btn btn-ghost"
            aria-label="Download resume PDF"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Proof points */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: EASE_EXPO }}
          style={{
            display: "flex",
            gap: "0",
            flexWrap: "wrap",
            borderTop: "1px solid var(--border)",
            paddingTop: "32px",
          }}
        >
          {proofPoints.map((point, i) => (
            <div
              key={point}
              style={{
                padding: "0 32px 0 0",
                marginRight: "32px",
                borderRight: i < proofPoints.length - 1 ? "1px solid var(--border)" : "none",
                marginBottom: "8px",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  color: "var(--muted)",
                }}
              >
                {point}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
