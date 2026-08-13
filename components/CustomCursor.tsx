"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Only on pointer-fine (mouse) devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current!;
    const ring = ringRef.current!;

    const xDot = gsap.quickTo(dot, "x", { duration: 0.1, ease: "power3.out" });
    const yDot = gsap.quickTo(dot, "y", { duration: 0.1, ease: "power3.out" });
    const xRing = gsap.quickTo(ring, "x", { duration: 0.38, ease: "power3.out" });
    const yRing = gsap.quickTo(ring, "y", { duration: 0.38, ease: "power3.out" });

    const onMove = (e: MouseEvent) => {
      xDot(e.clientX);
      yDot(e.clientY);
      xRing(e.clientX);
      yRing(e.clientY);
    };

    const onDown = () => {
      gsap.to(dot, { scale: 0.5, duration: 0.12 });
      gsap.to(ring, { scale: 1.5, opacity: 0.6, duration: 0.15 });
    };
    const onUp = () => {
      gsap.to(dot, { scale: 1, duration: 0.2 });
      gsap.to(ring, { scale: 1, opacity: 1, duration: 0.2 });
    };

    // Grow ring on hover over interactive elements
    const onEnter = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      const isAccent = target.dataset.cursorAccent !== undefined;
      gsap.to(ring, {
        width: isAccent ? 60 : 56,
        height: isAccent ? 60 : 56,
        borderColor: isAccent ? "rgba(34, 211, 238, 0.6)" : "rgba(124, 92, 252, 0.7)",
        duration: 0.22,
      });
      gsap.to(dot, { opacity: 0, duration: 0.15 });
    };
    const onLeave = () => {
      gsap.to(ring, {
        width: 36,
        height: 36,
        borderColor: "rgba(124, 92, 252, 0.5)",
        duration: 0.22,
      });
      gsap.to(dot, { opacity: 1, duration: 0.15 });
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    // Attach to links & buttons after mount
    const targets = document.querySelectorAll(
      "a, button, [role='button'], .btn, .card, .tool-item"
    );
    targets.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  });

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
