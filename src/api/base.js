import axios from "axios"

export const baseApi = axios.create({
  baseURL: "https://www.especialist.org/json_api/"
})
//axios.create({baseURL: "http://localhost:3000/"})
