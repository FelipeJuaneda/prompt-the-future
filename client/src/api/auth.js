import axios from "./axios";

export const registerRequest = (user) => axios.post(`/auth/register`, user);
export const loginRequest = (user) => axios.post(`/auth/login`, user);
export const verifyTokenRequest = (user) => axios.get(`/auth/verify`);
export const logoutRequest = (user) => axios.post(`/auth/logout`);
export const requestPasswordReset = (email) =>
  axios.post(`/auth/request-password-reset`, { email });
export const resetPassword = (token, newPassword) =>
  axios.post(`/auth/reset-password`, { token, newPassword });
export const updateProfileRequest = (userData) =>
  axios.put("/auth/profile", userData);
