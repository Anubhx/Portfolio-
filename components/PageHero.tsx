"use client";

import Image from "next/image";

// Same tiny blur placeholder generated from bg.png
const BG_BLUR =
  "data:image/jpeg;base64,/9j/2wBDACgcHiMeGSgjISMtKygwPGRBPDc3PHtYXUlkkYCZlo+AjIqgtObDoKrarYqMyP/L2u71////m8H////6/+b9//j/2wBDASstLTw1PHZBQXb4pYyl+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj/wAARCAAKAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAMF/8QAHBAAAgICAwAAAAAAAAAAAAAAAAEDEQIEMXKh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKLgA9rO3WXiETOoJOpmAf/Z";

interface PageHeroProps {
  /** Height of the background image area. Defaults to 480px */
  height?: number | string;
  /** How visible the image is — 0 to 1. Defaults to 0.35 (subtle) */
  opacity?: number;
  /** Focal point of the image. Defaults to "right center" */
  objectPosition?: string;
}

/**
 * Shared page-header background image.
 * Renders bg.png at reduced opacity with a strong gradient overlay
 * so it reads as atmosphere, not distraction.
 */
export default function PageHero({
  height = 480,
  opacity = 0.35,
  objectPosition = "right center",
}: PageHeroProps) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height,
        zIndex: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {/* The photo */}
      <div style={{ position: "absolute", inset: 0, opacity }}>
        <Image
          src="/images/bg.png"
          alt=""
          fill
          priority={false}
          quality={60}
          sizes="100vw"
          placeholder="blur"
          blurDataURL={BG_BLUR}
          style={{
            objectFit: "cover",
            objectPosition,
            transition: "opacity 0.8s ease",
          }}
        />
      </div>

      {/* Strong gradient — solid left (text side), image fades in from right */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(
            to right,
            var(--bg) 0%,
            var(--bg) 45%,
            rgba(8,8,8,0.85) 60%,
            rgba(8,8,8,0.4) 78%,
            rgba(8,8,8,0.1) 92%,
            transparent 100%
          )`,
        }}
      />
      {/* Bottom fade so the image doesn't bleed into page content below */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(
            to bottom,
            rgba(8,8,8,0.1) 0%,
            transparent 30%,
            transparent 60%,
            var(--bg) 100%
          )`,
        }}
      />
    </div>
  );
}
