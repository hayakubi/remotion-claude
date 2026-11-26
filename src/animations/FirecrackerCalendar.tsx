import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { Pivot } from "../components/Fx";
import { Stage } from "../components/Stage";
import { defs, kids, nested, parts } from "../svg/FirecrackerCalendar";
import { TAU, tf, twinkle } from "../utils";
import type { SceneProps } from "./Hourglass";

/**
 * Kalender petasan (8 detik, loop mulus): kalender berayun seperti tergantung
 * di paku atasnya, petasan bergoyang, dan empat percikan berkedip bergantian.
 */
export const FirecrackerCalendar: React.FC<SceneProps> = ({ background }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const u = frame / durationInFrames;

  const swing = 3.2 * Math.sin(TAU * u) + 1.2 * Math.sin(TAU * 3 * u + 1);
  const bob = 6 * Math.sin(TAU * 2 * u);
  const wobble = 5 * Math.sin(TAU * 4 * u);

  return (
    <Stage background={background}>
      {defs}
      <g transform={`translate(0 ${bob}) ${tf(514, 190, { rotate: swing })}`}>
        {parts.bodyKalender}
        {parts.pinKalender}
        <g transform={tf(570, 640, { rotate: wobble })}>{nested.batangPetasan}</g>
        {kids.sparkPetasan.map((el, i) => {
          const s = twinkle(u, 2, i * 0.25);
          return (
            <Pivot
              key={i}
              rotate={20 * Math.sin(TAU * (u + i * 0.25))}
              sx={0.4 + 0.7 * s}
              sy={0.4 + 0.7 * s}
              opacity={0.25 + 0.75 * s}
            >
              {el}
            </Pivot>
          );
        })}
      </g>
    </Stage>
  );
};
