import axiosInstance from "../api/axios";

export const accessProtected = async (token) => {
    try {
      const response = await axiosInstance.get("auth/protected", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
      
    }
  };
  