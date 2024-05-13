import mongoose from "mongoose";
import { CourseContent } from "../models/courseContent.model.js";

export const getCourseContent = async (req, res) => {
  const { courseId } = req.params;

  try {
    // Validar que el ID del curso es un string hexadecimal válido para ObjectId
    if (!mongoose.Types.ObjectId.isValid(courseId)) {
      return res.status(400).json({ message: "ID de curso inválido" });
    }

    // Realizar la consulta utilizando el ObjectId
    const content = await CourseContent.findOne({ courseId: courseId });
    console.log("🚀 ~ getCourseContent ~ content:", content);

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
