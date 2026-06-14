"use client";

import { motion , Easing} from "framer-motion";
import Link from "next/link";

const EASE_EXPO = [0.16, 1, 0.3, 1];

const proofPoints = [
  { value: "1+", label: "Years Industry" },
  { value: "22+", label: "Screens Designed" },
  { value: "Research", label: "→ Production" },
  { value: "WCAG", label: "2.1 AA Mindset" },
];

export default function Hero() {
  return (
    <section
      aria-label="Introduction"
      style={{
        paddingTop: "128px",
        paddingBottom: "40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Engineering grid — discovered, not noticed */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
          opacity: 1,
          pointerEvents: "none",
        }}
      />
      {/* Radial vignette over grid */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 65% at 40% 50%, transparent 30%, var(--bg) 100%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative" }}>
        {/* Role label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE_EXPO }}
          style={{ marginBottom: "24px" }}
        >
          <span className="text-label">
            UX Designer · Design Engineer · Agentic Builder
          </span>
        </motion.div>

        {/* Headline — 57% width, tighter scale */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(48px, 8vw, 130px)",
            fontWeight: 300,
            lineHeight: 0.9,
            letterSpacing: "-0.03em",
            color: "var(--heading)",
            marginBottom: "28px",
            maxWidth: "1400px",
          }}
          className="hero-headline"
        >
          {["I turn messy", "problems into products", "people actually use."].map(
            (line, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.08 + i * 0.1,
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
            )
          )}
        </h1>

        {/* Supporting copy */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42, ease: EASE_EXPO }}
          style={{ marginBottom: "36px", maxWidth: "420px" }}
        >
          <p className="text-body-lg">
            Designing with evidence. Shipping with code.
            <br />
            <span style={{ color: "var(--muted)", fontSize: "14px" }}>
              Currently at{" "}
              <strong style={{ color: "var(--muted-2)", fontWeight: 500 }}>
                LTI Mindtree
              </strong>
              . Accessibility-minded. AI-enabled.
            </span>
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.54, ease: EASE_EXPO }}
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            marginBottom: "56px",
            alignItems: "center",
          }}
        >
          <Link href="/case-studies" className="btn btn-primary">
            Explore Work →
          </Link>
          <a
            href="https://drive.google.com/file/d/1DB9O83t1ClnK0F3wgfJiOF7gr3gDKIXC/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
            aria-label="Download resume PDF"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Proof points — micro metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.72, ease: EASE_EXPO }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            borderTop: "1px solid var(--border)",
            paddingTop: "24px",
          }}
        >
          {proofPoints.map((point, i) => (
            <div
              key={point.value}
              style={{
                paddingRight: "28px",
                marginRight: "28px",
                borderRight:
                  i < proofPoints.length - 1
                    ? "1px solid var(--border)"
                    : "none",
                marginBottom: "8px",
              }}
            >
              <span
                style={{
                  fontSize: "22px",
                  fontWeight: 600,
                  letterSpacing: "0.01em",
                  color: "var(--heading)",
                  display: "block",
                  lineHeight: 1.2,
                }}
              >
                {point.value}
              </span>
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  letterSpacing: "0.04em",
                  color: "var(--muted)",
                  display: "block",
                  marginTop: "2px",
                }}
              >
                {point.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .hero-headline {
            max-width: 100% !important;
            font-size: clamp(36px, 10vw, 60px) !important;
          }
        }
      `}</style>
    </section>
  );
}
