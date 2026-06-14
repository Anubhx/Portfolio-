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
          justifyContent: "center",
          backgroundColor: "#0D0F14",
          color: "white",
          padding: "100px",
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
            backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.07) 1px, transparent 0)",
            backgroundSize: "40px 40px",
            zIndex: 0,
          }}
        />

        {/* Content Container */}
        <div style={{ display: "flex", flexDirection: "column", zIndex: 1 }}>
          
          {/* Portrait */}
          <img
            src="https://anubhavportfolio.vercel.app/icon.png"
            width="96"
            height="96"
            style={{
              borderRadius: "48px",
              border: "1px solid rgba(42, 255, 214, 0.2)",
              marginBottom: "32px",
            }}
          />

          {/* Name & Title */}
          <div style={{ display: "flex", flexDirection: "column", marginBottom: "48px" }}>
            <span style={{ fontSize: "36px", fontWeight: 700, letterSpacing: "-0.02em", color: "#FFFFFF" }}>
              Anubhav Raj
            </span>
            <span style={{ fontSize: "24px", color: "#A1A1A9", marginTop: "12px", letterSpacing: "0.02em" }}>
              UX Designer & Design Engineer
            </span>
          </div>

          {/* Main Statement */}
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 400,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              maxWidth: "900px",
              margin: 0,
              color: "#FFFFFF",
            }}
          >
            I turn messy problems into products people actually use.
          </h1>
        </div>

        {/* Mint Accent Dot */}
        <div
          style={{
            position: "absolute",
            bottom: "100px",
            right: "100px",
            width: "20px",
            height: "20px",
            backgroundColor: "#2AFFD6",
            borderRadius: "50%",
            boxShadow: "0 0 30px rgba(42, 255, 214, 0.5)",
            zIndex: 1,
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
