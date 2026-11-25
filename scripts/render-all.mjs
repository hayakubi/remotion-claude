// Render semua komposisi untuk microstock.
//   npm run render:solid  -> out/<Id>.mp4  (H.264, latar gradasi)
//   npm run render:alpha  -> out/<Id>_alpha.mov  (ProRes 4444, latar transparan)
import { spawnSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";

const mode = process.argv[2] ?? "solid";
const ids = [
  "Hourglass", "NewYearCap", "NewYearDrink", "NewYearGift",
  "NewYearHat", "NewYearMask", "NewYearStar", "StarGlasses",
];

mkdirSync("out", { recursive: true });
writeFileSync("out/alpha-props.json", JSON.stringify({ background: "transparent" }));

for (const id of ids) {
  const args =
    mode === "alpha"
      ? [
          "remotion", "render", id, `out/${id}_alpha.mov`,
          "--codec=prores", "--prores-profile=4444",
          "--pixel-format=yuva444p10le", "--image-format=png",
          "--props=out/alpha-props.json",
        ]
      : [
          "remotion", "render", id, `out/${id}.mp4`,
          "--codec=h264", "--crf=12",
        ];
  console.log(`\n▶ ${id} (${mode})`);
  const r = spawnSync("npx", args, {
    stdio: "inherit",
    shell: process.platform === "win32",
  });
  if (r.status !== 0) process.exit(r.status ?? 1);
}
