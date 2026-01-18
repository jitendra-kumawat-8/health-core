// context/AuthContext.tsx
import React, { createContext, useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { enqueueSnackbar } from "notistack";
import { useRouter } from "next/router";
import apiClient from "../services/api";

// Generic user interface - extend this based on your API response
export interface User {
  id: string;
  email: string;
  name: string;
  role?: string;
  [key: string]: any; // Allow additional properties
}

// Generic auth response interface
export interface AuthResponse {
  data: {
    user: User;
    access_token: string;
  };
  status: boolean;
  msg?: string;
}

// Generic login variables
export interface LoginVars {
  email: string;
  password: string;
  rememberMe?: boolean;
}

// Generic signup variables
export interface SignupVars {
  email: string;
  password: string;
  name: string;
  [key: string]: any; // Allow additional fields
}

// Generic auth functions using axios
export const authAPI = {
  login: async (credentials: LoginVars): Promise<AuthResponse> => {
    const response = await apiClient.post<AuthResponse>(
      "/auth/login",
      credentials
    );
    return response.data;
  },

  signup: async (userData: SignupVars): Promise<AuthResponse> => {
    const response = await apiClient.post<AuthResponse>(
      "/auth/signup",
      userData
    );
    return response.data;
  },

  logout: async (): Promise<void> => {
    await apiClient.post<void>("/auth/logout");
  },

  refreshToken: async (): Promise<AuthResponse> => {
    const response = await apiClient.post<AuthResponse>("/auth/refresh");
    return response.data;
  },

  getProfile: async (): Promise<{ data: User }> => {
    const response = await apiClient.get<{ data: User }>("/auth/profile");
    return response.data;
  },
};

interface AuthCtx {
  user: User | null;
  accessToken: string | null;
  isLoading: boolean;
  loginUser: (vars: LoginVars) => void;
  signupUser: (vars: SignupVars) => void;
  logout: () => void;
  refetchUser: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthCtx | undefined>(undefined);

// Local storage helpers
const LS_USER = "user";
const LS_TOKEN = "accessToken";

const readLS = <T,>(key: string): T | null => {
  if (typeof window === "undefined") return null;
  try {
    const localRaw = localStorage.getItem(key);
    const sessionRaw = sessionStorage.getItem(key);
    const raw = localRaw || sessionRaw;
    return raw ? (key === LS_USER ? JSON.parse(raw) : (raw as any)) : null;
  } catch {
    return null;
  }
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(() => readLS<User>(LS_USER));
  const [accessToken, setAccessToken] = useState<string | null>(() =>
    readLS<string>(LS_TOKEN)
  );
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const loginMutation = useMutation<AuthResponse, Error, LoginVars>({
    mutationFn: authAPI.login,
    onSuccess: (data, { rememberMe = false }) => {
      if (!data?.data || !data?.status) {
        enqueueSnackbar(data?.msg || "Login failed", { variant: "error" });
        return;
      }

      setUser(data.data.user);
      setAccessToken(data.data.access_token);

      // Store in localStorage if rememberMe is true, otherwise in sessionStorage
      if (rememberMe) {
        localStorage.setItem(LS_USER, JSON.stringify(data.data.user));
        localStorage.setItem(LS_TOKEN, data.data.access_token);
      } else {
        sessionStorage.setItem(LS_USER, JSON.stringify(data.data.user));
        sessionStorage.setItem(LS_TOKEN, data.data.access_token);
      }

      enqueueSnackbar("Login successful!", { variant: "success" });
      router.push("/dashboard"); // Change this to your desired redirect path
    },
    onError: (error) => {
      enqueueSnackbar(error.message || "Login failed, please try again.", {
        variant: "error",
      });
    },
  });

  const signupMutation = useMutation<AuthResponse, Error, SignupVars>({
    mutationFn: authAPI.signup,
    onSuccess: (data) => {
      if (!data?.data || !data?.status) {
        enqueueSnackbar(data?.msg || "Signup failed", { variant: "error" });
        return;
      }

      setUser(data.data.user);
      setAccessToken(data.data.access_token);

      // Store in sessionStorage by default for new signups
      sessionStorage.setItem(LS_USER, JSON.stringify(data.data.user));
      sessionStorage.setItem(LS_TOKEN, data.data.access_token);

      enqueueSnackbar("Account created successfully!", { variant: "success" });
      router.push("/dashboard"); // Change this to your desired redirect path
    },
    onError: (error) => {
      enqueueSnackbar(error.message || "Signup failed, please try again.", {
        variant: "error",
      });
    },
  });

  const logout = async () => {
    try {
      await authAPI.logout();
    } catch (error) {
      console.error("Logout API error:", error);
    } finally {
      setUser(null);
      setAccessToken(null);
      // Clear both storage types to ensure complete logout
      localStorage.removeItem(LS_USER);
      localStorage.removeItem(LS_TOKEN);
      sessionStorage.removeItem(LS_USER);
      sessionStorage.removeItem(LS_TOKEN);

      enqueueSnackbar("Logged out successfully", { variant: "info" });
      router.push("/"); // Change this to your login page
    }
  };

  const refetchUser = async () => {
    if (!accessToken) return;

    setIsLoading(true);
    try {
      const response = await authAPI.getProfile();
      setUser(response.data);

      // Update storage
      const currentStorage = localStorage.getItem(LS_USER)
        ? localStorage
        : sessionStorage;
      currentStorage.setItem(LS_USER, JSON.stringify(response.data));
    } catch (error) {
      console.error("Failed to refetch user:", error);
      // If profile fetch fails, logout the user
      logout();
    } finally {
      setIsLoading(false);
    }
  };

  const loginUser = (vars: LoginVars) => loginMutation.mutate(vars);
  const signupUser = (vars: SignupVars) => signupMutation.mutate(vars);

  const value: AuthCtx = {
    user,
    accessToken,
    isLoading: isLoading || loginMutation.isPending || signupMutation.isPending,
    loginUser,
    signupUser,
    logout,
    refetchUser,
    isAuthenticated: !!user && !!accessToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const isAuthenticatedUser = (user: User | null) => {
  return !!user;
};
