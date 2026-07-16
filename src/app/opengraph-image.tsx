import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ZYRON — Biznes Texnologiya Ekotizimi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0F172A 0%, #020617 50%, #0F172A 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Gradient glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Z Mark */}
        <svg width="80" height="80" viewBox="0 0 100 100" style={{ marginBottom: 24 }}>
          <defs>
            <linearGradient id="zg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
          <path
            d="M14 10H86V32L61 57L43 39L50 32H14ZM86 90H14V68L39 43L57 61L50 68H86Z"
            fill="url(#zg)"
          />
        </svg>

        {/* Title */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            background: "linear-gradient(135deg, #FFFFFF 0%, #94A3B8 100%)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: 16,
          }}
        >
          ZYRON
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 24,
            color: "#64748B",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: 40,
          }}
        >
          Beyond Innovation
        </div>

        {/* Product badges */}
        <div style={{ display: "flex", gap: 12 }}>
          {["POS", "ERP", "CRM", "AI", "Cloud", "Analytics"].map((name) => (
            <div
              key={name}
              style={{
                padding: "8px 20px",
                borderRadius: 8,
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.05)",
                color: "#94A3B8",
                fontSize: 16,
                fontWeight: 500,
              }}
            >
              {name}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            display: "flex",
            alignItems: "center",
            gap: 8,
            color: "#475569",
            fontSize: 16,
          }}
        >
          zyron.uz
        </div>
      </div>
    ),
    { ...size }
  );
}
