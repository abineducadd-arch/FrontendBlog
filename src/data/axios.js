import axios from "axios";

const isDevelopment = import.meta.env.MODE === "development";

const myBaseurl = isDevelopment
  ? import.meta.env.VITE_API_BASE_URL_LOCAL
  : import.meta.env.VITE_API_BASE_URL_DEPLOY;

const API = axios.create({
  baseURL: myBaseurl,
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("access");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default API;