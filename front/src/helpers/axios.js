import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1";
let TOKEN;

const checkLocalStorage = () => {
  const userInLS = JSON.parse(localStorage.getItem("user"));
  if (userInLS === null) {
    TOKEN = "";
  } else {
    TOKEN = userInLS?.accessToken;
  }
};

checkLocalStorage();

export const openRequest = axios.create({ baseURL: BASE_URL });

const privateRequest = axios.create({
  baseURL: BASE_URL,
});

privateRequest.interceptors.request.use(
  (config) => {
    const auth = TOKEN ? `Bearer ${TOKEN}` : "";
    config.headers.common["authorization"] = auth;
    return config;
  },
  (error) => Promise.reject(error)
);

export { privateRequest };
