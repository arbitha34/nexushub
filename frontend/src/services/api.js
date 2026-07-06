import axios from "axios";

/*
|--------------------------------------------------------------------------
| Base API URL
|--------------------------------------------------------------------------
| Spring Boot Backend
| http://localhost:8080
|--------------------------------------------------------------------------
*/

const api = axios.create({
  baseURL: "http://localhost:8080/api",

  headers: {
    "Content-Type": "application/json",
  },

  timeout: 10000,
});

/*
|--------------------------------------------------------------------------
| Request Interceptor
|--------------------------------------------------------------------------
*/

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

/*
|--------------------------------------------------------------------------
| Response Interceptor
|--------------------------------------------------------------------------
*/

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);

    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/";
    }

    return Promise.reject(error);
  }
);

export default api;