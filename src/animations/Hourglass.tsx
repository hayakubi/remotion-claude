import React from "react";
import { Easing, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Stage } from "../components/Stage";
import { clipClass, defs, inner, parts } from "../svg/Hourglass";
import { TAU, tf } from "../utils";

export type SceneProps = { background: string; shadow: boolean };

const DRAIN_START = 30;
const DRAIN_END = 250;

/**
 * Jam pasir (10 detik, tidak loop): muncul membal, pasir mengalir dari atas ke
 * bawah, jam bergoyang halus, lalu bergetar kecil saat pasir habis.
 */
export const Hourglass: React.FC<SceneProps> = ({ background, shadow }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // Muncul
  const pop = spring({ frame, fps, config: { damping: 14, stiffness: 120 } });
  const popScale = interpolate(pop, [0, 1], [0.6, 1]);
  const fadeIn = interpolate(frame, [0, 10], [0, 1], { extrapolateRight: "clamp" });

  // Pasir
  const p = interpolate(frame, [DRAIN_START, DRAIN_END], [0, 1], {
    easing: Easing.inOut(Easing.quad),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const upperTop = 360 + p * 155; // permukaan pasir atas turun
  const fillY = 850 - p * 185; // permukaan pasir bawah naik
  const streamOpacity = Math.min(1, p * 25, (1 - p) * 25);

  // Gerak jam
  const sway = 2.5 * Math.sin((TAU * frame * 2) / durationInFrames);
  const t = Math.max(0, frame - DRAIN_END);
  const settle = frame > DRAIN_END ? 4 * Math.exp(-t / 14) * Math.sin(t / 2.5) : 0;
  const rotate = sway + settle;

  // Percikan
  const twinkle = (offset: number) =>
    0.55 + 0.45 * Math.sin(TAU * ((frame / durationInFrames) * 3 + offset));
  const spA = twinkle(0);
  const spB = twinkle(0.4);

  return (
    <Stage
      background={background}
      ground={shadow ? { y: 985, width: 600, scale: popScale, opacity: fadeIn } : undefined}
    >
      {defs}
      <defs>
        <clipPath id="hg-sand-upper">
          <rect x={0} y={upperTop} width={1080} height={Math.max(0, 515 - upperTop)} />
        </clipPath>
        <clipPath id="hg-sand-lower">
          <rect x={0} y={fillY} width={1080} height={Math.max(0, 900 - fillY)} />
        </clipPath>
      </defs>
      <g
        opacity={fadeIn}
        transform={`${tf(464, 980, { sx: popScale, sy: popScale })} ${tf(464, 538, { rotate })}`}
      >
        {parts.tutupBawah}
        {parts.bodyJam}
        <g id="pasir-jam">
          <g className={clipClass.pasirJam}>
            <g clipPath="url(#hg-sand-upper)">{inner.pasirJam}</g>
            <g clipPath="url(#hg-sand-lower)">{inner.pasirJam}</g>
            <rect
              x={449}
              y={510}
              width={14}
              height={Math.max(0, fillY - 510)}
              fill="#fdd15d"
              opacity={streamOpacity}
            />
          </g>
        </g>
        {parts.tutupAtas}
        <g transform={tf(809, 320, { sx: 0.7 + 0.4 * spA, sy: 0.7 + 0.4 * spA })} opacity={spA}>
          {parts.percikanAtas}
        </g>
        <g transform={tf(843, 457, { sx: 0.7 + 0.4 * spB, sy: 0.7 + 0.4 * spB })} opacity={spB}>
          {parts.percikanBawah}
        </g>
      </g>
    </Stage>
  );
};
