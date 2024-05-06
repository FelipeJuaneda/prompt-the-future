import dotenv from "dotenv";
dotenv.config();
export const PORT = 4000;
export const mongoDBURL = process.env.MONGODB_URL;
export const TOKEN_SECRET = "some secret key";
