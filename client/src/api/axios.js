import axios from "axios";

const instance = axios.create({
  baseURL: "https://prompt-the-future.vercel.app/api/",
  withCredentials: true,
});
export default instance;
