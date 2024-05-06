import express from "express";

import {
  createCourse,
  deleteCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
} from "../controllers/coursesController.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { courseSchema } from "../schemas/courses.schema.js";

const router = express.Router();

//Traer todos los cursos
router.get("/", getAllCourses);

//Obtener curso por id
router.get("/:id", getCourseById);

//Crear curso
router.post("/", validateSchema(courseSchema), createCourse);

//Actualizar/editar curso
router.put("/:id", validateSchema(courseSchema), updateCourse);

//Borrar curso
router.delete("/:id", deleteCourse);

export default router;
