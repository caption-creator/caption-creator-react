import axios from 'axios'

export const apiInstance = axios.create({
  baseURL: window.location.origin === "http://localhost:3000" ? "http://localhost:4000" : "https://mjucc.run.goorm.io/",
})