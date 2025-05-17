// src/api/auth.js
import axiosInstance from "../api/axios";

export const login = async (email, password) => {
  try {
    const response = await axiosInstance.post("auth/login", { email: email, password: password });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
