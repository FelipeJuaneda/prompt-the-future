import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 4000;
export const mongoDBURL = process.env.MONGODB_URL;
export const TOKEN_SECRET = process.env.TOKEN_SECRET;

if (!mongoDBURL || !TOKEN_SECRET) {
  console.error("Falta configuración esencial en variables de entorno.");
  process.exit(1);
}
