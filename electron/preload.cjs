const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("creativeVeo3", {
  platform: process.platform,
  desktop: true,
  version: "1.0.0",
});
