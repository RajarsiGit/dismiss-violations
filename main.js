const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const { Pool } = require("pg");
const xlsx = require("xlsx");
const fs = require("fs");

let pool;

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    title: "Dismiss Violations",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  // 👇 Load Vite dev server if available, else load built React files
  if (!app.isPackaged) {
    win.loadURL("http://localhost:5173"); // Vite dev server port
  } else {
    win.loadFile(path.join(__dirname, "frontend/dist/index.html"));
  }
}

app.whenReady().then(createWindow);

ipcMain.handle("connect-db", async (_, creds) => {
  pool = new Pool(creds);
  return "Connected to DB";
});

ipcMain.handle("create-table", async () => {
  const sql = fs
    .readFileSync(path.join(__dirname, "scripts/schema.sql"))
    .toString();
  await pool.query(sql);
  return "Table created";
});

ipcMain.handle("upload-excel", async (_, fileBuffer) => {
  const sql = fs
    .readFileSync(path.join(__dirname, "scripts/insert.sql"))
    .toString();
  const workbook = xlsx.read(fileBuffer, { type: "buffer" });
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const rows = xlsx.utils.sheet_to_json(sheet);
  for (const row of rows) {
    await pool.query(sql, [
      row["ArchiveID"],
      row["ArchiveID Field"],
      row["Archive Table"],
      row["TagName"],
      row["CloudID"],
      row["SoID"],
      row["Nodename"],
    ]);
  }
  return "Excel data inserted";
});

ipcMain.handle("run-procedure", async () => {
  const BATCH_LIMIT = 50;
  const sql = fs
    .readFileSync(path.join(__dirname, "scripts/procedure.sql"))
    .toString();
  await pool.query(sql, [BATCH_LIMIT]);
  return "Procedure executed";
});
