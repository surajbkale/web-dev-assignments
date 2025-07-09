import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Add JWT token to requests
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getAllCourses = () => API.get("/users/courses");
export const purchaseCourse = (courseId) =>
  API.post(`/users/courses/${courseId}`);
