import express from "express";
import compression from "compression";
import bodyParser from "body-parser";
import cors from "cors";
import { taskRouter } from "./routes/task.router";
import path from "path";
import { readFile } from "fs/promises";

const isProd=  process.env.NODE_ENV === "production";

const app = express();
if(isProd) {
  app.use(express.static(path.join(__dirname, "public")));
}
app.use(cors({origin: "*"}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(compression());

app.use("/api/task", taskRouter);

if(isProd)  {
  app.get("*", async function(_,response) {
    const html = await readFile(path.join(__dirname, "public/index.html"), "utf-8");
    response.set("content-type", "text/html").send(html);
  })
}

export default app;

