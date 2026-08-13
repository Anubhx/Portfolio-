"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Tiny 10×10 base64 blur placeholders
const BLUR = {
  zomato:
    "data:image/jpeg;base64,/9j/2wBDACgcHiMeGSgjISMtKygwPGRBPDc3PHtYXUlkkYCZlo+AjIqgtObDoKrarYqMyP/L2u71////m8H////6/+b9//j/2wBDASstLTw1PHZBQXb4pYyl+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj/wAARCAAKAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAAF/8QAHhAAAQQBBQAAAAAAAAAAAAAAAQACBBEDBRUhUZL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8ANp0bDJe9rybFEcpu2Ruj6WIpB//Z",
  flowwise:
    "data:image/jpeg;base64,/9j/2wBDACgcHiMeGSgjISMtKygwPGRBPDc3PHtYXUlkkYCZlo+AjIqgtObDoKrarYqMyP/L2u71////m8H////6/+b9//j/2wBDASstLTw1PHZBQXb4pYyl+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj/wAARCAAKAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIDBf/EABsQAAICAwEAAAAAAAAAAAAAAAABAhESIWGB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AMqKTlpeWNguLlkgA//Z",
  contrast:
    "data:image/jpeg;base64,/9j/2wBDACgcHiMeGSgjISMtKygwPGRBPDc3PHtYXUlkkYCZlo+AjIqgtObDoKrarYqMyP/L2u71////m8H////6/+b9//j/2wBDASstLTw1PHZBQXb4pYyl+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj/wAARCAAKAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAQIDBf/EACAQAAEDAgcAAAAAAAAAAAAAAAEAAhEDIgQSFDFBUZH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AbD6E0Wmu4Z+QSVlOdcY2lFz3QLj6pSeyg//Z",
};

const featuredWork = [
  {
    slug: "zomato-group-ordering",
    number: "01",
    title: "Zomato Group Ordering",
    subtitle: "Designing the Social Layer of Food Delivery",
    description:
      "Food wasn't the problem. Coordination was. A UX investigation into the 20-minute tax office teams pay every time they want to eat together.",
    tags: ["UX Research", "Interaction Design", "Prototyping", "Maze Testing"],
    year: "2026",
    role: "Lead UX/UI Designer",
    accent: "#ef4444",
    accentSubtle: "rgba(239,68,68,0.08)",
    screens: "22 screens",
    image: "/Zomato_Hero2.png",
    blur: BLUR.zomato,
  },
  {
    slug: "flowwise",
    number: "02",
    title: "FlowWise",
    subtitle: "A finance app that nudges instead of judges",
    description:
      "Most finance apps act like historical ledgers. FlowWise was designed to help users before mistakes happen — through behavioral design, AI nudges, and offline-first privacy.",
    tags: ["Product Design", "React Native", "Design Systems", "AI-assisted UX"],
    year: "2026",
    role: "Product Designer & Design Engineer",
    accent: "#7c5cfc",
    accentSubtle: "rgba(124,92,252,0.08)",
    screens: "40+ components",
    image: "/FlowWise_Hero2.png",
    blur: BLUR.flowwise,
    links: {
      behance: "https://www.behance.net/gallery/247562999/Flow-Wise-Case-Study",
      github: "https://github.com/Anubhx/flow-wise",
    },
  },
  {
    slug: "contrast",
    number: "03",
    title: "Contrast",
    subtitle: "Paste a URL. Get a score. Know what to fix.",
    description:
      "A free design audit tool that checks any live URL for WCAG compliance, typography consistency, and spacing — returning a scored, shareable report in under 15 seconds. Built with Playwright, axe-core, and Gemini.",
    tags: ["Engineering", "Accessibility", "Next.js", "Playwright", "Gemini API"],
    year: "2026",
    role: "Designer + Engineer",
    accent: "#a3e635",
    accentSubtle: "rgba(163,230,53,0.07)",
    screens: "Full-stack tool",
    image: "/images/contrast/hero.png",
    blur: BLUR.contrast,
    links: {
      website: "https://getcontrast.vercel.app",
      github: "https://github.com/Anubhx/Contrast",
    },
  },
];

