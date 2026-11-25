import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { Stage } from "../components/Stage";
import { defs, parts } from "../svg/StarGlasses";
import { TAU, lerp, tf, twinkle } from "../utils";
import type { SceneProps } from "./Hourglass";

/**
 * Kacamata bintang (8 detik, loop mulus): kacamata melayang dan miring
 * perlahan, bintang di lensa bergoyang berlawanan arah, kilau putih menyapu
 * kedua lensa, dan tiga percikan berkedip bergantian.
 */
export const StarGlasses: React.FC<SceneProps> = ({ background, shadow }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const u = frame / durationInFrames;

  const lift = 0.5 + 0.5 * Math.sin(TAU * 2 * u);
  const rotate = 4 * Math.sin(TAU * u);

  const wobble = Math.sin(TAU * 2 * u);
  const starScale = 1 + 0.05 * Math.sin(TAU * 2 * u + 1.5);

  // Kilau menyapu dari kiri ke kanan dua kali per loop.
  const glintX = lerp(-80, 1160, (u * 2) % 1);
  const glint = (
    <rect
      x={glintX - 25}
      y={300}
      width={50}
      height={600}
      fill="#ffffff"
      opacity={0.35}
      transform={`rotate(20 ${glintX} 600)`}
    />
  );

  const sparkle = (cx: number, cy: number, offset: number, key: string, node: React.ReactNode) => {
    const s = twinkle(u, 2, offset);
    return (
      <g
        key={key}
        transform={tf(cx, cy, { rotate: 15 * Math.sin(TAU * (u + offset)), sx: 0.5 + 0.5 * s, sy: 0.5 + 0.5 * s })}
        opacity={0.35 + 0.65 * s}
      >
        {node}
      </g>
    );
  };

  return (
    <Stage
      background={background}
      ground={
        shadow
          ? { y: 905, width: 720, scale: 1 - 0.15 * lift, opacity: 0.8 - 0.3 * lift }
          : undefined
      }
    >
      {defs}
      <g transform={`translate(0 ${-16 * lift}) ${tf(540, 660, { rotate })}`}>
        {parts.connectorKacamata}
        {parts.frameKanan}
        <g transform={tf(785, 625, { rotate: 9 * wobble, sx: starScale, sy: starScale })}>
          {parts.bintangKanan}
          {parts.highlightBintangKanan}
        </g>
        <g clipPath="url(#starglasses-clip-path)">{glint}</g>
        {parts.frameKiri}
        <g transform={tf(295, 625, { rotate: -9 * wobble, sx: starScale, sy: starScale })}>
          {parts.bintangKiri}
          {parts.highlightBintangKiri}
        </g>
        <g clipPath="url(#starglasses-clip-path-2)">{glint}</g>
        {sparkle(452, 349, 0, "kiri", parts.sparkleKiri)}
        {sparkle(583, 326, 0.33, "tengah", parts.sparkleTengah)}
        {sparkle(690, 383, 0.66, "kanan", parts.sparkleKanan)}
      </g>
    </Stage>
  );
};
