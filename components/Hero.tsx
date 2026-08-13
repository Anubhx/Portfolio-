"use client";

// Tiny 10×10 blur placeholder for bg.png
const BG_BLUR =
  "data:image/jpeg;base64,/9j/2wBDACgcHiMeGSgjISMtKygwPGRBPDc3PHtYXUlkkYCZlo+AjIqgtObDoKrarYqMyP/L2u71////m8H////6/+b9//j/2wBDASstLTw1PHZBQXb4pYyl+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj/wAARCAAKAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAMF/8QAHBAAAgICAwAAAAAAAAAAAAAAAAEDEQIEMXKh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKLgA9rO3WXiETOoJOpmAf/Z";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type ProofPoint =
  | { type: "count"; target: number; suffix: string; label: string }
  | { type: "arrow"; value: string; label: string }
  | { type: "wcag"; value: string; label: string };

const proofPoints: ProofPoint[] = [
  { type: "count", target: 1, suffix: "+", label: "Years Industry" },
  { type: "count", target: 22, suffix: "+", label: "Screens Designed" },
  { type: "arrow", value: "Research", label: "Production" },
  { type: "wcag", value: "WCAG", label: "2.1 AA Mindset" },
];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const isReducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Stagger the hero lines in
      tl.fromTo(
        ".hero-label",
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        .fromTo(
          ".hero-line",
          { opacity: 0, y: 40, skewY: 1.5 },
          { opacity: 1, y: 0, skewY: 0, duration: 0.85, stagger: 0.11 },
          "-=0.3"
        )
        .fromTo(
          ".hero-sub",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.65 },
          "-=0.4"
        )
        .fromTo(
          ".hero-ctas",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.45"
        );

      if (!isReducedMotion) {
        // Dedicated ScrollTrigger timeline for the stats strip
        const statsTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".hero-proof",
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });

        // 1. Dividers draw in
        statsTl.to(".stat-divider", {
          height: "100%",
          duration: 0.4,
          ease: "power2.out",
          stagger: 0.06,
        });

        // 2. Numbers & labels rise up from overflow mask
        statsTl.to(
          ".stat-num",
          { y: "0%", duration: 0.5, ease: "power3.out", stagger: 0.06 },
          "<0.1"
        ).to(
          ".stat-label",
          { y: "0%", duration: 0.5, ease: "power3.out", stagger: 0.06 },
          "<0.05"
        );

        // 3. Odometer count-up
        const countElements = containerRef.current?.querySelectorAll(".stat-count");
        countElements?.forEach((el) => {
          const target = +(el as HTMLElement).dataset.target!;
          const obj = { val: 0 };
          statsTl.to(
            obj,
            {
              val: target,
              duration: 0.8,
              ease: "power1.out",
              onUpdate: () => {
                el.textContent = Math.floor(obj.val).toString();
              },
              onComplete: () => {
                el.textContent = target.toString();
              },
            },
            "<"
          );
        });

        // 4. Subtle Arrow Travel loop
        statsTl.call(() => {
          gsap.to(".arrow-travel-svg", {
            x: 5,
            duration: 1,
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1,
          });
        });

        // 5. WCAG Ring Pulse loop
        statsTl.call(
          () => {
            gsap.to(".wcag-ring", {
              scale: 1.15,
              opacity: 0.4,
              duration: 1.4,
              ease: "power1.out",
              repeat: -1,
              yoyo: true,
              transformOrigin: "center",
            });
          },
          [],
          "<"
        );
      } else {
        // Fallback for reduced motion: ensure stats are visible
        gsap.set([".stat-num", ".stat-label"], { y: "0%" });
        gsap.set(".stat-divider", { height: "100%" });
        const countElements = containerRef.current?.querySelectorAll(".stat-count");
        countElements?.forEach((el) => {
          el.textContent = (el as HTMLElement).dataset.target || "0";
        });
      }

      // Subtle float on the ambient orb
      gsap.to(".hero-orb", {
        y: -28,
        x: 18,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      aria-label="Introduction"
      className="hero-section"
      style={{
        paddingTop: "128px",
        paddingBottom: "40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── Ambient accent orb ── */}
      <div
        aria-hidden="true"
        className="hero-orb ambient-orb"
        style={{
          width: "700px",
          height: "700px",
          top: "-80px",
          left: "-120px",
          background:
            "radial-gradient(ellipse, rgba(124,92,252,0.18) 0%, rgba(124,92,252,0.04) 55%, transparent 75%)",
          filter: "blur(60px)",
        }}
      />

      {/* ── Secondary cyan orb ── */}
      <div
        aria-hidden="true"
        className="ambient-orb"
        style={{
          width: "400px",
          height: "400px",
          top: "40px",
          right: "120px",
          background:
            "radial-gradient(ellipse, rgba(34,211,238,0.07) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* ── Optimized background photo ── */}
      <div
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, zIndex: 0 }}
      >
        <Image
          src="/images/bg.png"
          alt=""
          fill
          priority
          quality={85}
          sizes="100vw"
          className="hero-bg-image"
          placeholder="blur"
          blurDataURL={BG_BLUR}
          style={{ objectFit: "cover", transition: "opacity 0.8s ease" }}
        />
      </div>

      {/* ── Gradient overlay ── */}
      <div
        aria-hidden="true"
        className="hero-text-gradient"
        style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none" }}
      />

      {/* ── Subtle grid ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
          pointerEvents: "none",
        }}
      />

      {/* ── Radial vignette ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 3,
          background:
            "radial-gradient(ellipse 80% 65% at 40% 50%, transparent 30%, var(--bg) 100%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 4 }}>
        {/* Role label */}
        <div className="hero-label" style={{ marginBottom: "24px", opacity: 0 }}>
          <span
            className="tag-live"
            style={{ marginBottom: "12px", display: "inline-flex" }}
          >
            Open to work
          </span>
          <div style={{ marginTop: "10px" }}>
            <span className="text-label">
              UX Designer · Design Engineer · Agentic Builder
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(36px, 5.5vw, 80px)",
            fontWeight: 300,
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            color: "var(--heading)",
            marginBottom: "28px",
            maxWidth: "1400px",
          }}
          className="hero-headline"
        >
          {["I turn messy", "problems into", "people actually use."].map(
            (line, i) => (
              <span
                key={i}
                className="hero-line"
                style={{ display: "block", opacity: 0 }}
              >
                {i === 1 ? (
                  <>
                    <span style={{ color: "var(--heading)" }}>problems into </span>
                    <em
                      className="text-gradient"
                      style={{
                        fontStyle: "italic",
                        display: "inline-block",
                      }}
                    >
                      products
                    </em>
                  </>
                ) : (
                  line
                )}
              </span>
            )
          )}
        </h1>

        {/* Supporting copy */}
        <div
          className="hero-sub"
          style={{ marginBottom: "36px", maxWidth: "420px", opacity: 0 }}
        >
          <p className="text-body-lg">
            Designing with evidence. Shipping with code.
            <br />
            <span style={{ color: "var(--muted)", fontSize: "14px" }}>
              Currently at{" "}
              <strong style={{ color: "var(--muted-2)", fontWeight: 500 }}>
                LTI Mindtree
              </strong>
              . Accessibility-minded. AI-enabled.
            </span>
          </p>
        </div>

        {/* CTAs */}
        <div
          className="hero-ctas"
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            marginBottom: "56px",
            alignItems: "center",
            opacity: 0,
          }}
        >
          <Link href="/case-studies" className="btn btn-primary glow-accent-sm">
            Explore Work →
          </Link>
          <a
            href="https://drive.google.com/file/d/1DB9O83t1ClnK0F3wgfJiOF7gr3gDKIXC/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
            aria-label="Download resume PDF"
          >
            Download Resume
          </a>
        </div>

        {/* Proof points / Stats Strip */}
        <div
          className="hero-proof"
          style={{
            display: "flex",
            flexWrap: "wrap",
            borderTop: "1px solid var(--border)",
            paddingTop: "24px",
          }}
        >
          {proofPoints.map((point, i) => (
            <div
              key={point.label}
              className="hero-proof-item"
              style={{
                paddingRight: "28px",
                marginRight: "28px",
                position: "relative",
                marginBottom: "8px",
              }}
            >
              {/* Divider Draw-In */}
              {i > 0 && (
                <div
                  className="stat-divider"
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: "-14px",
                    top: 0,
                    width: "1px",
                    height: "0%",
                    backgroundColor: "var(--border)",
                  }}
                />
              )}

              {/* WCAG Pulse Ring */}
              {point.type === "wcag" && (
                <div
                  className="wcag-ring"
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: "-10px",
                    left: "-12px",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    border: "1px solid var(--accent)",
                    opacity: 0,
                    pointerEvents: "none",
                  }}
                />
              )}

              {/* Number / Value (Masked rise up) */}
              <div style={{ overflow: "hidden" }}>
                <span
                  className="stat-num"
                  style={{
                    fontSize: "22px",
                    fontWeight: 600,
                    letterSpacing: "0.01em",
                    color: "var(--heading)",
                    display: "block",
                    lineHeight: 1.2,
                    transform: "translateY(120%)",
                  }}
                >
                  {point.type === "count" ? (
                    <>
                      <span className="stat-count" data-target={point.target}>0</span>
                      <span style={{ color: "var(--accent)" }}>{point.suffix}</span>
                    </>
                  ) : (
                    point.value
                  )}
                </span>
              </div>

              {/* Label (Masked rise up) */}
              <div style={{ overflow: "hidden", marginTop: "2px" }}>
                <span
                  className="stat-label"
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    letterSpacing: "0.04em",
                    color: "var(--muted)",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    transform: "translateY(120%)",
                  }}
                >
                  {point.type === "arrow" && (
                    <span
                      aria-hidden="true"
                      style={{
                        position: "relative",
                        width: "28px",
                        height: "12px",
                        display: "inline-block",
                        overflow: "hidden",
                      }}
                    >
                      <svg
                        className="arrow-travel-svg"
                        width="36"
                        height="12"
                        viewBox="0 0 36 12"
                        fill="none"
                        style={{ position: "absolute", top: 0, left: 0 }}
                      >
                        <line x1="0" y1="6" x2="26" y2="6" stroke="var(--accent)" strokeWidth="1.5" />
                        <path d="M22 2L26 6L22 10" stroke="var(--accent)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  )}
                  {point.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
