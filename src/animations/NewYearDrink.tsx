import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { Stage } from "../components/Stage";
import { defs, parts } from "../svg/NewYearDrink";
import { TAU, lerp, rand, tf } from "../utils";
import type { SceneProps } from "./Hourglass";

// Tepi kiri/kanan cairan (perkiraan) pada ketinggian y, supaya gelembung
// muncul di dalam gelas.
const liquidLeft = (y: number) => 328 + (Math.max(y, 286) - 286) * (220 / 395);
const liquidRight = (y: number) =>
  y < 462 ? 631 + ((y - 228) / 234) * 27 : 658 - ((y - 462) / 219) * 110;

const BUBBLES = 18;

/**
 * Minuman tahun baru (8 detik, loop mulus): gelas bergoyang "cheers",
 * gelembung naik terus-menerus, dan kilauan berkedip.
 */
export const NewYearDrink: React.FC<SceneProps> = ({ background, shadow }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const u = frame / durationInFrames;

  const tilt = 4 * Math.sin(TAU * u);
  const bob = 8 * Math.sin(TAU * 2 * u);

  const bubbles = Array.from({ length: BUBBLES }, (_, i) => {
    const cycles = 1 + (i % 2); // 1 atau 2 kali naik per loop
    const f = (cycles * u + rand(i, 1)) % 1; // 0 = dasar, 1 = permukaan
    const y = lerp(680, 250, f);
    const xl = liquidLeft(y) + 14;
    const xr = liquidRight(y) - 14;
    const x =
      lerp(xl, Math.max(xl, xr), rand(i, 2)) +
      Math.sin(TAU * (2 * cycles * u + rand(i, 3))) * 9;
    return (
      <circle
        key={i}
        cx={x}
        cy={y}
        r={5 + rand(i, 4) * 9}
        fill="#fffaf0"
        opacity={Math.sin(Math.PI * f) * 0.85}
      />
    );
  });

  const twinkle = (offset: number) => {
    const s = 0.5 + 0.5 * Math.sin(TAU * (2 * u + offset));
    return s * s;
  };
  const spR = twinkle(0);
  const spL = twinkle(0.5);

  return (
    <Stage
      background={background}
      ground={shadow ? { y: 1042, width: 360 } : undefined}
    >
      {defs}
      <g transform={`translate(0 ${bob}) ${tf(600, 1040, { rotate: tilt })}`}>
        {parts.bodyGelas}
        {parts.isiGelas}
        <g clipPath="url(#newyeardrink-clip-path)">{bubbles}</g>
        <g opacity={0.5 + 0.5 * spR}>{parts.aksenGelasKiri}</g>
        <g opacity={0.5 + 0.5 * spL}>{parts.aksenGelasKanan}</g>
        {parts.bawahGelas}
        {parts.leherGelas}
      </g>
      <g
        transform={tf(806, 235, {
          rotate: 25 * Math.sin(TAU * u),
          sx: 0.4 + 0.6 * spR,
          sy: 0.4 + 0.6 * spR,
        })}
        opacity={0.4 + 0.6 * spR}
      >
        {parts.sparkleKanan}
      </g>
      <g
        transform={tf(279, 732, {
          rotate: -25 * Math.sin(TAU * u),
          sx: 0.4 + 0.6 * spL,
          sy: 0.4 + 0.6 * spL,
        })}
        opacity={0.4 + 0.6 * spL}
      >
        {parts.sparkleKiri}
      </g>
    </Stage>
  );
};
