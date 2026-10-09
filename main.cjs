const { app, BrowserWindow, shell, session } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1560,
    height: 980,
    minWidth: 1180,
    minHeight: 760,
    backgroundColor: "#090312",
    title: "SoloRoleplayer M",
    autoHideMenuBar: true,
    icon: path.join(__dirname, "build", "icons", "icon.ico"),
    webPreferences: {
      preload: path.join(__dirname, "preload.cjs"),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false
    }
  });

  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: "deny" };
  });

  win.loadFile(path.join(__dirname, "app", "index.html"));
}

app.whenReady().then(() => {
  // YouTube refuses embeds that arrive with no referrer (Error 153); pages loaded from a file have none.
  try{
    session.defaultSession.webRequest.onBeforeSendHeaders(
      { urls: ["https://www.youtube.com/*", "https://www.youtube-nocookie.com/*", "https://*.googlevideo.com/*", "https://*.ytimg.com/*"] },
      (details, callback) => {
        const headers = details.requestHeaders;
        if(details.resourceType === "subFrame" || details.resourceType === "mainFrame") headers["Referer"] = "https://wordblocklabs.com/";
        callback({ requestHeaders: headers });
      }
    );
  }catch(err){}
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
