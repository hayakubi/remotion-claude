import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { Stage } from "../components/Stage";
import { defs, parts } from "../svg/BaloonFace";
import { TAU, blink, tf } from "../utils";
import type { SceneProps } from "./Hourglass";

const PIVOT = { x: 582, y: 842 }; // simpul pita, tempat tali kedua balon bertemu

/**
 * Balon berwajah (8 detik, loop mulus): dua balon melayang dan berayun dari
 * simpul pita, berkedip bergantian, mulut tertawa membuka-menutup, dan ekor
 * tali serta daun pita ikut bergoyang.
 */
export const BaloonFace: React.FC<SceneProps> = ({ background }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const u = frame / durationInFrames;

  const bob = -14 * (0.5 + 0.5 * Math.sin(TAU * 2 * u + 0.6));
  const sway = 2 * Math.sin(TAU * u + 2);

  // Kedua balon berayun searah; selisih sudutnya dibuat kecil supaya tidak saling menutupi wajah.
  const common = 4 * Math.sin(TAU * u + 0.8) + 1.5 * Math.sin(TAU * 2 * u);
  const diff = 1.5 * Math.sin(TAU * 2 * u + 1);
  const white = tf(PIVOT.x, PIVOT.y, { rotate: common + diff });
  const red = tf(PIVOT.x, PIVOT.y, { rotate: common - diff });

  const eye = (cx: number, cy: number, b: number) => tf(cx, cy, { sy: 1 - 0.9 * b });
  const bW = blink(u, 3, 0.15);
  const bR = blink(u, 3, 0.6);

  const laugh = (cx: number, cy: number, phase: number) => {
    const k = Math.sin(TAU * 4 * u + phase);
    return tf(cx, cy, { sx: 1 + 0.06 * k, sy: 1 + 0.2 * k });
  };

  const shine = 0.75 + 0.25 * Math.sin(TAU * 2 * u + 1);
  const leaf = (a: number, p: number) =>
    tf(PIVOT.x, PIVOT.y, { rotate: a * Math.sin(TAU * 2 * u + p) });

  return (
    <Stage background={background}>
      {defs}
      <g transform={`translate(0 ${bob}) ${tf(PIVOT.x, PIVOT.y, { rotate: sway })}`}>
        <g transform={red}>{parts.taliKiri}</g>
        <g transform={white}>{parts.taliKanan}</g>
        <g transform={leaf(6, 0)}>{parts.daunPitaKanan}</g>
        <g transform={leaf(-6, 1)}>{parts.daunPitaKiri}</g>
        {parts.lingkaranPita}

        <g transform={white}>
          {parts.ujungBalonPutih}
          {parts.bodyBalonPutih}
          <g opacity={shine}>{parts.highlightBalonPutih}</g>
          <g transform={eye(790.82, 380.38, bW)}>{parts.mataKananBalonPutih}</g>
          <g transform={eye(623.47, 359.54, bW)}>{parts.mataKiriBalonPutih}</g>
          <g transform={laugh(702, 420, 0)}>{parts.mulutBalonPutih}</g>
        </g>

        <g transform={red}>
          {parts.ujungBalonMerah}
          {parts.bodyBalonMerah}
          <g opacity={shine}>{parts.highlightBalonMerah}</g>
          <g transform={eye(453.75, 288.9, bR)}>{parts.mataKananBalonMerah}</g>
          <g transform={eye(288.1, 320.48, bR)}>{parts.mataKiriBalonMerah}</g>
          <g transform={laugh(380, 358, 2)}>{parts.mulutBalonMerah}</g>
        </g>
      </g>
    </Stage>
  );
};
