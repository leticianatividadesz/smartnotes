import express from "express";
import { getEnv } from "./utils/getEnv";
import router from "./router/router";

const env = getEnv();

const app = express();

app.use(router);

app.listen(env.PORT, () => {
  console.log(`Servidor rodando na porta ${env.PORT}`);
});
