"use client";
import Link from "next/link";

const socialLinks = [
  { href: "mailto:anubhav0427@gmail.com", label: "Email" },
  { href: "https://www.linkedin.com/in/anubhax/", label: "LinkedIn", external: true },
  { href: "https://github.com/Anubhx", label: "GitHub", external: true },
  { href: "https://www.behance.net/anubhavraj", label: "Behance", external: true },
  { href: "https://twitter.com/anubhavRaj0", label: "Twitter", external: true },
];

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      style={{
        borderTop: "1px solid var(--border)",
        padding: "80px 0 48px",
      }}
    >
      <div className="container">
        {/* CTA */}
        <div
          style={{
            marginBottom: "64px",
            maxWidth: "600px",
          }}
        >
          <p className="text-label" style={{ marginBottom: "20px" }}>
            Let&apos;s talk
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 300,
              color: "var(--heading)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: "24px",
            }}
          >
            Let&apos;s build something{" "}
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
              meaningful.
            </em>
          </h2>
          <p className="text-body-lg" style={{ marginBottom: "32px" }}>
            Open to product design and design engineering opportunities.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a
              href="mailto:anubhav0427@gmail.com"
              className="btn btn-primary"
              aria-label="Send Anubhav an email"
            >
              anubhav0427@gmail.com →
            </a>
            <a
              href="/resume.pdf"
              download
              className="btn btn-ghost"
              aria-label="Download resume"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="divider" style={{ marginBottom: "32px" }} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            © {new Date().getFullYear()} Anubhav Raj. Designed & built with
            precision.
          </p>
          <nav
            aria-label="Social links"
            style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}
          >
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                style={{
                  fontSize: "13px",
                  color: "var(--muted)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "var(--heading)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "var(--muted)")
                }
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
