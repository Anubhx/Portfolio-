"use client";

const tools = [
  "Figma",
  "Cursor",
  "Claude",
  "ChatGPT",
  "Gemini",
  "Next.js",
  "TypeScript",
  "n8n",
  "React Native",
  "Framer",
  "Miro",
  "Maze",
];

const doubled = [...tools, ...tools];

export default function ProofStrip() {
  return (
    <section
      aria-label="Tools and technologies"
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "20px 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Gradient edges */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "120px",
          background: "linear-gradient(to right, var(--bg), transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "120px",
          background: "linear-gradient(to left, var(--bg), transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      <div className="ticker-track" role="list" aria-label="Tools list">
        {doubled.map((tool, i) => (
          <div
            key={`${tool}-${i}`}
            role="listitem"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
              padding: "0 48px",
              whiteSpace: "nowrap",
            }}
          >
            <span
              style={{
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--muted)",
              }}
            >
              {tool}
            </span>
            <span
              aria-hidden="true"
              style={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                background: "var(--border-2)",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
