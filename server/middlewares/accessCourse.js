import { User } from "../models/user.model.js";

export const accessCourseRequired = async (req, res, next) => {
  const userId = req.user.id;
  const courseId = req.params.courseId;
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
