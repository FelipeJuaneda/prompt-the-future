import express from "express";

import {
  createCourse,
  deleteCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
} from "../controllers/coursesController.js";
const router = express.Router();

//Traer todos los cursos
router.get("/", getAllCourses);

//Obtener curso por id
router.get("/:id", getCourseById);

//Crear curso
router.post("/", createCourse);

//Actualizar/editar curso
router.put("/:id", updateCourse);

//Borrar curso
router.delete("/:id", deleteCourse);

export default router;
