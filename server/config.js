import dotenv from "dotenv";
const envFile =
  process.env.NODE_ENV === "production"
    ? ".env.production"
    : ".env.development";
dotenv.config({ path: envFile });

export const PORT = process.env.PORT || 4000;
export const BASE_URL = process.env.BASE_URL;
export const mongoDBURL = process.env.MONGODB_URL;
export const TOKEN_SECRET = process.env.TOKEN_SECRET;
export const MERCADOPAGO_API_KEY = process.env.MERCADOPAGO_TOKEN;

if (!mongoDBURL || !TOKEN_SECRET) {
  console.error("Falta configuración esencial en variables de entorno.");
  process.exit(1);
}
