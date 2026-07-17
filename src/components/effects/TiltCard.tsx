"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltAmount?: number;
}

const springConfig = { stiffness: 200, damping: 20 };

export default function TiltCard({
  children,
  className,
  tiltAmount = 8,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);

  const springX = useSpring(rawX, springConfig);
  const springY = useSpring(rawY, springConfig);

  const glareBackground = useTransform(
    [glareX, glareY],
    ([x, y]: number[]) =>
      `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 65%)`
  );

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;

    const { left, top, width, height } = el.getBoundingClientRect();
    const cx = left + width / 2;
    const cy = top + height / 2;

    const offsetX = e.clientX - cx;
    const offsetY = e.clientY - cy;

    // rotateY driven by horizontal offset, rotateX by vertical (inverted)
    rawX.set((offsetX / (width / 2)) * tiltAmount);
    rawY.set(-(offsetY / (height / 2)) * tiltAmount);

    // glare position as percentage
    glareX.set(((e.clientX - left) / width) * 100);
    glareY.set(((e.clientY - top) / height) * 100);
  }

  function handleMouseLeave() {
    rawX.set(0);
    rawY.set(0);
    glareX.set(50);
    glareY.set(50);
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        rotateX: springY,
        rotateY: springX,
        perspective: 800,
        position: "relative",
      }}
    >
      {children}

      {/* Subtle shine overlay — ~5% opacity via the gradient stop values */}
      <motion.div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          pointerEvents: "none",
          backgroundImage: glareBackground,
          opacity: 0.05,
          mixBlendMode: "screen",
        }}
      />
    </motion.div>
  );
}
