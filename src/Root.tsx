import React from "react";
import { Composition } from "remotion";
import { Hourglass } from "./animations/Hourglass";
import { NewYearCap } from "./animations/NewYearCap";
import { NewYearDrink } from "./animations/NewYearDrink";
import { NewYearGift } from "./animations/NewYearGift";
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
    </>
  );
};
