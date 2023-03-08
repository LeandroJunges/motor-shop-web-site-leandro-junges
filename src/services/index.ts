import axios from "axios";

export const api = axios.create({
  baseURL: "https://pfm6-motor-shop.onrender.com",
  timeout: 5000,

  headers: {
    "Content-Type": "application/json",
  },
});
