import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { Stage } from "../components/Stage";
import { defs, parts } from "../svg/NewYearMask";
import { TAU, tf } from "../utils";
import type { SceneProps } from "./Hourglass";

/**
 * Topeng pesta (8 detik, loop mulus): topeng melayang dan bergoyang, tiga bulu
 * melambai dengan jeda berbeda, dan permata di tengah berdenyut.
 */
export const NewYearMask: React.FC<SceneProps> = ({ background, shadow }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const u = frame / durationInFrames;

  const lift = 0.5 + 0.5 * Math.sin(TAU * 2 * u);
  const rotate = 3 * Math.sin(TAU * u);

  const featherR = 7 * Math.sin(TAU * 2 * u);
  const featherL = -7 * Math.sin(TAU * 2 * u + 0.8);
  const featherC = 5 * Math.sin(TAU * 2 * u + 1.6);

  const pulse = Math.sin(TAU * 4 * u);

  return (
    <Stage
      background={background}
      ground={
        shadow
          ? { y: 945, width: 760, scale: 1 - 0.15 * lift, opacity: 0.8 - 0.3 * lift }
          : undefined
      }
    >
      {defs}
      <g transform={`translate(0 ${-18 * lift}) ${tf(540, 930, { rotate })}`}>
        <g transform={tf(560, 650, { rotate: featherR })}>{parts.buluKuningKanan}</g>
        <g transform={tf(523, 640, { rotate: featherL })}>{parts.buluKuningKiri}</g>
        <g transform={tf(527, 650, { rotate: featherC })}>{parts.buluMerah}</g>
        {parts.baseTopengKuning}
        {parts.topengMerah}
        <g transform={tf(540, 678.54, { sx: 1 + 0.05 * pulse, sy: 1 + 0.05 * pulse })}>
          {parts.lingkaranKuning}
        </g>
        <g transform={tf(540, 678.54, { sx: 1 + 0.08 * Math.sin(TAU * 4 * u + 1), sy: 1 + 0.08 * Math.sin(TAU * 4 * u + 1) })}>
          {parts.lingkaranMerah}
        </g>
        <g opacity={0.6 + 0.4 * Math.sin(TAU * 4 * u + 2)}>{parts.highlighLingkarang}</g>
      </g>
    </Stage>
  );
};
