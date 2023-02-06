import axios from "axios";

const api = axios.create({
  baseURL: "http://10.20.45.35:3000",
});

export default api;
