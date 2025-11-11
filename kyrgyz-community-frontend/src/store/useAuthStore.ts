/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { api } from "../lib/api";
import { toast } from "react-toastify";
import { successChime } from "../lib/beep";

interface User {
  _id?: string;
  name: string;
  phone: string;
  token?: string;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  register: (newUser: {
    name: string;
    phone: string;
    password: string;
  }) => Promise<void>;
  login: (credentials: { phone: string; password: string }) => Promise<void>;
  logout: () => void;
  checkAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: false,


  register: async (newUser) => {
    set({ loading: true });
    try {
      const { data } = await api.post("/auth/register", newUser);
      const { token, user } = data;
      localStorage.setItem("token", token);
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      set({ user });
      toast.success("Successfully registered!");
    //   successChime();
    } catch (error: any) {
      const msg = error?.response?.data?.message || "Registration failed";
      toast.error(msg);
    } finally {
      set({ loading: false });
    }
  },

  login: async (credentials) => {
    set({ loading: true });
    try {
      const { data } = await api.post("/auth/login", credentials);
      const { token, user } = data;

      localStorage.setItem("token", token);
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      set({ user });
      toast.success("Logged in successfully!");
      successChime();
    } catch (error: any) {
      const msg = error?.response?.data?.message || "Login failed";
      toast.error(msg);
    } finally {
      set({ loading: false });
    }
  },

  // ✅ Logout
  logout: () => {
    localStorage.removeItem("token");
    delete api.defaults.headers.common["Authorization"];
    set({ user: null });
    toast.info("Logged out");
  },

  checkAuth: async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    try {
      const { data } = await api.get("/auth/me"); 
      set({ user: data });
    } catch {
      localStorage.removeItem("token");
      delete api.defaults.headers.common["Authorization"];
      set({ user: null });
    }
  },
}));
