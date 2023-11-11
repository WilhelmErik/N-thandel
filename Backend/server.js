import express  from "express";
import cors from "cors";

const app = express();

const _PORT = 3000;

app.get("/api", (req, res) => {
  res.json({ hello: "there" });
});

app.listen(_PORT, () => console.log("Server is Live"));
