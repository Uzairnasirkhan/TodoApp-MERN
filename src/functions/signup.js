import axiosInstance from "../api/axios";

// src/api/auth.js
export const signup = async (userData) => {
    try {
      const response = await axiosInstance.post("auth/signup", userData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  };
  