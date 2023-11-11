import express from "express";
import cors from "cors";
const db = "https://my-json-server.typicode.com/WilhelmErik/N-thandel/";
const app = express();
app.use(cors());

const _PORT = 3000;

app.get("/api/v1/", async (req, res) => {
  const result = await fetch(db + "/db");
  const datan = await result.json();
  console.log(datan);

  res.json({ data: datan });
});
app.get("/api/testing", async (req, res) => {
  const result = await fetch(db + "/testing");
  const datan = await result.json();
  console.log(datan);

  res.json({ data: datan });
});

app.listen(_PORT, () => console.log("Server is Live"));
