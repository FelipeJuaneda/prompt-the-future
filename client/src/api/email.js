import axios from "./axios";

export const sendEventEmail = (dataUser, eventDetails) =>
  axios.post(`/email/send`, { dataUser, eventDetails });
