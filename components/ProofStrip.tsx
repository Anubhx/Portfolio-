"use client";

import Image from "next/image";

const tools = [
  { name: "Figma", tag: "DESIGN", logo: "/logos/figma.svg" },
  { name: "Cursor", tag: "AI EDITOR", logo: "/logos/cursor.svg" },
  { name: "Claude", tag: "AI PLATFORM", logo: "/logos/claude.svg" },
  { name: "ChatGPT", tag: "AI ASSISTANT", logo: "/logos/openai.svg" },
  { name: "Gemini", tag: "LLM", logo: "/logos/gemini.svg" },
  { name: "Next.js", tag: "FRAMEWORK", logo: "/logos/nextjs.svg" },
  { name: "TypeScript", tag: "LANGUAGE", logo: "/logos/typescript.svg" },
  { name: "React Native", tag: "MOBILE", logo: "/logos/react.svg" },
  { name: "Maze", tag: "TESTING", logo: "/logos/maze.svg" },
  { name: "Miro", tag: "WORKSHOPS", logo: "/logos/miro.svg" },
  { name: "n8n", tag: "AUTOMATION", logo: "/logos/n8n.svg" },
];

const doubled = [...tools, ...tools];

export default function ProofStrip() {
  return (
    <section
      aria-label="Tool Ecosystem Panel"
      style={{
        padding: "80px 0",
        position: "relative",
      }}
    >
      <div className="container" style={{ perspective: "1800px" }}>
        <div
          className="ecosystem-panel"
          style={{
            width: "100%",
            height: "120px",
          borderRadius: "16px",
          border: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(255,255,255,0.015)",
          position: "relative",
          transform: "perspective(1800px) rotateX(2deg) rotateZ(-0.4deg)",
          transformStyle: "preserve-3d",
          boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
          overflow: "hidden", // CRITICAL: Keeps everything inside the plane
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Subtle Grid Background */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
            pointerEvents: "none",
          }}
        />

        {/* Fade Edges for Desktop Marquee */}
        <div className="edge-fade left" />
        <div className="edge-fade right" />

        {/* Scrolling Track */}
        <div
          className="ecosystem-track"
          role="list"
          aria-label="Tools list"
        >
          {doubled.map((tool, i) => (
            <div
              key={`${tool.name}-${i}`}
              role="listitem"
              className="tool-card"
              style={{
                display: "flex",
                alignItems: "center",
                height: "100%",
                padding: "0 18px",
                scrollSnapAlign: "center",
              }}
            >
              {/* Individual Tool Item */}
              <div
                className="tool-item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "18px",
                  cursor: "default",
                }}
              >
                <div className="tool-logo-container">
                  <Image
                    src={tool.logo}
                    alt={`${tool.name} logo`}
                    width={28}
                    height={28}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
                  <span className="tool-name">{tool.name}</span>
                  <span className="tool-tag">{tool.tag}</span>
                </div>
              </div>

              {/* Separator */}
              {i !== doubled.length - 1 && (
                <span
                  style={{
                    color: "rgba(255,255,255,0.15)",
                    fontSize: "12px",
                    marginLeft: "36px",
                    marginRight: "18px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  aria-hidden="true"
                >
                  ◇
                </span>
              )}
            </div>
          ))}
        </div>
        </div>
      </div>

      <style jsx>{`
        .edge-fade {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 80px;
          z-index: 2;
          pointer-events: none;
        }
        .edge-fade.left {
          left: 0;
          background: linear-gradient(to right, var(--background), transparent);
          border-top-left-radius: 16px;
          border-bottom-left-radius: 16px;
        }
        .edge-fade.right {
          right: 0;
          background: linear-gradient(to left, var(--background), transparent);
          border-top-right-radius: 16px;
          border-bottom-right-radius: 16px;
        }

        .ecosystem-track {
          display: flex;
          height: 100%;
          align-items: center;
          width: max-content;
          animation: ambient-scroll 80s linear infinite;
        }

        .ecosystem-track:hover {
          animation-play-state: paused;
        }

        .tool-item {
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .tool-logo-container {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.02);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          flex-shrink: 0;
        }

        .tool-name {
          font-family: var(--font-sans);
          font-size: 22px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.7);
          letter-spacing: -0.01em;
          line-height: 1.2;
          transition: color 0.25s ease;
        }

        .tool-tag {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: var(--muted);
          line-height: 1;
          opacity: 0.6;
          transition: opacity 0.25s ease;
          padding-left: 4px;
          border-left: 1px solid rgba(255,255,255,0.1);
          padding-top: 2px;
          padding-bottom: 2px;
        }

        /* Hover Interactions */
        .tool-item:hover {
          transform: translateY(-2px);
        }

        .tool-item:hover .tool-logo-container {
          border-color: var(--accent);
          box-shadow: 0 4px 20px var(--accent-subtle);
          background: rgba(255, 255, 255, 0.05);
        }

        .tool-item:hover .tool-name {
          color: rgba(255, 255, 255, 0.95);
        }

        .tool-item:hover .tool-tag {
          opacity: 1;
        }

        @keyframes ambient-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        /* Mobile specific adjustments */
        @media (max-width: 768px) {
          .ecosystem-panel {
            transform: none !important;
            border-radius: 0 !important;
            border-left: none !important;
            border-right: none !important;
          }
          .edge-fade {
            display: none;
          }
          .ecosystem-track {
            animation: none;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            scrollbar-width: none;
            padding: 0 16px;
            width: 100%;
            -webkit-overflow-scrolling: touch;
          }
          .ecosystem-track::-webkit-scrollbar {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
