import axios from "axios";

export const BaseApi = axios.create()

BaseApi.interceptors.request.use(
  (config) => {
    config.headers.Authorization = localStorage.getItem("token");

    return config;
  }
)