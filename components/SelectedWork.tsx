"use client";

import Link from "next/link";
import Image from "next/image";
import { FadeUp, StaggerChildren, staggerItem } from "./AnimatedElements";
import { motion } from "framer-motion";

const featuredWork = [
  {
    slug: "zomato-group-ordering",
    number: "Project 01",
    title: "Zomato Group Ordering",
    subtitle: "Designing the Social Layer of Food Delivery",
    description:
      "Food wasn't the problem. Coordination was. A UX investigation into the 20-minute tax office teams pay every time they want to eat together.",
    tags: ["UX Research", "Interaction Design", "Prototyping", "Maze Testing"],
    year: "2024",
    role: "Lead UX/UI Designer",
    accent: "#ef4444",
    screens: "22 screens",
    image: "/Zomato.png",
  },
  {
    slug: "flowwise",
    number: "Project 02",
    title: "FlowWise",
    subtitle: "A finance app that nudges instead of judges",
    description:
      "Most finance apps act like historical ledgers. FlowWise was designed to help users before mistakes happen — through behavioral design, AI nudges, and offline-first privacy.",
    tags: [
      "Product Design",
      "React Native",
      "Design Systems",
      "AI-assisted UX",
      "Behavioral Design",
    ],
    year: "2024",
    role: "Product Designer & Design Engineer",
    accent: "#6366f1",
    screens: "40+ components",
    image: "/FlowWise.png",
    links: {
      behance: "https://www.behance.net/gallery/247562999/Flow-Wise-Case-Study",
      github: "https://github.com/Anubhx/flow-wise",
    },
  },
];

const explorations = [
  {
    title: "LanguageTalk",
    category: "Product Design",
    description: "Language learning reimagined for conversation-first flows.",
    year: "2024",
  },
  {
    title: "Event Platform",
    category: "End-to-End UX",
    description: "Research, wireframes, and handoff for a 1000+ attendee event platform.",
    year: "2023",
  },
  {
    title: "Agentic AI Experiments",
    category: "AI + Design",
    description: "Exploring n8n, Claude, and Gemini to automate design research workflows.",
    year: "Ongoing",
  },
  {
    title: "Accessibility Reviews",
    category: "WCAG Audit",
    description: "WCAG 2.1 AA audits and remediation for real-world digital products.",
    year: "Ongoing",
  },
];

