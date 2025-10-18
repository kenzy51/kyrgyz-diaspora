import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.NEXT_PUBLIC_API_URL || "https://backend-diaspora.onrender.com/",
});
