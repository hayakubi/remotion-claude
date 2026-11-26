import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { Stage } from "../components/Stage";
import { defs, parts } from "../svg/TripleBaloon";
import { TAU, tf } from "../utils";
import type { SceneProps } from "./Hourglass";

const PIVOT = { x: 565, y: 826 }; // simpul pita tempat ketiga tali bertemu

/**
 * Tiga balon (8 detik, loop mulus): rangkaian balon melayang dan berayun
 * dari simpul pita; tiap balon (beserta talinya) berayun sendiri dengan fase
 * berbeda, dan kilau balon berdenyut halus.
 */
export const TripleBaloon: React.FC<SceneProps> = ({ background }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const u = frame / durationInFrames;

  const bob = -14 * (0.5 + 0.5 * Math.sin(TAU * 2 * u));
  const sway = 2.5 * Math.sin(TAU * u);
  const swing = (a: number, p: number) =>
    tf(PIVOT.x, PIVOT.y, { rotate: a * Math.sin(TAU * u + p) + 2 * Math.sin(TAU * 2 * u + p * 0.7) });

  const yellow = swing(5, 0);
  const red = swing(4, 1.8);
  const cream = swing(5, 3.6);
  const shine = 0.75 + 0.25 * Math.sin(TAU * 2 * u + 1);
  const bow = tf(PIVOT.x, PIVOT.y, { rotate: 3 * Math.sin(TAU * 2 * u + 0.5) });

  return (
    <Stage background={background}>
      {defs}
      <g transform={`translate(0 ${bob}) ${tf(PIVOT.x, PIVOT.y, { rotate: sway })}`}>
        <g transform={cream}>{parts.taliKanan}</g>
        <g transform={yellow}>{parts.taliKiri}</g>
        <g transform={red}>{parts.taliTengah}</g>
        <g transform={bow}>
          {parts.pitaTaliKiri}
          {parts.pitaDaunKanan}
          {parts.pitaTaliKiri2}
          {parts.pitaDaunKiri}
          {parts.lingkaranTengahPita}
        </g>
        <g transform={yellow}>
          {parts.ujungBalonKuning}
          {parts.bodyBalonKuning}
          <g opacity={shine}>{parts.highlightBalonKuning}</g>
        </g>
        <g transform={red}>
          {parts.ujungBalonMerah}
          {parts.bodyBalonMerah}
          <g opacity={shine}>{parts.highlightBalonMerah}</g>
        </g>
        <g transform={cream}>
          {parts.ujungBalonCream}
          {parts.bodyBalonCream}
          <g opacity={shine}>{parts.highlightBalonCream}</g>
        </g>
      </g>
    </Stage>
  );
};
