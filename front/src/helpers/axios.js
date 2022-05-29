import axios from "axios";
import { store } from "redux/store";

const BASE_URL = process.env.REACT_APP_API_URL;
export const openRequest = axios.create({ baseURL: BASE_URL });

const privateRequest = axios.create({
  baseURL: BASE_URL,
});

privateRequest.interceptors.request.use(
  (config) => {
    const TOKEN = store.getState().user.currentUser?.accessToken;
    const auth = TOKEN ? `Bearer ${TOKEN}` : "";
    config.headers.common["authorization"] = auth;
    return config;
  },
  (error) => Promise.reject(error)
);

privateRequest.interceptors.response.use(undefined, (err) => {
  localStorage.clear();
  window.location.reload();
});

export { privateRequest };
