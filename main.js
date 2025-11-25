const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1100,
    height: 780
  });

  if (app.isPackaged) {
    // В собранном приложении открываем скомпилированный фронт
    const indexPath = path.join(__dirname, "renderer", "index.html");
    win.loadFile(indexPath);
  } else {
    // В режиме разработки — Vite dev server
    win.loadURL("http://localhost:5173");
    win.webContents.openDevTools();
  }
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
