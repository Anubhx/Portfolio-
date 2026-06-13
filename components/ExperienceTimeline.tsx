"use client";

import Image from "next/image";
import { FadeUp, StaggerChildren, staggerItem } from "./AnimatedElements";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "LTI Mindtree",
    role: "UX Designer & Design Engineer",
    period: "2024 — PRESENT",
    description:
      "Leading UX design and UI engineering for enterprise and consumer experiences across insurance, e-commerce, HR, and AI products. Bridging the gap between Figma and production React code to deliver accessible, performant, and scalable systems.",
    tags: ["UX DESIGN", "REACT", "TYPESCRIPT", "SYSTEMS", "ACCESSIBILITY"],
  },
  {
    company: "Ecstasia",
    role: "Lead UX Designer",
    period: "2023 — 2024",
    description:
      "Owned the end-to-end product experience for an event platform serving 1000+ attendees. Conducted research, designed wireframes and prototypes, and collaborated closely with developers throughout implementation.",
    tags: ["UX RESEARCH", "PROTOTYPING", "PRODUCT DESIGN", "WORKSHOPS", "COLLABORATION"],
  },
  {
    company: "Vedantu",
    role: "UX Designer",
    period: "2022 — 2023",
    description:
      "Redesigned learning experiences through iterative testing and accessibility-first thinking. Focused on reducing cognitive load and improving usability across mobile and web touchpoints.",
    tags: ["EDTECH", "ACCESSIBILITY", "MOBILE DESIGN", "USABILITY", "TESTING"],
  },
];

