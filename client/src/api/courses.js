import axios from "./axios";

export const getCoursesRequest = () => axios.get(`/courses`);
export const getCourseRequest = (id) => axios.get(`/courses/${id}`);
export const createCourseRequest = (course) => axios.post(`/courses`, course);
export const updateCourseRequest = (id, course) =>
  axios.put(`/courses/${id}`, course);
export const deleteCourseRequest = (id) => axios.delete(`/courses/${id}`);
