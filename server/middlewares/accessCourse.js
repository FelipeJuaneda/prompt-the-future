// middlewares/accessCourseRequired.js
import { User } from "../models/user.model.js";

export const accessCourseRequired = async (req, res, next) => {
  const userId = req.user.id; // Asumiendo que el middleware authRequired ya ha adjuntado el objeto user al req
  console.log("🚀 ~ accessCourseRequired ~ userId:", userId);
  const courseId = req.params.courseId; // Asegúrate de que el ID del curso se recibe como parámetro de ruta
  console.log("🚀 ~ accessCourseRequired ~ courseId:", courseId);

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const hasAccess = user.courses.includes(courseId);
    if (!hasAccess) {
      return res.status(403).json({ message: "Acceso denegado al curso" });
    }

    next();
  } catch (error) {
    console.error("Error al verificar acceso al curso:", error);
    res
      .status(500)
      .json({ message: "Error del servidor", error: error.message });
  }
};
