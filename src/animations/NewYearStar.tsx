import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { Stage } from "../components/Stage";
import { defs, parts } from "../svg/NewYearStar";
import { TAU, tf, twinkle } from "../utils";
import type { SceneProps } from "./Hourglass";

// Geser adegan ke bawah agar pom-pom tidak terlalu mepet tepi atas kanvas.
const DY = 50;

/**
 * Bintang berpesta (8 detik, loop mulus): bintang melompat dua kali sambil
 * miring ke kiri-kanan, pom-pom berayun, mulut terbuka di puncak lompatan,
 * pipi berdenyut, dan percikan berkedip.
 */
export const NewYearStar: React.FC<SceneProps> = ({ background, shadow }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const u = frame / durationInFrames;
  const x = 2 * u; // satu lompatan = satu satuan x

  const hop = Math.abs(Math.sin(Math.PI * x));
  const land = Math.pow(1 - hop, 10);

  const sx = 1 + 0.05 * land - 0.02 * hop;
  const sy = 1 - 0.07 * land + 0.03 * hop;
  const rotate = 7 * Math.sin(TAU * u);
  const pomRotate = 15 * Math.sin(TAU * 2 * u - 1.2);
  const mouth = 1 + 0.12 * hop;
  const blush = 0.7 + 0.3 * Math.sin(TAU * 4 * u);

  const spR = twinkle(u, 2, 0);
  const spL = twinkle(u, 2, 0.5);

  return (
    <Stage
      background={background}
      ground={
        shadow
          ? { y: 1030 + DY, width: 700, scale: 1 - 0.3 * hop, opacity: 1 - 0.5 * hop }
          : undefined
      }
    >
      {defs}
      <g transform={`translate(0 ${DY - 45 * hop}) ${tf(545, 1021, { rotate, sx, sy })}`}>
        {parts.bintang}
        <g transform={tf(690, 180, { rotate: pomRotate })}>{parts.cepolTopi}</g>
        {parts.topi}
        {parts.mataKiri}
        <g opacity={blush}>{parts.blushKiri}</g>
        {parts.mataKanan}
        <g opacity={blush}>{parts.blushKanan}</g>
        <g transform={tf(545, 725, { sy: mouth })}>{parts.mulut}</g>
      </g>
      <g
        transform={`translate(0 ${DY}) ${tf(262, 345, { rotate: 20 * Math.sin(TAU * u), sx: 0.5 + 0.5 * spR, sy: 0.5 + 0.5 * spR })}`}
        opacity={0.3 + 0.7 * spR}
      >
        {parts.percikanKanan}
      </g>
      <g
        transform={`translate(0 ${DY}) ${tf(178, 405, { rotate: -20 * Math.sin(TAU * u), sx: 0.5 + 0.5 * spL, sy: 0.5 + 0.5 * spL })}`}
        opacity={0.3 + 0.7 * spL}
      >
        {parts.percikanKiri}
      </g>
    </Stage>
  );
};
