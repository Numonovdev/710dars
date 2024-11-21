import axios from "axios";
import { getToken } from "./utils/utils";

const http = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

http.interceptors.request.use(
  async (config) => {
    let authToken = localStorage.getItem("token");

    // Agar token yo'q bo'lsa, yangi tokenni oling
    if (!authToken) {
      await getToken(); // Token olish funksiyasini chaqiramiz
      authToken = localStorage.getItem("token");
    }

    // Agar token mavjud bo'lsa, uni headerga qo'shamiz
    if (authToken) {
      config.headers.Authorization = `${authToken}`;
    }

    return config;
  },
  (error) => {
    // Xatolarni qaytarish
    return Promise.reject(error);
  }
);

http.interceptors.request.use(
  async (config) => {
    let authToken = localStorage.getItem("token");
    const tokenExpiry = localStorage.getItem("token_expiry");

    // Token muddati tugagan bo'lsa, yangisini oling
    if (!authToken || Date.now() >= tokenExpiry) {
      await getToken();
      authToken = localStorage.getItem("token");
    }

    if (authToken) {
      config.headers.Authorization = `${authToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);



export default http;
