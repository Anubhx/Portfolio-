"use client";

import Link from "next/link";
import { FadeUp } from "@/components/AnimatedElements";

const links = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anubhax/",
    description: "Professional profile",
  },
  {
    label: "GitHub",
    href: "https://github.com/Anubhx",
    description: "Code & side projects",
  },
  {
    label: "Behance",
    href: "https://www.behance.net/anubhavraj",
    description: "Design portfolio",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/anubhavRaj0",
    description: "Thoughts & threads",
  },
  {
    label: "Medium",
    href: "https://medium.com/@anubhxv",
    description: "Writing & reflections",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/anubhax.27/",
    description: "Visual experiments",
  },
];

export default function ContactPage() {
  return (
    <div style={{ paddingTop: "120px" }}>
      <section className="section" style={{ paddingTop: "40px" }}>
        <div className="container">
          <FadeUp style={{ marginBottom: "16px" }}>
            <p className="section-number">Contact</p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(48px, 7vw, 96px)",
                fontWeight: 300,
                lineHeight: 1.0,
                letterSpacing: "-0.025em",
                color: "var(--heading)",
                maxWidth: "700px",
                marginBottom: "32px",
              }}
            >
              Let&apos;s build something{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                meaningful.
              </em>
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p
              className="text-body-lg"
              style={{ maxWidth: "480px", marginBottom: "48px", color: "var(--muted-2)" }}
            >
              Open to product design and design engineering opportunities.
              Also happy to chat about UX, systems thinking, or agentic AI.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "80px" }}>
              <a
                href="mailto:anubhav0427@gmail.com"
                className="btn btn-primary"
                style={{ width: "fit-content", fontSize: "16px", padding: "14px 28px" }}
                aria-label="Send email to Anubhav"
              >
                anubhav0427@gmail.com →
              </a>
              <a
                href="https://drive.google.com/file/d/1DB9O83t1ClnK0F3wgfJiOF7gr3gDKIXC/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
                style={{ width: "fit-content" }}
                aria-label="Download Anubhav's resume"
              >
                Download Resume
              </a>
            </div>
          </FadeUp>

          {/* Links grid */}
          <div className="divider" style={{ marginBottom: "48px" }} />

          <FadeUp delay={0.4}>
            <p className="text-label" style={{ marginBottom: "24px" }}>Find me online</p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1px",
                background: "var(--border)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
                overflow: "hidden",
              }}
            >
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${link.label}: ${link.description}`}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                    padding: "24px",
                    background: "var(--surface)",
                    textDecoration: "none",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "var(--surface-2)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "var(--surface)";
                  }}
                >
                  <span
                    style={{
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "var(--heading)",
                    }}
                  >
                    {link.label} ↗
                  </span>
                  <span style={{ fontSize: "12px", color: "var(--muted)" }}>
                    {link.description}
                  </span>
                </a>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
