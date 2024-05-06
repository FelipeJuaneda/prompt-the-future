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
//Middleware for handling CORS POLICY
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);

app.use("/courses", coursesRoute);
app.use("/api/auth", authRoutes);

export default app;
