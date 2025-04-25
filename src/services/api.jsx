import axios from "axios";

const api = axios.create({
  baseURL: "https://manwhareader.christopherfrige.com",
});

export default api;