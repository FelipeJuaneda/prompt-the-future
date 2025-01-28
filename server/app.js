import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import coursesRoute from "./routes/courses.routes.js";
import paymentRoutes from "./routes/payment.routes.js";
import contentRoutes from "./routes/content.routes.js";
import emailRoutes from "./routes/email.routes.js";
import { BASE_URL } from "./config.js";

const app = express();
app.use(morgan("dev"));
//Middleware for parsing request body
app.use(express.json());
//For parsing cookies
app.use(cookieParser());
app.disable("x-powered-by");

app.use(
  cors({
    origin: BASE_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/courses", coursesRoute);
app.use("/api/payment", paymentRoutes);
app.use("/api/access", contentRoutes);
app.use("/api/email", emailRoutes);

export default app;
