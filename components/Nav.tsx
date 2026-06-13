"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/case-studies", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        role="banner"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: "80px",
          display: "flex",
          alignItems: "center",
          transition: "background 0.35s, border-color 0.35s",
          background: scrolled ? "rgba(8,8,8,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* Wordmark & Phone Block */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Link
              href="/"
              aria-label="Anubhav Raj — Home"
              style={{
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                gap: "2px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 700,
                  fontSize: "14px",
                  letterSpacing: "0.05em",
                  color: "var(--heading)",
                  lineHeight: 1,
                  textTransform: "uppercase"
                }}
              >
                Anubhav RAJ
              </span>
            </Link>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "6px",
                padding: "6px 10px",
                width: "fit-content",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#10b981",
                  boxShadow: "0 0 6px #10b981",
                }}
              />
              <span
                style={{
                  fontFamily: "monospace",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.15em",
                  color: "var(--muted-2)",
                  lineHeight: 1,
                }}
              >
                +91 6200107977
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav
            aria-label="Primary navigation"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
            className="hide-mobile"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: isActive ? "var(--heading)" : "var(--muted)",
                    textDecoration: "none",
                    padding: "6px 14px",
                    borderRadius: "var(--radius-sm)",
                    transition: "color 0.2s, background 0.2s",
                    background: isActive ? "rgba(255,255,255,0.04)" : "transparent",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.color = "var(--heading)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.color = "var(--muted)";
                  }}
                >
                  {link.label}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        bottom: "4px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "3px",
                        height: "3px",
                        borderRadius: "50%",
                        background: "var(--accent)",
                      }}
                    />
                  )}
                </Link>
              );
            })}

            {/* Separator */}
            <span
              aria-hidden="true"
              style={{
                width: "1px",
                height: "16px",
                background: "var(--border-2)",
                margin: "0 10px",
              }}
            />

            {/* Resume download — outlined bracket button */}
            <a
              href="/resume.pdf"
              download
              aria-label="Download Anubhav's resume"
              className="btn-nav"
            >
              Resume ↓
            </a>

            {/* Contact CTA — accent outlined */}
            <Link
              href="/contact"
              className="btn-nav btn-nav-accent"
              style={{ marginLeft: "4px" }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: "var(--accent)",
                  flexShrink: 0,
                }}
              />
              Hire Me
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="show-mobile"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              zIndex: 60,
            }}
          >
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1px",
                background: "var(--heading)",
                transition: "transform 0.25s, opacity 0.25s",
                transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1px",
                background: "var(--heading)",
                opacity: menuOpen ? 0 : 1,
                transition: "opacity 0.25s",
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1px",
                background: "var(--heading)",
                transition: "transform 0.25s",
                transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          role="dialog"
          aria-label="Mobile navigation menu"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 45,
            background: "rgba(8,8,8,0.98)",
            backdropFilter: "blur(20px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "0 40px",
            gap: "32px",
          }}
        >
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(28px, 7vw, 44px)",
                fontWeight: 700,
                color: pathname === link.href ? "var(--accent)" : "var(--heading)",
                textDecoration: "none",
                letterSpacing: "-0.02em",
                opacity: 0,
                animationDelay: `${i * 0.07}s`,
                animationName: "mobileNavFadeUp",
                animationDuration: "0.35s",
                animationFillMode: "forwards",
                animationTimingFunction: "var(--ease-expo)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            download
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "14px",
              fontWeight: 500,
              color: "var(--muted-2)",
              textDecoration: "none",
              letterSpacing: "0.02em",
              borderBottom: "1px solid var(--border-2)",
              paddingBottom: "4px",
            }}
          >
            Download Resume ↓
          </a>
        </div>
      )}

      <style jsx global>{`
        @keyframes mobileNavFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
