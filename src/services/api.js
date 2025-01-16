import axios from "axios";
import config from "../config";

const api = axios.create({
  baseURL: config.API_BASE_URL,
  withCredentials: true, // For handling cookies
});

export const fetchGrants = async () => {
  const response = await api.get("/grants");
  return response.data;
};

export const login = async (credentials) => {
  const response = await api.post("/users/login", credentials);
  return response.data;
};

export default api;
