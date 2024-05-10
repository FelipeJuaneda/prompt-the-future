import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import coursesRoute from "./routes/courses.routes.js";

const app = express();
app.use(morgan("dev"));
//Middleware for parsing request body
app.use(express.json());
//For parsing cookies
app.use(cookieParser());

const allowedOrigins = [
  "http://localhost:5173",
  "https://prompt-the-future-trok.vercel.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);

app.use("/api/courses", coursesRoute);
app.use("/api/auth", authRoutes);

export default app;
