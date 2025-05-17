// src/api/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://todobackendmern.vercel.app/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
