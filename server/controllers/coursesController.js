import { Course } from "../models/course.model.js";

//Traer todos los cursos
export const getAllCourses = async (request, response) => {
  try {
    const courses = await Course.find({});
    return response.status(200).json({
      count: courses.length,
      data: courses,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
};

//Obtener curso por id
export const getCourseById = async (request, response) => {
  try {
    const { id } = request.params;
    const course = await Course.findById(id);
    if (!course)
      return response.status(404).json({ message: "Curso no encontrado" });

    return response.status(200).json(course);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
};

//Crear curso
export const createCourse = async (request, response) => {
  try {
    const requiredFields = [
      "title",
      "price",
      "img",
      "overview",
      "description",
      "duration",
      "level",
      "program",
      "introduction",
      "requirements",
      "certification",
      "finalProject",
    ];
    for (const field of requiredFields) {
      if (!request.body[field]) {
        return response.status(400).json({
          message: `Falta campo requerido: ${field}`,
        });
      }
    }

    const newCourse = new Course(request.body);
    const course = await newCourse.save();
    return response.status(201).json(course);
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ message: error.message });
  }
};

//Actualizar/editar curso
export const updateCourse = async (request, response) => {
  try {
    const { id } = request.params;
    const requiredFields = [
      "title",
      "price",
      "img",
      "overview",
      "description",
      "duration",
      "level",
      "program",
      "introduction",
      "requirements",
      "certification",
      "finalProject",
    ];
    for (const field of requiredFields) {
      if (!request.body[field]) {
        return response.status(400).json({
          message: `Falta campo requerido: ${field}`,
        });
      }
    }

    const result = await Course.findByIdAndUpdate(id, request.body);
    if (!result) {
      return response.status(404).json({ message: "Curso no encontrado" });
    }
    return response
      .status(200)
      .json({ message: "¡Curso modificado correctamente!" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
};

//Eliminar curso
export const deleteCourse = async (request, response) => {
  try {
    const { id } = request.params;
    const result = await Course.findByIdAndDelete(id);
    if (!result) {
      return response.status(404).json({ message: "Curso no encontrado" });
    }
    return response
      .status(200)
      .json({ message: "Curso borrado correctamente" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
};
