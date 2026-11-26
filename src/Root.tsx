import React from "react";
import { Composition } from "remotion";
import { BaloonFace } from "./animations/BaloonFace";
import { FirecrackerCalendar } from "./animations/FirecrackerCalendar";
import { Petasan } from "./animations/Petasan";
import { TripleBaloon } from "./animations/TripleBaloon";
import { Hourglass } from "./animations/Hourglass";
import { NewYearCap } from "./animations/NewYearCap";
import { NewYearDrink } from "./animations/NewYearDrink";
import { NewYearGift } from "./animations/NewYearGift";
import { NewYearHat } from "./animations/NewYearHat";
import { NewYearMask } from "./animations/NewYearMask";
import { NewYearStar } from "./animations/NewYearStar";
import { StarGlasses } from "./animations/StarGlasses";
import { DEFAULT_BACKGROUND } from "./utils";

// 4K UHD landscape, 30 fps (diterima Shutterstock, Adobe Stock, Envato, Storyblocks).
const WIDTH = 3840;
const HEIGHT = 2160;
const FPS = 30;

const defaultProps = { background: DEFAULT_BACKGROUND, shadow: true };

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Hourglass"
        component={Hourglass}
        durationInFrames={300} // 10 detik
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={defaultProps}
      />
      <Composition
        id="NewYearCap"
        component={NewYearCap}
        durationInFrames={240} // 8 detik, loop
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={defaultProps}
      />
      <Composition
        id="NewYearDrink"
        component={NewYearDrink}
        durationInFrames={240} // 8 detik, loop
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={defaultProps}
      />
      <Composition
        id="NewYearGift"
        component={NewYearGift}
        durationInFrames={240} // 8 detik, loop
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={defaultProps}
      />
      <Composition
        id="NewYearHat"
        component={NewYearHat}
        durationInFrames={240} // 8 detik, loop
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={defaultProps}
      />
      <Composition
        id="NewYearMask"
        component={NewYearMask}
        durationInFrames={240} // 8 detik, loop
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={defaultProps}
      />
      <Composition
        id="NewYearStar"
        component={NewYearStar}
        durationInFrames={240} // 8 detik, loop
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={defaultProps}
      />
      <Composition
        id="StarGlasses"
        component={StarGlasses}
        durationInFrames={240} // 8 detik, loop
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={defaultProps}
      />
      <Composition
        id="BaloonFace"
        component={BaloonFace}
        durationInFrames={240} // 8 detik, loop
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={defaultProps}
      />
      <Composition
        id="FirecrackerCalendar"
        component={FirecrackerCalendar}
        durationInFrames={240} // 8 detik, loop
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={defaultProps}
      />
      <Composition
        id="Petasan"
        component={Petasan}
        durationInFrames={240} // 8 detik, loop
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={defaultProps}
      />
      <Composition
        id="TripleBaloon"
        component={TripleBaloon}
        durationInFrames={240} // 8 detik, loop
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={defaultProps}
      />
    </>
  );
};
