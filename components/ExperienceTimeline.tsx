"use client";

import { FadeUp, StaggerChildren, staggerItem } from "./AnimatedElements";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "LTI Mindtree",
    role: "UX/UI Designer & Software Engineer",
    period: "2024 — Present",
    description:
      "Designed enterprise and consumer experiences across insurance, e-commerce, HR, and AI products. Bridged design and implementation through React and TypeScript. Maintained accessibility standards and scalable design systems.",
    tags: ["UX Design", "React", "TypeScript", "Accessibility", "Enterprise"],
    current: true,
  },
  {
    company: "Ecstasia",
    role: "Lead UX Designer",
    period: "2023 — 2024",
    description:
      "Led end-to-end UX for an event platform serving 1000+ attendees. Owned research, wireframes, prototypes, and developer handoff across the full product lifecycle.",
    tags: ["UX Research", "Product Design", "Prototyping"],
    current: false,
  },
  {
    company: "Vedantu",
    role: "UX Designer",
    period: "2022 — 2023",
    description:
      "Redesigned learning experiences to improve usability through iterative testing and accessibility-first thinking. Reduced cognitive load for students across mobile and web.",
    tags: ["EdTech", "Accessibility", "Mobile Design"],
    current: false,
  },
];

export default function ExperienceTimeline() {
  return (
    <section
      aria-labelledby="experience-heading"
      className="section"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="container">
        <FadeUp style={{ marginBottom: "64px" }}>
          <p className="section-number" style={{ marginBottom: "20px" }}>
            Experience
          </p>
          <h2 id="experience-heading" className="text-h2" style={{ maxWidth: "400px" }}>
            Where I&apos;ve built things
          </h2>
        </FadeUp>

        <StaggerChildren staggerDelay={0.15}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {experiences.map((exp, i) => (
              <motion.article
                key={exp.company}
                variants={staggerItem}
                aria-label={`${exp.role} at ${exp.company}`}
                style={{
                  display: "grid",
                  gridTemplateColumns: "200px 1fr",
                  gap: "48px",
                  paddingBottom: i < experiences.length - 1 ? "56px" : "0",
                  marginBottom: i < experiences.length - 1 ? "56px" : "0",
                  borderBottom:
                    i < experiences.length - 1
                      ? "1px solid var(--border)"
                      : "none",
                  position: "relative",
                }}
                className="exp-grid"
              >
                {/* Left: Date + Company */}
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "8px",
                    }}
                  >
                    {exp.current && (
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "5px",
                          padding: "3px 8px",
                          background: "rgba(34, 197, 94, 0.08)",
                          border: "1px solid rgba(34, 197, 94, 0.2)",
                          borderRadius: "100px",
                          fontSize: "10px",
                          fontWeight: 600,
                          color: "#22c55e",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                        }}
                      >
                        <span
                          aria-hidden="true"
                          style={{
                            width: "5px",
                            height: "5px",
                            borderRadius: "50%",
                            background: "#22c55e",
                          }}
                        />
                        Current
                      </span>
                    )}
                  </div>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "var(--muted)",
                      letterSpacing: "0.02em",
                      lineHeight: 1.4,
                    }}
                  >
                    {exp.period}
                  </p>
                </div>

                {/* Right: Content */}
                <div>
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: 700,
                      color: "var(--heading)",
                      letterSpacing: "-0.015em",
                      marginBottom: "4px",
                    }}
                  >
                    {exp.company}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "var(--accent)",
                      fontWeight: 500,
                      marginBottom: "16px",
                    }}
                  >
                    {exp.role}
                  </p>
                  <p
                    className="text-body"
                    style={{
                      color: "var(--muted-2)",
                      marginBottom: "20px",
                      maxWidth: "560px",
                    }}
                  >
                    {exp.description}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </StaggerChildren>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .exp-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
