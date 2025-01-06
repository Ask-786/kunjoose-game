"use strict";
const builder = require("electron-builder");
const Platform = builder.Platform;

const platform = process.argv[2];

if (!platform) {
  console.error("Platform not specified");
  process.exit(1);
}

if (platform !== "WINDOWS" && platform !== "MAC" && platform !== "LINUX") {
  console.error("Invalid platform, must be 'WINDOWS', 'MAC' or 'LINUX'");
  process.exit(1);
}

builder
  .build({
    targets: Platform[platform].createTarget(),
    config: {
      productName: "Kunjoose Game",
      directories: { output: "dist/electron" },
      mac: {
        category: "Games",
        appId: "com.kunjoose.game",
        target: ["dmg"],
      },
      linux: {
        category: "Games",
        appId: "com.kunjoose.game",
        target: ["AppImage", "pacman"],
      },
      win: {
        appId: "com.kunjoose.game",
        target: ["nsis", "portable"],
      },
    },
  })
  .then(() => {
    console.log("Done");
  })
  .catch((error) => {
    console.error(error);
  });
