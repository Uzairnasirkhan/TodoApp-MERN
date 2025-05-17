// src/api/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://todomernbackend-production.up.railway.app/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
