import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const userSignup = (data) => API.post("/users/signup", data);
export const userSignin = (data) => API.post("/users/signin", data);
