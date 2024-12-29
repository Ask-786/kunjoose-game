const { app, BrowserWindow } = require("electron");
const url = require("url");
const path = require("path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      devTools: true,
    },
  });

  win.setMenuBarVisibility(false);

  console.log(path.join(__dirname, 'dist/kunjoose-game/browser/index.html'))

  win.loadURL(
    url.format({
      pathname: path.join(__dirname, 'dist/kunjoose-game/browser/index.html'),
      protocol: "file:",
      slashes: true,
    }),
  );
};

app.whenReady().then(() => {
  createWindow();

  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
  });

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
