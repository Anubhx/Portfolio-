import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Anubhav Raj — UX Designer & Design Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0D0F14",
          color: "white",
          padding: "60px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle grid texture background */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.1) 1px, transparent 0)",
            backgroundSize: "32px 32px",
            zIndex: 0,
          }}
        />

        {/* Top Section */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", zIndex: 1 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "32px", fontWeight: 700, letterSpacing: "-0.02em", color: "#FFFFFF" }}>
              Anubhav Raj
            </span>
            <span style={{ fontSize: "20px", color: "#A1A1A9", marginTop: "8px", letterSpacing: "0.02em" }}>
              UX Designer & Design Engineer
            </span>
          </div>
          
          <img
            src="https://anubhavportfolio.vercel.app/icon.png"
            width="80"
            height="80"
            style={{
              borderRadius: "40px",
              border: "1px solid rgba(42, 255, 214, 0.2)",
            }}
          />
        </div>

        {/* Center Section */}
        <div style={{ display: "flex", flexDirection: "column", zIndex: 1, marginTop: "20px" }}>
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              maxWidth: "850px",
              margin: 0,
              color: "#FFFFFF",
            }}
          >
            I turn messy problems into products people actually use.
          </h1>
          <p
            style={{
              fontSize: "28px",
              color: "#2AFFD6", // Mint accent
              marginTop: "24px",
              fontWeight: 500,
              letterSpacing: "-0.01em",
            }}
          >
            Designing with evidence. Shipping with code.
          </p>
        </div>

        {/* Bottom Section */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "16px", color: "#A1A1A9", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
              Selected Work
            </span>
            <div style={{ display: "flex", gap: "24px", fontSize: "20px", color: "#E4E4E7" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ color: "#2AFFD6" }}>•</span>
                Zomato Group Ordering
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ color: "#2AFFD6" }}>•</span>
                FlowWise
              </div>
            </div>
          </div>
          
          <div style={{ fontSize: "20px", color: "#A1A1A9", fontWeight: 500 }}>
            anubhavportfolio.vercel.app
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
