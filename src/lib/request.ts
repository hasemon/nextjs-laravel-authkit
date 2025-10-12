import axios from "axios";
import useAuthStore from "@/store/useAuthStore";

const request = axios.create({
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

request.interceptors.request.use(
  (config) => {
    config.baseURL = process.env.NEXT_PUBLIC_API_URL;

    // Add Bearer token if available
    const token = useAuthStore.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Add response interceptor to handle token expiration
request.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Clear auth state on unauthorized
      useAuthStore.getState().clearAuth();
    }
    return Promise.reject(error);
  }
);

export default request;
