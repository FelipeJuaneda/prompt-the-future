import axios from "./axios";

//get courses for user
export const getCoursesForUser = () => axios.get(`/access/user-courses`);

export const getContentsRequest = (courseId) =>
  axios.get(`/access/content/${courseId}`);
