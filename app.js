import express from "express";
import { start } from "express-start";

export const app = express();
app.enable("trust proxy");

app.use(express.static("public"));

app.get("/", (req, res, next) => {
  res.send(`
    <link rel="stylesheet" href="/styles.css"/>
    <div>Hello, World!</div>
  `);
});

if (process.mainModule === module) {
  start(app);
}
