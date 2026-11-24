import express from "express";
import { getEnv } from "./utils/getEnv";

const env = getEnv();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(env.PORT, () => {
  console.log(`Servidor rodando na porta ${env.PORT}`);
});