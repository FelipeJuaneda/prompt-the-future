// routes/access.routes.js
import express from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { accessCourseRequired } from "../middlewares/accessCourse.js";
import { getCourseContent } from "../controllers/content.controller.js";

const router = express.Router();

router.get(
  "/content/:courseId",
  authRequired,
  accessCourseRequired,
  getCourseContent
);

export default router;
