import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export type HelloWorldProps = {
  title: string;
  subtitle: string;
};

export const HelloWorld: React.FC<HelloWorldProps> = ({ title, subtitle }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleScale = spring({ frame, fps, config: { damping: 12 } });
  const subtitleOpacity = interpolate(frame, [30, 60], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const subtitleY = interpolate(frame, [30, 60], [40, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
        color: "white",
      }}
    >
      <h1
        style={{
          fontSize: 160,
          fontWeight: 800,
          margin: 0,
          transform: `scale(${titleScale})`,
        }}
      >
        {title}
      </h1>
      <p
        style={{
          fontSize: 64,
          margin: "32px 0 0",
          opacity: subtitleOpacity,
          transform: `translateY(${subtitleY}px)`,
          color: "#94a3b8",
        }}
      >
        {subtitle}
      </p>
    </AbsoluteFill>
  );
};
