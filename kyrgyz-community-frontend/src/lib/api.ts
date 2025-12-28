import axios from "axios";
console.log("Loaded API URL:", import.meta.env.VITE_API_URL); // Debug line

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
