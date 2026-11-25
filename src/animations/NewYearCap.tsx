import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { Stage } from "../components/Stage";
import { defs, parts } from "../svg/NewYearCap";
import { TAU, tf } from "../utils";
import type { SceneProps } from "./Hourglass";

/**
 * Topi tahun baru (8 detik, loop mulus): topi memantul empat kali dengan
 * squash & stretch, bergoyang, dan pom-pom berayun mengikuti dengan jeda.
 */
export const NewYearCap: React.FC<SceneProps> = ({ background, shadow }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const u = frame / durationInFrames;

  const hop = Math.abs(Math.sin(Math.PI * 4 * u)); // 0 di tanah, 1 di puncak
  const land = Math.pow(1 - hop, 10); // menguat tepat saat mendarat

  const sy = 1 - 0.08 * land + 0.03 * hop;
  const sx = 1 + 0.06 * land - 0.02 * hop;
  const rotate = 5 * Math.sin(TAU * u + 1.0);
  const pomRotate = 13 * Math.sin(TAU * 4 * u - 1.4);

  return (
    <Stage
      background={background}
      ground={
        shadow
          ? { y: 1022, width: 760, scale: 1 - 0.3 * hop, opacity: 1 - 0.5 * hop }
          : undefined
      }
    >
      {defs}
      <g
        transform={`translate(0 ${-90 * hop}) ${tf(545, 1019, { rotate, sx, sy })}`}
      >
        {parts.bodyTopi}
        {parts.buluTopi}
        <g transform={tf(610, 285, { rotate: pomRotate })}>{parts.cepolTopi}</g>
        <g opacity={0.7 + 0.3 * Math.sin(TAU * 2 * u)}>{parts.highlightTopi}</g>
      </g>
    </Stage>
  );
};
