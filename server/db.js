import mongoose from "mongoose";
import { mongoDBURL } from "./config.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(mongoDBURL, { ssl: true });
    console.log("<<< DB is connected");
  } catch (error) {
    console.log(error);
  }
};
