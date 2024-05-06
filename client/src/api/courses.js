import axios from "./axios";

export const getCoursesRequest = () => axios.get(`/courses`);
export const getCourseRequest = (id) => axios.get(`/courses/${id}`);
export const createCourseRequest = (course) => axios.post(`/courses`, course);
export const updateCourseRequest = (course) =>
  axios.put(`/courses/${course.id}`, course);
export const deleteCourseRequest = (id) => axios.delete(`/courses/${id}`);
