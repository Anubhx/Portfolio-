"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const socialLinks = [
  { href: "mailto:anubhav0427@gmail.com", label: "Email" },
  { href: "https://www.linkedin.com/in/anubhax/", label: "LinkedIn", external: true },
  { href: "https://github.com/Anubhx", label: "GitHub", external: true },
  { href: "https://www.behance.net/anubhavraj1", label: "Behance", external: true },
  { href: "https://twitter.com/anubhavRaj0", label: "Twitter", external: true },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".footer-cta",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: ".footer-cta", start: "top 90%" },
        }
      );
      gsap.fromTo(
        ".footer-bottom",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: { trigger: ".footer-bottom", start: "top 95%" },
        }
      );
    },
    { scope: footerRef }
  );

  return (
    <footer
      ref={footerRef}
      role="contentinfo"
      style={{
        borderTop: "1px solid var(--border)",
        padding: "80px 0 40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient orb behind CTA */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "300px",
          background:
            "radial-gradient(ellipse, rgba(124,92,252,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative" }}>
        {/* CTA */}
        <div className="footer-cta" style={{ marginBottom: "64px", maxWidth: "680px", opacity: 0 }}>
          <p className="section-number" style={{ marginBottom: "20px" }}>
            Let&apos;s talk
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 300,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              marginBottom: "20px",
              color: "var(--heading)",
            }}
          >
            Let&apos;s build something{" "}
            <em
              style={{
                fontStyle: "italic",
                background: "var(--gradient-text)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              meaningful.
            </em>
          </h2>
          <p className="text-body-lg" style={{ marginBottom: "36px", fontSize: "15px" }}>
            Open to product design and design engineering opportunities.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a
              href="mailto:anubhav0427@gmail.com"
              className="btn btn-primary glow-accent-sm"
              aria-label="Send Anubhav an email"
            >
              <span
                aria-hidden="true"
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: "white",
                  flexShrink: 0,
                }}
              />
              anubhav0427@gmail.com →
            </a>
            <a
              href="https://drive.google.com/file/d/1DB9O83t1ClnK0F3wgfJiOF7gr3gDKIXC/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
              aria-label="Download resume"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom" style={{ opacity: 0 }}>
          <div className="divider" style={{ marginBottom: "24px" }} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <p
              style={{
                fontSize: "11px",
                color: "var(--muted)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              © {new Date().getFullYear()} Anubhav Raj — Designed &amp; built with precision.
            </p>
            <nav aria-label="Social links" style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--heading)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--muted)")}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
