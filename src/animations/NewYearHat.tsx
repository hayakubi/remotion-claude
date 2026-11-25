import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { Stage } from "../components/Stage";
import { defs, parts } from "../svg/NewYearHat";
import { TAU, tf, twinkle } from "../utils";
import type { SceneProps } from "./Hourglass";

/**
 * Topi tahun baru (8 detik, loop mulus): topi melayang naik-turun dengan
 * miring perlahan, garis kilau berkelip, dan percikan berkedip bergantian.
 */
export const NewYearHat: React.FC<SceneProps> = ({ background, shadow }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const u = frame / durationInFrames;

  const lift = 0.5 + 0.5 * Math.sin(TAU * 2 * u); // 0 = turun, 1 = naik
  const rotate = 5 * Math.sin(TAU * u + 0.5);
  const sy = 1 + 0.02 * (lift - 0.5);
  const sx = 1 - 0.01 * (lift - 0.5);

  const spA = twinkle(u, 2, 0);
  const spB = twinkle(u, 2, 0.5);

  return (
    <Stage
      background={background}
      ground={
        shadow
          ? { y: 990, width: 900, scale: 1 - 0.15 * lift, opacity: 1 - 0.3 * lift }
          : undefined
      }
    >
      {defs}
      <g transform={`translate(0 ${-22 * lift}) ${tf(485, 985, { rotate, sx, sy })}`}>
        {parts.lidahTopi}
        {parts.bodyTopi}
        {parts.atasTopi}
        <g opacity={0.55 + 0.45 * Math.sin(TAU * 2 * u + 1)}>{parts.garisHighlight}</g>
      </g>
      <g
        transform={tf(897, 485, { rotate: 20 * Math.sin(TAU * u), sx: 0.5 + 0.5 * spA, sy: 0.5 + 0.5 * spA })}
        opacity={0.3 + 0.7 * spA}
      >
        {parts.percikanAtas}
      </g>
      <g
        transform={tf(965, 595, { rotate: -20 * Math.sin(TAU * u), sx: 0.5 + 0.5 * spB, sy: 0.5 + 0.5 * spB })}
        opacity={0.3 + 0.7 * spB}
      >
        {parts.percikanBawah}
      </g>
    </Stage>
  );
};
