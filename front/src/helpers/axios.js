import axios from "axios";

const user = "" || JSON.parse(localStorage.getItem("user"));

const BASE_URL = "http://localhost:5000/api/v1";
export const openRequest = axios.create({ baseURL: BASE_URL });

export const privateRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    authorization: `Bearer ${user?.accessToken}`,
  },
});
