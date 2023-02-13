import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:6010",
});

export default API;
