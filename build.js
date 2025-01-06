"use strict";
const builder = require("electron-builder");
const Platform = builder.Platform;

builder
  .build({
    targets: Platform.LINUX.createTarget(),
    config: {
      productName: "Kunjoose Game",
      directories: { output: "dist/electron" },
      linux: {
        category: "Games",
        appId: "com.kunjoose.game",
        target: ["AppImage"],
      },
      win: {
        appId: "com.kunjoose.game",
        target: ["nsis"],
      },
    },
  })
  .then(() => {
    console.log("Done");
  })
  .catch((error) => {
    console.error(error);
  });
