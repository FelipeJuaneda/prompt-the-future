import { Course } from "../models/courseModel.js";

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
    if (!request.body.title || !request.body.price || !request.body.img) {
      return response.status.send({
        message: "Enviar todos los campos requeridos: title, price, img ",
      });
    }

    const newCourse = {
      title: request.body.title,
      price: request.body.price,
      img: request.body.img,
    };

    const course = await Course.create(newCourse);
    return response.status(201).send(course);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
};

//Actualizar/editar curso
export const updateCourse = async (request, response) => {
  try {
    const { id } = request.params;
    if (!request.body.title || !request.body.price || !request.body.img) {
      return response.status.send({
        message: "Enviar todos los campos requeridos: title, price, img ",
      });
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
