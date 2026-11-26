import React from "react";
import { AbsoluteFill } from "remotion";

export type Ground = {
  /** Posisi x bayangan di koordinat SVG (default 540). */
  x?: number;
  /** Posisi y bayangan di koordinat SVG (viewBox 1080x1080). */
  y: number;
  /** Lebar bayangan di koordinat SVG. */
  width: number;
  scale?: number;
  opacity?: number;
};

type StageProps = {
  /** Nilai CSS background, atau "transparent" untuk render dengan alpha. */
  background: string;
  ground?: Ground;
  /** Ukuran sisi objek dalam piksel (kanvas 3840x2160). */
  size?: number;
  children: React.ReactNode;
};

export const Stage: React.FC<StageProps> = ({
  background,
  ground,
  size = 1900,
  children,
}) => {
  const scale = ground?.scale ?? 1;
  return (
    <AbsoluteFill
      style={{
        background: background === "transparent" ? undefined : background,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        viewBox="0 0 1080 1080"
        width={size}
        height={size}
        style={{ overflow: "visible" }}
      >
        <defs>
          <radialGradient id="ground-shadow">
            <stop offset="0" stopColor="#000" stopOpacity="0.45" />
            <stop offset="1" stopColor="#000" stopOpacity="0" />
          </radialGradient>
        </defs>
        {ground ? (
          <ellipse
            cx={ground.x ?? 540}
            cy={ground.y}
            rx={(ground.width * scale) / 2}
            ry={(ground.width * scale) / 2 * 0.1}
            fill="url(#ground-shadow)"
            opacity={ground.opacity ?? 1}
          />
        ) : null}
        {children}
      </svg>
    </AbsoluteFill>
  );
};
