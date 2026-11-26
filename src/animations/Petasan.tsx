import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { Pivot } from "../components/Fx";
import { Stage } from "../components/Stage";
import { defs, kids, parts } from "../svg/Petasan";
import { TAU, tf, twinkle } from "../utils";
import type { SceneProps } from "./Hourglass";

// kids.sparkPetasan: indeks 0-8 = sinar, 9 = bintang tengah, 10-19 = percikan kecil.
const BURST = { x: 555, y: 425 };
const RAYS = 9;
// Geser adegan ke bawah agar sinar api tidak mepet tepi atas kanvas.
const DY = 60;

/**
 * Petasan (8 detik, loop mulus): petasan melompat tiap 2 detik dan bergetar,
 * setiap mendarat sinar api "meletus", lalu sinar berdenyut dan percikan berkedip.
 */
export const Petasan: React.FC<SceneProps> = ({ background, shadow }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const u = frame / durationInFrames;

  const hop = Math.abs(Math.sin(Math.PI * 4 * u));
  const land = Math.pow(1 - hop, 10);
  const pop = Math.pow(1 - ((4 * u) % 1), 3); // meletus tiap mendarat
  const shake = 3 * Math.sin(TAU * 16 * u) * (0.6 + 0.4 * Math.sin(TAU * 4 * u + 1));

  const sparks = kids.sparkPetasan;

  const rays = sparks.slice(0, RAYS).map((el, i) => {
    const f = 0.5 + 0.5 * Math.sin(TAU * (8 * u + i / RAYS));
    const s = (0.78 + 0.38 * f) * (1 + 0.25 * pop);
    return (
      <g key={i} transform={tf(BURST.x, BURST.y, { sx: s, sy: s })} opacity={0.65 + 0.35 * f}>
        {el}
      </g>
    );
  });

  const star = (
    <Pivot
      rotate={25 * Math.sin(TAU * 2 * u)}
      sx={0.85 + 0.2 * Math.sin(TAU * 8 * u) + 0.3 * pop}
      sy={0.85 + 0.2 * Math.sin(TAU * 8 * u) + 0.3 * pop}
    >
      {sparks[9]}
    </Pivot>
  );

  const small = sparks.slice(10).map((el, i) => {
    const s = twinkle(u, 4, i * 0.137);
    return (
      <Pivot
        key={i}
        rotate={25 * Math.sin(TAU * (u + i * 0.1))}
        sx={0.3 + 0.8 * s}
        sy={0.3 + 0.8 * s}
        opacity={0.25 + 0.75 * s}
      >
        {el}
      </Pivot>
    );
  });

  return (
    <Stage
      background={background}
      ground={
        shadow
          ? { x: 765, y: 950 + DY, width: 360, scale: 1 - 0.3 * hop, opacity: 1 - 0.5 * hop }
          : undefined
      }
    >
      {defs}
      <g
        transform={`translate(0 ${DY - 50 * hop}) ${tf(700, 935, {
          sx: 1 + 0.06 * land - 0.02 * hop,
          sy: 1 - 0.08 * land + 0.03 * hop,
        })} ${tf(700, 760, { rotate: shake })}`}
      >
        {parts.batangPetasan}
        {rays}
        {star}
        {small}
      </g>
    </Stage>
  );
};