function WorkCard({ work, index }: { work: (typeof featuredWork)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;

  useGSAP(
    () => {
      const card = cardRef.current!;

      // Scroll-driven reveal
      gsap.fromTo(
        card,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Stagger internal elements
      gsap.fromTo(
        card.querySelectorAll(".work-meta, .work-title, .work-desc, .work-tags, .work-cta"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: cardRef }
  );

  // Hover parallax on image
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 8;
    gsap.to(imageRef.current, { x, y, duration: 0.4, ease: "power2.out" });
  };
  const handleMouseLeave = () => {
    if (!imageRef.current) return;
    gsap.to(imageRef.current, { x: 0, y: 0, duration: 0.5, ease: "power3.out" });
  };

  return (
    <div ref={cardRef} style={{ opacity: 0 }}>
      <Link
        href={`/case-studies/${work.slug}`}
        style={{ textDecoration: "none", display: "block" }}
        aria-label={`Read case study: ${work.title}`}
      >
        <article
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
            padding: "72px 0",
            borderBottom: "1px solid var(--border)",
          }}
          className="work-card-inner"
        >
          {/* ── Content side ── */}
          <div style={{ order: isEven ? 1 : 2 }}>
            {/* Number + meta */}
            <div
              className="work-meta"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "20px",
                opacity: 0,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "13px",
                  fontWeight: 300,
                  color: work.accent,
                  letterSpacing: "0.04em",
                }}
              >
                {work.number}
              </span>
              <span
                style={{
                  width: "1px",
                  height: "12px",
                  background: "var(--border-2)",
                }}
              />
              <span style={{ fontSize: "11px", color: "var(--muted)", letterSpacing: "0.06em" }}>
                {work.year} · {work.role}
              </span>
            </div>

            {/* Title */}
            <h3
              className="work-title"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(26px, 2.8vw, 40px)",
                fontWeight: 300,
                color: "var(--heading)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                marginBottom: "8px",
                opacity: 0,
              }}
            >
              {work.title}
            </h3>

            <p
              className="work-desc"
              style={{
                fontSize: "13px",
                color: work.accent,
                fontStyle: "italic",
                fontFamily: "var(--font-display)",
                marginBottom: "16px",
                opacity: 0,
              }}
            >
              {work.subtitle}
            </p>

            <p
              className="work-desc"
              style={{
                fontSize: "15px",
                color: "var(--body)",
                lineHeight: 1.75,
                marginBottom: "24px",
                maxWidth: "520px",
                opacity: 0,
              }}
            >
              {work.description}
            </p>

            {/* Tags */}
            <div
              className="work-tags"
              style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "28px", opacity: 0 }}
            >
              {work.tags.map((tag) => (
                <span
                  key={tag}
                  className="tag"
                  style={{
                    background: work.accentSubtle,
                    borderColor: `${work.accent}30`,
                    color: work.accent,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA row */}
            <div
              className="work-cta"
              style={{ display: "flex", alignItems: "center", gap: "14px", opacity: 0 }}
            >
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "var(--heading)",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  letterSpacing: "0.02em",
                }}
              >
                Read Case Study →
              </span>
              {work.screens && (
                <span className="tag tag-accent">{work.screens}</span>
              )}
            </div>
          </div>

          {/* ── Image side ── */}
          <div
            style={{
              order: isEven ? 2 : 1,
              width: "100%",
              aspectRatio: "16/10",
              borderRadius: "16px",
              overflow: "hidden",
              position: "relative",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              cursor: "none",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div
              ref={imageRef}
              style={{ position: "absolute", inset: "-6%", width: "112%", height: "112%" }}
            >
              <Image
                src={work.image}
                alt={`${work.title} preview`}
                fill
                placeholder="blur"
                blurDataURL={work.blur}
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index === 0}
              />
            </div>
            {/* Subtle color-matched glow at bottom */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "50%",
                background: `linear-gradient(to top, ${work.accentSubtle}, transparent)`,
                pointerEvents: "none",
              }}
            />
          </div>
        </article>
      </Link>

      {/* Mobile responsive overrides */}
      <style>{`
        @media (max-width: 768px) {
          .work-card-inner {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
            padding: 48px 0 !important;
          }
          .work-card-inner > * {
            order: unset !important;
          }
        }
      `}</style>
    </div>
  );
}

export default function SelectedWork() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".sw-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".sw-header",
            start: "top 88%",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      aria-labelledby="featured-work-heading"
      className="section"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="container">
        {/* Section header */}
        <div
          className="sw-header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "16px",
            marginBottom: "12px",
            opacity: 0,
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
              transition: "color 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--heading)";
              e.currentTarget.style.borderColor = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--muted-2)";
              e.currentTarget.style.borderColor = "var(--border-2)";
            }}
          >
            View all →
          </Link>
        </div>

        {/* Work cards */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {featuredWork.map((work, i) => (
            <WorkCard key={work.slug} work={work} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
