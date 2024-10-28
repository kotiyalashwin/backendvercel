import express, { Express, Request, Response } from "express";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("vercel working right");
});

app.listen(3000, () => {
  console.log("running on port 3000");
});
