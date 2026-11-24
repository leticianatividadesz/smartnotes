import dotenv from "dotenv";
import { cleanEnv, port } from "envalid";

dotenv.config();

export function getEnv() {
  return cleanEnv(process.env, {
    PORT: port(),
  });
}
