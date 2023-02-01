import axios from "axios";

const api = axios.create({
  baseURL: "https://falanomic-e8ea9-default-rtdb.firebaseio.com/",
});

export default api;
