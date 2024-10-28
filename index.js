const express = require("express");
const app = express();

app.get("/", (res, req) => {
  return res.send({
    message: "vercel working right",
  });
});

app.listen(3000);
