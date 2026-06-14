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
        padding: "64px 0 40px",
      }}
    >
      <div className="container">
        {/* CTA */}
        <div
          style={{
            marginBottom: "56px",
            maxWidth: "600px",
          }}
        >
          <p className="section-number" style={{ marginBottom: "16px" }}>
            Let&apos;s talk
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 4.5vw, 56px)",
              fontWeight: 300,
              color: "var(--heading)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: "20px",
            }}
          >
            Let&apos;s build something{" "}
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
              meaningful.
            </em>
          </h2>
          <p className="text-body-lg" style={{ marginBottom: "32px", fontSize: "15px" }}>
            Open to product design and design engineering opportunities.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a
              href="mailto:anubhav0427@gmail.com"
              className="btn btn-primary"
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
          <p className="text-sm" style={{ color: "var(--muted)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
            © {new Date().getFullYear()} Anubhav Raj. Designed & built with
            precision.
          </p>
          <nav
            aria-label="Social links"
            style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}
          >
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
