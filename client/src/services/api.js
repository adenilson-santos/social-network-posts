import axios from "axios";

const api = axios.create({
  baseURL: "htps://localhost:5000"
});

export default api;
