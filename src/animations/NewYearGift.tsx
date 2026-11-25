import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { Stage } from "../components/Stage";
import { defs, parts } from "../svg/NewYearGift";
import { TAU, clamp01, rand, tf } from "../utils";
import type { SceneProps } from "./Hourglass";

const CONFETTI = 24;
const COLORS = ["#fb493a", "#ffc036", "#fdd15a", "#ffffff", "#ff7a66"];
const GRAVITY = 1500;

/**
 * Kado tahun baru (8 detik, loop mulus): kado melompat empat kali dengan
 * squash & stretch, tutup terangkat di puncak lompatan, pita bergoyang, dan
 * konfeti meledak dari dalam kotak.
 */
export const NewYearGift: React.FC<SceneProps> = ({ background, shadow }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const u = frame / durationInFrames;
  const x = 4 * u; // satu lompatan = satu satuan x

  const hop = Math.abs(Math.sin(Math.PI * x));
  const land = Math.pow(1 - hop, 10);

  const boxTf = `translate(0 ${-85 * hop}) ${tf(540, 975, {
    sx: 1 + 0.07 * land - 0.02 * hop,
    sy: 1 - 0.09 * land + 0.03 * hop,
  })}`;
  const lidTf = `translate(0 ${-60 * hop * hop}) ${tf(540, 540, {
    rotate: 3 * Math.sin(TAU * x) * hop,
  })}`;

  const bow = 7 * Math.sin(TAU * 2 * x);
  const bowScale = 1 + 0.03 * Math.sin(TAU * 2 * x + 1);

  // Konfeti meledak di puncak lompatan, hidup selama satu lompatan.
  const c = (((x - 0.5) % 1) + 1) % 1;
  const confetti = Array.from({ length: CONFETTI }, (_, i) => {
    const dev = (i / (CONFETTI - 1) - 0.5) * 2.2 + (rand(i, 1) - 0.5) * 0.25;
    const speed = 380 + rand(i, 2) * 420;
    const px = 545 + Math.sin(dev) * speed * c;
    const py = 170 - Math.cos(dev) * speed * c + 0.5 * GRAVITY * c * c;
    const rot = 720 * c * (rand(i, 3) > 0.5 ? 1 : -1) + rand(i, 4) * 180;
    const opacity = clamp01((1 - c) * 3) * clamp01(c * 12);
    const color = COLORS[i % COLORS.length];
    const round = rand(i, 5) > 0.6;
    return (
      <g key={i} transform={`translate(${px} ${py}) rotate(${rot})`} opacity={opacity}>
        {round ? (
          <circle r={8 + rand(i, 6) * 5} fill={color} />
        ) : (
          <rect
            x={-8}
            y={-14}
            width={14 + rand(i, 7) * 8}
            height={24 + rand(i, 8) * 12}
            rx={3}
            fill={color}
          />
        )}
      </g>
    );
  });

  return (
    <Stage
      background={background}
      ground={
        shadow
          ? { y: 985, width: 880, scale: 1 - 0.3 * hop, opacity: 1 - 0.5 * hop }
          : undefined
      }
    >
      {defs}
      <g transform={boxTf}>
        {parts.bodyKado}
        <g transform={lidTf}>
          {parts.tutupKado}
          {parts.taliKanan}
          <g transform={tf(562, 330, { rotate: bow, sx: bowScale, sy: bowScale })}>
            {parts.simpulKanan}
          </g>
          {parts.taliKiri}
          <g transform={tf(562, 330, { rotate: -bow, sx: bowScale, sy: bowScale })}>
            {parts.simpulKiri}
          </g>
          {parts.bulatanSimpul}
        </g>
      </g>
      {confetti}
    </Stage>
  );
};
