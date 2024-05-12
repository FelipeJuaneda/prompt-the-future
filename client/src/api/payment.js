import axios from "./axios";

export const createPaymentForCourse = (course) =>
  axios.post(`/payment/create-order`, { course });