export default function SelectedWork() {
  return (
    <>
      {/* Featured Work */}
      <section
        aria-labelledby="featured-work-heading"
        className="section"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="container">
          <FadeUp style={{ marginBottom: "48px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                flexWrap: "wrap",
                gap: "16px",
              }}
            >
              <div>
                <p className="section-number" style={{ marginBottom: "16px" }}>
                  Featured Work
                </p>
                <h2 id="featured-work-heading" className="text-h2">
                  Selected case studies
                </h2>
              </div>
              <Link
                href="/case-studies"
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "var(--muted-2)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--border-2)",
                  paddingBottom: "2px",
                }}
              >
                View all →
              </Link>
            </div>
          </FadeUp>

          <StaggerChildren staggerDelay={0.1}>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {featuredWork.map((work, i) => (
                <motion.div key={work.slug} variants={staggerItem}>
                  <Link
                    href={`/case-studies/${work.slug}`}
                    style={{ textDecoration: "none", display: "block" }}
                    aria-label={`Read case study: ${work.title}`}
                  >
                    <article
                      className="card"
                      style={{
                        padding: "32px",
                        display: "grid",
                        gridTemplateColumns: i % 2 === 0 ? "1fr 220px" : "220px 1fr",
                        gap: "40px",
                        alignItems: "center",
                        cursor: "pointer",
                        transition:
                          "transform 0.25s cubic-bezier(0.16,1,0.3,1), border-color 0.2s, box-shadow 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.transform =
                          "translateY(-2px)";
                        (e.currentTarget as HTMLElement).style.borderColor =
                          "var(--border-2)";
                        (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(0,0,0,0.4)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.transform =
                          "translateY(0)";
                        (e.currentTarget as HTMLElement).style.borderColor =
                          "var(--border)";
                        (e.currentTarget as HTMLElement).style.boxShadow = "none";
                      }}
                      className="work-card"
                    >
                      {/* Content */}
                      <div style={{ order: i % 2 === 0 ? 1 : 2 }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            marginBottom: "16px",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "10px",
                              fontWeight: 600,
                              letterSpacing: "0.12em",
                              textTransform: "uppercase",
                              color: "var(--muted)",
                            }}
                          >
                            {work.number}
                          </span>
                          <span
                            style={{
                              width: "1px",
                              height: "10px",
                              background: "var(--border-2)",
                            }}
                          />
                          <span
                            style={{
                              fontSize: "11px",
                              color: "var(--muted)",
                            }}
                          >
                            {work.year} · {work.role}
                          </span>
                        </div>

                        <h3
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "clamp(24px, 2.8vw, 36px)",
                            fontWeight: 300,
                            color: "var(--heading)",
                            letterSpacing: "-0.02em",
                            lineHeight: 1.1,
                            marginBottom: "6px",
                          }}
                        >
                          {work.title}
                        </h3>
                        <p
                          style={{
                            fontSize: "13px",
                            color: "var(--accent)",
                            fontStyle: "italic",
                            fontFamily: "var(--font-display)",
                            marginBottom: "16px",
                          }}
                        >
                          {work.subtitle}
                        </p>
                        <p
                          className="text-body"
                          style={{
                            color: "var(--muted-2)",
                            marginBottom: "24px",
                            maxWidth: "480px",
                            fontSize: "14px",
                          }}
                        >
                          {work.description}
                        </p>

                        <div
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "6px",
                            marginBottom: "24px",
                          }}
                        >
                          {work.tags.map((tag) => (
                            <span key={tag} className="tag">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "16px",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "13px",
                              fontWeight: 500,
                              color: "var(--heading)",
                              display: "flex",
                              alignItems: "center",
                              gap: "4px",
                            }}
                          >
                            Read Case Study
                            <span
                              style={{
                                transition: "transform 0.2s",
                              }}
                            >
                              →
                            </span>
                          </span>
                          {work.screens && (
                            <span className="tag tag-accent">{work.screens}</span>
                          )}
                        </div>
                      </div>

                      {/* Visual side — real project image */}
                      <div
                        style={{
                          order: i % 2 === 0 ? 2 : 1,
                          height: "220px",
                          borderRadius: "var(--radius-sm)",
                          border: "1px solid var(--border)",
                          position: "relative",
                          overflow: "hidden",
                          flexShrink: 0,
                        }}
                      >
                        <Image
                          src={work.image}
                          alt={`${work.title} — case study preview`}
                          fill
                          style={{ objectFit: "cover", objectPosition: "top center" }}
                          sizes="(max-width: 768px) 100vw, 240px"
                          priority={i === 0}
                        />
                        {/* Subtle overlay to keep image from overpowering */}
                        <div
                          aria-hidden="true"
                          style={{
                            position: "absolute",
                            inset: 0,
                            background: "rgba(8,8,8,0.1)",
                          }}
                        />
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>
          </StaggerChildren>
        </div>
      </section>

      {/* Selected Explorations */}
      <section
        aria-labelledby="explorations-heading"
        className="section"
        style={{
          borderTop: "1px solid var(--border)",
        }}
      >
        <div className="container">
          <FadeUp style={{ marginBottom: "40px" }}>
            <p className="section-number" style={{ marginBottom: "16px" }}>
              Selected Explorations
            </p>
            <h2 id="explorations-heading" className="text-h3" style={{ color: "var(--muted-2)" }}>
              Demonstrating range
            </h2>
          </FadeUp>

          <StaggerChildren staggerDelay={0.08}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "1px",
                background: "var(--border)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
                overflow: "hidden",
              }}
            >
              {explorations.map((exp) => (
                <motion.div
                  key={exp.title}
                  variants={staggerItem}
                  style={{
                    background: "var(--surface)",
                    padding: "24px",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "var(--surface-2)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "var(--surface)";
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "12px",
                    }}
                  >
                    <span className="tag tag-accent" style={{ fontSize: "10px" }}>
                      {exp.category}
                    </span>
                    <span
                      style={{
                        fontSize: "11px",
                        color: "var(--muted)",
                      }}
                    >
                      {exp.year}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "var(--heading)",
                      letterSpacing: "-0.01em",
                      marginBottom: "8px",
                    }}
                  >
                    {exp.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "var(--muted-2)",
                      lineHeight: 1.6,
                    }}
                  >
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </StaggerChildren>
        </div>
      </section>
    </>
  );
}
