import mongoose from "mongoose";
import { CourseContent } from "../models/courseContent.model.js";
import { User } from "../models/user.model.js";

export const getCoursesForUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate("courses");
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.status(200).json(user.courses);
  } catch (error) {
    console.error("Error al obtener los cursos del usuario:", error);
    res
      .status(500)
      .json({ message: "Error del servidor", error: error.message });
  }
};

export const getCourseContent = async (req, res) => {
  const { courseId } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(courseId)) {
      return res.status(400).json({ message: "ID de curso inválido" });
    }
    const content = await CourseContent.findOne({ courseId: courseId });
    if (!content) {
      return res.status(404).json({ message: "Contenido no encontrado" });
    }

    res.status(200).json(content);
  } catch (error) {
    console.error("Error al obtener el contenido del curso:", error);
    res
      .status(500)
      .json({ message: "Error del servidor", error: error.message });
  }
};
