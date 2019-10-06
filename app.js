import express from "express";
import { start } from "express-start";

export const app = express();
app.enable("trust proxy");

app.get("/", (req, res, next) => {
  res.send("Hello, World!");
});

if (process.mainModule === module) {
  start(app);
}