export default function ExperienceTimeline() {
  return (
    <section
      aria-labelledby="experience-heading"
      className="section"
      style={{ borderTop: "1px solid var(--border)", position: "relative" }}
    >
      <div className="container">
        <div className="experience-grid">
          {/* LEFT COLUMN: Image & Bio */}
          <div className="bio-column">
            <FadeUp>
              <div className="hover-container">
                <div className="tilt-card">
                  {/* Stamp/Film Strip Background */}
                  <div className="stamp-background">
                    <div className="stamp-inner" />
                  </div>

                  {/* Actual Image Container */}
                  <div className="photo-container">
                    <Image
                      src="/profilepic.jpg"
                      alt="Anubhav Raj"
                      fill
                      className="profile-img"
                      style={{ objectFit: "cover" }}
                      priority
                    />
                  </div>
                  
                  {/* Caption below image inside stamp */}
                  <div className="stamp-caption">
                    ANUBHAV RAJ • DESIGN ENGINEER
                  </div>
                </div>

                {/* Figma Hover Overlay */}
                <div className="figma-overlay">
                  <div className="figma-border" />
                  <div className="handle tl" />
                  <div className="handle tc" />
                  <div className="handle tr" />
                  <div className="handle ml" />
                  <div className="handle mr" />
                  <div className="handle bl" />
                  <div className="handle bc" />
                  <div className="handle br" />

                  <div className="figma-label top-left">
                    <span>FRAME: ABOUT_STAMP_V2.0</span>
                    <span className="scale-label">Scale 1.05x</span>
                  </div>
                  <div className="figma-label bottom-right">
                    <span style={{ color: "#a855f7" }}>W: 360px</span>
                    <span>H: 450px</span>
                  </div>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="bio-content">
                <p style={{ color: "var(--heading)", fontSize: "24px", fontWeight: 500, marginBottom: "16px", lineHeight: 1.4, letterSpacing: "-0.01em" }}>
                  Product Designer & Engineer with experience building high-scale systems.
                </p>
                <p style={{ color: "var(--muted-2)", fontSize: "17px", lineHeight: 1.7, marginBottom: "16px" }}>
                  Currently shipping products at LTI Mindtree. I translate complex user workflows into 
                  intuitive interfaces, writing both the Figma files and the production React components. 
                  <a href="/case-studies" style={{ color: "var(--accent)", textDecoration: "none", marginLeft: "4px" }}>
                    View Case Studies →
                  </a>
                </p>
                <p style={{ color: "var(--muted-2)", fontSize: "17px", lineHeight: 1.7 }}>
                  I believe that a designer who codes and an engineer who understands design is the ultimate multiplier for any product team. 
                  My work is rooted in accessibility, behavioral psychology, and systems thinking.
                </p>
              </div>
            </FadeUp>
          </div>

          {/* RIGHT COLUMN: Experience Cards */}
          <div className="timeline-column">
            <StaggerChildren staggerDelay={0.1}>
              <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
                {experiences.map((exp, i) => (
                  <motion.article
                    key={exp.company}
                    variants={staggerItem}
                    className="exp-card"
                  >
                    <div className="exp-card-header">
                      <div>
                        <h3 className="exp-role">
                          {exp.role}
                        </h3>
                        <p className="exp-company">{exp.company}</p>
                      </div>
                      <div className="exp-date-pill">
                        {exp.period}
                      </div>
                    </div>
                    
                    <p className="exp-desc">{exp.description}</p>
                    
                    <div className="exp-tags">
                      {exp.tags.map(tag => (
                        <span key={tag} className="exp-tag">{tag}</span>
                      ))}
                    </div>
                  </motion.article>
                ))}
              </div>
            </StaggerChildren>
          </div>
        </div>
      </div>

      <style jsx>{`
        .experience-grid {
          display: grid;
          grid-template-columns: 520px 1fr;
          gap: 80px;
          align-items: flex-start;
        }

        .bio-column {
          position: sticky;
          top: 120px;
        }

        /* ─── Stamp & Image CSS ────────────────────────────── */
        .hover-container {
          position: relative;
          width: 100%;
          aspect-ratio: 4/5;
          margin-bottom: 40px;
          cursor: crosshair;
        }

        .tilt-card {
          position: absolute;
          inset: 0;
          padding: 24px;
          background: #080808;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.06);
          box-shadow: 0 0 30px rgba(168, 85, 247, 0.05); /* Slight border glow */
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          transform-origin: center;
        }

        .hover-container:hover .tilt-card {
          transform: rotate(-2.5deg) scale(1.02);
        }

        .stamp-background {
          position: absolute;
          inset: 0;
          border-radius: 12px;
          border: 12px dotted rgba(255,255,255,0.03); /* Decorative perforation */
          pointer-events: none;
        }

        .photo-container {
          position: relative;
          width: 100%;
          height: calc(100% - 44px);
          overflow: hidden;
          background: var(--surface-2);
          border-radius: 4px;
        }

        .profile-img {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }

        .hover-container:hover .profile-img {
          transform: scale(1.05) !important;
        }

        .stamp-caption {
          position: absolute;
          bottom: 22px;
          left: 0;
          width: 100%;
          text-align: center;
          font-family: monospace, var(--font-sans);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.22em;
          color: #10b981;
        }

        /* ─── Figma Overlay CSS ────────────────────────────── */
        .figma-overlay {
          position: absolute;
          inset: 0;
          z-index: 10;
          opacity: 0;
          transition: opacity 0.2s ease;
          pointer-events: none;
        }

        .hover-container:hover .figma-overlay {
          opacity: 1;
        }

        .figma-border {
          position: absolute;
          inset: 0;
          border: 1.5px solid #0ea5e9;
        }

        .handle {
          position: absolute;
          width: 7px;
          height: 7px;
          background: white;
          border: 1px solid #0ea5e9;
        }
        .handle.tl { top: -4px; left: -4px; }
        .handle.tc { top: -4px; left: calc(50% - 3.5px); }
        .handle.tr { top: -4px; right: -4px; }
        .handle.ml { top: calc(50% - 3.5px); left: -4px; }
        .handle.mr { top: calc(50% - 3.5px); right: -4px; }
        .handle.bl { bottom: -4px; left: -4px; }
        .handle.bc { bottom: -4px; left: calc(50% - 3.5px); }
        .handle.br { bottom: -4px; right: -4px; }

        .figma-label {
          position: absolute;
          background: #0ea5e9;
          color: white;
          font-size: 9px;
          font-family: monospace;
          font-weight: 600;
          padding: 3px 6px;
          display: flex;
          gap: 8px;
          white-space: nowrap;
          box-shadow: 0 2px 8px rgba(14, 165, 233, 0.4);
        }
        .figma-label.top-left {
          top: -24px;
          left: -1px;
        }
        .figma-label.bottom-right {
          bottom: -24px;
          right: -1px;
          background: #1e293b;
          border: 1px solid #0ea5e9;
        }
        .scale-label {
          color: rgba(255,255,255,0.7);
        }

        /* ─── Editorial Experience Cards CSS ────────────────────────────── */
        .exp-card {
          background: rgba(255, 255, 255, 0.015);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 30px;
          padding: 40px;
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease;
          position: relative;
          overflow: hidden;
        }

        .exp-card:hover {
          border-color: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
        }

        .exp-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 24px;
          gap: 16px;
        }

        .exp-role {
          font-family: var(--font-sans);
          font-size: 34px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.95);
          letter-spacing: -0.01em;
          margin-bottom: 4px;
        }

        .exp-company {
          font-size: 18px;
          color: var(--muted-2);
          font-weight: 500;
        }

        .exp-date-pill {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 8px 16px;
          border-radius: 100px;
          color: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.03);
        }

        .exp-desc {
          font-size: 17px;
          line-height: 1.7;
          color: var(--muted-2);
          margin-bottom: 32px;
          max-width: 75ch; /* 70-75 characters max width */
        }

        .exp-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .exp-tag {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 8px 16px;
          border-radius: 100px;
          color: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.03);
        }

        @media (max-width: 1024px) {
          .experience-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .bio-column {
            position: relative;
            top: 0;
            max-width: 480px;
            margin: 0 auto;
          }
        }

        @media (max-width: 768px) {
          .exp-card {
            padding: 32px;
            border-radius: 24px;
          }
          .exp-card-header {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}
