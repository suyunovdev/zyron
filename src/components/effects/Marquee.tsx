"use client";

import React from "react";

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  direction?: "left" | "right";
  className?: string;
}

export default function Marquee({
  children,
  speed = 30,
  direction = "left",
  className,
}: MarqueeProps) {
  const animationDirection = direction === "right" ? "reverse" : "normal";

  return (
    <div
      className={className}
      style={{ overflow: "hidden" }}
    >
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
      <div
        style={{
          display: "inline-flex",
          gap: "2rem",
          animation: `marquee ${speed}s linear infinite`,
          animationDirection,
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.animationPlayState = "paused";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.animationPlayState = "running";
        }}
      >
        <div style={{ display: "inline-flex", gap: "2rem" }}>{children}</div>
        <div style={{ display: "inline-flex", gap: "2rem" }}>{children}</div>
      </div>
    </div>
  );
}
