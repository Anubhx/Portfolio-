"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

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
          height: "64px",
          display: "flex",
          alignItems: "center",
          transition: "background 0.4s, border-color 0.4s",
          background: scrolled ? "rgba(8,8,8,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
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
          {/* Wordmark */}
          <Link
            href="/"
            aria-label="Anubhav Raj — Home"
            style={{
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              gap: "1px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: "15px",
                letterSpacing: "-0.03em",
                color: "var(--heading)",
                lineHeight: 1,
              }}
            >
              Anubhav Raj
            </span>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "10px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--muted)",
                lineHeight: 1,
              }}
            >
              UX Designer · Design Engineer
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav
            aria-label="Primary navigation"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
            }}
            className="hide-mobile"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link${pathname === link.href || pathname.startsWith(link.href + "/") ? " active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              download
              className="btn btn-ghost"
              style={{ padding: "8px 16px", fontSize: "13px" }}
              aria-label="Download Anubhav's resume"
            >
              Resume ↓
            </a>
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
                width: "24px",
                height: "1px",
                background: "var(--heading)",
                transition: "transform 0.3s, opacity 0.3s",
                transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "24px",
                height: "1px",
                background: "var(--heading)",
                opacity: menuOpen ? 0 : 1,
                transition: "opacity 0.3s",
              }}
            />
            <span
              style={{
                display: "block",
                width: "24px",
                height: "1px",
                background: "var(--heading)",
                transition: "transform 0.3s",
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
            background: "var(--bg)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "0 40px",
            gap: "40px",
          }}
        >
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(32px, 8vw, 48px)",
                fontWeight: 700,
                color: pathname === link.href ? "var(--accent)" : "var(--heading)",
                textDecoration: "none",
                letterSpacing: "-0.02em",
                opacity: 0,
                animationDelay: `${i * 0.08}s`,
                animationName: "fadeUp",
                animationDuration: "0.4s",
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
              fontSize: "16px",
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
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
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
