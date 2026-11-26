import React from "react";

type PivotProps = {
  rotate?: number;
  sx?: number;
  sy?: number;
  tx?: number;
  ty?: number;
  opacity?: number;
  children: React.ReactNode;
};

/** Grup yang berputar/berskala di titik tengah elemennya sendiri (tanpa hitung koordinat). */
export const Pivot: React.FC<PivotProps> = ({
  rotate = 0,
  sx = 1,
  sy = 1,
  tx = 0,
  ty = 0,
  opacity = 1,
  children,
}) => (
  <g
    style={{
      transformBox: "fill-box",
      transformOrigin: "center",
      transform: `translate(${tx}px, ${ty}px) rotate(${rotate}deg) scale(${sx}, ${sy})`,
      opacity,
    }}
  >
    {children}
  </g>
);
