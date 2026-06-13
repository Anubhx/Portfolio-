"use client";

import { FadeUp, StaggerChildren, staggerItem } from "@/components/AnimatedElements";
import { motion } from "framer-motion";

const skills = [
  {
    category: "UX & Research",
    items: [
      "User Interviews",
      "Journey Mapping",
      "Competitive Analysis",
      "Heuristic Evaluation",
      "Usability Testing",
      "Accessibility Audit",
    ],
  },
  {
    category: "Product Design",
    items: [
      "Information Architecture",
      "Wireframing",
      "Interaction Design",
      "Design Systems",
      "High-Fidelity UI",
      "Prototyping",
    ],
  },
  {
    category: "Engineering",
    items: [
      "React / Next.js",
      "TypeScript",
      "React Native",
      "Tailwind CSS",
      "Framer Motion",
      "Expo",
    ],
  },
  {
    category: "AI & Tooling",
    items: [
      "Cursor",
      "Claude",
      "Gemini",
      "n8n Workflows",
      "ChatGPT",
      "Figma AI",
    ],
  },
];

const values = [
  {
    number: "01",
    title: "Accessibility is not a feature",
    description:
      "It's a baseline. Every experience I build is designed to work for the widest possible audience. WCAG compliance is where I start, not where I stop.",
  },
  {
    number: "02",
    title: "Clarity over cleverness",
    description:
      "The most sophisticated thing a designer can do is make something simple. I trade visual complexity for behavioral clarity every time.",
  },
  {
    number: "03",
    title: "Research before aesthetics",
    description:
      "Beautiful screens that solve the wrong problem are a waste. I invest in understanding before I invest in making.",
  },
  {
    number: "04",
    title: "Close the implementation gap",
    description:
      "The best collaboration is no collaboration — when a designer can build what they design, nothing is lost between intent and execution.",
  },
];

export default function AboutPage() {
  return (
    <div style={{ paddingTop: "120px" }}>
      {/* Hero */}
      <section className="section" style={{ paddingTop: "40px" }}>
        <div className="container">
          <FadeUp style={{ marginBottom: "24px" }}>
            <p className="section-number">About</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(48px, 7vw, 100px)",
                fontWeight: 300,
                lineHeight: 1.0,
                letterSpacing: "-0.025em",
                color: "var(--heading)",
                maxWidth: "800px",
                marginBottom: "40px",
              }}
            >
              Human by curiosity.{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                Systematic
              </em>{" "}
              by engineering.
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p
              className="text-body-lg"
              style={{ maxWidth: "560px", color: "var(--muted-2)" }}
            >
              I&apos;m Anubhav Raj — a hybrid UX Designer and Design Engineer at
              LTI Mindtree. I research like a designer, structure like a product
              manager, and ship like an engineer.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Bio */}
      <section
        className="section"
        style={{ borderTop: "1px solid var(--border)", paddingTop: "80px" }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "80px",
            }}
            className="about-bio-grid"
          >
            <FadeUp>
              <div className="prose-editorial">
                <h2>The longer version</h2>
                <p>
                  I started at the intersection of two disciplines: the empathy of
                  UX and the precision of software engineering. Most people choose
                  one. I chose both — because I believe the most impactful work
                  happens in the space between them.
                </p>
                <p>
                  At LTI Mindtree, I design and implement experiences across
                  insurance platforms, e-commerce flows, HR tools, and AI-powered
                  products. I write Figma files and React components in the same
                  week — sometimes the same day.
                </p>
                <p>
                  Before that, I led UX for Ecstasia, an event platform with 1000+
                  attendees, and redesigned learning flows at Vedantu with an
                  accessibility-first approach.
                </p>
                <blockquote>
                  <p>
                    Designing experiences with empathy. Engineering them with
                    precision.
                  </p>
                </blockquote>
                <p>
                  I&apos;m particularly interested in the emerging space where
                  behavioral design meets AI assistance — building tools that help
                  users make better decisions, not just faster ones.
                </p>
              </div>
            </FadeUp>

            {/* Skills */}
            <FadeUp delay={0.15}>
              <div>
                <p className="text-label" style={{ marginBottom: "32px" }}>
                  Skills & Tools
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "32px",
                  }}
                >
                  {skills.map((skill) => (
                    <div key={skill.category}>
                      <p
                        style={{
                          fontSize: "12px",
                          fontWeight: 600,
                          color: "var(--accent)",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          marginBottom: "12px",
                        }}
                      >
                        {skill.category}
                      </p>
                      <div
                        style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}
                      >
                        {skill.items.map((item) => (
                          <span key={item} className="tag">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="section"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="container">
          <FadeUp style={{ marginBottom: "56px" }}>
            <p className="section-number" style={{ marginBottom: "20px" }}>
              Values
            </p>
            <h2 className="text-h2">What I believe about design</h2>
          </FadeUp>

          <StaggerChildren staggerDelay={0.1}>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "0" }}
            >
              {values.map((value, i) => (
                <motion.div
                  key={value.number}
                  variants={staggerItem}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "80px 1fr",
                    gap: "40px",
                    padding: "40px 0",
                    borderBottom:
                      i < values.length - 1
                        ? "1px solid var(--border)"
                        : "none",
                    alignItems: "start",
                  }}
                  className="value-row"
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "48px",
                      fontWeight: 300,
                      color: "var(--border-2)",
                      lineHeight: 1,
                    }}
                    aria-hidden="true"
                  >
                    {value.number}
                  </span>
                  <div>
                    <h3
                      style={{
                        fontSize: "20px",
                        fontWeight: 600,
                        color: "var(--heading)",
                        letterSpacing: "-0.01em",
                        marginBottom: "12px",
                      }}
                    >
                      {value.title}
                    </h3>
                    <p
                      className="text-body"
                      style={{ color: "var(--muted-2)", maxWidth: "560px" }}
                    >
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </StaggerChildren>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 768px) {
          .about-bio-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .value-row {
            grid-template-columns: 48px 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </div>
  );
}
