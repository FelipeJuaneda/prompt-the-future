import axios from "./axios";

export const createPaymentForCourse = (course, user) =>
  axios.post(`/payment/create-order`, { course, user });
