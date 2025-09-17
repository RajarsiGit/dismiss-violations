const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  connectDb: (creds) => ipcRenderer.invoke("connect-db", creds),
  createTable: () => ipcRenderer.invoke("create-table"),
  uploadExcel: (fileBuffer) => ipcRenderer.invoke("upload-excel", fileBuffer),
  runProcedure: () => ipcRenderer.invoke("run-procedure"),
});
