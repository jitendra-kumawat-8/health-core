import axios from "axios";

/**
 * API Client for external backend services
 * 
 * Usage:
 * - If you have an external API backend, set NEXT_PUBLIC_API_URL in .env.local
 * - Example: NEXT_PUBLIC_API_URL=https://api.example.com
 * 
 * For Next.js API routes (like /api/booking/icu), use axios directly with relative paths:
 * - Example: axios.post("/api/booking/icu", data)
 */

// Get base URL - only use if NEXT_PUBLIC_API_URL is set (for external APIs)
const getBaseURL = () => {
  // If explicitly set, use it (for external backend)
  if (process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL;
  }
  
  // Default fallback (can be removed if not needed)
  return "http://localhost:3001/api";
};

// Create axios instance for external API calls
const apiClient = axios.create({
  baseURL: getBaseURL(),
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Get token from localStorage or sessionStorage
    const token =
      localStorage.getItem("accessToken") ||
      sessionStorage.getItem("accessToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle common errors
    if (error.response?.status === 401) {
      // Unauthorized - clear tokens and redirect to login
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
      sessionStorage.removeItem("accessToken");
      sessionStorage.removeItem("user");

      // Redirect to login page
      if (typeof window !== "undefined") {
        window.location.href = "/";
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;
