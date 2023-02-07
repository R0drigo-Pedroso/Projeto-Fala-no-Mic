import axios from "axios";

const api = axios.create({
  baseURL: "http://10.20.47.68:3000",
});

export default api;
