import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { getEnv } from "./utils/getEnv";
import router from "./router/router";

const env = getEnv();

const app = express();

app.use(helmet());
app.use(morgan("dev"));
app.use(router);

app.listen(env.PORT, () => {
  console.log(`Servidor rodando na porta ${env.PORT}`);
});
