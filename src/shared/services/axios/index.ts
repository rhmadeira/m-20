import axios from "axios";
const token = localStorage.getItem("jwtSecurityToken");

export const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
