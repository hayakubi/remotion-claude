export const TAU = Math.PI * 2;

/** Warna latar default (gradasi gelap). Pakai "transparent" untuk render alpha. */
export const DEFAULT_BACKGROUND =
  "radial-gradient(circle at 50% 42%, #2b3556 0%, #0e1322 72%)";

type TfOptions = {
  tx?: number;
  ty?: number;
  rotate?: number;
  sx?: number;
  sy?: number;
};

/** Transform SVG: geser, putar, dan skala dengan titik pusat (cx, cy). */
export const tf = (
  cx: number,
  cy: number,
  { tx = 0, ty = 0, rotate = 0, sx = 1, sy = 1 }: TfOptions = {},
): string =>
  `translate(${tx} ${ty}) translate(${cx} ${cy}) rotate(${rotate}) scale(${sx} ${sy}) translate(${-cx} ${-cy})`;

/** Angka acak deterministik 0..1 (hasil sama di setiap render). */
export const rand = (i: number, salt = 0): number => {
  const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
};

export const clamp01 = (v: number): number => Math.min(1, Math.max(0, v));
export const lerp = (a: number, b: number, t: number): number => a + (b - a) * t;
