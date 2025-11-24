const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1100,
    height: 780
  });

  if (app.isPackaged) win.loadFile('index.html');
  else win.loadURL('http://localhost:5173');
}

app.whenReady().then(createWindow);
